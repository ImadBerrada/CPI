import { Pool } from "pg"

const DEFAULT_DB_URL =
  process.env.DATABASE_URL ??
  "postgresql://neondb_owner:npg_uqtrdh52NYDM@ep-calm-paper-agbn3k57-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

const pool = new Pool({ connectionString: DEFAULT_DB_URL, ssl: { rejectUnauthorized: false } })

async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id UUID PRIMARY KEY,
      service_type TEXT,
      full_name TEXT NOT NULL,
      email TEXT,
      phone TEXT,
      address TEXT,
      city TEXT,
      postal_code TEXT,
      notes TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    ALTER TABLE orders ADD COLUMN IF NOT EXISTS service_type TEXT;

    CREATE TABLE IF NOT EXISTS order_documents (
      id UUID PRIMARY KEY,
      order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
      doc_label TEXT NOT NULL,
      file_path TEXT NOT NULL,
      uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    -- Add columns for storing files in DB
    ALTER TABLE order_documents ADD COLUMN IF NOT EXISTS file_bytes BYTEA;
    ALTER TABLE order_documents ADD COLUMN IF NOT EXISTS mime_type TEXT;
    ALTER TABLE order_documents ADD COLUMN IF NOT EXISTS original_name TEXT;
    -- Relax NOT NULL on file_path since storage can be in DB
    DO $$
    BEGIN
      BEGIN
        ALTER TABLE order_documents ALTER COLUMN file_path DROP NOT NULL;
      EXCEPTION WHEN others THEN
        NULL;
      END;
    END
    $$;

    CREATE TABLE IF NOT EXISTS admins (
      id UUID PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      password_salt TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `)
}

async function main() {
  await ensureSchema()
  const res = await pool.query(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema='public' AND table_name IN ('orders','order_documents','admins')
    ORDER BY table_name
  `)
  console.log("Initialized tables:", res.rows.map(r => r.table_name))
}

main().then(() => process.exit(0)).catch((err) => {
  console.error(err)
  process.exit(1)
})