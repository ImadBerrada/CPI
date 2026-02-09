import type { Metadata } from "next"
import ContactClientPage from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Bureau Carte Grise Reims - Service Client Carte Grise & Mentions Légales",
  description: "Contactez notre bureau carte grise Reims pour vos démarches carte grise en ligne : +33 07 56 89 89 50, contact@bureau-immatriculation.fr. Service agréé SIV. Changement carte grise, duplicata carte grise.",
  keywords: [
    "contact bureau carte grise Reims", 
    "contact carte grise en ligne",
    "service client carte grise", 
    "démarches carte grise",
    "changement carte grise",
    "duplicata carte grise",
    "bureau carte grise Reims",
    "contact carte grise",
    "service carte grise Reims",
    "mentions légales", 
    "RGPD", 
    "agrément SIV  279558"
  ],
  openGraph: {
    title: "Contact Bureau Carte Grise Reims - Service Client Carte Grise & Mentions Légales",
  description: "Contactez notre bureau carte grise Reims pour vos démarches carte grise en ligne. Service agréé SIV. Réponse sous 2h ouvrées.",
    url: "https://www.bureau-immatriculation.fr/contact",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Bureau Carte Grise Reims - Service client professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bureau Carte Grise Reims - Service Client",
    description: "Contactez notre bureau carte grise Reims. Réponse sous 2h ouvrées.",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/contact",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}