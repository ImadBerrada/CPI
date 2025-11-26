import { NextResponse } from "next/server"
import { ensureSchema, pool } from "@/lib/db"
// We now store uploaded files directly in the database as BYTEA

export const runtime = "nodejs"

type DocKey =
  | "permis_recto"
  | "permis_verso"
  | "identite_recto"
  | "identite_verso"
  | "justificatif_domicile"
  | "assurance"
  | "controle_technique"
  | "acte_de_vente"

const docLabels: Record<DocKey, string> = {
  permis_recto: "Permis de conduire (recto)",
  permis_verso: "Permis de conduire (verso)",
  identite_recto: "Pièce d’identité (recto)",
  identite_verso: "Pièce d’identité (verso)",
  justificatif_domicile: "Justificatif de domicile (<6 mois)",
  assurance: "Attestation d’assurance",
  controle_technique: "Contrôle technique",
  acte_de_vente: "Acte de vente",
}

export async function POST(req: Request) {
  try {
    await ensureSchema()

    const form = await req.formData()
    const full_name = String(form.get("full_name") || "").trim()
    const service_type = String(form.get("service_type") || "").trim()
    const email = String(form.get("email") || "").trim()
    const phone = String(form.get("phone") || "").trim()
    const address = String(form.get("address") || "").trim()
    const city = String(form.get("city") || "").trim()
    const postal_code = String(form.get("postal_code") || "").trim()
    const notes = String(form.get("notes") || "").trim()

    if (!full_name) {
      return NextResponse.json({ error: "Le nom complet est requis." }, { status: 400 })
    }

    const orderId = crypto.randomUUID()

    // Create order record
    await pool.query(
      `INSERT INTO orders (id, service_type, full_name, email, phone, address, city, postal_code, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [orderId, service_type, full_name, email, phone, address, city, postal_code, notes]
    )

    const savedDocs: { key: DocKey; documentId: string }[] = []

    for (const key of Object.keys(docLabels) as DocKey[]) {
      const file = form.get(key) as File | null
      // Only process files that were actually selected (non-empty and with a name)
      if (file && typeof file.arrayBuffer === "function" && file.size > 0 && file.name) {
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const originalName = sanitizeFilename(file.name)
        const mimeType = file.type || "application/octet-stream"
        const docId = crypto.randomUUID()

        await pool.query(
          `INSERT INTO order_documents (id, order_id, doc_label, original_name, mime_type, file_bytes)
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [docId, orderId, docLabels[key], originalName, mimeType, buffer]
        )

        savedDocs.push({ key, documentId: docId })
      }
    }

    return NextResponse.json({
      success: true,
      orderId,
      documents: savedDocs,
    })
  } catch (err: any) {
    console.error("Order submission failed:", err)
    return NextResponse.json({ error: "Erreur serveur lors de l’envoi." }, { status: 500 })
  }
}

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9_.-]/g, "_")
}