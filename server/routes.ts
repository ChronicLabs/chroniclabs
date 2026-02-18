import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api, errorSchemas } from "@shared/routes";
import { z } from "zod";

// Defrag API proxy — set DEFRAG_API_URL in environment to enable live leaderboard
const DEFRAG_API_URL = process.env.DEFRAG_API_URL || "";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // ── Defrag leaderboard proxy ──────────────────────────────
  app.get("/api/defrag/leaderboard/alltime/:mode", async (req, res) => {
    if (!DEFRAG_API_URL) return res.status(503).json({ error: "Leaderboard unavailable" });
    try {
      const upstream = await fetch(`${DEFRAG_API_URL}/api/leaderboard/alltime/${req.params.mode}`);
      const data = await upstream.json();
      res.json(data);
    } catch {
      res.status(502).json({ error: "Upstream error" });
    }
  });

  app.get("/api/defrag/leaderboard/:date/:mode", async (req, res) => {
    if (!DEFRAG_API_URL) return res.status(503).json({ error: "Leaderboard unavailable" });
    try {
      const upstream = await fetch(`${DEFRAG_API_URL}/api/leaderboard/${req.params.date}/${req.params.mode}`);
      const data = await upstream.json();
      res.json(data);
    } catch {
      res.status(502).json({ error: "Upstream error" });
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
