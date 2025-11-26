import type { Metadata } from "next"
import BreadcrumbSchema from "../../../components/breadcrumb-schema"
import { Calendar, MapPin, User, ArrowLeft, Smartphone, Monitor, Shield, Zap, CheckCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Nouvelle Plateforme Digitale CPI WW - Innovation 2024 | CPI WW Reims",
  description: "Découvrez notre nouvelle plateforme digitale qui révolutionne vos démarches d'immatriculation temporaire. Interface moderne, suivi en temps réel.",
  keywords: "plateforme digitale CPI WW, innovation 2024, démarches en ligne, suivi temps réel, immatriculation digitale",
  openGraph: {
    title: "Nouvelle Plateforme Digitale CPI WW - Innovation 2024",
    description: "Découvrez notre nouvelle plateforme digitale qui simplifie encore plus vos démarches d'immatriculation temporaire.",
    url: "https://cpi-ww.fr/actualites/plateforme-digitale",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/actualites/plateforme-digitale",
  },
}

export default function PlateformeDigitalePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Lancement de notre nouvelle plateforme digitale",
    "description": "Découvrez notre nouvelle plateforme digitale qui simplifie encore plus vos démarches d'immatriculation temporaire.",
    "author": {
      "@type": "Organization",
      "name": "Équipe Technique"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CPI WW Reims",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cpi-ww.fr/logo.png"
      }
    },
    "datePublished": "2024-06-12",
    "dateModified": "2024-06-12",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cpi-ww.fr/actualites/plateforme-digitale"
    }
  };

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "Actualités", url: "https://cpi-ww.fr/actualites" },
          { name: "Plateforme Digitale", url: "https://cpi-ww.fr/actualites/plateforme-digitale" }
        ]}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        {/* Header */}
        <section className="py-8 px-4 bg-white shadow-sm">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/actualites">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux actualités
              </Link>
            </Button>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Innovation
              </span>
              <Zap className="h-5 w-5 text-purple-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Lancement de notre nouvelle plateforme digitale
            </h1>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>12 Juin 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Service en ligne</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Équipe Technique</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  CPI WW Reims franchit une nouvelle étape dans la digitalisation de ses services avec le lancement 
                  de sa plateforme en ligne révolutionnaire. Cette innovation majeure transforme radicalement 
                  l'expérience utilisateur et simplifie vos démarches d'immatriculation temporaire.
                </p>
              </div>

              {/* Hero Feature */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 mb-8">
                <div className="text-center">
                  <Monitor className="h-16 w-16 mx-auto mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-4">Plateforme 100% Digitale</h3>
                  <p className="text-purple-100 text-lg">
                    Gérez vos demandes CPI WW 24h/24, 7j/7 depuis n'importe quel appareil
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Fonctionnalités révolutionnaires</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-lg p-3 mr-4">
                        <Smartphone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Interface responsive</h3>
                        <p className="text-gray-700">
                          Optimisée pour tous les appareils : ordinateur, tablette, smartphone. 
                          Une expérience fluide où que vous soyez.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-lg p-3 mr-4">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Suivi en temps réel</h3>
                        <p className="text-gray-700">
                          Suivez l'avancement de votre dossier en direct avec des notifications 
                          automatiques à chaque étape.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-100 rounded-lg p-3 mr-4">
                        <Shield className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Sécurité renforcée</h3>
                        <p className="text-gray-700">
                          Chiffrement SSL, authentification à deux facteurs et stockage sécurisé 
                          de vos documents personnels.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-orange-100 rounded-lg p-3 mr-4">
                        <Zap className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Traitement accéléré</h3>
                        <p className="text-gray-700">
                          Validation automatique des documents et pré-remplissage intelligent 
                          pour gagner du temps.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-red-100 rounded-lg p-3 mr-4">
                        <Globe className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Accès 24h/24</h3>
                        <p className="text-gray-700">
                          Déposez vos demandes à tout moment, même en dehors des heures 
                          d'ouverture de nos agences.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-teal-100 rounded-lg p-3 mr-4">
                        <Monitor className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Tableau de bord</h3>
                        <p className="text-gray-700">
                          Visualisez tous vos dossiers, historique et documents dans un 
                          espace personnel centralisé.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Comment ça fonctionne ?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Créez votre compte</h4>
                    <p className="text-gray-600 text-sm">Inscription rapide en 2 minutes avec vérification par email</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Uploadez vos documents</h4>
                    <p className="text-gray-600 text-sm">Glissez-déposez vos fichiers avec validation automatique</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Suivez en temps réel</h4>
                    <p className="text-gray-600 text-sm">Recevez des notifications à chaque étape du traitement</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      4
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Récupérez votre CPI WW</h4>
                    <p className="text-gray-600 text-sm">Téléchargement sécurisé ou retrait en agence</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Avantages pour vous</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Gain de temps</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Plus de déplacement nécessaire
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Traitement 50% plus rapide
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Disponible 24h/24
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Simplicité</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Interface intuitive
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Aide contextuelle
                        </li>
                        <li className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          Support chat en direct
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Specs */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Spécifications techniques</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <Shield className="h-8 w-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-blue-900 mb-2">Sécurité</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Chiffrement SSL 256-bit</li>
                      <li>• Authentification 2FA</li>
                      <li>• Conformité RGPD</li>
                      <li>• Sauvegarde automatique</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <Monitor className="h-8 w-8 text-green-600 mb-3" />
                    <h4 className="font-semibold text-green-900 mb-2">Compatibilité</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Tous navigateurs modernes</li>
                      <li>• iOS et Android</li>
                      <li>• Mode hors ligne</li>
                      <li>• Synchronisation cloud</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <Zap className="h-8 w-8 text-purple-600 mb-3" />
                    <h4 className="font-semibold text-purple-900 mb-2">Performance</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Temps de chargement &lt; 2s</li>
                      <li>• Upload jusqu'à 50MB</li>
                      <li>• 99.9% de disponibilité</li>
                      <li>• CDN mondial</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Découvrez la nouvelle expérience CPI WW</h3>
                <p className="text-blue-100 mb-6">
                  Rejoignez les milliers de clients qui ont déjà adopté notre plateforme digitale pour leurs démarches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                    <Link href="/platform">
                      Accéder à la plateforme
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Link href="/demo">
                      Voir la démo
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-blue-200 mt-4">
                  Inscription gratuite • Aucun engagement • Support 7j/7
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}