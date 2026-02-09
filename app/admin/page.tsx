import { ensureSchema, pool } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { AdminNav } from "@/components/admin-nav"

export const dynamic = "force-dynamic"

type OrderRow = {
  id: string
  service_type: string | null
  full_name: string
  email: string | null
  phone: string | null
  city: string | null
  created_at: string
}

export default async function AdminHomePage() {
  await ensureSchema()
  const { rows } = await pool.query<OrderRow>(
    `SELECT id, service_type, full_name, email, phone, city, created_at
     FROM orders
     ORDER BY created_at DESC`
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Réservations / Commandes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Créé</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Ville</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Téléphone</TableHead>
                  <TableHead>Détail</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((o) => (
                  <TableRow key={o.id}>
                    <TableCell>{new Date(o.created_at).toLocaleString()}</TableCell>
                    <TableCell>{o.full_name}</TableCell>
                    <TableCell>{o.service_type || "—"}</TableCell>
                    <TableCell>{o.city || "—"}</TableCell>
                    <TableCell>{o.email || "—"}</TableCell>
                    <TableCell>{o.phone || "—"}</TableCell>
                    <TableCell>
                      <Link href={`/admin/orders/${o.id}`} className="text-blue-600 hover:underline">Voir</Link>
                    </TableCell>
                  </TableRow>
                ))}
                {rows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-muted-foreground">Aucune commande pour le moment</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}