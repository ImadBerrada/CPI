"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { OrderNowButton } from "@/components/order-form-provider"
import { ArrowRight, Car, FileText, Building, CreditCard } from "lucide-react"

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* CPI WW Standard */}
      <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <CardHeader className="text-center pb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
            <Car className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">CPI WW Standard</CardTitle>
          <div className="pt-2">
            <span className="text-3xl font-bold text-primary">79.95€</span>
            <span className="text-muted-foreground"> TTC</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center mb-4">Certificat provisoire d'immatriculation (WW) – traitement 24–48h</p>
          <OrderNowButton className="w-full" serviceType="CPI WW Standard">
            Commander
            <ArrowRight className="ml-2 h-4 w-4" />
          </OrderNowButton>
        </CardContent>
      </Card>

      {/* Carte Grise */}
      <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <CardHeader className="text-center pb-6">
          <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">Carte Grise</CardTitle>
          <div className="pt-2">
            <span className="text-3xl font-bold text-primary">29€</span>
            <span className="text-muted-foreground"> TTC</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center mb-4">Service de traitement de carte grise</p>
          <OrderNowButton className="w-full" serviceType="Carte Grise">
            Commander
            <ArrowRight className="ml-2 h-4 w-4" />
          </OrderNowButton>
        </CardContent>
      </Card>

      {/* Changement d'adresse */}
      <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <CardHeader className="text-center pb-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
            <Building className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">Changement d'adresse</CardTitle>
          <div className="pt-2">
            <span className="text-3xl font-bold text-primary">19€</span>
            <span className="text-muted-foreground"> TTC</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center mb-4">Mise à jour de votre adresse</p>
          <OrderNowButton className="w-full" serviceType="Changement d'adresse">
            Commander
            <ArrowRight className="ml-2 h-4 w-4" />
          </OrderNowButton>
        </CardContent>
      </Card>

      {/* Déclaration d'achat */}
      <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <CardHeader className="text-center pb-6">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
            <CreditCard className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">Déclaration d'achat</CardTitle>
          <div className="pt-2">
            <span className="text-3xl font-bold text-primary">19€</span>
            <span className="text-muted-foreground"> TTC</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center mb-4">Déclaration officielle d'achat</p>
          <OrderNowButton className="w-full" serviceType="Déclaration d'achat">
            Commander
            <ArrowRight className="ml-2 h-4 w-4" />
          </OrderNowButton>
        </CardContent>
      </Card>

      {/* Cessions de véhicule */}
      <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <CardHeader className="text-center pb-6">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
            <Car className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">Cessions de véhicule</CardTitle>
          <div className="pt-2">
            <span className="text-3xl font-bold text-primary">19€</span>
            <span className="text-muted-foreground"> TTC</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center mb-4">Formalités de cession</p>
          <OrderNowButton className="w-full" serviceType="Cessions de véhicule">
            Commander
            <ArrowRight className="ml-2 h-4 w-4" />
          </OrderNowButton>
        </CardContent>
      </Card>

      {/* Quitus Fiscal */}
      <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
        <CardHeader className="text-center pb-6">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">Quitus Fiscal</CardTitle>
          <div className="pt-2">
            <span className="text-3xl font-bold text-primary">39€</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center mb-4">Délivrance du Quitus Fiscal pour véhicule importé</p>
          <OrderNowButton className="w-full" serviceType="Quitus Fiscal">
            Commander
            <ArrowRight className="ml-2 h-4 w-4" />
          </OrderNowButton>
        </CardContent>
      </Card>
    </div>
  )
}
