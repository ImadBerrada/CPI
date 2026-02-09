import { NextResponse } from "next/server"
import { ensureSchema, pool } from "@/lib/db"
import nodemailer from "nodemailer"
import { revalidatePath } from "next/cache"
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
  | "carte_grise"
  | "cession"
  | "certificat_conformite"

const docLabels: Record<DocKey, string> = {
  permis_recto: "Permis de conduire (recto)",
  permis_verso: "Permis de conduire (verso)",
  identite_recto: "Pièce d’identité (recto)",
  identite_verso: "Pièce d’identité (verso)",
  justificatif_domicile: "Justificatif de domicile (<6 mois)",
  assurance: "Attestation d’assurance",
  controle_technique: "Contrôle technique",
  acte_de_vente: "Acte de vente",
  carte_grise: "Carte grise (CI)",
  cession: "Déclaration de cession",
  certificat_conformite: "Certificat de conformité",
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

    // Attempt to send confirmation emails (non-blocking for client response)
    sendOrderEmails({
      orderId,
      full_name,
      email,
      phone,
      service_type,
      address,
      city,
      postal_code,
      notes,
      documentCount: savedDocs.length,
    }).catch((err) => {
      console.error("Email send failed:", err)
    })

    revalidatePath("/admin")

    return NextResponse.json({ success: true, orderId, documents: savedDocs })
  } catch (err: any) {
    console.error("Order submission failed:", err)
    return NextResponse.json({ error: "Erreur serveur lors de l’envoi." }, { status: 500 })
  }
}

function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9_.-]/g, "_")
}

type OrderEmailPayload = {
  orderId: string
  full_name: string
  email: string
  phone: string
  service_type: string
  address: string
  city: string
  postal_code: string
  notes: string
  documentCount: number
}

