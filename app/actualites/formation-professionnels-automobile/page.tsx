import type { Metadata } from "next"
import BreadcrumbSchema from "../../../components/breadcrumb-schema"
import { Calendar, MapPin, User, ArrowLeft, GraduationCap, Users, Clock, FileText, CheckCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Formation Gratuite Professionnels Automobile - CPI WW Reims",
  description: "Session de formation gratuite destinée aux professionnels de l'automobile sur les nouvelles procédures d'immatriculation. Inscrivez-vous dès maintenant.",
  keywords: "formation professionnels automobile, procédures immatriculation, formation gratuite CPI WW, Reims, concessionnaires",
  openGraph: {
    title: "Formation Gratuite pour les Professionnels de l'Automobile",
    description: "Session de formation gratuite sur les nouvelles procédures d'immatriculation destinée aux professionnels.",
    url: "https://cpi-ww.fr/actualites/formation-professionnels-automobile",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/actualites/formation-professionnels-automobile",
  },
}

export default function FormationProfessionnelsAutomobilePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Formation gratuite pour les professionnels de l'automobile",
    "description": "Session de formation gratuite destinée aux professionnels de l'automobile sur les nouvelles procédures d'immatriculation.",
    "author": {
      "@type": "Organization",
      "name": "Service Formation CPI WW"
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
      "@id": "https://cpi-ww.fr/actualites/formation-professionnels-automobile"
    }
  };

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "Actualités", url: "https://cpi-ww.fr/actualites" },
          { name: "Formation Professionnels", url: "https://cpi-ww.fr/actualites/formation-professionnels-automobile" }
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
                <span>Reims</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Service Formation CPI WW</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Formation gratuite pour les professionnels de l'automobile
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Session de formation gratuite destinée aux professionnels de l'automobile sur les nouvelles procédures d'immatriculation.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-8 w-8 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Une formation essentielle</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p>
                  Face aux évolutions constantes de la réglementation en matière d'immatriculation des véhicules, 
                  CPI WW Reims organise une session de formation gratuite destinée aux professionnels de l'automobile. 
                  Cette formation vous permettra de maîtriser les nouvelles procédures et d'optimiser vos processus.
                </p>
                
                <p>
                  Que vous soyez concessionnaire, garagiste, ou professionnel de la vente automobile, 
                  cette formation vous donnera toutes les clés pour accompagner efficacement vos clients 
                  dans leurs démarches d'immatriculation temporaire.
                </p>
              </div>

              {/* Training Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-orange-900">Informations pratiques</h3>
                  </div>
                  <ul className="space-y-2 text-orange-800">
                    <li><strong>Date :</strong> Samedi 18 mai 2024</li>
                    <li><strong>Horaires :</strong> 9h00 - 17h00</li>
                    <li><strong>Lieu :</strong> Locaux CPI WW Reims</li>
                    <li><strong>Durée :</strong> 7 heures (pause déjeuner incluse)</li>
                    <li><strong>Places :</strong> Limitées à 20 participants</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-900">Public concerné</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Concessionnaires automobiles</li>
                    <li>• Garagistes et réparateurs</li>
                    <li>• Vendeurs de véhicules d'occasion</li>
                    <li>• Courtiers en automobile</li>
                    <li>• Gestionnaires de flottes</li>
                  </ul>
                </div>
              </div>

              {/* Program */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Programme de la formation</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Matinée (9h00 - 12h30)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>9h00 - 9h30 :</strong> Accueil et présentation</li>
                      <li>• <strong>9h30 - 10h30 :</strong> Nouvelles réglementations 2024</li>
                      <li>• <strong>10h45 - 12h00 :</strong> Procédures d'immatriculation temporaire</li>
                      <li>• <strong>12h00 - 12h30 :</strong> Documents obligatoires et contrôles</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Après-midi (14h00 - 17h00)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>14h00 - 15h00 :</strong> Cas pratiques et études de dossiers</li>
                      <li>• <strong>15h15 - 16h00 :</strong> Outils numériques et plateforme</li>
                      <li>• <strong>16h00 - 16h45 :</strong> Gestion des situations complexes</li>
                      <li>• <strong>16h45 - 17h00 :</strong> Questions/réponses et évaluation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Ce que vous allez apprendre</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Maîtrise réglementaire</h4>
                        <p className="text-orange-100 text-sm">Toutes les nouvelles dispositions 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Optimisation des processus</h4>
                        <p className="text-orange-100 text-sm">Méthodes pour gagner en efficacité</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Outils pratiques</h4>
                        <p className="text-orange-100 text-sm">Utilisation de la plateforme digitale</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Résolution de problèmes</h4>
                        <p className="text-orange-100 text-sm">Gestion des cas complexes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Inclus dans la formation</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-green-800">
                    <li>• Support de formation complet</li>
                    <li>• Accès à la plateforme digitale</li>
                    <li>• Certificat de participation</li>
                    <li>• Pause-café et déjeuner offerts</li>
                  </ul>
                  <ul className="space-y-2 text-green-800">
                    <li>• Modèles de documents types</li>
                    <li>• Guide des procédures 2024</li>
                    <li>• Support technique post-formation</li>
                    <li>• Accès au groupe d'entraide</li>
                  </ul>
                </div>
              </div>

              {/* Registration */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Inscription</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      <strong>Formation entièrement gratuite</strong> - Places limitées à 20 participants. 
                      Inscription obligatoire avant le 15 mai 2024.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-700">03 26 47 XX XX</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-700">contact@bureau-immatriculation.fr</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Informations requises</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Nom et prénom</li>
                      <li>• Entreprise et fonction</li>
                      <li>• Téléphone et email</li>
                      <li>• Nombre d'années d'expérience</li>
                      <li>• Attentes spécifiques</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ne manquez pas cette opportunité !
              </h3>
              <p className="text-gray-700 mb-6">
                Inscrivez-vous dès maintenant à cette formation gratuite et restez à la pointe des nouvelles réglementations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">S'inscrire maintenant</Link>
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