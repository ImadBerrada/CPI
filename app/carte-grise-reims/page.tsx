import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, FileText, MapPin, Phone, Star, ArrowRight, Car, Building, Users, Shield, Euro } from "lucide-react"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export const metadata: Metadata = {
  title: "Carte Grise Reims - Bureau Immatriculation Agréé | Service Rapide Marne",
  description:
    "Bureau carte grise Reims agréé SIV. Service professionnel et rapide pour toutes vos démarches carte grise à Reims et dans la Marne. Tarifs transparents, délai 24-48h.",
  keywords: [
    "carte grise Reims",
    "bureau carte grise Reims",
    "service carte grise Reims",
    "carte grise rapide Reims",
    "immatriculation Reims",
    "changement propriétaire Reims",
    "duplicata carte grise Reims",
    "première immatriculation Reims",
    "carte grise en ligne Reims",
    "bureau immatriculation Reims",
    "SIV Reims",
    "agréé carte grise Reims",
    "professionnel carte grise Reims",
    "expert carte grise Reims"
  ],
  openGraph: {
    title: "Carte Grise Reims - Bureau Immatriculation Agréé | Service Rapide Marne",
    description:
      "Bureau carte grise Reims agréé SIV. Service professionnel et rapide pour toutes vos démarches carte grise à Reims. Tarifs transparents, délai 24-48h.",
    url: "https://www.bureau-immatriculation.fr/carte-grise-reims",
    images: [
      {
        url: "/CPI WW-carte grise.png",
        width: 1200,
        height: 630,
        alt: "Bureau Carte Grise Reims - Service Professionnel Agréé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carte Grise Reims - Bureau Immatriculation Agréé",
    description: "Bureau carte grise Reims agréé SIV. Service professionnel et rapide pour toutes vos démarches carte grise à Reims.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/carte-grise-reims",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bureau Carte Grise Reims - Service Professionnel Agréé",
  "description": "Bureau carte grise Reims agréé SIV. Service professionnel et rapide pour toutes vos démarches carte grise à Reims et dans la Marne.",
  "url": "https://www.bureau-immatriculation.fr/carte-grise-reims",
  "telephone": "+33756898950",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Reims",
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
    "name": "Services Carte Grise Reims",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Changement Propriétaire Carte Grise Reims",
          "description": "Service de changement de propriétaire pour carte grise à Reims"
        },
        "price": "29",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Duplicata Carte Grise Reims",
          "description": "Remplacement carte grise perdue, volée ou détériorée à Reims"
        },
        "price": "25",
        "priceCurrency": "EUR"
      }
    ]
  }
}

