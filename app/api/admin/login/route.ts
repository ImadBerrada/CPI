import { NextResponse } from "next/server"
import { ADMIN_COOKIE_NAME, signAdminSession, verifyPassword } from "@/lib/auth"
import { pool, ensureSchema } from "@/lib/db"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    await ensureSchema()
    const form = await req.formData()
    const email = String(form.get("email") || "").trim().toLowerCase()
    const password = String(form.get("password") || "").trim()

    const { rows } = await pool.query<{ email: string; password_hash: string; password_salt: string }>(
      `SELECT email, password_hash, password_salt FROM admins WHERE LOWER(email) = $1`,
      [email]
    )

    const admin = rows[0]
    if (!admin || !(await verifyPassword(password, admin.password_hash, admin.password_salt))) {
      return NextResponse.json({ error: "Identifiants invalides" }, { status: 401 })
    }

    const token = await signAdminSession(email)
    const res = NextResponse.json({ success: true })
    res.cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    })
    return res
  } catch (err) {
    return NextResponse.json({ error: "Erreur de connexion" }, { status: 500 })
  }
}