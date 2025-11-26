import type { Metadata } from "next"
import BreadcrumbSchema from "../../components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "CPI WW Witry-lès-Reims - Immatriculation Temporaire Rapide | Service Agréé Marne",
  description:
    "Service professionnel CPI WW à Witry-lès-Reims. Immatriculation temporaire pour véhicules importés dans la Marne. Intervention rapide à Witry-lès-Reims, Cernay-lès-Reims, Bétheny, Taissy.",
  keywords:
    "CPI WW Witry-lès-Reims, immatriculation temporaire Witry-lès-Reims, carte grise Marne, certificat provisoire Witry, véhicule importé Witry, Cernay-lès-Reims, Bétheny, Taissy, Reims",
  openGraph: {
    title: "CPI WW Witry-lès-Reims - Service d'Immatriculation Temporaire",
    description:
      "Expert en immatriculation temporaire à Witry-lès-Reims et dans la Marne. Service rapide et professionnel pour vos véhicules importés.",
    url: "https://cpi-ww.fr/cpi-ww-witry-les-reims",
    siteName: "CPI WW Witry-lès-Reims",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPI WW Witry-lès-Reims - Immatriculation Temporaire",
    description:
      "Service professionnel d'immatriculation temporaire à Witry-lès-Reims et agglomération rémoise.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/cpi-ww-witry-les-reims",
  },
}

export default function WitryLesReimsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CPI WW Witry-lès-Reims",
    description:
      "Service professionnel d'immatriculation temporaire CPI WW à Witry-lès-Reims et dans la Marne",
    url: "https://cpi-ww.fr/cpi-ww-witry-les-reims",
    telephone: "+33 07 56 89 89 50",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Service à domicile",
      addressLocality: "Witry-lès-Reims",
      postalCode: "51420",
      addressRegion: "Marne",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.279,
      longitude: 4.087,
    },
    openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
    priceRange: "€€",
    serviceType: "Immatriculation temporaire CPI WW",
    areaServed: [
      "Witry-lès-Reims",
      "Cernay-lès-Reims",
      "Bétheny",
      "Taissy",
      "Reims",
    ],
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "CPI WW Witry-lès-Reims", url: "https://cpi-ww.fr/cpi-ww-witry-les-reims" },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              CPI WW Witry-lès-Reims
              <span className="block text-blue-600">Service d'Immatriculation Temporaire</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Expert en immatriculation temporaire à Witry-lès-Reims et dans l'agglomération rémoise.
              Service rapide et professionnel pour vos véhicules importés dans la Marne.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Service à domicile</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Agréé préfecture</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Intervention rapide</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Services à Witry-lès-Reims</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">CPI WW Express</h3>
                <p className="text-gray-600">
                  Certificat provisoire d'immatriculation délivré rapidement pour vos véhicules importés à Witry-lès-Reims.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Service à Domicile</h3>
                <p className="text-gray-600">
                  Intervention directement chez vous dans l'agglomération rémoise et les communes limitrophes.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Accompagnement Complet</h3>
                <p className="text-gray-600">
                  Aide pour toutes vos démarches administratives liées à l'immatriculation temporaire CPI WW.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Zone d'Intervention à Witry-lès-Reims</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Agglomération de Reims - Secteur Witry</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Witry-lès-Reims</li>
                  <li>• Cernay-lès-Reims</li>
                  <li>• Bétheny</li>
                  <li>• Taissy</li>
                  <li>• Nogent-l'Abbesse</li>
                  <li>• Reims (quartiers limitrophes)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Secteurs Couverts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Centre-bourg</li>
                  <li>• Zone commerciale Witry</li>
                  <li>• Zone industrielle Cernay</li>
                  <li>• Quartiers résidentiels</li>
                  <li>• Axes vers Reims et Taissy</li>
                  <li>• Secteur Bétheny</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contactez-nous à Witry-lès-Reims</h2>
            <p className="text-xl mb-8">Service rapide et professionnel pour votre immatriculation temporaire</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div>
                <h3 className="font-semibold mb-2">Téléphone</h3>
                <p className="text-lg">+33 07 56 89 89 50</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Zone d'intervention</h3>
                <p className="text-lg">Witry-lès-Reims et agglomération rémoise</p>
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