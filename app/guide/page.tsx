import type { Metadata } from "next"
import GuideClientPage from "./guide-client"

export const metadata: Metadata = {
  title: "Guide Carte Grise & CPI WW - Immatriculation Temporaire Reims",
  description:
    "Guide complet carte grise et CPI WW : documents nécessaires, démarches, délais, FAQ. Tout savoir sur l'immatriculation temporaire et carte grise à Reims.",
  keywords: [
    "guide carte grise",
    "guide CPI WW",
    "documents carte grise",
    "documents immatriculation",
    "FAQ carte grise",
    "FAQ CPI WW",
    "démarches carte grise",
    "démarches administratives",
    "certificat provisoire",
    "carte grise Reims",
    "immatriculation Reims",
    "bureau carte grise",
  ],
  openGraph: {
    title: "Guide Carte Grise & CPI WW - Immatriculation Temporaire Reims",
    description: "Guide complet carte grise et CPI WW avec toutes les informations, documents requis et FAQ pour Reims.",
    url: "https://www.bureau-immatriculation.fr/guide",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Guide Carte Grise & CPI WW - Documentation complète Reims",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide Carte Grise & CPI WW - Immatriculation Temporaire Reims",
    description: "Guide complet carte grise et CPI WW avec toutes les informations et FAQ pour Reims.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/guide",
  },
}

export default function GuidePage() {
  return <GuideClientPage />
}