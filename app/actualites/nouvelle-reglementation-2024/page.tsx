import type { Metadata } from "next"
import BreadcrumbSchema from "../../../components/breadcrumb-schema"
import { Calendar, MapPin, User, ArrowLeft, GraduationCap, Users, Clock, FileText, CheckCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Nouvelle Réglementation 2024 - CPI WW Reims",
  description: "Découvrez les nouvelles réglementations 2024 en matière d'immatriculation temporaire et leurs impacts sur vos démarches administratives.",
  keywords: "nouvelle réglementation 2024, immatriculation temporaire, CPI WW, changements réglementaires, Reims, Marne",
  openGraph: {
    title: "Nouvelle Réglementation 2024 - CPI WW",
    description: "Découvrez les nouvelles réglementations 2024 en matière d'immatriculation temporaire.",
    url: "https://cpi-ww.fr/actualites/nouvelle-reglementation-2024",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/actualites/nouvelle-reglementation-2024",
  },
}

export default function NouvelleReglementation2024Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Nouvelle Réglementation 2024 - Immatriculation Temporaire",
    "description": "Découvrez les nouvelles réglementations 2024 en matière d'immatriculation temporaire et leurs impacts sur vos démarches administratives.",
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
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cpi-ww.fr/actualites/nouvelle-reglementation-2024"
    }
  };

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "Actualités", url: "https://cpi-ww.fr/actualites" },
          { name: "Nouvelle Réglementation 2024", url: "https://cpi-ww.fr/actualites/nouvelle-reglementation-2024" }
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
                <span>15 Janvier 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Reims</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>CPI WW Reims</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nouvelle Réglementation 2024 - Immatriculation Temporaire
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Découvrez les nouvelles réglementations 2024 en matière d'immatriculation temporaire et leurs impacts sur vos démarches administratives.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-8 w-8 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Nouvelles réglementations en vigueur</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p>
                  L'année 2024 marque l'entrée en vigueur de nouvelles réglementations importantes concernant 
                  l'immatriculation temporaire des véhicules. Ces changements, mis en place par les autorités 
                  compétentes, visent à simplifier et moderniser les procédures administratives.
                </p>
                
                <p>
                  CPI WW Reims, en tant que service agréé SIV, vous accompagne dans la compréhension 
                  et l'application de ces nouvelles dispositions pour faciliter vos démarches 
                  d'immatriculation temporaire dans la Marne.
                </p>
              </div>

              {/* Training Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-orange-900">Principales modifications</h3>
                  </div>
                  <ul className="space-y-2 text-orange-800">
                    <li><strong>Durée :</strong> Extension à 4 mois maximum</li>
                    <li><strong>Renouvellement :</strong> Procédure simplifiée</li>
                    <li><strong>Documents :</strong> Dématérialisation accrue</li>
                    <li><strong>Contrôles :</strong> Nouveaux critères d'éligibilité</li>
                    <li><strong>Tarification :</strong> Grille tarifaire révisée</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-900">Qui est concerné ?</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Particuliers en attente d'immatriculation</li>
                    <li>• Professionnels de l'automobile</li>
                    <li>• Importateurs de véhicules</li>
                    <li>• Gestionnaires de flottes</li>
                    <li>• Collectivités territoriales</li>
                  </ul>
                </div>
              </div>

              {/* Changes Details */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Détail des changements réglementaires</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Nouvelles procédures</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Dossier numérique :</strong> Téléprocédure obligatoire</li>
                      <li>• <strong>Justificatifs :</strong> Formats acceptés élargis</li>
                      <li>• <strong>Délais :</strong> Traitement accéléré (48h max)</li>
                      <li>• <strong>Suivi :</strong> Notifications automatiques</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Impacts pratiques</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Coûts :</strong> Réduction des frais administratifs</li>
                      <li>• <strong>Temps :</strong> Procédure plus rapide</li>
                      <li>• <strong>Flexibilité :</strong> Horaires étendus</li>
                      <li>• <strong>Support :</strong> Assistance renforcée</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Avantages de la nouvelle réglementation</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Simplicité accrue</h4>
                        <p className="text-orange-100 text-sm">Démarches administratives simplifiées</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Gain de temps</h4>
                        <p className="text-orange-100 text-sm">Traitement plus rapide des dossiers</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Économies réalisées</h4>
                        <p className="text-orange-100 text-sm">Réduction des coûts administratifs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Accompagnement personnalisé</h4>
                        <p className="text-orange-100 text-sm">Support dédié pour vos démarches</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Services */}
              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Services CPI WW pour vous accompagner</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Conseil personnalisé sur les nouvelles règles</li>
                    <li>• Assistance pour vos dossiers complexes</li>
                    <li>• Formation de vos équipes</li>
                    <li>• Veille réglementaire continue</li>
                  </ul>
                  <ul className="space-y-2 text-green-800">
                    <li>• Plateforme digitale intuitive</li>
                    <li>• Support technique réactif</li>
                    <li>• Documentation mise à jour</li>
                    <li>• Hotline dédiée aux professionnels</li>
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Besoin d'informations ?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      <strong>Notre équipe d'experts</strong> est à votre disposition pour vous accompagner 
                      dans l'application de ces nouvelles réglementations.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-700">03 26 47 XX XX</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-700">contact@cpi-ww.fr</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Horaires d'ouverture</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Lundi - Vendredi : 8h30 - 17h30</li>
                      <li>• Samedi : 9h00 - 12h00</li>
                      <li>• Service d'urgence disponible</li>
                      <li>• Consultation en ligne 24h/24</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Profitez des nouvelles réglementations !
              </h3>
              <p className="text-gray-700 mb-6">
                Découvrez comment CPI WW peut vous accompagner dans vos démarches d'immatriculation temporaire
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/immatriculation-temporaire">Nos services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}