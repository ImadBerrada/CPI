"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OrderNowButton } from "@/components/order-form-provider"
import { CheckCircle } from "lucide-react"

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* CPI WW */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="text-center pb-6">
          <CardTitle>CPI WW – Certificat provisoire d'immatriculation</CardTitle>
          <CardDescription>Certificat CPI WW valide 4 mois</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-6">
            {[
              "Traitement sous 24-48h",
              "Envoi par email + courrier",
              "Support client inclus",
              "Conformité garantie",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-2xl font-bold text-blue-600 mb-4">79.95€ TTC</div>
          <OrderNowButton className="w-full" serviceType="CPI WW – Certificat provisoire d'immatriculation">
            Commander
          </OrderNowButton>
        </CardContent>
      </Card>

      {/* Carte grise */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="text-center pb-6">
          <CardTitle>Carte grise</CardTitle>
          <CardDescription>Service de traitement de carte grise</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600 mb-4">29€ TTC</div>
          <OrderNowButton className="w-full" serviceType="Carte grise">
            Commander
          </OrderNowButton>
        </CardContent>
      </Card>

      {/* Changement d'adresse */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="text-center pb-6">
          <CardTitle>Changement d'adresse</CardTitle>
          <CardDescription>Mise à jour de votre adresse</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-800 mb-4">19€ TTC</div>
          <OrderNowButton className="w-full" serviceType="Changement d'adresse">
            Commander
          </OrderNowButton>
        </CardContent>
      </Card>

      {/* Déclaration d'achat */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="text-center pb-6">
          <CardTitle>Déclaration d'achat</CardTitle>
          <CardDescription>Déclaration officielle d'achat</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-800 mb-4">19€ TTC</div>
          <OrderNowButton className="w-full" serviceType="Déclaration d'achat">
            Commander
          </OrderNowButton>
        </CardContent>
      </Card>

      {/* Cessions de véhicule */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="text-center pb-6">
          <CardTitle>Cessions de véhicule</CardTitle>
          <CardDescription>Formalités de cession</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-800 mb-4">19€ TTC</div>
          <OrderNowButton className="w-full" serviceType="Cessions de véhicule">
            Commander
          </OrderNowButton>
        </CardContent>
      </Card>
    </div>
  )
}