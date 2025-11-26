import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, FileText, MapPin, Phone, Star, ArrowRight, Car, Building, Users, Shield, Euro } from "lucide-react"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { OrderNowButton } from "@/components/order-form-provider"
import ServicesGrid from "@/components/services-grid"

export const metadata: Metadata = {
  title: "Carte Grise en Ligne - Service Professionnel Agréé | Changement Carte Grise & Duplicata",
  description:
    "Service carte grise en ligne professionnel agréé SIV. Changement carte grise, duplicata carte grise, première immatriculation, carte grise temporaire. Traitement rapide 24-48h dans la Marne.",
  keywords: [
    "carte grise en ligne",
    "service carte grise",
    "bureau carte grise",
    "changement carte grise",
    "duplicata carte grise",
    "première immatriculation",
    "carte grise temporaire",
    "immatriculation véhicule",
    "SIV agréé",
    "carte grise Marne",
    "carte grise rapide",
    "professionnel carte grise",
    "démarches carte grise",
    "carte grise Reims",
    "service carte grise Reims"
  ],
  openGraph: {
    title: "Carte Grise en Ligne - Service Professionnel Agréé | Changement & Duplicata Carte Grise",
    description:
      "Service carte grise en ligne professionnel agréé SIV. Changement carte grise, duplicata carte grise, première immatriculation. Traitement rapide 24-48h.",
    url: "https://www.bureau-immatriculation.fr/carte-grise",
    images: [
      {
        url: "/CPI WW-carte grise.png",
        width: 1200,
        height: 630,
        alt: "Service Carte Grise Professionnel - Bureau Agréé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carte Grise - Service Professionnel Agréé",
    description: "Service carte grise professionnel agréé SIV. Traitement rapide 24-48h.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/carte-grise",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bureau Carte Grise - Service Professionnel",
  "description": "Service carte grise professionnel agréé SIV. Changement propriétaire, duplicata, première immatriculation.",
  "url": "https://www.bureau-immatriculation.fr/carte-grise",
  "telephone": "+33756898950",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Marne",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.2583,
    "longitude": 4.0317
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "€€",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 49.2583,
      "longitude": 4.0317
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Carte Grise",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Changement Propriétaire Carte Grise",
          "description": "Service de changement de propriétaire pour carte grise"
        },
        "price": "29",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Duplicata Carte Grise",
          "description": "Remplacement carte grise perdue, volée ou détériorée"
        },
        "price": "25",
        "priceCurrency": "EUR"
      }
    ]
  }
}

export default function CarteGrisePage() {
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
                Carte Grise Reims
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Service professionnel de carte grise à Reims et dans la Marne. 
                Démarches rapides, tarifs transparents, expertise reconnue.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Clock className="h-4 w-4 mr-2" />
                  Traitement 24-48h
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Shield className="h-4 w-4 mr-2" />
                  Service Agréé
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Toute la Marne
                </Badge>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-800">
                    Votre Expert Carte Grise à Reims
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Bureau Immatriculation Reims vous accompagne dans toutes vos démarches de carte grise. 
                    Service professionnel, rapide et sécurisé pour tous types de véhicules.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Première immatriculation",
                      "Changement de propriétaire",
                      "Changement d'adresse",
                      "Duplicata carte grise",
                      "Modification véhicule",
                      "Import véhicule étranger"
                    ].map((service, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" 
                  size="lg"
                  asChild
                >
                  <a href="https://wa.me/+330756898950?text=Bonjour, je souhaite faire ma carte grise à Reims" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Contactez-nous maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="relative">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                  <CardHeader className="text-center pb-8">
                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-10 w-10 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Service Carte Grise</CardTitle>
                    <CardDescription className="text-base">Toutes démarches d'immatriculation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">24-48h</div>
                        <div className="text-sm text-green-700">Délai moyen</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">100%</div>
                        <div className="text-sm text-blue-700">Sécurisé</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-slate-600 mb-4">
                        Service agréé SIV - Reims
                      </p>
                      <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                        <a href="tel:+330756898950">
                          Appeler maintenant
                        </a>
                      </Button>
                      <div className="mt-3">
                        <OrderNowButton className="w-full bg-blue-600 hover:bg-blue-700 text-white" serviceType="Carte Grise">
                          Commander
                        </OrderNowButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Nos Services Carte Grise</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tous vos besoins en matière de carte grise traités par des professionnels agréés
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Car className="h-8 w-8" />,
                  title: "Première Immatriculation",
                  description: "Immatriculation de véhicules neufs ou importés",
                  features: ["Véhicules neufs", "Import étranger", "Contrôle technique", "Certificat conformité"]
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Changement Propriétaire",
                  description: "Transfert de propriété rapide et sécurisé",
                  features: ["Vente véhicule", "Achat occasion", "Succession", "Donation"]
                },
                {
                  icon: <MapPin className="h-8 w-8" />,
                  title: "Changement Adresse",
                  description: "Mise à jour de votre adresse sur la carte grise",
                  features: ["Déménagement", "Gratuit en ligne", "Rapide", "Obligatoire"]
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Duplicata Carte Grise",
                  description: "Remplacement en cas de perte, vol ou détérioration",
                  features: ["Perte", "Vol", "Détérioration", "Nouveau format"]
                },
                {
                  icon: <Building className="h-8 w-8" />,
                  title: "Modification Véhicule",
                  description: "Changement des caractéristiques du véhicule",
                  features: ["Transformation", "Changement couleur", "Modification technique", "Mise à jour"]
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Service Professionnel",
                  description: "Accompagnement complet par des experts",
                  features: ["Conseil expert", "Suivi dossier", "Garantie", "Support client"]
                }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <div className="text-blue-600">{service.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
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

        {/* Zone de Service */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Zone de Service Carte Grise</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Service carte grise dans toute la Marne et l'agglomération rémoise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Reims et Agglomération</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Reims", "Witry-lès-Reims", "Cormontreuil", "Bezannes", "Tinqueux", "Saint-Brice-Courcelles"].map((city, idx) => (
                      <Badge key={idx} variant="secondary" className="m-1">
                        {city}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Châlons-en-Champagne</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Châlons-en-Champagne", "Sarry", "Saint-Memmie", "Compertrix", "Fagnières"].map((city, idx) => (
                      <Badge key={idx} variant="secondary" className="m-1">
                        {city}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Épernay et Sud Marne</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Épernay", "Ay-Champagne", "Dizy", "Magenta", "Pierry"].map((city, idx) => (
                      <Badge key={idx} variant="secondary" className="m-1">
                        {city}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact CTA */}
        <AnimatedSection className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Besoin d'une Carte Grise à Reims ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez notre équipe d'experts pour un service rapide et professionnel
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Téléphone</h3>
                <p className="text-lg">07 56 89 89 50</p>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Délai</h3>
                <p className="text-lg">24-48h</p>
              </div>
              <div>
                <Shield className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Agrément</h3>
              <p className="text-lg">Agréé SIV</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              asChild
            >
              <a href="https://wa.me/+330756898950?text=Bonjour, je souhaite faire ma carte grise à Reims" target="_blank" rel="noopener noreferrer">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </>
  )
}