import type { Metadata } from "next"
import BreadcrumbSchema from "../../components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "CPI WW Reims - Immatriculation Temporaire Rapide | Service Agréé Marne",
  description: "Service professionnel CPI WW à Reims. Immatriculation temporaire pour véhicules importés dans la Marne. Intervention rapide à Reims, Witry-lès-Reims, Cormontreuil.",
  keywords: "CPI WW Reims, immatriculation temporaire Reims, carte grise Marne, certificat provisoire Reims, véhicule importé Reims, Witry-lès-Reims, Cormontreuil",
  openGraph: {
    title: "CPI WW Reims - Service d'Immatriculation Temporaire",
    description: "Expert en immatriculation temporaire à Reims et dans la Marne. Service rapide et professionnel pour vos véhicules importés.",
    url: "https://cpi-ww.fr/reims",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPI WW Reims - Immatriculation Temporaire",
    description: "Service professionnel d'immatriculation temporaire à Reims et dans la Marne.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/reims",
  },
}

export default function ReimsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CPI WW Reims",
    "description": "Service professionnel d'immatriculation temporaire CPI WW à Reims et dans la Marne",
    "url": "https://cpi-ww.fr/reims",
    "telephone": "+33 07 56 89 89 50",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Service à domicile",
      "addressLocality": "Reims",
      "postalCode": "51100",
      "addressRegion": "Marne",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.2583,
      "longitude": 4.0317
    },
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
    "priceRange": "€€",
    "serviceType": "Immatriculation temporaire",
    "areaServed": [
      "Reims",
      "Witry-lès-Reims",
      "Cormontreuil",
      "Bezannes",
      "Tinqueux",
      "Saint-Brice-Courcelles"
    ]
  }

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "CPI WW Reims", url: "https://cpi-ww.fr/reims" }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              CPI WW Reims
              <span className="block text-blue-600">Service d'Immatriculation Temporaire</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Expert en immatriculation temporaire à Reims et dans l'agglomération rémoise. 
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
            <h2 className="text-3xl font-bold text-center mb-12">Nos Services à Reims</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">CPI WW Express</h3>
                <p className="text-gray-600">Certificat provisoire d'immatriculation délivré rapidement pour vos véhicules importés à Reims.</p>
              </div>
              <div className="text-center p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Service à Domicile</h3>
                <p className="text-gray-600">Intervention directement chez vous dans toute l'agglomération rémoise et la Marne.</p>
              </div>
              <div className="text-center p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Accompagnement Complet</h3>
                <p className="text-gray-600">Aide pour toutes vos démarches administratives liées à l'immatriculation temporaire.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Zone d'Intervention à Reims</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Agglomération de Reims</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reims centre-ville</li>
                  <li>• Witry-lès-Reims</li>
                  <li>• Cormontreuil</li>
                  <li>• Bezannes</li>
                  <li>• Tinqueux</li>
                  <li>• Saint-Brice-Courcelles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Secteurs Couverts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Quartier Cathédrale</li>
                  <li>• Quartier Université</li>
                  <li>• Zone industrielle</li>
                  <li>• Secteur Croix-Rouge</li>
                  <li>• Quartier Maison Blanche</li>
                  <li>• Zone commerciale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contactez-nous à Reims</h2>
            <p className="text-xl mb-8">Service rapide et professionnel pour votre immatriculation temporaire</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div>
                <h3 className="font-semibold mb-2">Téléphone</h3>
                <p className="text-lg">+33 07 56 89 89 50</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Zone d'intervention</h3>
                <p className="text-lg">Reims et agglomération</p>
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