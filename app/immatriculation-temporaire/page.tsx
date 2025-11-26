import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Car, 
  Shield, 
  Phone, 
  Mail,
  MapPin,
  Calendar,
  Euro,
  Users,
  Building2,
  Zap
} from "lucide-react"

export const metadata: Metadata = {
  title: "Guide Immatriculation Temporaire - CPI WW Reims | Procédures et FAQ",
  description: "Guide complet de l'immatriculation temporaire CPI WW à Reims. Procédures, documents requis, délais et tarifs pour vos véhicules importés dans la Marne.",
  keywords: [
    "immatriculation temporaire",
    "guide CPI WW",
    "procédure immatriculation",
    "documents requis",
    "délais immatriculation",
    "tarifs CPI WW",
    "véhicules importés",
    "certificat provisoire",
    "plaques WW",
    "Reims Marne"
  ],
  openGraph: {
    title: "Guide Immatriculation Temporaire - CPI WW Reims",
    description: "Guide complet de l'immatriculation temporaire CPI WW à Reims. Procédures, documents requis, délais et tarifs.",
    url: "https://cpi-ww.fr/immatriculation-temporaire",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Guide Immatriculation Temporaire CPI WW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide Immatriculation Temporaire - CPI WW Reims",
    description: "Guide complet de l'immatriculation temporaire CPI WW à Reims.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/immatriculation-temporaire",
  },
}

export default function ImmatriculationTemporairePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Guide de l'Immatriculation Temporaire CPI WW",
    "description": "Guide complet pour obtenir une immatriculation temporaire CPI WW à Reims et dans la Marne",
    "url": "https://cpi-ww.fr/immatriculation-temporaire",
    "provider": {
      "@type": "Organization",
      "name": "CPI WW Reims",
      "telephone": "+33 07 56 89 89 50",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Reims",
        "addressRegion": "Marne",
        "addressCountry": "FR"
      }
    },
    "totalTime": "PT24H",
    "supply": [
      "Certificat de conformité européen",
      "Facture d'achat du véhicule",
      "Justificatif d'identité",
      "Justificatif de domicile"
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Préparation des documents",
        "text": "Rassemblez tous les documents requis pour votre demande"
      },
      {
        "@type": "HowToStep", 
        "name": "Dépôt de la demande",
        "text": "Contactez CPI WW Reims pour déposer votre dossier"
      },
      {
        "@type": "HowToStep",
        "name": "Traitement du dossier",
        "text": "Votre dossier est traité dans les 24-48h"
      },
      {
        "@type": "HowToStep",
        "name": "Réception du certificat",
        "text": "Récupération de votre certificat provisoire d'immatriculation"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Guide Immatriculation
              <span className="block text-blue-600">Temporaire CPI WW</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur l'immatriculation temporaire à Reims et dans la Marne. 
              Procédures, documents, délais et conseils d'experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Guide complet</Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Procédures détaillées</Badge>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">FAQ incluse</Badge>
            </div>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-blue-200">
                <CardHeader className="text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">Délai Express</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-2">24-48h</p>
                  <p className="text-gray-600">Traitement rapide de votre dossier</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-green-900">Service Agréé</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-green-600 mb-2">Agréé SIV</p>
                  <p className="text-gray-600">Habilitation officielle</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-purple-900">Zone Marne</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-purple-600 mb-2">100%</p>
                  <p className="text-gray-600">Couverture départementale</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Documents Requis</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                    Documents Obligatoires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Certificat de conformité européen</strong>
                        <p className="text-sm text-gray-600">Original ou copie certifiée conforme</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Facture d'achat du véhicule</strong>
                        <p className="text-sm text-gray-600">Avec TVA si applicable</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Pièce d'identité</strong>
                        <p className="text-sm text-gray-600">CNI ou passeport en cours de validité</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Justificatif de domicile</strong>
                        <p className="text-sm text-gray-600">Moins de 6 mois</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                    Documents Complémentaires
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Attestation d'assurance</strong>
                        <p className="text-sm text-gray-600">Couverture temporaire obligatoire</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Procuration (si nécessaire)</strong>
                        <p className="text-sm text-gray-600">Pour représentation par un tiers</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Quitus fiscal</strong>
                        <p className="text-sm text-gray-600">Si véhicule de plus de 10 ans</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Processus d'Immatriculation</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Préparation</h3>
                <p className="text-sm text-gray-600">Rassemblement des documents requis</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Dépôt</h3>
                <p className="text-sm text-gray-600">Transmission du dossier complet</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Traitement</h3>
                <p className="text-sm text-gray-600">Vérification et validation</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Réception</h3>
                <p className="text-sm text-gray-600">Récupération du certificat</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quelle est la durée de validité ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Le certificat provisoire d'immatriculation (CPI WW) est valable 4 mois maximum. 
                    Cette période vous permet de circuler légalement en attendant l'immatriculation définitive.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Puis-je circuler immédiatement ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Oui, dès réception de votre CPI WW et des plaques temporaires, vous pouvez circuler 
                    sur le territoire français et européen selon les conditions définies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quels véhicules sont concernés ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Tous les véhicules neufs ou d'occasion importés d'un pays de l'UE, 
                    les véhicules de collection, et certains véhicules spéciaux nécessitant une immatriculation temporaire.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quel est le coût du service ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Les tarifs varient selon le type de véhicule et les services demandés. 
                    Contactez-nous pour un devis personnalisé adapté à votre situation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Besoin d'Aide pour Votre Immatriculation ?</h2>
            <p className="text-xl mb-8">
              Notre équipe d'experts CPI WW est à votre disposition pour vous accompagner 
              dans toutes vos démarches d'immatriculation temporaire.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                <span className="text-lg">+33 07 56 89 89 50</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6" />
                <span className="text-lg">contact@bureau-immatriculation.fr</span>
              </div>
            </div>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Nous Contacter
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}