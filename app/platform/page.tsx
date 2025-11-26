import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, FileText, MapPin, Phone, Star, ArrowRight, Car, Building, Users, Shield, Euro, Truck, CreditCard, UserCheck, BadgeCheck, Clipboard, Timer, Send, Download, Monitor, Smartphone, Globe, Lock, Zap, BarChart3, Cloud, Headphones } from "lucide-react"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Plateforme Digitale - CPI WW Reims | Solution Numérique Immatriculation",
  description:
    "Découvrez notre plateforme digitale innovante pour l'immatriculation temporaire et la carte grise. Interface moderne, sécurisée et certifiée ISO 9001.",
  keywords: [
    "plateforme digitale CPI WW",
    "solution numérique immatriculation",
    "interface en ligne carte grise",
    "plateforme sécurisée",
    "dématérialisation administrative",
    "service digital automobile",
    "plateforme agréée SIV",
    "interface moderne",
    "solution cloud",
    "automatisation démarches",
    "suivi temps réel",
    "certification ISO 9001"
  ],
  openGraph: {
    title: "Plateforme Digitale - CPI WW Reims | Solution Numérique Immatriculation",
    description:
      "Découvrez notre plateforme digitale innovante pour l'immatriculation temporaire et la carte grise. Interface moderne et sécurisée.",
    url: "https://www.bureau-immatriculation.fr/platform",
    images: [
      {
        url: "/CPI WW-carte grise.png",
        width: 1200,
        height: 630,
        alt: "Plateforme Digitale CPI WW Reims - Solution Numérique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plateforme Digitale - CPI WW Reims",
    description: "Découvrez notre plateforme digitale innovante pour l'immatriculation temporaire et la carte grise.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/platform",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Plateforme Digitale CPI WW",
  "description": "Plateforme numérique pour les services d'immatriculation temporaire et carte grise",
  "url": "https://www.bureau-immatriculation.fr/platform",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "provider": {
    "@type": "Organization",
    "name": "CPI WW Reims",
    "telephone": "+33756898950"
  }
}

export default function PlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <AnimatedSection className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                Innovation Digitale
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Plateforme Digitale
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Une solution numérique moderne et sécurisée pour simplifier vos démarches d'immatriculation temporaire et de carte grise.
              </p>
            </div>

            {/* Platform Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-inner">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-1 ml-4">
                      <span className="text-sm text-gray-600">www.bureau-immatriculation.fr</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-green-100 rounded"></div>
                      <div className="h-20 bg-blue-100 rounded"></div>
                      <div className="h-20 bg-purple-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Fonctionnalités principales */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités Avancées</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Interface Intuitive</CardTitle>
                  <CardDescription>Design moderne et ergonomique</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Navigation simplifiée</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Responsive design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Accessibilité optimisée</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Sécurité Renforcée</CardTitle>
                  <CardDescription>Protection des données garantie</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Chiffrement SSL/TLS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Conformité RGPD</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Authentification sécurisée</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Traitement Rapide</CardTitle>
                  <CardDescription>Automatisation intelligente</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Validation automatique</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Traitement 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Notifications temps réel</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Multi-Plateforme</CardTitle>
                  <CardDescription>Accessible partout</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Application mobile</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Interface web</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Synchronisation cloud</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle>Suivi Avancé</CardTitle>
                  <CardDescription>Tableaux de bord détaillés</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Historique complet</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Statuts en temps réel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Rapports détaillés</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Headphones className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle>Support Intégré</CardTitle>
                  <CardDescription>Assistance personnalisée</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Chat en direct</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Base de connaissances</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Support technique</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Avantages */}
        <AnimatedSection className="py-16 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir Notre Plateforme ?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Innovation & Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Technologie de Pointe</h4>
                      <p className="text-muted-foreground">Architecture moderne basée sur les dernières technologies web</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Performance Optimisée</h4>
                      <p className="text-muted-foreground">Temps de chargement ultra-rapides et interface fluide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Évolutivité</h4>
                      <p className="text-muted-foreground">Plateforme en constante amélioration avec nouvelles fonctionnalités</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <Globe className="h-8 w-8 text-blue-600 mb-2" />
                      <div className="text-2xl font-bold text-blue-600">99.9%</div>
                      <div className="text-sm text-muted-foreground">Disponibilité</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <Zap className="h-8 w-8 text-green-600 mb-2" />
                      <div className="text-2xl font-bold text-green-600">&lt;2s</div>
                      <div className="text-sm text-muted-foreground">Temps réponse</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <Shield className="h-8 w-8 text-purple-600 mb-2" />
                      <div className="text-2xl font-bold text-purple-600">100%</div>
                      <div className="text-sm text-muted-foreground">Sécurisé</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <Users className="h-8 w-8 text-orange-600 mb-2" />
                      <div className="text-2xl font-bold text-orange-600">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Processus digital */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Processus Digitalisé</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">1. Upload Sécurisé</h3>
                <p className="text-sm text-muted-foreground">Téléchargement chiffré de vos documents</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">2. Traitement IA</h3>
                <p className="text-sm text-muted-foreground">Validation automatique par intelligence artificielle</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">3. Suivi Temps Réel</h3>
                <p className="text-sm text-muted-foreground">Notifications et mises à jour instantanées</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">4. Livraison Digitale</h3>
                <p className="text-sm text-muted-foreground">Réception sécurisée de vos documents</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Découvrez Notre Plateforme</h2>
            <p className="text-xl mb-8 opacity-90">
              Expérimentez la nouvelle génération de services d'immatriculation avec notre plateforme digitale innovante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/demo">
                  <Monitor className="mr-2 h-5 w-5" />
                  Voir la Démo
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Nous Contacter
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