import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Shield, MapPin, CheckCircle, Euro, Timer } from "lucide-react"
import ServicesGrid from "@/components/services-grid"

export const metadata: Metadata = {
  title:
    "Carte Grise Lille en Ligne - CPI WW | Changement Carte Grise & Immatriculation Temporaire Nord | Service Agréé SIV",
  description:
    "Service carte grise professionnel à Lille et dans le Nord. Changement carte grise, duplicata, première immatriculation, carte grise temporaire. Traitement rapide 24-48h en Hauts-de-France. Bureau agréé SIV.",
  keywords: [
    "carte grise Lille",
    "changement carte grise Lille",
    "duplicata carte grise Lille",
    "première immatriculation Lille",
    "carte grise temporaire Lille",
    "immatriculation Lille",
    "Nord",
    "Hauts-de-France",
    "CPI WW Lille",
  ],
  openGraph: {
    title: "Carte Grise Lille - Service Professionnel",
    description:
      "Carte grise à Lille et dans le Nord. Démarches rapides et sécurisées : changement, duplicata, première immatriculation.",
    url: "https://www.bureau-immatriculation.fr/carte-grise-lille",
    siteName: "Carte Grise Lille",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Carte Grise Lille",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carte Grise Lille - Démarches rapides",
    description: "Service carte grise à Lille. Changement, duplicata, première immatriculation.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/carte-grise-lille",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Carte Grise Lille",
  description:
    "Service professionnel de carte grise à Lille. Changement titulaire, duplicata, première immatriculation, carte grise temporaire.",
  url: "https://www.bureau-immatriculation.fr/carte-grise-lille",
  telephone: "+33 7 56 89 89 50",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Centre-ville",
    addressLocality: "Lille",
    postalCode: "59000",
    addressRegion: "Hauts-de-France",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 50.629,
      longitude: 3.057,
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

export default function CarteGriseLillePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <AnimatedSection className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Service Agréé SIV - Lille
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Carte Grise Lille
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Démarches carte grise à Lille et dans le Nord. Changement de titulaire, duplicata, première immatriculation et carte grise temporaire avec un traitement rapide en 24-48h.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-green-200">
                <CardHeader>
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-green-900">Agréé SIV</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Traitement officiel et sécurisé</p>
                </CardContent>
              </Card>
              <Card className="text-center border-blue-200">
                <CardHeader>
                  <Timer className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">24-48h</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Validation rapide de votre dossier</p>
                </CardContent>
              </Card>
              <Card className="text-center border-purple-200">
                <CardHeader>
                  <Euro className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-purple-900">Tarifs transparents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Devis gratuit et clair</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Offres disponibles */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Offres disponibles</h2>
            <ServicesGrid />
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-6 w-6 text-green-600" /> Contact Lille
                  </CardTitle>
                  <CardDescription>Support client dédié</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-center">
                    <p className="text-lg text-blue-600 font-bold">07 56 89 89 50</p>
                    <p className="text-sm text-slate-600">Service agréé SIV</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                      <a href="tel:+330756898950">Appeler</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-purple-600" /> Zones couvertes
                  </CardTitle>
                  <CardDescription>Lille et alentours (Nord)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Lille",
                      "Roubaix",
                      "Tourcoing",
                      "Villeneuve-d'Ascq",
                      "Marcq-en-Barœul",
                      "Lambersart",
                      "La Madeleine",
                      "Mons-en-Barœul",
                      "Loos",
                      "Wattrelos",
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
                  <CardTitle>Pourquoi nous choisir</CardTitle>
                  <CardDescription>Professionnels carte grise à Lille</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Service officiel agréé SIV
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Délai de traitement 24-48h
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      Accompagnement complet et transparent
                    </li>
                  </ul>
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
