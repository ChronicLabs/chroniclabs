import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api, errorSchemas } from "@shared/routes";
import { z } from "zod";
import { getDefragPool } from "./defrag-db";

function isValidMode(mode: string): boolean {
  return ["easy", "hard", "superhard"].includes(mode);
}

function isValidDate(date: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // ── Defrag leaderboard — direct Neon DB reads ──────────────
  app.get("/api/defrag/leaderboard/alltime/:mode", async (req, res) => {
    const pool = getDefragPool();
    if (!pool) return res.status(503).json({ error: "Leaderboard unavailable" });

    const { mode } = req.params;
    if (!isValidMode(mode)) {
      return res.status(400).json({ error: "Invalid mode" });
    }

    try {
      const result = await pool.query(
        `WITH grouped AS (
          SELECT
            CASE
              WHEN user_id IS NOT NULL THEN user_id::text
              ELSE 'guest_' || player_name
            END as group_key,
            puzzle_date,
            player_name,
            moves,
            completed_at
          FROM leaderboard_scores
          WHERE mode = $1
        ),
        best_scores AS (
          SELECT DISTINCT ON (group_key, puzzle_date)
            group_key, puzzle_date, player_name, moves, completed_at
          FROM grouped
          ORDER BY group_key, puzzle_date, moves ASC, completed_at ASC
        ),
        latest_names AS (
          SELECT DISTINCT ON (group_key)
            group_key, player_name
          FROM grouped
          ORDER BY group_key, completed_at DESC
        )
        SELECT
          ln.player_name as "playerName",
          COUNT(DISTINCT bs.puzzle_date) as "puzzlesCompleted",
          SUM(bs.moves) as "totalMoves"
        FROM best_scores bs
        JOIN latest_names ln ON bs.group_key = ln.group_key
        GROUP BY ln.group_key, ln.player_name
        ORDER BY SUM(bs.moves) ASC, COUNT(DISTINCT bs.puzzle_date) DESC
        LIMIT 50`,
        [mode]
      );

      const rows = result.rows.map((row: any) => ({
        playerName: row.playerName,
        puzzlesCompleted: parseInt(row.puzzlesCompleted, 10),
        totalMoves: parseInt(row.totalMoves, 10),
      }));

      res.json(rows);
    } catch (err) {
      console.error("Defrag alltime leaderboard error:", err);
      res.status(500).json({ error: "Failed to fetch leaderboard" });
    }
  });

  app.get("/api/defrag/leaderboard/:date/:mode", async (req, res) => {
    const pool = getDefragPool();
    if (!pool) return res.status(503).json({ error: "Leaderboard unavailable" });

    const { date, mode } = req.params;
    if (!isValidDate(date)) {
      return res.status(400).json({ error: "Invalid date format" });
    }
    if (!isValidMode(mode)) {
      return res.status(400).json({ error: "Invalid mode" });
    }

    try {
      const result = await pool.query(
        `SELECT DISTINCT ON (COALESCE(user_id::text, '') || '|' || player_name)
          id, puzzle_date, theme_title, mode, moves, player_name, user_id, is_premium, completed_at
        FROM leaderboard_scores
        WHERE puzzle_date = $1 AND mode = $2
        ORDER BY COALESCE(user_id::text, '') || '|' || player_name, moves ASC, completed_at ASC
        LIMIT 50`,
        [date, mode]
      );

      const rows = result.rows
        .map((row: any) => ({
          id: row.id,
          puzzleDate: row.puzzle_date,
          themeTitle: row.theme_title,
          mode: row.mode,
          moves: row.moves,
          playerName: row.player_name,
          userId: row.user_id,
          isPremium: row.is_premium,
          completedAt: row.completed_at,
        }))
        .sort((a: any, b: any) => {
          if (a.moves !== b.moves) return a.moves - b.moves;
          return new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime();
        });

      res.json(rows);
    } catch (err) {
      console.error("Defrag daily leaderboard error:", err);
      res.status(500).json({ error: "Failed to fetch leaderboard" });
    }
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
