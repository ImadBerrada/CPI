import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, UserCheck, Timer, Download, MapPin, Shield, Phone, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "CPI WW Metz - Immatriculation Temporaire Moselle | Service Agréé SIV",
  description:
    "Service CPI WW à Metz. Immatriculation temporaire pour véhicules importés, certificat provisoire WW, traitement rapide 24-48h en Moselle.",
  keywords: [
    "CPI WW Metz",
    "immatriculation temporaire Metz",
    "certificat provisoire Metz",
    "plaques WW Metz",
    "Moselle",
    "véhicule importé Metz",
  ],
  openGraph: {
    title: "CPI WW Metz - Immatriculation Temporaire",
    description:
      "Expert en immatriculation temporaire CPI WW à Metz et en Moselle. Démarches rapides et sécurisées pour véhicules importés.",
    url: "https://cpi-ww.fr/cpi-ww-metz",
    siteName: "CPI WW Metz",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "CPI WW Metz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPI WW Metz - Service rapide",
    description: "Immatriculation temporaire à Metz en 24-48h pour véhicules importés.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/cpi-ww-metz",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CPI WW Metz",
  description:
    "Immatriculation temporaire (CPI WW) à Metz pour véhicules importés, traitement 24-48h, service agréé SIV.",
  url: "https://www.bureau-immatriculation.fr/cpi-ww-metz",
  telephone: "+33 7 56 89 89 50",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Centre-ville",
    addressLocality: "Metz",
    postalCode: "57000",
    addressRegion: "Grand Est",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 49.119,
      longitude: 6.175,
    },
    geoRadius: "50000",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.facebook.com/cpiww", "https://www.linkedin.com/company/cpiww"],
}

export default function CpiWwMetzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <AnimatedSection className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Service Agréé SIV - Metz
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                CPI WW Metz
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Immatriculation temporaire pour véhicules importés à Metz et en Moselle. Certificat provisoire WW délivré rapidement avec un traitement en 24-48h.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Processus CPI WW</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">1. Envoi</h3>
                <p className="text-sm text-muted-foreground">Transmettez vos documents</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">2. Vérification</h3>
                <p className="text-sm text-muted-foreground">Contrôle et validation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Timer className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">3. Traitement</h3>
                <p className="text-sm text-muted-foreground">Délai 24-48h</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">4. Réception</h3>
                <p className="text-sm text-muted-foreground">Certificat provisoire WW</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Coverage & Contact */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-purple-600" /> Zones couvertes
                  </CardTitle>
                  <CardDescription>Metz et alentours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Montigny-lès-Metz",
                      "Woippy",
                      "Marly",
                      "Saint-Julien-lès-Metz",
                      "Le Ban-Saint-Martin",
                      "Talange",
                      "Hagondange",
                    ].map((city, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {city}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-green-600" /> Pourquoi nous choisir
                  </CardTitle>
                  <CardDescription>Service officiel CPI WW</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Agréé SIV, traitement sécurisé
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Délai express 24-48h
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Accompagnement expert véhicules importés
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-6 w-6 text-blue-600" /> Contact Metz
                  </CardTitle>
                  <CardDescription>Support client dédié</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-center">
                    <p className="text-lg text-blue-600 font-bold">07 56 89 89 50</p>
                    <p className="text-sm text-slate-600">Service agréé SIV</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                      <a href="tel:+330756898950">Appeler</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>
        
        <Footer />
      </div>
    </>
  )
}