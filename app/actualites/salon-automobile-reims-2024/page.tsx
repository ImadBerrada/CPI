import type { Metadata } from "next"
import BreadcrumbSchema from "../../../components/breadcrumb-schema"
import { Calendar, MapPin, User, ArrowLeft, Car, Users, Clock, MapPin as Location, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Salon de l'Automobile de Reims 2024 - Retrouvez CPI WW | CPI WW Reims",
  description: "CPI WW Reims sera présent au Salon de l'Automobile de Reims du 8 au 10 mars 2024. Venez nous rencontrer pour toutes vos questions sur l'immatriculation temporaire.",
  keywords: "salon automobile Reims 2024, CPI WW, immatriculation temporaire, événement automobile, Parc des Expositions Reims",
  openGraph: {
    title: "Salon de l'Automobile de Reims 2024 - Retrouvez CPI WW",
    description: "Venez nous rencontrer au Salon de l'Automobile de Reims pour toutes vos questions sur l'immatriculation temporaire.",
    url: "https://bureau-immatriculation.fr/actualites/salon-automobile-reims-2024",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/actualites/salon-automobile-reims-2024",
  },
}

export default function SalonAutomobileReims2024Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Salon de l'Automobile de Reims 2024 - Retrouvez-nous !",
    "description": "CPI WW Reims sera présent au Salon de l'Automobile de Reims. Venez nous rencontrer pour toutes vos questions sur l'immatriculation temporaire.",
    "author": {
      "@type": "Organization",
      "name": "Équipe CPI WW Reims"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CPI WW Reims",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bureau-immatriculation.fr/logo.png"
      }
    },
    "datePublished": "2024-03-08",
    "dateModified": "2024-03-08",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cpi-ww.fr/actualites/salon-automobile-reims-2024"
    }
  };

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "Actualités", url: "https://cpi-ww.fr/actualites" },
          { name: "Salon Automobile Reims 2024", url: "https://cpi-ww.fr/actualites/salon-automobile-reims-2024" }
        ]}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <section className="py-8 px-4 bg-white shadow-sm">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/actualites">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux actualités
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>8-10 Mars 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Parc des Expositions, Reims</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Équipe CPI WW Reims</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Salon de l'Automobile de Reims 2024 - Retrouvez-nous !
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              CPI WW Reims sera présent au Salon de l'Automobile de Reims. Venez nous rencontrer pour toutes vos questions sur l'immatriculation temporaire.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Car className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Un événement incontournable</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p>
                  Le Salon de l'Automobile de Reims 2024 est l'événement automobile de référence dans la région Champagne-Ardenne. 
                  Cette année encore, CPI WW Reims sera présent pour vous accompagner dans toutes vos démarches d'immatriculation temporaire.
                </p>
                
                <p>
                  Que vous soyez un particulier souhaitant immatriculer votre véhicule importé ou un professionnel de l'automobile, 
                  notre équipe d'experts sera à votre disposition pour répondre à toutes vos questions et vous guider dans vos démarches.
                </p>
              </div>

              {/* Event Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-900">Horaires du salon</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800">
                    <li><strong>Vendredi 8 mars :</strong> 14h00 - 20h00</li>
                    <li><strong>Samedi 9 mars :</strong> 10h00 - 20h00</li>
                    <li><strong>Dimanche 10 mars :</strong> 10h00 - 18h00</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Location className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-900">Lieu et accès</h3>
                  </div>
                  <div className="text-green-800">
                    <p className="mb-2"><strong>Parc des Expositions de Reims</strong></p>
                    <p className="mb-2">Avenue Eisenhower, 51100 Reims</p>
                    <p className="text-sm">Parking gratuit disponible</p>
                    <p className="text-sm">Accès transports en commun : Ligne 4</p>
                  </div>
                </div>
              </div>

              {/* Our Services */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Nos services sur le salon</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Conseils personnalisés sur l'immatriculation temporaire</li>
                    <li>• Information sur les nouvelles réglementations 2024</li>
                    <li>• Présentation de nos services express</li>
                    <li>• Démonstration de notre plateforme digitale</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Devis gratuits sur place</li>
                    <li>• Documentation complète</li>
                    <li>• Réponses à vos questions techniques</li>
                    <li>• Offres spéciales salon</li>
                  </ul>
                </div>
              </div>

              {/* Special Offers */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Offres spéciales salon</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Réduction de 15%</h4>
                    <p className="text-blue-100">Sur tous nos services d'immatriculation temporaire pour les visiteurs du salon</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Consultation gratuite</h4>
                    <p className="text-blue-100">Analyse gratuite de votre dossier d'immatriculation sur notre stand</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nous retrouver sur le salon</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Stand CPI WW Reims</strong></p>
                    <p className="text-gray-600 mb-4">Hall A - Stand 15</p>
                    <p className="text-gray-700">
                      Notre équipe d'experts vous accueillera avec plaisir pour répondre à toutes vos questions 
                      et vous présenter nos services d'immatriculation temporaire.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">+33 07 56 89 89 50</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">contact@bureau-immatriculation.fr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vous ne pouvez pas venir au salon ?
              </h3>
              <p className="text-gray-700 mb-6">
                Contactez-nous dès maintenant pour bénéficier de nos services d'immatriculation temporaire
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/guide">Guide d'immatriculation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}