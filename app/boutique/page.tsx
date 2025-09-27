import type { Metadata } from "next"
import BoutiqueClient from "./boutiqueClient"

export const metadata: Metadata = {
  title: "Boutique CPI WW - Commandez votre Immatriculation Temporaire",
  description:
    "Commandez votre certificat CPI WW en ligne. 3 formules disponibles : CPI WW (89€), CPI WW + Plaques (149€), Immatriculation Définitive (249€). Traitement 24-48h.",
  keywords: [
    "commander CPI WW",
    "prix immatriculation temporaire",
    "plaques WW",
    "immatriculation définitive",
    "boutique en ligne",
  ],
  openGraph: {
    title: "Boutique CPI WW - Commandez votre Immatriculation",
    description: "3 formules d'immatriculation disponibles. Traitement rapide 24-48h. Prix transparents.",
    url: "https://cpi-ww.fr/boutique",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Boutique CPI WW - Services d'immatriculation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique CPI WW - Commandez votre Immatriculation",
    description: "3 formules d'immatriculation disponibles. Traitement rapide 24-48h.",
  },
  alternates: {
    canonical: "https://cpi-ww.fr/boutique",
  },
}

export default function BoutiquePage() {
  return <BoutiqueClient />
}
