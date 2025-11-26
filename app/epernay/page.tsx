import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CPI WW Épernay - Immatriculation Temporaire Champagne | Service Marne",
  description: "Service CPI WW à Épernay, capitale du Champagne. Immatriculation temporaire rapide pour véhicules importés. Expert en certificat provisoire dans la Marne.",
  keywords: "CPI WW Épernay, immatriculation temporaire Épernay, carte grise Champagne, certificat provisoire Épernay, véhicule importé Marne, Ay-Champagne",
  openGraph: {
    title: "CPI WW Épernay - Immatriculation Temporaire Champagne",
    description: "Expert en immatriculation temporaire à Épernay, capitale du Champagne. Service professionnel dans la Marne.",
    url: "https://cpi-ww.fr/epernay",
    siteName: "CPI WW Épernay",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/epernay",
  },
}

export default function EpernayPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CPI WW Épernay",
    "description": "Service professionnel d'immatriculation temporaire CPI WW à Épernay, capitale du Champagne",
    "url": "https://cpi-ww.fr/epernay",
    "telephone": "+33 07 56 89 89 50",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Service à domicile",
      "addressLocality": "Épernay",
      "postalCode": "51100",
      "addressRegion": "Marne",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.0415,
      "longitude": 3.9583
    },
    "serviceType": "Immatriculation temporaire",
    "areaServed": [
      "Épernay",
      "Ay-Champagne",
      "Dizy",
      "Hautvillers",
      "Mareuil-sur-Ay",
      "Dormans"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              CPI WW Épernay
              <span className="block text-amber-600">Capitale du Champagne</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Service professionnel d'immatriculation temporaire à Épernay, au cœur de la région Champagne. 
              Expert CPI WW pour vos véhicules importés dans la Marne.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full">Région Champagne</span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">Service rapide</span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">Expert CPI WW</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Services CPI WW à Épernay</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-semibold mb-4 text-amber-800">Immatriculation Temporaire Express</h3>
                <p className="text-gray-600">Service CPI WW rapide à Épernay pour vos véhicules importés. Intervention dans toute la région Champagne.</p>
              </div>
              <div className="p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-semibold mb-4 text-amber-800">Secteur Viticole Spécialisé</h3>
                <p className="text-gray-600">Expertise particulière pour les professionnels du Champagne nécessitant une immatriculation temporaire.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Champagne Region Coverage */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Zone Champagne - Intervention CPI WW</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-amber-800">Cœur de Champagne</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Épernay centre-ville</li>
                  <li>• Ay-Champagne</li>
                  <li>• Hautvillers</li>
                  <li>• Dizy</li>
                  <li>• Mareuil-sur-Ay</li>
                  <li>• Cumières</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-amber-800">Vallée de la Marne</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dormans</li>
                  <li>• Châtillon-sur-Marne</li>
                  <li>• Condé-en-Brie</li>
                  <li>• Château-Thierry (02)</li>
                  <li>• Montmort-Lucy</li>
                  <li>• Vertus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Spécialisation Région Champagne</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Notre service CPI WW à Épernay comprend les spécificités de la région Champagne, 
              notamment pour les professionnels viticoles et les entreprises du secteur.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-amber-50 rounded-lg">
                <h3 className="font-semibold mb-3">Maisons de Champagne</h3>
                <p className="text-sm text-gray-600">Service adapté aux besoins des maisons de Champagne pour leurs véhicules professionnels.</p>
              </div>
              <div className="p-6 bg-amber-50 rounded-lg">
                <h3 className="font-semibold mb-3">Vignerons Indépendants</h3>
                <p className="text-sm text-gray-600">Accompagnement des vignerons pour l'immatriculation de leurs véhicules agricoles et utilitaires.</p>
              </div>
              <div className="p-6 bg-amber-50 rounded-lg">
                <h3 className="font-semibold mb-3">Tourisme Champagne</h3>
                <p className="text-sm text-gray-600">Service pour les professionnels du tourisme œnologique dans la région d'Épernay.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-amber-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">CPI WW Épernay - Capitale du Champagne</h2>
            <p className="text-xl mb-8">Votre expert en immatriculation temporaire au cœur de la Champagne</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-lg">+33 07 56 89 89 50</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Région</h3>
                <p className="text-lg">Champagne - Marne</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Spécialité</h3>
                <p className="text-lg">Secteur viticole</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}