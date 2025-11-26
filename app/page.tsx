import type { Metadata } from "next"
import ClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Carte Grise Reims en Ligne - CPI WW | Changement Carte Grise & Immatriculation Temporaire Marne | Service Agréé SIV",
  description:
    "Service professionnel carte grise en ligne et immatriculation temporaire CPI WW à Reims et dans la Marne. Changement carte grise, duplicata carte grise, carte grise temporaire. Traitement 24-48h pour Witry-lès-Reims, Cormontreuil, Bezannes, Châlons-en-Champagne, Épernay.",
  keywords: [
    "carte grise Reims",
    "carte grise en ligne",
    "changement carte grise",
    "duplicata carte grise",
    "carte grise perdue",
    "carte grise volée",
    "première immatriculation",
    "carte grise neuve",
    "CPI WW Reims",
    "immatriculation temporaire Reims",
    "carte grise temporaire Reims",
    "carte grise Marne",
    "bureau carte grise Reims",
    "service carte grise Reims",
    "carte grise rapide Reims",
    "démarches carte grise",
    "carte grise 24h",
    "carte grise express",
    "carte grise urgente",
    "véhicules importés Marne",
    "SIV 279558 Reims",
    "import automobile Reims",
    "plaques WW Reims",
    "certificat provisoire Reims",
    "immatriculation Witry-lès-Reims",
    "carte grise Cormontreuil",
    "CPI WW Châlons-en-Champagne",
    "immatriculation Épernay",
    "service agréé Marne",
    "carte grise Châlons-en-Champagne",
    "carte grise Épernay",
    "bureau immatriculation Reims",
    "carte grise prix",
    "tarif carte grise",
    "coût carte grise"
  ],
  openGraph: {
    title: "Carte Grise Reims en Ligne - CPI WW | Changement Carte Grise & Immatriculation Temporaire Marne | Service Agréé SIV",
    description:
      "Service professionnel carte grise en ligne et immatriculation temporaire CPI WW à Reims et dans la Marne. Changement carte grise, duplicata carte grise. Traitement 24-48h dans toute l'agglomération rémoise.",
    url: "https://www.bureau-immatriculation.fr",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Bureau professionnel CPI WW Reims pour immatriculation temporaire dans la Marne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carte Grise Reims en Ligne - CPI WW | Changement & Duplicata Carte Grise | Immatriculation Temporaire Marne",
    description: "Service professionnel carte grise en ligne et immatriculation temporaire CPI WW à Reims et dans la Marne. Changement carte grise, duplicata carte grise. Traitement rapide 24-48h.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr",
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
            name: "CPI WW Reims - Service Carte Grise Agréé",
  description: "Service professionnel d'immatriculation temporaire CPI WW et de carte grise à Reims et dans la Marne. Changement carte grise, duplicata carte grise, carte grise perdue ou volée, première immatriculation, changement d'adresse carte grise. Bureau carte grise agréé SIV.",
            url: "https://bureau-immatriculation.fr",
            logo: "https://bureau-immatriculation.fr/logo.png",
            image: "https://bureau-immatriculation.fr/european-car-registration-office-professional.jpg",
            telephone: "+33756898950",
            email: "contact@bureau-immatriculation.fr",
            address: {
              "@type": "PostalAddress",
              streetAddress: "83 ter rue Ernest Renan",
              addressLocality: "Reims",
              postalCode: "51100",
              addressCountry: "FR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "49.2628",
              longitude: "4.0347",
            },
            openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-12:00"],
            priceRange: "€€",
            serviceType: "Immatriculation temporaire CPI WW, services carte grise complets, changement carte grise, duplicata carte grise, carte grise perdue, première immatriculation",
            areaServed: [
              {
                "@type": "City",
                name: "Reims",
                addressCountry: "FR"
              },
              {
                "@type": "City", 
                name: "Witry-lès-Reims",
                addressCountry: "FR"
              },
              {
                "@type": "City",
                name: "Cormontreuil", 
                addressCountry: "FR"
              },
              {
                "@type": "City",
                name: "Bezannes",
                addressCountry: "FR"
              },
              {
                "@type": "City",
                name: "Châlons-en-Champagne",
                addressCountry: "FR"
              },
              {
                "@type": "City",
                name: "Épernay",
                addressCountry: "FR"
              }
            ],
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Agrément SIV",
                recognizedBy: {
                  "@type": "Organization",
                  name: "Ministère de l'Intérieur",
                },
              },
              {
                "@type": "EducationalOccupationalCredential", 
                credentialCategory: "Habilitation Carte Grise",
                recognizedBy: {
                  "@type": "Organization",
                  name: "ANTS - Agence Nationale des Titres Sécurisés",
                },
              }
            ],
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
                  bestRating: "5",
                  worstRating: "1"
                },
                reviewBody: "Service impeccable ! J'ai reçu mon CPI WW en 24h à Reims. L'équipe est très professionnelle et répond rapidement aux questions. Excellent pour les démarches carte grise également : changement carte grise, duplicata carte grise, tout est traité rapidement.",
                datePublished: "2024-01-15"
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Pierre Martin",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1"
                },
                reviewBody: "Excellent service CPI WW à Châlons-en-Champagne. Démarches simplifiées et traitement ultra-rapide pour mon véhicule importé. Service carte grise très efficace aussi : première immatriculation, changement d'adresse carte grise, tout parfait.",
                datePublished: "2024-01-10"
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Sophie Leroy",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "4",
                  bestRating: "5",
                  worstRating: "1"
                },
                reviewBody: "Service efficace à Épernay. J'ai obtenu mon certificat provisoire rapidement. Très satisfaite du professionnalisme.",
                datePublished: "2024-01-08"
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Jean-Claude Moreau",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1"
                },
                reviewBody: "Intervention à domicile à Witry-lès-Reims parfaite. Service CPI WW de qualité, je recommande vivement !",
                datePublished: "2024-01-05"
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Isabelle Rousseau",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1"
                },
                reviewBody: "Service impeccable à Cormontreuil. Équipe réactive et compétente pour l'immatriculation temporaire. Très professionnel.",
                datePublished: "2024-01-03"
              }
            ],
          }),
        }}
      />
      <ClientPage />
    </>
  )
}