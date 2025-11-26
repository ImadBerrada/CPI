import { ensureSchema, pool } from "@/lib/db"

export const runtime = "nodejs"

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    await ensureSchema()
    const id = params.id
    const { rows } = await pool.query(
      `SELECT file_bytes, mime_type, original_name FROM order_documents WHERE id = $1`,
      [id]
    )
    const row = rows[0]
    if (!row || !row.file_bytes) {
      return new Response("Not Found", { status: 404 })
    }

    const bytes: Buffer = row.file_bytes as Buffer
    const mime: string = row.mime_type || "application/octet-stream"
    const name: string = row.original_name || `document-${id}`

    // Convert Buffer to Uint8Array to satisfy the Response BodyInit type
    const data = new Uint8Array(bytes)
    return new Response(data, {
      headers: {
        "Content-Type": mime,
        "Content-Disposition": `inline; filename="${name}"`,
        "Cache-Control": "private, max-age=0, no-store",
      },
    })
  } catch (err) {
    console.error("Document download failed:", err)
    return new Response("Server Error", { status: 500 })
  }
}