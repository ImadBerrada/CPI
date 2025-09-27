import type { Metadata } from "next"
import GuideClientPage from "./guide-client"

export const metadata: Metadata = {
  title: "Guide CPI WW & FAQ - Tout savoir sur l'Immatriculation Temporaire",
  description:
    "Guide complet CPI WW : documents nécessaires, démarches, délais, FAQ. Tout ce qu'il faut savoir sur l'immatriculation temporaire en France.",
  keywords: [
    "guide CPI WW",
    "documents immatriculation",
    "FAQ CPI WW",
    "démarches administratives",
    "certificat provisoire",
  ],
  openGraph: {
    title: "Guide CPI WW & FAQ - Tout savoir sur l'Immatriculation",
    description: "Guide complet avec toutes les informations sur le CPI WW, documents requis et FAQ.",
    url: "https://cpi-ww.fr/guide",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Guide CPI WW - Documentation complète",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide CPI WW & FAQ - Tout savoir sur l'Immatriculation",
    description: "Guide complet avec toutes les informations sur le CPI WW et FAQ.",
  },
  alternates: {
    canonical: "https://cpi-ww.fr/guide",
  },
}

export default function GuidePage() {
  return <GuideClientPage />
}