async function sendOrderEmails(order: OrderEmailPayload) {
  const host = process.env.SMTP_HOST || "smtp.hostinger.com"
  const portEnv = Number(process.env.SMTP_PORT || 465)
  const secureEnv = String(process.env.SMTP_SECURE || "true") === "true"
  const user = process.env.SMTP_USER || "contact@bureau-immatriculation.com"
  const pass = process.env.SMTP_PASS || ""
  const fromName = process.env.SMTP_FROM_NAME || "CPI WW"
  const fromEmail = process.env.SMTP_FROM_EMAIL || user
  const notifyEmail = process.env.NOTIFY_EMAIL || user

  function createTransport(config: { host: string; port: number; secure: boolean }) {
    return nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: { user, pass },
      authMethod: "LOGIN",
      ...(config.port === 587 ? { requireTLS: true } : {}),
      // Be tolerant to self-signed / misconfigured TLS in fallback scenarios
      tls: { rejectUnauthorized: false },
    })
  }

  // Candidate configurations to try sequentially
  const candidates: { host: string; port: number; secure: boolean }[] = [
    { host, port: portEnv, secure: secureEnv },
    // Flip port/security
    { host, port: portEnv === 465 ? 587 : 465, secure: portEnv === 465 ? false : true },
    // Domain-specific host (common on some setups)
    { host: "mail.bureau-immatriculation.com", port: 465, secure: true },
    { host: "mail.bureau-immatriculation.com", port: 587, secure: false },
    // Titan SMTP hosts often used on Hostinger mail
    { host: "smtp.titan.email", port: 465, secure: true },
    { host: "smtp.titan.email", port: 587, secure: false },
  ]

  let transporter: nodemailer.Transporter | null = null
  let lastErr: any = null
  for (const cfg of candidates) {
    try {
      const t = createTransport(cfg)
      // Try verify but do not require it for success; some servers block verify.
      try {
        await t.verify()
      } catch (verr) {
        console.warn(`SMTP verify warning on ${cfg.host}:${cfg.port} (secure=${cfg.secure})`, verr)
      }
      transporter = t
      break
    } catch (err) {
      lastErr = err
      console.warn(`SMTP transport creation failed on ${cfg.host}:${cfg.port} (secure=${cfg.secure})`, err)
    }
  }

  // Fallback: attempt first candidate without verify if all above failed
  if (!transporter) {
    try {
      const first = candidates[0]
      transporter = createTransport(first)
      console.warn(`Using fallback SMTP transport ${first.host}:${first.port} (secure=${first.secure}) without verify`)
    } catch (err) {
      throw lastErr || err || new Error("SMTP configuration failed")
    }
  }

  const subjectBase = `Commande #${order.orderId} – ${order.service_type || "Service"}`

  // Build a simple, clean HTML email with a header and key details
  const htmlSummary = `
    <div style="background:#f8fafc;padding:24px">
      <table role="presentation" style="width:100%;max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden" cellspacing="0" cellpadding="0">
        <tr>
          <td style="background:#0ea5e9;color:#ffffff;padding:16px 20px;font-family:Arial,Helvetica,sans-serif">
            <div style="font-size:18px;font-weight:600">CPI WW</div>
            <div style="font-size:14px;opacity:0.9">Confirmation de commande</div>
          </td>
        </tr>
        <tr>
          <td style="padding:20px;font-family:Arial,Helvetica,sans-serif;color:#0f172a">
            <h2 style="margin:0 0 8px;font-size:20px">${subjectBase}</h2>
            <p style="margin:8px 0">Bonjour ${order.full_name},</p>
            <p style="margin:8px 0">Nous avons bien reçu votre commande et allons la traiter sous 24–48h.</p>
            <div style="margin:16px 0;padding:12px;border:1px solid #e2e8f0;border-radius:8px;background:#f9fafb">
              <div style="margin:0 0 8px;font-weight:600">Détails</div>
              <div style="display:grid;grid-template-columns:140px 1fr;gap:8px 12px;font-size:14px">
                <div style="color:#475569">Service</div><div>${order.service_type || ""}</div>
                <div style="color:#475569">Nom</div><div>${order.full_name}</div>
                <div style="color:#475569">Email</div><div>${order.email || ""}</div>
                <div style="color:#475569">Téléphone</div><div>${order.phone || ""}</div>
                <div style="color:#475569">Adresse</div><div>${order.address || ""}, ${order.postal_code || ""} ${order.city || ""}</div>
                <div style="color:#475569">Documents</div><div>${order.documentCount}</div>
              </div>
              ${order.notes ? `<div style="margin-top:12px"><div style="color:#475569">Notes</div><div>${order.notes}</div></div>` : ""}
            </div>
            <p style="margin:16px 0;color:#334155">Merci pour votre confiance.<br/>Bureau Immatriculation Privé<br/>+33756898950</p>
          </td>
        </tr>
      </table>
    </div>
  `

  // Fetch documents to list and attach for internal email
  const { rows: docRows } = await pool.query(
    `SELECT doc_label, original_name, mime_type, file_bytes, uploaded_at
     FROM order_documents WHERE order_id = $1 ORDER BY uploaded_at ASC`,
    [order.orderId]
  )
  const hasDocs = Array.isArray(docRows) && docRows.length > 0
  const docsListHtml = hasDocs
    ? `<ul style="margin:8px 0 0;padding-left:16px">${docRows
        .map(
          (d) =>
            `<li>${d.doc_label || "Document"}${d.original_name ? ` – <span style="color:#475569">${d.original_name}</span>` : ""}</li>`
        )
        .join("")}</ul>`
    : `<p style="margin:8px 0;color:#475569">Aucun document joint.</p>`

  const htmlInternal = `
    <div style="background:#f8fafc;padding:24px">
      <table role="presentation" style="width:100%;max-width:720px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden" cellspacing="0" cellpadding="0">
        <tr>
          <td style="background:#0ea5e9;color:#ffffff;padding:16px 20px;font-family:Arial,Helvetica,sans-serif">
            <div style="font-size:18px;font-weight:600">CPI WW</div>
            <div style="font-size:14px;opacity:0.9">Nouvelle commande reçue</div>
          </td>
        </tr>
        <tr>
          <td style="padding:20px;font-family:Arial,Helvetica,sans-serif;color:#0f172a">
            <h2 style="margin:0 0 8px;font-size:20px">${subjectBase}</h2>
            <div style="margin:16px 0;padding:12px;border:1px solid #e2e8f0;border-radius:8px;background:#f9fafb">
              <div style="display:grid;grid-template-columns:160px 1fr;gap:8px 12px;font-size:14px">
                <div style="color:#475569">ID</div><div>${order.orderId}</div>
                <div style="color:#475569">Service</div><div>${order.service_type || ""}</div>
                <div style="color:#475569">Nom</div><div>${order.full_name}</div>
                <div style="color:#475569">Email</div><div>${order.email || ""}</div>
                <div style="color:#475569">Téléphone</div><div>${order.phone || ""}</div>
                <div style="color:#475569">Adresse</div><div>${order.address || ""}, ${order.postal_code || ""} ${order.city || ""}</div>
                <div style="color:#475569">Documents</div><div>${order.documentCount}</div>
              </div>
              ${order.notes ? `<div style="margin-top:12px"><div style="color:#475569">Notes</div><div>${order.notes}</div></div>` : ""}
            </div>
            <div style="margin-top:16px">
              <div style="font-weight:600;margin-bottom:8px">Pièces jointes</div>
              ${docsListHtml}
            </div>
          </td>
        </tr>
      </table>
    </div>
  `

  const from = `${fromName} <${fromEmail}>`

  // Send to client (if email provided)
  if (order.email) {
    try {
      await transporter.sendMail({ from, to: order.email, subject: subjectBase, html: htmlSummary })
    } catch (err) {
      console.error("Client email send failed:", err)
    }
  }

  // Prepare attachments (internal only)
  const attachments = docRows
    .filter((d) => d.file_bytes && d.file_bytes.length)
    .map((d) => ({
      filename: d.original_name || `${d.doc_label || "document"}.bin`,
      content: d.file_bytes as Buffer,
      contentType: d.mime_type || "application/octet-stream",
    }))

  // Send to internal with attachments
  try {
    await transporter.sendMail({
      from,
      to: notifyEmail,
      subject: `Nouvelle commande – ${subjectBase}`,
      html: htmlInternal,
      attachments,
    })
  } catch (err) {
    console.error("Internal email send failed:", err)
  }
}
