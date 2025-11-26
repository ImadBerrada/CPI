import type { Metadata } from "next"
import BreadcrumbSchema from "../../../components/breadcrumb-schema"
import { Calendar, MapPin, User, ArrowLeft, Handshake, Building, MapPin as Location, Users, CheckCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Extension de notre réseau de partenaires dans la Marne | CPI WW Reims",
  description: "CPI WW Reims étend son réseau de partenaires concessionnaires dans le département de la Marne pour mieux vous servir. Découvrez nos nouveaux partenaires.",
  keywords: "réseau partenaires CPI WW, concessionnaires Marne, partenariat automobile, Châlons-en-Champagne, services immatriculation",
  openGraph: {
    title: "Extension de notre réseau de partenaires dans la Marne",
    description: "Nous étendons notre réseau de partenaires concessionnaires dans le département de la Marne pour mieux vous servir.",
    url: "https://cpi-ww.fr/actualites/extension-reseau-partenaires",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "article",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/actualites/extension-reseau-partenaires",
  },
}

export default function ExtensionReseauPartenairesPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Extension de notre réseau de partenaires dans la Marne",
    "description": "Nous étendons notre réseau de partenaires concessionnaires dans le département de la Marne pour mieux vous servir.",
    "author": {
      "@type": "Organization",
      "name": "Direction CPI WW Reims"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CPI WW Reims",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cpi-ww.fr/logo.png"
      }
    },
    "datePublished": "2024-02-22",
    "dateModified": "2024-02-22",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cpi-ww.fr/actualites/extension-reseau-partenaires"
    }
  };

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "Actualités", url: "https://cpi-ww.fr/actualites" },
          { name: "Extension Réseau Partenaires", url: "https://cpi-ww.fr/actualites/extension-reseau-partenaires" }
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
                <span>22 Février 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Châlons-en-Champagne</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Direction CPI WW Reims</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Extension de notre réseau de partenaires dans la Marne
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Nous étendons notre réseau de partenaires concessionnaires dans le département de la Marne pour mieux vous servir.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Handshake className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Un réseau qui s'agrandit</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                <p>
                  Dans notre démarche d'amélioration continue de nos services, CPI WW Reims est fier d'annoncer 
                  l'extension de son réseau de partenaires concessionnaires dans le département de la Marne. 
                  Cette expansion stratégique nous permet de vous offrir un service encore plus proche et plus accessible.
                </p>
                
                <p>
                  Grâce à ces nouveaux partenariats, vous bénéficiez désormais d'un maillage territorial renforcé 
                  pour toutes vos démarches d'immatriculation temporaire, avec des points de contact supplémentaires 
                  dans tout le département.
                </p>
              </div>

              {/* New Partners */}
              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-900">Nos nouveaux partenaires</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-800">Garage Champagne Auto</h4>
                      <p className="text-green-700 text-sm">Châlons-en-Champagne</p>
                      <p className="text-green-600 text-sm">Spécialiste véhicules importés</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-800">Concessionnaire Marne Motors</h4>
                      <p className="text-green-700 text-sm">Vitry-le-François</p>
                      <p className="text-green-600 text-sm">Multi-marques premium</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-800">Auto Service Épernay</h4>
                      <p className="text-green-700 text-sm">Épernay</p>
                      <p className="text-green-600 text-sm">Service express disponible</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-green-800">Garage du Vignoble</h4>
                      <p className="text-green-700 text-sm">Ay-Champagne</p>
                      <p className="text-green-600 text-sm">Expertise véhicules de collection</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Location className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-900">Proximité renforcée</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Points de contact dans 4 villes supplémentaires</li>
                    <li>• Réduction des temps de déplacement</li>
                    <li>• Couverture complète du département</li>
                    <li>• Accès facilité aux services</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-semibold text-purple-900">Services étendus</h3>
                  </div>
                  <ul className="space-y-2 text-purple-800">
                    <li>• Expertise locale renforcée</li>
                    <li>• Conseils personnalisés sur site</li>
                    <li>• Prise en charge complète des dossiers</li>
                    <li>• Suivi dédié par partenaire</li>
                  </ul>
                </div>
              </div>

              {/* Partnership Benefits */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white mb-8">
                <h3 className="text-xl font-semibold mb-4">Avantages de ce réseau étendu</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-200 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Gain de temps</h4>
                      <p className="text-green-100 text-sm">Démarches plus rapides grâce à la proximité</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-200 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Expertise locale</h4>
                      <p className="text-green-100 text-sm">Connaissance approfondie du marché local</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-200 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Service unifié</h4>
                      <p className="text-green-100 text-sm">Même qualité de service partout</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coverage Map */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Couverture géographique</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Zones couvertes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Reims</strong> - Siège social et services complets</li>
                      <li>• <strong>Châlons-en-Champagne</strong> - Nouveau partenaire</li>
                      <li>• <strong>Épernay</strong> - Service express disponible</li>
                      <li>• <strong>Vitry-le-François</strong> - Expertise multi-marques</li>
                      <li>• <strong>Ay-Champagne</strong> - Spécialiste véhicules de collection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Services disponibles</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Immatriculation temporaire standard</li>
                      <li>• Service express (selon partenaire)</li>
                      <li>• Conseils et accompagnement</li>
                      <li>• Prise en charge des dossiers complexes</li>
                      <li>• Suivi personnalisé</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comment en bénéficier ?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      Pour bénéficier de ces nouveaux services de proximité, contactez directement 
                      le partenaire le plus proche de chez vous ou passez par notre service central 
                      qui vous orientera vers le bon interlocuteur.
                    </p>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">03 26 47 XX XX</span>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Prochaines étapes</h4>
                    <p className="text-green-700 text-sm mb-2">
                      D'autres partenariats sont en cours de négociation pour étendre encore 
                      notre couverture dans les Ardennes et l'Aisne.
                    </p>
                    <p className="text-green-600 text-sm font-medium">
                      Restez connectés pour les prochaines annonces !
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Trouvez le partenaire le plus proche
              </h3>
              <p className="text-gray-700 mb-6">
                Contactez-nous pour être mis en relation avec le partenaire CPI WW le plus proche de chez vous
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/reims">Nos services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}