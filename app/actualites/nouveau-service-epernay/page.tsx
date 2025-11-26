import type { Metadata } from "next"
import BreadcrumbSchema from "../../../components/breadcrumb-schema"
import { Calendar, MapPin, User, ArrowLeft, GraduationCap, Users, Clock, FileText, CheckCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Nouveau Service CPI WW à Épernay - Extension Champagne",
  description: "CPI WW étend ses services à Épernay pour mieux servir la région Champagne. Découvrez notre nouveau point de service et nos horaires d'ouverture.",
  keywords: "CPI WW Épernay, nouveau service, extension Champagne, immatriculation temporaire Épernay, Marne",
  openGraph: {
    title: "Nouveau Service CPI WW à Épernay",
    description: "CPI WW étend ses services à Épernay pour mieux servir la région Champagne.",
    url: "https://cpi-ww.fr/actualites/nouveau-service-epernay",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/actualites/nouveau-service-epernay",
  },
}

export default function NouveauServiceEpernayPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Nouveau Service CPI WW à Épernay",
    "description": "CPI WW étend ses services à Épernay pour mieux servir la région Champagne.",
    "author": {
      "@type": "Organization",
      "name": "CPI WW Reims"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CPI WW Reims",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cpi-ww.fr/logo.png"
      }
    },
    "datePublished": "2024-05-18",
    "dateModified": "2024-05-18",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cpi-ww.fr/actualites/nouveau-service-epernay"
    }
  };

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "Actualités", url: "https://cpi-ww.fr/actualites" },
          { name: "Nouveau Service Épernay", url: "https://cpi-ww.fr/actualites/nouveau-service-epernay" }
        ]}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
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
                <span>18 Mai 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Épernay</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>CPI WW Reims</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nouveau Service CPI WW à Épernay
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              CPI WW étend ses services à Épernay pour mieux servir la région Champagne avec un nouveau point de service dédié.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-8 w-8 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Extension de nos services</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p>
                  Dans le cadre de notre développement continu et pour mieux répondre aux besoins de nos clients 
                  dans la région Champagne, CPI WW Reims est fier d'annoncer l'ouverture de son nouveau point 
                  de service à Épernay. Cette extension stratégique nous permet de rapprocher nos services 
                  d'immatriculation temporaire de nos clients champenois.
                </p>
                
                <p>
                  Notre équipe d'experts certifiés sera désormais présente à Épernay pour vous accompagner 
                  dans toutes vos démarches d'immatriculation temporaire, avec la même qualité de service 
                  et la même expertise que vous connaissez déjà à Reims.
                </p>
              </div>

              {/* Service Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-orange-900">Horaires d'ouverture</h3>
                  </div>
                  <ul className="space-y-2 text-orange-800">
                    <li><strong>Lundi - Vendredi :</strong> 8h30 - 17h30</li>
                    <li><strong>Samedi :</strong> 9h00 - 12h00</li>
                    <li><strong>Dimanche :</strong> Fermé</li>
                    <li><strong>Rendez-vous :</strong> Possibles sur demande</li>
                    <li><strong>Urgences :</strong> Service disponible</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-900">Services disponibles</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Certificats Provisoires d'Immatriculation</li>
                    <li>• Immatriculation temporaire</li>
                    <li>• Conseil et accompagnement</li>
                    <li>• Traitement express</li>
                    <li>• Service aux professionnels</li>
                  </ul>
                </div>
              </div>

              {/* Location and Contact */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Localisation et accès</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Adresse du nouveau point de service</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>CPI WW Épernay</strong></p>
                      <p>Avenue de Champagne</p>
                      <p>51200 Épernay</p>
                      <p><strong>Parking :</strong> Gratuit sur place</p>
                      <p><strong>Accès :</strong> Proche centre-ville</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Contact direct</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Téléphone :</strong> 03 26 XX XX XX</p>
                      <p><strong>Email :</strong> epernay@cpi-ww.fr</p>
                      <p><strong>Responsable :</strong> Service Client Épernay</p>
                      <p><strong>Urgences :</strong> 24h/24 - 7j/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Avantages de ce nouveau service</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Proximité géographique</h4>
                        <p className="text-orange-100 text-sm">Service de qualité au cœur de la Champagne</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Expertise reconnue</h4>
                        <p className="text-orange-100 text-sm">Même niveau d'excellence qu'à Reims</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Horaires étendus</h4>
                        <p className="text-orange-100 text-sm">Ouvert 6 jours sur 7 pour votre confort</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Service personnalisé</h4>
                        <p className="text-orange-100 text-sm">Accompagnement sur mesure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Features */}
              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Services disponibles à Épernay</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Certificats Provisoires d'Immatriculation</li>
                    <li>• Immatriculation temporaire express</li>
                    <li>• Conseil personnalisé</li>
                    <li>• Traitement prioritaire</li>
                  </ul>
                  <ul className="space-y-2 text-green-800">
                    <li>• Service aux professionnels</li>
                    <li>• Accompagnement complet</li>
                    <li>• Support technique</li>
                    <li>• Service d'urgence 24h/24</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contactez notre équipe Épernay</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      <strong>Nouveau point de service opérationnel</strong> - Notre équipe d'experts vous accueille 
                      dans nos nouveaux locaux à Épernay pour tous vos besoins d'immatriculation temporaire.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-700">03 26 XX XX XX</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-700">epernay@cpi-ww.fr</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Informations pratiques</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Parking gratuit sur place</li>
                      <li>• Accès facile depuis l'A4</li>
                      <li>• Proche centre-ville d'Épernay</li>
                      <li>• Rendez-vous possibles</li>
                      <li>• Service d'urgence disponible</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Découvrez notre nouveau service à Épernay !
              </h3>
              <p className="text-gray-700 mb-6">
                Profitez de notre expertise en immatriculation temporaire maintenant disponible au cœur de la Champagne
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/epernay">Page Épernay</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}