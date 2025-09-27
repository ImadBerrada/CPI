import type { Metadata } from "next"
import ClientPage from "./client-page"

export const metadata: Metadata = {
  title: "CPI WW - Immatriculation Temporaire France | Service Agréé SIV n°189226",
  description:
    "Service professionnel d'immatriculation temporaire CPI WW pour véhicules importés en France. Agrément SIV n°189226. Traitement 24-48h, démarches simplifiées, conformité garantie.",
  keywords: [
    "CPI WW",
    "immatriculation temporaire",
    "véhicules importés",
    "SIV 189226",
    "carte grise temporaire",
    "import automobile France",
  ],
  openGraph: {
    title: "CPI WW - Immatriculation Temporaire France | Service Agréé SIV",
    description:
      "Service professionnel d'immatriculation temporaire CPI WW pour véhicules importés en France. Traitement 24-48h.",
    url: "https://cpi-ww.fr",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Bureau professionnel CPI WW pour immatriculation temporaire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPI WW - Immatriculation Temporaire France",
    description: "Service professionnel d'immatriculation temporaire CPI WW pour véhicules importés en France.",
  },
  alternates: {
    canonical: "https://cpi-ww.fr",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "CPI WW",
            description: "Service professionnel d'immatriculation temporaire pour véhicules importés en France",
            url: "https://cpi-ww.fr",
            logo: "https://cpi-ww.fr/logo.png",
            image: "https://cpi-ww.fr/european-car-registration-office-professional.jpg",
            telephone: "+33-1-23-45-67-89",
            email: "contact@cpi-ww.fr",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Avenue des Champs-Élysées",
              addressLocality: "Paris",
              postalCode: "75008",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "48.8566",
              longitude: "2.3522",
            },
            openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-12:00"],
            priceRange: "€€",
            serviceType: "Immatriculation temporaire CPI WW",
            areaServed: {
              "@type": "Country",
              name: "France",
            },
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "Agrément SIV",
              recognizedBy: {
                "@type": "Organization",
                name: "Ministère de l'Intérieur",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "247",
              bestRating: "5",
              worstRating: "1",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Marie Dubois",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                reviewBody:
                  "Service impeccable ! J'ai reçu mon CPI WW en 24h. L'équipe est très professionnelle et répond rapidement aux questions.",
              },
            ],
          }),
        }}
      />
      <ClientPage />
    </>
  )
}
