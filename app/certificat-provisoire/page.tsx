import type { Metadata } from "next"
import BreadcrumbSchema from "../../components/breadcrumb-schema"
import { OrderNowButton } from "@/components/order-form-provider"
import ServicesGrid from "@/components/services-grid"

export const metadata: Metadata = {
  title: "Certificat Provisoire d'Immatriculation - CPI WW Reims Marne | Expert Agréé",
  description: "Obtenez votre certificat provisoire d'immatriculation CPI WW à Reims et dans la Marne. Service expert agréé SIV pour véhicules importés. Démarches simplifiées.",
  keywords: "certificat provisoire immatriculation, CPI WW, véhicule importé, Reims, Marne, agrément SIV, démarches administratives",
  openGraph: {
    title: "Certificat Provisoire d'Immatriculation - CPI WW Reims",
    description: "Service expert pour certificat provisoire d'immatriculation CPI WW à Reims et dans la Marne. Démarches simplifiées.",
    url: "https://cpi-ww.fr/certificat-provisoire",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/certificat-provisoire",
  },
}

export default function CertificatProvisoirePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Certificat Provisoire d'Immatriculation CPI WW",
    "description": "Service expert pour l'obtention de certificat provisoire d'immatriculation CPI WW",
    "provider": {
      "@type": "LocalBusiness",
      "name": "CPI WW Reims",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Reims",
        "addressRegion": "Marne",
        "addressCountry": "FR"
      }
    },
    "areaServed": [
      "Reims",
      "Marne",
      "Châlons-en-Champagne",
      "Épernay",
      "Witry-lès-Reims"
    ],
    "serviceType": "Certificat provisoire d'immatriculation",
    "offers": {
      "@type": "Offer",
      "description": "Service CPI WW professionnel et rapide",
      "priceRange": "€€"
    }
  }

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "Certificat Provisoire", url: "https://cpi-ww.fr/certificat-provisoire" }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Certificat Provisoire
              <span className="block text-green-600">d'Immatriculation CPI WW</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Service expert pour l'obtention de votre certificat provisoire d'immatriculation CPI WW 
              à Reims et dans la Marne. Démarches administratives simplifiées.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Expert Agréé SIV</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Démarches Simplifiées</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Service Reims Marne</span>
            </div>
            <div className="mt-6 flex justify-center">
              <OrderNowButton serviceType="CPI WW Standard" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
                Commander
              </OrderNowButton>
            </div>
          </div>
        </section>

        {/* What is CPI WW Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Qu'est-ce que le Certificat Provisoire CPI WW ?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-600">Définition et Utilité</h3>
                <p className="text-gray-700 mb-4">
                  Le Certificat Provisoire d'Immatriculation (CPI WW) est un document temporaire qui permet 
                  de circuler légalement avec un véhicule en attente d'immatriculation définitive.
                </p>
                <p className="text-gray-700 mb-4">
                  Particulièrement utile pour les véhicules importés, il vous autorise à rouler pendant 
                  la période nécessaire aux démarches d'immatriculation française.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Validité temporaire légale
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Circulation autorisée
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Démarches simplifiées
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Durée de Validité</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>CPI WW Standard</span>
                    <span className="font-semibold">1 mois</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>CPI WW Prolongé</span>
                    <span className="font-semibold">3 mois</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cas Particuliers</span>
                    <span className="font-semibold">Variable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Quand Utiliser un CPI WW ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="text-xl font-semibold mb-4">Véhicule Importé</h3>
                <p className="text-gray-700">
                  Pour tout véhicule acheté à l'étranger nécessitant une immatriculation française.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-4">Changement Propriétaire</h3>
                <p className="text-gray-700">
                  En cas de vente/achat avec délai pour finaliser l'immatriculation définitive.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-4">Dossier Incomplet</h3>
                <p className="text-gray-700">
                  Lorsque certains documents sont en attente pour l'immatriculation finale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Avantages du Service CPI WW Reims</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Rapidité</h3>
                <p className="text-gray-600 text-sm">Traitement accéléré de votre demande</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Expertise</h3>
                <p className="text-gray-600 text-sm">Professionnels agréés SIV</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-semibold mb-2">Local</h3>
                <p className="text-gray-600 text-sm">Service de proximité Reims-Marne</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="font-semibold mb-2">Simplicité</h3>
                <p className="text-gray-600 text-sm">Démarches administratives facilitées</p>
              </div>
            </div>
          </div>
        </section>

        {/* Offres disponibles */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Offres disponibles</h2>
            <ServicesGrid />
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Obtenez Votre Certificat Provisoire CPI WW</h2>
            <p className="text-xl mb-8">Service expert à Reims et dans la Marne pour vos démarches d'immatriculation</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-lg">+33 07 56 89 89 50</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Zone de Service</h3>
                <p className="text-lg">Reims, Marne, Champagne-Ardenne</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Agrément</h3>
              <p className="text-lg">Agréé SIV</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}