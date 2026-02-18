import pg from "pg";

const { Pool } = pg;

const DEFRAG_DB_URL = process.env.DEFRAG_DB_URL || "";

let _pool: InstanceType<typeof Pool> | null = null;

export function getDefragPool(): InstanceType<typeof Pool> | null {
  if (!DEFRAG_DB_URL) return null;
  if (!_pool) {
    _pool = new Pool({
      connectionString: DEFRAG_DB_URL,
      max: 5,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });
    _pool.on("error", (err) => {
      console.error("Defrag DB pool error:", err);
    });
  }
  return _pool;
}
