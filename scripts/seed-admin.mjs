import { Pool } from "pg"
import crypto from "crypto"

const DEFAULT_DB_URL =
  process.env.DATABASE_URL ??
  "postgresql://neondb_owner:npg_uqtrdh52NYDM@ep-calm-paper-agbn3k57-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

const pool = new Pool({ connectionString: DEFAULT_DB_URL, ssl: { rejectUnauthorized: false } })

function hashPassword(password, salt) {
  const actualSalt = salt || crypto.randomBytes(16).toString("hex")
  const hash = crypto.pbkdf2Sync(password, actualSalt, 100_000, 32, "sha256").toString("hex")
  return { hash, salt: actualSalt }
}

async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS admins (
      id UUID PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      password_salt TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `)
}

async function seedAdmin() {
  await ensureSchema()
  const email = "admin@cpi.com"
  const password = "oussama2025"
  const { hash, salt } = hashPassword(password)
  const id = crypto.randomUUID()
  await pool.query(
    `INSERT INTO admins (id, email, password_hash, password_salt)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash, password_salt = EXCLUDED.password_salt`,
    [id, email.toLowerCase(), hash, salt]
  )
  console.log("Seeded admin:", email)
}

seedAdmin()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })