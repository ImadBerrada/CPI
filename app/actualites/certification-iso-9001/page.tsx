import type { Metadata } from "next"
import BreadcrumbSchema from "../../../components/breadcrumb-schema"
import { Calendar, MapPin, User, ArrowLeft, Award, Shield, CheckCircle, Target, Users, TrendingUp, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Certification ISO 9001 - CPI WW Reims",
  description: "CPI WW Reims obtient la certification ISO 9001, gage de qualité et de professionnalisme de nos services d'immatriculation temporaire.",
  keywords: "certification ISO 9001, qualité services, CPI WW Reims, immatriculation temporaire, professionnalisme",
  openGraph: {
    title: "Certification ISO 9001 obtenue pour nos services",
    description: "CPI WW Reims obtient la certification ISO 9001, gage de qualité et de professionnalisme de nos services.",
    url: "https://cpi-ww.fr/actualites/certification-iso-9001",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/actualites/certification-iso-9001",
  },
}

export default function CertificationISO9001Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Certification ISO 9001 obtenue pour nos services",
    "description": "CPI WW Reims obtient la certification ISO 9001, gage de qualité et de professionnalisme de nos services.",
    "author": {
      "@type": "Organization",
      "name": "Direction Qualité CPI WW"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CPI WW Reims",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cpi-ww.fr/logo.png"
      }
    },
    "datePublished": "2024-07-03",
    "dateModified": "2024-07-03",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cpi-ww.fr/actualites/certification-iso-9001"
    }
  };

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "Actualités", url: "https://cpi-ww.fr/actualites" },
          { name: "Certification ISO 9001", url: "https://cpi-ww.fr/actualites/certification-iso-9001" }
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
                <span>3 Juillet 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Reims</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Direction Qualité CPI WW</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Certification ISO 9001 obtenue pour nos services
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              CPI WW Reims obtient la certification ISO 9001, gage de qualité et de professionnalisme de nos services d'immatriculation temporaire.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Une reconnaissance de notre excellence</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p>
                  Nous sommes fiers d'annoncer que CPI WW Reims a obtenu la certification ISO 9001:2015, 
                  la norme internationale de référence pour les systèmes de management de la qualité. 
                  Cette certification témoigne de notre engagement constant envers l'excellence et 
                  la satisfaction de nos clients.
                </p>
                
                <p>
                  Cette démarche qualité, initiée il y a 18 mois, a mobilisé l'ensemble de nos équipes 
                  dans une approche d'amélioration continue de nos processus et services. 
                  Elle confirme notre position de leader dans le domaine de l'immatriculation temporaire 
                  dans la région Champagne-Ardenne.
                </p>
              </div>

              {/* Certification Details */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-blue-200" />
                  <h3 className="text-xl font-semibold">Détails de la certification</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-100">Informations officielles</h4>
                    <ul className="space-y-2 text-blue-100">
                      <li><strong>Norme :</strong> ISO 9001:2015</li>
                      <li><strong>Organisme certificateur :</strong> AFNOR Certification</li>
                      <li><strong>Date d'obtention :</strong> 3 juillet 2024</li>
                      <li><strong>Validité :</strong> 3 ans (renouvelable)</li>
                      <li><strong>Périmètre :</strong> Tous nos services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-100">Domaines certifiés</h4>
                    <ul className="space-y-2 text-blue-100">
                      <li>• Immatriculation temporaire</li>
                      <li>• Conseil et accompagnement</li>
                      <li>• Gestion documentaire</li>
                      <li>• Service client</li>
                      <li>• Formation professionnelle</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What ISO 9001 Means */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-green-900">Qu'est-ce que l'ISO 9001 ?</h3>
                  </div>
                  <p className="text-green-800 mb-4">
                    L'ISO 9001 est la norme internationale qui définit les exigences relatives 
                    aux systèmes de management de la qualité. Elle garantit :
                  </p>
                  <ul className="space-y-2 text-green-800">
                    <li>• Satisfaction client constante</li>
                    <li>• Amélioration continue des processus</li>
                    <li>• Maîtrise des risques</li>
                    <li>• Engagement de la direction</li>
                    <li>• Formation du personnel</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-orange-900">Bénéfices pour nos clients</h3>
                  </div>
                  <p className="text-orange-800 mb-4">
                    Cette certification vous garantit des services de qualité supérieure :
                  </p>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Délais de traitement optimisés</li>
                    <li>• Zéro défaut dans nos prestations</li>
                    <li>• Traçabilité complète des dossiers</li>
                    <li>• Réactivité accrue</li>
                    <li>• Conseil personnalisé</li>
                  </ul>
                </div>
              </div>

              {/* Implementation Process */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Notre démarche qualité</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Analyse initiale</h4>
                    <p className="text-gray-600 text-sm">
                      Audit complet de nos processus et identification des axes d'amélioration
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Mise en œuvre</h4>
                    <p className="text-gray-600 text-sm">
                      Déploiement du système qualité et formation de toutes les équipes
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Certification</h4>
                    <p className="text-gray-600 text-sm">
                      Audit de certification par un organisme indépendant reconnu
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Improvements */}
              <div className="bg-indigo-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-indigo-900 mb-4">Améliorations concrètes apportées</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-indigo-800 mb-1">Digitalisation complète</h4>
                        <p className="text-indigo-700 text-sm">
                          Dématérialisation de tous nos processus pour plus d'efficacité
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-indigo-800 mb-1">Suivi en temps réel</h4>
                        <p className="text-indigo-700 text-sm">
                          Traçabilité complète de vos dossiers avec notifications automatiques
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-indigo-800 mb-1">Contrôle qualité renforcé</h4>
                        <p className="text-indigo-700 text-sm">
                          Double vérification systématique de tous les documents
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-indigo-800 mb-1">Formation continue</h4>
                        <p className="text-indigo-700 text-sm">
                          Mise à jour permanente des compétences de nos équipes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-indigo-800 mb-1">Satisfaction client</h4>
                        <p className="text-indigo-700 text-sm">
                          Enquêtes régulières et amélioration basée sur vos retours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-indigo-800 mb-1">Délais garantis</h4>
                        <p className="text-indigo-700 text-sm">
                          Engagement sur des délais de traitement optimisés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Quote */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 text-white mb-8">
                <blockquote className="text-lg italic mb-4">
                  "Cette certification ISO 9001 représente l'aboutissement d'un travail de fond mené par toute notre équipe. 
                  Elle confirme notre engagement à offrir à nos clients un service d'excellence, 
                  dans le respect des plus hauts standards de qualité."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <p className="font-semibold">Marie Dubois</p>
                    <p className="text-gray-300 text-sm">Directrice Qualité CPI WW Reims</p>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nos engagements pour l'avenir</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      L'obtention de cette certification n'est qu'une étape dans notre démarche d'amélioration continue. 
                      Nous nous engageons à maintenir et développer nos standards de qualité.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Audits internes trimestriels</li>
                      <li>• Formation continue des équipes</li>
                      <li>• Investissement dans de nouveaux outils</li>
                      <li>• Extension de la certification à de nouveaux services</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Contact Qualité</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-700">03 26 47 XX XX</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <span className="text-blue-700">contact@bureau-immatriculation.fr</span>
                      </div>
                    </div>
                    <p className="text-blue-600 text-sm mt-3">
                      Pour toute question sur notre démarche qualité
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Faites confiance à un service certifié
              </h3>
              <p className="text-gray-700 mb-6">
                Bénéficiez dès maintenant de nos services d'immatriculation temporaire certifiés ISO 9001
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Nos services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}