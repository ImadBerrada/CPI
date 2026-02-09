import type { Metadata } from "next"
import ClientPage from "./client-page"

export const metadata: Metadata = {
  title: "CPI WW Reims & Metz – Carte Grise Marne & Moselle | Service Rapide Agréé",
  description:
    "Service professionnel d'immatriculation temporaire CPI WW et de carte grise à Reims, Metz et dans le Grand Est. Changement de carte grise, duplicata, carte grise perdue ou volée. Intervention rapide à Witry-lès-Reims, Cormontreuil, Bezannes, Châlons-en-Champagne, Épernay, Metz, Montigny-lès-Metz, Woippy, Marly, Moulins-lès-Metz, Saint-Julien-lès-Metz.",
  keywords: [
    "carte grise Reims",
    "carte grise Metz",
    "carte grise Marne",
    "carte grise Moselle",
    "changement carte grise",
    "duplicata carte grise",
    "carte grise perdue",
    "carte grise volée",
    "première immatriculation",
    "CPI WW Reims",
    "CPI WW Metz",
    "immatriculation temporaire Reims",
    "immatriculation temporaire Metz",
    "plaques WW",
    "certificat provisoire WW",
    "Witry-lès-Reims",
    "Cormontreuil",
    "Bezannes",
    "Châlons-en-Champagne",
    "Épernay",
    "Montigny-lès-Metz",
    "Woippy",
    "Marly",
    "Moulins-lès-Metz",
    "Saint-Julien-lès-Metz",
    "service agréé Grand Est"
  ],
  openGraph: {
    title: "CPI WW Reims & Metz – Carte Grise Marne & Moselle | Service Rapide",
    description:
      "Immatriculation temporaire CPI WW et carte grise à Reims, Metz et dans le Grand Est. Démarches rapides et sécurisées (24-48h).",
    url: "https://www.bureau-immatriculation.fr",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Bureau professionnel CPI WW à Reims et Metz pour immatriculation temporaire dans la Marne et la Moselle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPI WW Reims & Metz – Carte Grise Marne & Moselle",
    description: "Service carte grise et CPI WW à Reims, Metz et dans le Grand Est. Traitement rapide 24-48h.",
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
            name: "CPI WW Reims & Metz - Service Carte Grise Agréé",
  description: "Service professionnel d'immatriculation temporaire CPI WW et de carte grise à Reims, Metz et dans le Grand Est. Changement de carte grise, duplicata, carte grise perdue ou volée, première immatriculation, changement d'adresse. Bureau carte grise agréé SIV.",
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
              },
              {
                "@type": "City",
                name: "Metz",
                addressCountry: "FR"
              },
              {
                "@type": "City",
                name: "Montigny-lès-Metz",
                addressCountry: "FR"
              },
              {
                "@type": "City",
                name: "Woippy",
                addressCountry: "FR"
              },
              {
                "@type": "City",
                name: "Marly",
                addressCountry: "FR"
              },
              {
                "@type": "City",
                name: "Moulins-lès-Metz",
                addressCountry: "FR"
              },
              {
                "@type": "City",
                name: "Saint-Julien-lès-Metz",
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