export default function CarteGriseReimsPage() {
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
                Bureau Agréé SIV - Reims
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Bureau Carte Grise Reims
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Votre bureau carte grise professionnel à Reims. Service agréé, rapide et sécurisé 
                pour toutes vos démarches d'immatriculation dans la Marne.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Clock className="h-4 w-4 mr-2" />
                  Service 24-48h
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Shield className="h-4 w-4 mr-2" />
                  Agréé SIV
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">
                  <Star className="h-4 w-4 mr-2" />
                  Expert Reims
                </Badge>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-800">
                    Pourquoi Choisir Notre Bureau Carte Grise à Reims ?
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Bureau Immatriculation Reims, votre partenaire de confiance pour toutes vos démarches 
                    carte grise. Expertise locale, service personnalisé et tarifs transparents.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: <Shield className="h-5 w-5" />, text: "Agréé SIV" },
                      { icon: <Clock className="h-5 w-5" />, text: "Traitement 24-48h" },
                      { icon: <MapPin className="h-5 w-5" />, text: "Basé à Reims" },
                      { icon: <Phone className="h-5 w-5" />, text: "Support dédié" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-blue-600">{item.icon}</div>
                        <span className="text-slate-700 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" 
                  size="lg"
                  asChild
                >
                  <a href="https://wa.me/+330756898950?text=Bonjour, je cherche un bureau carte grise à Reims" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Contactez notre bureau
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="relative">
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                  <CardHeader className="text-center pb-8">
                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-10 w-10 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Bureau Carte Grise Reims</CardTitle>
                    <CardDescription className="text-base">Service professionnel agréé</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Changement propriétaire</span>
                        <span className="text-green-600 font-bold">À partir de 29€</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Duplicata carte grise</span>
                        <span className="text-blue-600 font-bold">À partir de 25€</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                        <span className="font-medium">Première immatriculation</span>
                        <span className="text-purple-600 font-bold">Devis gratuit</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-slate-600 mb-4">
                        Bureau agréé SIV - Reims, Marne
                      </p>
                      <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                        <a href="tel:+330756898950">
                          <Phone className="mr-2 h-4 w-4" />
                          07 56 89 89 50
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Carte Grise Reims */}
        <AnimatedSection className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Services Carte Grise à Reims</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Notre bureau carte grise à Reims vous propose tous les services d'immatriculation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Changement Propriétaire",
                  description: "Vente/achat véhicule",
                  price: "À partir de 29€",
                  icon: <Users className="h-6 w-6" />,
                  features: ["Traitement rapide", "Sécurisé", "Suivi dossier"]
                },
                {
                  title: "Duplicata Carte Grise",
                  description: "Perte, vol, détérioration",
                  price: "À partir de 25€",
                  icon: <FileText className="h-6 w-6" />,
                  features: ["Remplacement", "Format sécurisé", "Livraison rapide"]
                },
                {
                  title: "Changement Adresse",
                  description: "Mise à jour adresse",
                  price: "Gratuit en ligne",
                  icon: <MapPin className="h-6 w-6" />,
                  features: ["Obligatoire", "Rapide", "Dématérialisé"]
                },
                {
                  title: "Première Immatriculation",
                  description: "Véhicule neuf/importé",
                  price: "Devis gratuit",
                  icon: <Car className="h-6 w-6" />,
                  features: ["Import étranger", "Véhicule neuf", "Expertise"]
                }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-blue-600">{service.icon}</div>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="text-lg font-bold text-green-600">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center gap-2 text-sm">
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

        {/* Avantages Bureau Reims */}
        <AnimatedSection className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Pourquoi Notre Bureau à Reims ?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Les avantages de choisir notre bureau carte grise professionnel à Reims
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin className="h-8 w-8" />,
                  title: "Proximité Reims",
                  description: "Bureau basé à Reims, connaissance parfaite des spécificités locales et intervention rapide dans toute l'agglomération rémoise."
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Agrément Officiel",
                  description: "Bureau agréé SIV, garantie de conformité et de sécurité pour toutes vos démarches carte grise."
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Rapidité Service",
                  description: "Traitement de vos dossiers carte grise en 24-48h maximum, suivi personnalisé et livraison sécurisée."
                },
                {
                  icon: <Euro className="h-8 w-8" />,
                  title: "Tarifs Transparents",
                  description: "Tarification claire et transparente, devis gratuit, aucun frais caché pour vos démarches carte grise."
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Expertise Locale",
                  description: "Équipe d'experts basée à Reims, connaissance approfondie des démarches et accompagnement personnalisé."
                },
                {
                  icon: <Phone className="h-8 w-8" />,
                  title: "Support Dédié",
                  description: "Service client réactif, suivi de dossier en temps réel et assistance téléphonique pour toutes vos questions."
                }
              ].map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <div className="text-blue-600">{advantage.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Zone Intervention Reims */}
        <AnimatedSection className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Zone d'Intervention - Reims et Marne</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Notre bureau carte grise intervient dans toute l'agglomération rémoise et la Marne
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-blue-600">Reims Centre et Agglomération</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="font-semibold text-slate-800">Secteur principal :</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["Reims", "Witry-lès-Reims", "Cormontreuil", "Bezannes", "Tinqueux", "Saint-Brice-Courcelles", "Bétheny", "Muizon"].map((city, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-green-600">Marne Nord</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="font-semibold text-slate-800">Secteur étendu :</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["Châlons-en-Champagne", "Épernay", "Fismes", "Rilly-la-Montagne", "Verzy", "Ay-Champagne"].map((city, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 border-2 border-blue-200">
                <CardHeader>
                  <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-purple-600">Contact Bureau Reims</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-800">Téléphone :</p>
                      <p className="text-lg text-blue-600 font-bold">07 56 89 89 50</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Agrément :</p>
                      <p className="text-sm text-slate-600">SIV</p>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                      <a href="https://wa.me/+330756898950?text=Bonjour, je cherche un bureau carte grise à Reims" target="_blank" rel="noopener noreferrer">
                        Nous contacter
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Final */}
        <AnimatedSection className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Votre Bureau Carte Grise à Reims</h2>
            <p className="text-xl mb-8 opacity-90">
              Service professionnel, rapide et sécurisé pour toutes vos démarches carte grise
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div>
                <Building className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Bureau Agréé</h3>
                    <p className="text-sm opacity-90">SIV</p>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Service Rapide</h3>
                <p className="text-sm opacity-90">24-48h</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Basé à Reims</h3>
                <p className="text-sm opacity-90">Marne</p>
              </div>
              <div>
                <Euro className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Tarifs Clairs</h3>
                <p className="text-sm opacity-90">Devis gratuit</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              asChild
            >
              <a href="https://wa.me/+330756898950?text=Bonjour, je cherche un bureau carte grise professionnel à Reims" target="_blank" rel="noopener noreferrer">
                Contactez notre bureau maintenant
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