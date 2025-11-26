import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, FileText, MapPin, Phone, Star, ArrowRight, Car, Building, Users, Shield, Euro, Truck, CreditCard, UserCheck, BadgeCheck, Clipboard, Timer, Send, Download, Monitor, Smartphone, Globe, Lock, Zap, BarChart3, Cloud, Headphones, Play, Eye, MousePointer } from "lucide-react"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Démo Interactive - CPI WW Reims | Découvrez Nos Services",
  description:
    "Testez notre plateforme d'immatriculation temporaire et carte grise en mode démo. Interface interactive pour découvrir nos services avant de commander.",
  keywords: [
    "démo CPI WW",
    "test plateforme immatriculation",
    "démonstration interactive",
    "essai gratuit carte grise",
    "simulation service",
    "preview plateforme",
    "test interface",
    "démo immatriculation temporaire",
    "essai service WW",
    "démonstration bureau immatriculation",
    "test avant achat",
    "simulation démarches"
  ],
  openGraph: {
    title: "Démo Interactive - CPI WW Reims | Découvrez Nos Services",
    description:
      "Testez notre plateforme d'immatriculation temporaire et carte grise en mode démo. Interface interactive pour découvrir nos services.",
    url: "https://www.bureau-immatriculation.fr/demo",
    images: [
      {
        url: "/CPI WW-carte grise.png",
        width: 1200,
        height: 630,
        alt: "Démo Interactive CPI WW Reims - Test de la Plateforme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Démo Interactive - CPI WW Reims",
    description: "Testez notre plateforme d'immatriculation temporaire et carte grise en mode démo.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/demo",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Démo Interactive CPI WW",
  "description": "Démonstration interactive des services d'immatriculation temporaire et carte grise",
  "url": "https://www.bureau-immatriculation.fr/demo",
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

export default function DemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <AnimatedSection className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                Essai Gratuit
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Démo Interactive
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Découvrez notre plateforme en action ! Testez nos services d'immatriculation temporaire et de carte grise dans un environnement de démonstration.
              </p>
            </div>

            {/* Demo Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-2xl shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-inner">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-1 ml-4">
                        <span className="text-sm text-gray-600">demo.www.bureau-immatriculation.fr</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Mode Démo
                    </Badge>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Car className="h-6 w-6 text-blue-600" />
                        <div>
                          <h3 className="font-semibold">Immatriculation Temporaire</h3>
                          <p className="text-sm text-muted-foreground">Plaques WW - Traitement 24h</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Play className="h-4 w-4 mr-1" />
                        Tester
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-green-600" />
                        <div>
                          <h3 className="font-semibold">Carte Grise</h3>
                          <p className="text-sm text-muted-foreground">Changement propriétaire, duplicata</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        <Eye className="h-4 w-4 mr-1" />
                        Voir
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <BadgeCheck className="h-6 w-6 text-purple-600" />
                        <div>
                          <h3 className="font-semibold">Certificat Provisoire</h3>
                          <p className="text-sm text-muted-foreground">Solution d'urgence - Immédiat</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                        <MousePointer className="h-4 w-4 mr-1" />
                        Essayer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Fonctionnalités de la démo */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Que Pouvez-Vous Tester ?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Interface Complète</CardTitle>
                  <CardDescription>Naviguez dans toute la plateforme</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Formulaires interactifs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Processus complet</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Données de test</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Upload Documents</CardTitle>
                  <CardDescription>Testez le système de fichiers</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Glisser-déposer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Validation automatique</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Aperçu temps réel</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Suivi Avancé</CardTitle>
                  <CardDescription>Tableaux de bord en action</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Statuts temps réel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Notifications push</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Historique détaillé</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Simulation Paiement</CardTitle>
                  <CardDescription>Processus de commande complet</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Calcul automatique</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Options de paiement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Confirmation sécurisée</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle>Version Mobile</CardTitle>
                  <CardDescription>Responsive design</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Interface adaptative</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Touch optimisé</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Performance mobile</span>
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
                  <CardDescription>Assistance en temps réel</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Chat simulé</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">FAQ interactive</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Guides contextuels</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Scénarios de test */}
        <AnimatedSection className="py-16 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Scénarios de Test Disponibles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Car className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Import Véhicule Allemagne</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Testez le processus complet d'immatriculation temporaire pour un véhicule importé d'Allemagne.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Documents pré-remplis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Calcul automatique des taxes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Simulation complète</span>
                  </div>
                </div>
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Lancer le Scénario
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Changement Propriétaire</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Découvrez le processus de changement de propriétaire avec tous les documents nécessaires.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Vérification automatique</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Calcul des frais</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Suivi temps réel</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  Voir la Démo
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <BadgeCheck className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Certificat d'Urgence</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Testez notre service express pour obtenir un certificat provisoire en urgence.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Traitement immédiat</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Validation express</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Livraison numérique</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Timer className="mr-2 h-4 w-4" />
                  Test Express
                </Button>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Professionnel Multi-Véhicules</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Interface dédiée aux professionnels avec gestion de plusieurs véhicules simultanément.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Tableau de bord avancé</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Import en masse</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Facturation groupée</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Building className="mr-2 h-4 w-4" />
                  Mode Pro
                </Button>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Informations importantes */}
        <AnimatedSection className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Informations sur la Démo</CardTitle>
                <CardDescription>Ce que vous devez savoir avant de commencer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      Environnement Sécurisé
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Aucune donnée réelle n'est traitée</li>
                      <li>• Environnement isolé et sécurisé</li>
                      <li>• Données de test pré-configurées</li>
                      <li>• Aucun paiement réel effectué</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      Durée et Accès
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Session de 30 minutes maximum</li>
                      <li>• Accès illimité et gratuit</li>
                      <li>• Réinitialisation automatique</li>
                      <li>• Support disponible pendant la démo</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Prêt à Tester Notre Plateforme ?</h2>
            <p className="text-xl mb-8 opacity-90">
              Découvrez par vous-même la simplicité et l'efficacité de nos services d'immatriculation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                <Play className="mr-2 h-5 w-5" />
                Lancer la Démo
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
                <Phone className="mr-2 h-5 w-5" />
                Nous Contacter
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              Aucune inscription requise • Accès immédiat • 100% gratuit
            </p>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </>
  )
}