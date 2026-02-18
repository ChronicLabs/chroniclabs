import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, RefreshCw } from "lucide-react";

type GameMode = "easy" | "hard" | "superhard";

interface LeaderboardEntry {
  id: string;
  playerName: string;
  moves: number;
  completedAt: string;
  isPremium?: string;
}

interface AllTimeEntry {
  playerName: string;
  puzzlesCompleted: number;
  totalMoves: number;
}

const PHP_API = "/api/defrag/leaderboard.php";

function getToday(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

export function LiveLeaderboard() {
  const [mode, setMode] = useState<GameMode>("easy");
  const [view, setView] = useState<"today" | "alltime">("today");
  const [scores, setScores] = useState<LeaderboardEntry[]>([]);
  const [alltime, setAlltime] = useState<AllTimeEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [error, setError] = useState(false);

  const fetchScores = async () => {
    setLoading(true);
    setError(false);
    try {
      if (view === "today") {
        const url = `${PHP_API}?type=daily&date=${getToday()}&mode=${mode}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        setScores(Array.isArray(data) ? data.slice(0, 10) : []);
      } else {
        const url = `${PHP_API}?type=alltime&mode=${mode}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        setAlltime(Array.isArray(data) ? data.slice(0, 10) : []);
      }
      setLastUpdated(new Date());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScores();
    const interval = setInterval(fetchScores, 60000);
    return () => clearInterval(interval);
  }, [mode, view]);

  const modeLabel = { easy: "EASY", hard: "HARD", superhard: "SUPER_HARD" };
  const modeColor = { easy: "#00FF41", hard: "#FFB800", superhard: "#FF4141" };

  return (
    <div className="border border-[#003B00] bg-black/60 p-6 rounded">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Trophy className="w-5 h-5 text-[#00FF41]" />
          <span className="font-bold tracking-widest text-sm">GLOBAL_RANKINGS</span>
        </div>
        <button
          onClick={fetchScores}
          disabled={loading}
          className="text-[#003B00] hover:text-[#00FF41] transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2 mb-4">
        {(["today", "alltime"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`text-xs px-3 py-1 border transition-all ${
              view === v
                ? "border-[#00FF41] text-[#00FF41] bg-[#00FF41]/10"
                : "border-[#003B00] text-[#003B00] hover:border-[#00FF41]/50"
            }`}
          >
            {v === "today" ? "TODAY" : "ALL_TIME"}
          </button>
        ))}
      </div>

      {/* Mode Toggle */}
      <div className="flex gap-2 mb-6">
        {(["easy", "hard", "superhard"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`text-xs px-3 py-1 border transition-all ${
              mode === m
                ? `border-current bg-current/10`
                : "border-[#003B00] text-[#003B00] hover:border-[#00FF41]/50"
            }`}
            style={mode === m ? { color: modeColor[m], borderColor: modeColor[m] } : undefined}
          >
            {modeLabel[m]}
          </button>
        ))}
      </div>

      {/* Scores */}
      {error ? (
        <div className="text-center py-8 text-[#003B00] text-sm">
          [ NETWORK_ERROR — RETRYING ]
        </div>
      ) : loading ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-8 bg-[#003B00]/20 animate-pulse rounded" />
          ))}
        </div>
      ) : view === "today" ? (
        scores.length === 0 ? (
          <div className="text-center py-8 text-[#003B00] text-sm">
            [ NO_SCORES_YET — BE_FIRST ]
          </div>
        ) : (
          <div className="space-y-2">
            {scores.map((entry, idx) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
                className="flex items-center justify-between py-2 border-b border-[#003B00]/40 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold w-5 text-right"
                    style={{ color: idx === 0 ? "#FFD700" : idx === 1 ? "#C0C0C0" : idx === 2 ? "#CD7F32" : "#003B00" }}
                  >
                    {idx + 1}
                  </span>
                  <span className="text-sm text-[#00FF41]/80 font-mono truncate max-w-[140px]">
                    {entry.playerName}
                    {entry.isPremium === "true" && (
                      <span className="ml-1 text-[10px] text-[#FFB800]">★</span>
                    )}
                  </span>
                </div>
                <span className="text-sm font-bold font-mono" style={{ color: modeColor[mode] }}>
                  {entry.moves} <span className="text-xs text-[#003B00] font-normal">moves</span>
                </span>
              </motion.div>
            ))}
          </div>
        )
      ) : (
        alltime.length === 0 ? (
          <div className="text-center py-8 text-[#003B00] text-sm">[ NO_DATA ]</div>
        ) : (
          <div className="space-y-2">
            {alltime.map((entry, idx) => (
              <motion.div
                key={entry.playerName}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04 }}
                className="flex items-center justify-between py-2 border-b border-[#003B00]/40 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold w-5 text-right"
                    style={{ color: idx === 0 ? "#FFD700" : idx === 1 ? "#C0C0C0" : idx === 2 ? "#CD7F32" : "#003B00" }}
                  >
                    {idx + 1}
                  </span>
                  <span className="text-sm text-[#00FF41]/80 font-mono truncate max-w-[120px]">
                    {entry.playerName}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold font-mono text-[#00FF41]">
                    {entry.puzzlesCompleted} <span className="text-[#003B00] font-normal">solved</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )
      )}

      {lastUpdated && !error && (
        <div className="mt-4 text-[10px] text-[#003B00] text-right font-mono">
          SYNCED_{lastUpdated.toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}
