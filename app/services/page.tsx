import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, FileText, MapPin, Phone, Star, ArrowRight, Car, Building, Users, Shield, Euro, Truck, CreditCard, UserCheck, BadgeCheck, Clipboard, Timer, Send, Download } from "lucide-react"
import { Footer } from "@/components/footer"
import { OrderNowButton } from "@/components/order-form-provider"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"
import ServicesGrid from "@/components/services-grid"

export const metadata: Metadata = {
  title: "Nos Services Carte Grise - CPI WW Reims | Immatriculation Temporaire & Carte Grise en Ligne",
  description:
    "Services complets de carte grise en ligne, immatriculation temporaire, changement carte grise, duplicata carte grise et certificat provisoire. Service agréé SIV dans la Marne.",
  keywords: [
    "services carte grise",
    "carte grise en ligne",
    "immatriculation temporaire",
    "carte grise Reims",
    "changement carte grise",
    "duplicata carte grise",
    "certificat provisoire",
    "service agréé SIV",
    "démarches carte grise",
    "bureau carte grise Marne",
    "carte grise rapide",
    "plaques WW",
    "import véhicule",
    "changement propriétaire",
    "première immatriculation",
    "carte grise temporaire",
    "service carte grise Reims"
  ],
  openGraph: {
    title: "Nos Services Carte Grise - CPI WW Reims | Carte Grise en Ligne & Immatriculation Temporaire",
    description:
      "Services complets de carte grise en ligne, changement carte grise, duplicata carte grise et immatriculation temporaire. Service agréé SIV dans la Marne.",
    url: "https://www.bureau-immatriculation.fr/services",
    images: [
      {
        url: "/CPI WW-carte grise.png",
        width: 1200,
        height: 630,
        alt: "Services CPI WW Reims - Immatriculation Temporaire et Carte Grise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Services - CPI WW Reims",
    description: "Découvrez tous nos services d'immatriculation temporaire et carte grise. Service agréé SIV dans la Marne.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/services",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Services CPI WW Reims",
  "description": "Services complets d'immatriculation temporaire, carte grise et démarches administratives automobiles",
  "url": "https://www.bureau-immatriculation.fr/services",
  "provider": {
    "@type": "Organization",
    "name": "CPI WW Reims",
    "telephone": "+33756898950"
  },
  "serviceType": "Immatriculation temporaire et services automobiles",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 49.2583,
      "longitude": 4.0317
    },
    "geoRadius": "50000"
  }
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <AnimatedSection className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                Service Agréé SIV
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Nos Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                CPI WW Reims vous accompagne dans toutes vos démarches d'immatriculation temporaire et de carte grise avec un service professionnel et certifié.
              </p>
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

        {/* Services complémentaires */}
        <AnimatedSection className="py-16 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Services Complémentaires</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Accompagnement Personnalisé
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Conseil expert</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Vérification documents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Suivi personnalisé</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Garanties & Assurances
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600" />
                      <span>Service certifié ISO 9001</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600" />
                      <span>Garantie délais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600" />
                      <span>Remboursement si échec</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Processus */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Notre Processus</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">1. Envoi Documents</h3>
                <p className="text-sm text-muted-foreground">Transmettez vos documents par email ou courrier</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">2. Vérification</h3>
                <p className="text-sm text-muted-foreground">Contrôle et validation de votre dossier</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Timer className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">3. Traitement</h3>
                <p className="text-sm text-muted-foreground">Traitement rapide en 24-48h</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">4. Réception</h3>
                <p className="text-sm text-muted-foreground">Récupération ou envoi sécurisé</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Besoin d'un Service ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous dès maintenant pour obtenir un devis personnalisé et bénéficier de notre expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Nous Contacter
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/guide">
                  <FileText className="mr-2 h-5 w-5" />
                  Guide Complet
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </>
  )
}