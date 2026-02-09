import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Shield, MapPin, CheckCircle, Euro, Timer } from "lucide-react";
import ServicesGrid from "@/components/services-grid";

export const metadata: Metadata = {
  title: "Carte Grise Clermont-Ferrand en Ligne - CPI WW | Changement Carte Grise & Immatriculation Temporaire Puy-de-Dôme | Service Agréé SIV",
  description: "Service carte grise professionnel à Clermont-Ferrand et dans le Puy-de-Dôme. Changement carte grise, duplicata, première immatriculation, carte grise temporaire. Traitement rapide 24-48h en Auvergne-Rhône-Alpes. Bureau agréé SIV.",
  keywords: [
    "carte grise Clermont-Ferrand",
    "changement carte grise Clermont-Ferrand",
    "duplicata carte grise Clermont-Ferrand",
    "première immatriculation Clermont-Ferrand",
    "carte grise temporaire Clermont-Ferrand",
    "immatriculation Clermont-Ferrand",
    "Puy-de-Dôme",
    "Auvergne-Rhône-Alpes",
    "CPI WW Clermont-Ferrand",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CPI WW - Service Carte Grise Clermont-Ferrand",
  "description": "Service de carte grise et immatriculation provisoire CPI WW à Clermont-Ferrand et dans le Puy-de-Dôme.",
  "url": "https://www.cpi-ww.fr/carte-grise-clermont-ferrand",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Clermont-Ferrand",
    "postalCode": "63000",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.777,
    "longitude": 3.087
  },
  "telephone": "+33-1-23-45-67-89",
  "areaServed": [
    "Clermont-Ferrand",
    "Cournon-d'Auvergne",
    "Riom",
    "Chamalières",
    "Issoire",
    "Thiers",
    "Puy-de-Dôme"
  ],
  "priceRange": "€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};

export default function CarteGriseClermontFerrandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <AnimatedSection className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="container mx-auto px-4 pt-24 pb-12">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <Badge variant="secondary" className="mb-4 text-lg py-1 px-4 border-primary/20 bg-primary/5 text-primary">
                Service Agréé SIV - Préfecture du Puy-de-Dôme
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 pb-2">
                Votre Carte Grise à Clermont-Ferrand
                <span className="block text-2xl md:text-3xl text-gray-600 mt-4 font-normal">
                  Simple, Rapide et 100% en Ligne
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Obtenez votre certificat d'immatriculation sans vous déplacer en préfecture de Clermont-Ferrand. 
                Service habilité par le Ministère de l'Intérieur pour tous les véhicules dans le Puy-de-Dôme (63).
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="mr-2">⚡</span> Commander ma Carte Grise
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-gray-50">
                  <Phone className="mr-2 h-5 w-5" /> Contacter un Expert
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left">
                <Card className="border-none shadow-md bg-white/80 backdrop-blur">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Timer className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Traitement Express</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Dossier traité en 24h ouvrées. Recevez votre CPI WW immédiatement par email.</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md bg-white/80 backdrop-blur">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Habilité & Agréé</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Partenaire officiel de l'ANTS et du Ministère de l'Intérieur.</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md bg-white/80 backdrop-blur">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Euro className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Paiement Sécurisé</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Règlement en 3x ou 4x sans frais disponible pour votre carte grise.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <ServicesGrid />

        <AnimatedSection className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Service Carte Grise dans le Puy-de-Dôme (63)
                </h2>
                <p className="text-lg text-gray-600">
                  Habitant de Clermont-Ferrand ou de sa région, ne perdez plus votre temps en démarches administratives complexes. 
                  Notre service en ligne vous permet de régulariser la situation de votre véhicule en quelques clics, 
                  que vous soyez à Clermont-Ferrand, Cournon-d'Auvergne, Riom ou ailleurs dans le département.
                </p>
                <ul className="space-y-4">
                  {[
                    "Changement de titulaire (véhicule d'occasion)",
                    "Immatriculation véhicule étranger (CPI WW)",
                    "Changement d'adresse",
                    "Duplicata de carte grise",
                    "Enregistrement de cession"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-green-600 rounded-2xl transform rotate-3 opacity-10"></div>
                <Card className="relative border-2 border-gray-100 shadow-xl">
                  <CardHeader>
                    <CardTitle>Documents Requis</CardTitle>
                    <CardDescription>Pour un dossier complet</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">1</div>
                      <p className="text-sm text-gray-600">Justificatif d'identité et de domicile de moins de 6 mois</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">2</div>
                      <p className="text-sm text-gray-600">Carte grise barrée, datée et signée (ou certificat provisoire)</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">3</div>
                      <p className="text-sm text-gray-600">Permis de conduire et attestation d'assurance</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">4</div>
                      <p className="text-sm text-gray-600">Contrôle technique de moins de 6 mois (si véhicule &gt; 4 ans)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Zones d'Intervention près de Clermont-Ferrand</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Cournon-d'Auvergne", "Riom", "Chamalières", "Issoire", "Thiers", "Pont-du-Château", "Beaumont", "Gerzat"].map((city) => (
                <div key={city} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span className="font-medium text-gray-700">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </>
  );
}
