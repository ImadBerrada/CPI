import type { Metadata } from "next"
import BreadcrumbSchema from "../../../components/breadcrumb-schema"
import { Calendar, MapPin, User, ArrowLeft, Handshake, Shield, CheckCircle, Clock, Users, Star, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Nouveau Partenariat Assureurs Locaux - CPI WW Reims",
  description: "Signature d'accords de partenariat avec les principales compagnies d'assurance de la région pour faciliter vos démarches d'immatriculation temporaire.",
  keywords: "partenariat assureurs, compagnies assurance Reims, immatriculation temporaire, démarches simplifiées, CPI WW",
  openGraph: {
    title: "Nouveau partenariat avec les assureurs locaux",
    description: "Signature d'accords de partenariat avec les principales compagnies d'assurance de la région pour faciliter vos démarches.",
    url: "https://cpi-ww.fr/actualites/partenariat-assureurs-locaux",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/actualites/partenariat-assureurs-locaux",
  },
}

export default function PartenariatAssureursLocauxPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Nouveau partenariat avec les assureurs locaux",
    "description": "Signature d'accords de partenariat avec les principales compagnies d'assurance de la région pour faciliter vos démarches.",
    "author": {
      "@type": "Organization",
      "name": "Direction Partenariats CPI WW"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CPI WW Reims",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cpi-ww.fr/logo.png"
      }
    },
    "datePublished": "2024-08-25",
    "dateModified": "2024-08-25",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cpi-ww.fr/actualites/partenariat-assureurs-locaux"
    }
  };

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "Actualités", url: "https://cpi-ww.fr/actualites" },
          { name: "Partenariat Assureurs", url: "https://cpi-ww.fr/actualites/partenariat-assureurs-locaux" }
        ]}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
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
                <span>25 Août 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Reims, Marne</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Direction Partenariats CPI WW</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nouveau partenariat avec les assureurs locaux
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Signature d'accords de partenariat avec les principales compagnies d'assurance de la région pour faciliter vos démarches d'immatriculation temporaire.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Handshake className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Des partenariats stratégiques</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p>
                  CPI WW Reims franchit une nouvelle étape dans l'amélioration de ses services en signant 
                  des accords de partenariat avec les principales compagnies d'assurance de la région 
                  Champagne-Ardenne. Ces collaborations visent à simplifier et accélérer vos démarches 
                  d'immatriculation temporaire.
                </p>
                
                <p>
                  Grâce à ces partenariats, nous pouvons désormais proposer un service intégré qui combine 
                  l'expertise en immatriculation temporaire de CPI WW avec la couverture d'assurance 
                  de nos partenaires, pour une expérience client optimisée et sans couture.
                </p>
              </div>

              {/* Partner Companies */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-green-200" />
                  <h3 className="text-xl font-semibold">Nos partenaires assureurs</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-100">Compagnies nationales</h4>
                    <ul className="space-y-2 text-green-100">
                      <li>• <strong>AXA Champagne-Ardenne</strong> - Leader régional</li>
                      <li>• <strong>Groupama Grand Est</strong> - Mutuelle de référence</li>
                      <li>• <strong>MAIF Reims</strong> - Assurance automobile</li>
                      <li>• <strong>MACIF Marne</strong> - Protection complète</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-100">Assureurs locaux</h4>
                    <ul className="space-y-2 text-green-100">
                      <li>• <strong>Mutuelle de Reims</strong> - Proximité locale</li>
                      <li>• <strong>Assurances Champenoises</strong> - Expertise régionale</li>
                      <li>• <strong>Cabinet Marnais</strong> - Service personnalisé</li>
                      <li>• <strong>Courtage Rémois</strong> - Solutions sur mesure</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefits for Customers */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-900">Gain de temps</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Démarches groupées en un seul lieu</li>
                    <li>• Traitement simultané des dossiers</li>
                    <li>• Réduction des délais d'attente</li>
                    <li>• Coordination automatique entre services</li>
                    <li>• Suivi unifié de votre dossier</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-semibold text-orange-900">Service personnalisé</h3>
                  </div>
                  <ul className="space-y-2 text-orange-800">
                    <li>• Conseiller dédié pour votre dossier</li>
                    <li>• Offres d'assurance adaptées</li>
                    <li>• Tarifs préférentiels négociés</li>
                    <li>• Accompagnement personnalisé</li>
                    <li>• Support technique spécialisé</li>
                  </ul>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Comment ça fonctionne ?</h3>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Contact unique</h4>
                    <p className="text-gray-600 text-sm">
                      Vous nous contactez pour vos besoins d'immatriculation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Analyse des besoins</h4>
                    <p className="text-gray-600 text-sm">
                      Nous évaluons vos besoins en assurance temporaire
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Proposition groupée</h4>
                    <p className="text-gray-600 text-sm">
                      Offre combinée immatriculation + assurance
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-purple-600">4</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Traitement rapide</h4>
                    <p className="text-gray-600 text-sm">
                      Finalisation coordonnée de tous vos documents
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Included */}
              <div className="bg-emerald-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">Services inclus dans le partenariat</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-1">Assurance temporaire immédiate</h4>
                        <p className="text-emerald-700 text-sm">
                          Couverture d'assurance activée dès l'immatriculation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-1">Tarifs préférentiels</h4>
                        <p className="text-emerald-700 text-sm">
                          Remises négociées pour nos clients
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-1">Gestion des sinistres</h4>
                        <p className="text-emerald-700 text-sm">
                          Accompagnement en cas de problème
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-1">Conseil personnalisé</h4>
                        <p className="text-emerald-700 text-sm">
                          Expertise combinée immatriculation et assurance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-1">Suivi unifié</h4>
                        <p className="text-emerald-700 text-sm">
                          Un seul interlocuteur pour tous vos besoins
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-1">Garanties étendues</h4>
                        <p className="text-emerald-700 text-sm">
                          Options d'assurance complètes disponibles
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Offers */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Offres de lancement</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Pack Découverte</h4>
                    <p className="text-amber-100 text-sm mb-2">
                      Première immatriculation temporaire + assurance
                    </p>
                    <p className="text-2xl font-bold">-20%</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Pack Professionnel</h4>
                    <p className="text-amber-100 text-sm mb-2">
                      Pour les concessionnaires et professionnels
                    </p>
                    <p className="text-2xl font-bold">-30%</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Pack Fidélité</h4>
                    <p className="text-amber-100 text-sm mb-2">
                      À partir de la 3ème immatriculation
                    </p>
                    <p className="text-2xl font-bold">-25%</p>
                  </div>
                </div>
                <p className="text-amber-100 text-sm mt-4">
                  * Offres valables jusqu'au 31 décembre 2024
                </p>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 text-white mb-8">
                <blockquote className="text-lg italic mb-4">
                  "Ces partenariats représentent une véritable révolution dans notre secteur. 
                  Nos clients bénéficient désormais d'un service complet et intégré, 
                  avec des tarifs avantageux et un gain de temps considérable."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <p className="font-semibold">Jean-Pierre Martin</p>
                    <p className="text-gray-300 text-sm">Directeur Commercial CPI WW Reims</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Profitez de ces nouveaux services</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Contactez-nous dès maintenant pour bénéficier de nos services intégrés 
                      d'immatriculation temporaire et d'assurance. Nos conseillers sont à votre 
                      disposition pour vous proposer la solution la plus adaptée à vos besoins.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">03 26 47 XX XX</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">contact@bureau-immatriculation.fr</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Horaires d'ouverture : 08:00 - 20:00 everyday</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li><strong>Horaires :</strong> 08:00 - 20:00 tous les jours</li>
                    </ul>
                    <p className="text-green-600 text-sm mt-3">
                      Service d'urgence disponible 24h/24
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Découvrez nos services intégrés
              </h3>
              <p className="text-gray-700 mb-6">
                Profitez dès maintenant de nos partenariats avec les assureurs locaux pour simplifier toutes vos démarches
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Demander un devis</Link>
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