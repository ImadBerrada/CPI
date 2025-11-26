import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CPI WW Châlons-en-Champagne - Immatriculation Temporaire Marne | Service Agréé",
  description: "Service CPI WW à Châlons-en-Champagne. Immatriculation temporaire rapide pour véhicules importés. Intervention dans toute la Marne depuis Châlons-en-Champagne.",
  keywords: "CPI WW Châlons-en-Champagne, immatriculation temporaire Châlons, carte grise Marne, certificat provisoire Châlons, véhicule importé Marne",
  openGraph: {
    title: "CPI WW Châlons-en-Champagne - Immatriculation Temporaire",
    description: "Expert en immatriculation temporaire à Châlons-en-Champagne et dans la Marne. Service professionnel pour vos véhicules importés.",
    url: "https://cpi-ww.fr/chalons-en-champagne",
    siteName: "CPI WW Châlons-en-Champagne",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/chalons-en-champagne",
  },
}

export default function ChalonsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CPI WW Châlons-en-Champagne",
    "description": "Service professionnel d'immatriculation temporaire CPI WW à Châlons-en-Champagne et dans la Marne",
    "url": "https://cpi-ww.fr/chalons-en-champagne",
    "telephone": "+33 07 56 89 89 50",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Service à domicile",
      "addressLocality": "Châlons-en-Champagne",
      "postalCode": "51100",
      "addressRegion": "Marne",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.9566,
      "longitude": 4.3668
    },
    "serviceType": "Immatriculation temporaire",
    "areaServed": [
      "Châlons-en-Champagne",
      "Sarry",
      "Saint-Memmie",
      "Compertrix",
      "Fagnières"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              CPI WW Châlons-en-Champagne
              <span className="block text-green-600">Immatriculation Temporaire Marne</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Service professionnel d'immatriculation temporaire à Châlons-en-Champagne. 
              Expert en CPI WW pour vos véhicules importés dans toute la Marne.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Services CPI WW à Châlons-en-Champagne</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Certificat Provisoire d'Immatriculation</h3>
                <p className="text-gray-600">Délivrance rapide de votre CPI WW pour circuler légalement avec votre véhicule importé à Châlons-en-Champagne.</p>
              </div>
              <div className="p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Service Départemental Marne</h3>
                <p className="text-gray-600">Intervention dans tout le département de la Marne depuis notre base de Châlons-en-Champagne.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Zone d'Intervention depuis Châlons-en-Champagne</h2>
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-8">
                Service CPI WW disponible dans toute la Marne avec intervention rapide depuis Châlons-en-Champagne
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-3">Agglomération Châlonnaise</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Châlons-en-Champagne</li>
                    <li>Saint-Memmie</li>
                    <li>Sarry</li>
                    <li>Compertrix</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-3">Secteur Est Marne</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Vitry-le-François</li>
                    <li>Sézanne</li>
                    <li>Montmirail</li>
                    <li>Fère-Champenoise</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-3">Liaison Reims-Épernay</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Épernay</li>
                    <li>Ay-Champagne</li>
                    <li>Dormans</li>
                    <li>Mareuil-sur-Ay</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Service CPI WW Châlons-en-Champagne</h2>
            <p className="text-xl mb-8">Votre expert en immatriculation temporaire dans la Marne</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-lg">+33 07 56 89 89 50</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Secteur</h3>
                <p className="text-lg">Marne (51)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}