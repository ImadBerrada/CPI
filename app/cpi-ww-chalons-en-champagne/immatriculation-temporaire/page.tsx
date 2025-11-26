import type { Metadata } from "next"
import BreadcrumbSchema from "../../../components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "CPI WW Châlons-en-Champagne - Immatriculation Temporaire | Service Agréé Marne",
  description:
    "Service professionnel CPI WW à Châlons-en-Champagne. Immatriculation temporaire rapide pour véhicules importés. Intervention depuis Châlons dans toute la Marne (Sarry, Saint-Memmie, Compertrix, Fagnières).",
  keywords:
    "CPI WW Châlons-en-Champagne, immatriculation temporaire Châlons, carte grise Marne, certificat provisoire, Sarry, Saint-Memmie, Compertrix, Fagnières",
  openGraph: {
    title: "CPI WW Châlons-en-Champagne - Immatriculation Temporaire",
    description:
      "Expert en immatriculation temporaire CPI WW à Châlons-en-Champagne et dans la Marne. Service rapide et professionnel pour véhicules importés.",
    url: "https://cpi-ww.fr/cpi-ww-chalons-en-champagne/immatriculation-temporaire",
    siteName: "CPI WW Châlons-en-Champagne",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPI WW Châlons-en-Champagne - Immatriculation Temporaire",
    description:
      "Service d'immatriculation temporaire CPI WW à Châlons-en-Champagne et Marne.",
  },
  alternates: {
    canonical:
      "https://www.bureau-immatriculation.fr/cpi-ww-chalons-en-champagne/immatriculation-temporaire",
  },
}

export default function ChalonsImmatriculationTemporairePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CPI WW Châlons-en-Champagne",
    description:
      "Immatriculation temporaire CPI WW à Châlons-en-Champagne. Service express pour véhicules importés dans la Marne.",
    url: "https://cpi-ww.fr/cpi-ww-chalons-en-champagne/immatriculation-temporaire",
    telephone: "+33 07 56 89 89 50",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Service à domicile",
      addressLocality: "Châlons-en-Champagne",
      postalCode: "51000",
      addressRegion: "Marne",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.9566,
      longitude: 4.3668,
    },
    openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
    priceRange: "€€",
    serviceType: "Immatriculation temporaire CPI WW",
    areaServed: [
      "Châlons-en-Champagne",
      "Sarry",
      "Saint-Memmie",
      "Compertrix",
      "Fagnières",
      "Vitry-le-François",
      "Sézanne",
    ],
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          {
            name: "CPI WW Châlons-en-Champagne",
            url: "https://cpi-ww.fr/chalons-en-champagne",
          },
          {
            name: "Immatriculation Temporaire",
            url: "https://cpi-ww.fr/cpi-ww-chalons-en-champagne/immatriculation-temporaire",
          },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Immatriculation Temporaire CPI WW
              <span className="block text-green-600">Châlons-en-Champagne</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Service express d'immatriculation temporaire CPI WW à Châlons-en-Champagne.
              Démarches simplifiées pour circuler légalement avec votre véhicule importé dans la Marne.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Agréé préfecture</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Service à domicile</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Traitement 24-48h</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Services CPI WW à Châlons</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border text-center">
                <h3 className="text-xl font-semibold mb-4">Certificat Provisoire</h3>
                <p className="text-gray-600">Délivrance rapide du CPI WW pour mise en circulation immédiate.</p>
              </div>
              <div className="p-6 rounded-lg border text-center">
                <h3 className="text-xl font-semibold mb-4">Accompagnement Complet</h3>
                <p className="text-gray-600">Aide pour documents, conformité et cas d'import UE/hors UE.</p>
              </div>
              <div className="p-6 rounded-lg border text-center">
                <h3 className="text-xl font-semibold mb-4">Intervention Départementale</h3>
                <p className="text-gray-600">Couverture Marne (51) avec point de départ Châlons.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Zone d'Intervention</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Agglomération Châlonnaise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Châlons-en-Champagne</li>
                  <li>• Saint-Memmie</li>
                  <li>• Sarry</li>
                  <li>• Compertrix</li>
                  <li>• Fagnières</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Marne et alentours</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vitry-le-François</li>
                  <li>• Sézanne</li>
                  <li>• Montmirail</li>
                  <li>• Fère-Champenoise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact CPI WW Châlons-en-Champagne</h2>
            <p className="text-xl mb-8">Intervention rapide pour votre immatriculation temporaire</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div>
                <h3 className="font-semibold mb-2">Téléphone</h3>
                <p className="text-lg">+33 07 56 89 89 50</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Zone d'intervention</h3>
                <p className="text-lg">Marne (51)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Horaires</h3>
                <p className="text-lg">Lun-Ven: 8h-18h, Sam: 9h-17h</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}