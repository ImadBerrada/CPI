import { ensureSchema, pool } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminNav } from "@/components/admin-nav"
import Link from "next/link"

export const dynamic = "force-dynamic"

type OrderDetail = {
  id: string
  service_type: string | null
  full_name: string
  email: string | null
  phone: string | null
  address: string | null
  city: string | null
  postal_code: string | null
  notes: string | null
  created_at: string
}

type DocRow = {
  id: string
  doc_label: string
  original_name: string | null
  uploaded_at: string
}

export default async function AdminOrderPage({ params }: { params: { id: string } }) {
  await ensureSchema()
  const orderId = params.id
  const { rows } = await pool.query<OrderDetail>(`SELECT * FROM orders WHERE id = $1`, [orderId])
  const order = rows[0]
  const { rows: docs } = await pool.query<DocRow>(
    `SELECT id, doc_label, original_name, uploaded_at
     FROM order_documents
     WHERE order_id = $1 AND (original_name IS NOT NULL OR file_bytes IS NOT NULL OR file_path IS NOT NULL)
     ORDER BY uploaded_at DESC`,
    [orderId]
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <Link href="/admin" className="text-sm text-blue-600 hover:underline">← Retour</Link>
        <Card>
          <CardHeader>
            <CardTitle>Commande #{orderId}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Client</div>
                <div className="font-medium">{order?.full_name}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Service</div>
                <div className="font-medium">{order?.service_type || "—"}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div>{order?.email || "—"}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Téléphone</div>
                <div>{order?.phone || "—"}</div>
              </div>
              <div className="md:col-span-2">
                <div className="text-sm text-muted-foreground">Adresse</div>
                <div>{order?.address || "—"}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Ville</div>
                <div>{order?.city || "—"}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Code Postal</div>
                <div>{order?.postal_code || "—"}</div>
              </div>
              <div className="md:col-span-2">
                <div className="text-sm text-muted-foreground">Notes</div>
                <div className="whitespace-pre-wrap">{order?.notes || "—"}</div>
              </div>
              <div className="md:col-span-2">
                <div className="text-sm text-muted-foreground">Créé le</div>
                <div>{order?.created_at ? new Date(order.created_at).toLocaleString() : "—"}</div>
              </div>
            </div>

            <div className="pt-4">
              <div className="font-semibold mb-2">Documents téléversés</div>
              {docs.length === 0 ? (
                <div className="text-sm text-muted-foreground">Aucun document ajouté</div>
              ) : (
                <ul className="space-y-2">
                  {docs.map((d) => (
                    <li key={d.id} className="flex items-center justify-between gap-4 p-3 border rounded-md bg-white">
                      <div>
                        <div className="font-medium">{d.doc_label}</div>
                        <div className="text-xs text-muted-foreground">{new Date(d.uploaded_at).toLocaleString()}</div>
                      </div>
                      <a href={`/api/documents/${d.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Ouvrir
                      </a>
                      {d.original_name && (
                        <div className="text-xs text-muted-foreground">{d.original_name}</div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}