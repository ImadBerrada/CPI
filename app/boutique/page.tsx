import type { Metadata } from "next"
import BoutiqueClient from "./boutiqueClient"

export const metadata: Metadata = {
  title: "Boutique Carte Grise & CPI WW - Commandez en Ligne Reims",
  description:
    "Commandez votre carte grise et certificat CPI WW en ligne à Reims. 3 formules : CPI WW (79.95€), CPI WW + Plaques (149€), Immatriculation Définitive (249€). Traitement 24-48h.",
  keywords: [
    "commander carte grise",
    "commander CPI WW",
    "carte grise en ligne",
    "prix carte grise",
    "prix immatriculation temporaire",
    "plaques WW",
    "immatriculation définitive",
    "boutique carte grise",
    "boutique en ligne",
    "carte grise Reims",
    "service carte grise",
  ],
  openGraph: {
    title: "Boutique Carte Grise & CPI WW - Commandez en Ligne Reims",
    description: "3 formules carte grise et immatriculation disponibles à Reims. Traitement rapide 24-48h. Prix transparents.",
    url: "https://www.bureau-immatriculation.fr/boutique",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Boutique Carte Grise & CPI WW - Services d'immatriculation Reims",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique Carte Grise & CPI WW - Commandez en Ligne Reims",
    description: "3 formules carte grise et immatriculation disponibles à Reims. Traitement rapide 24-48h.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/boutique",
  },
}

export default function BoutiquePage() {
  return <BoutiqueClient />
}