import type { Metadata } from "next"
import ContactClientPage from "./contact-client"

export const metadata: Metadata = {
  title: "Contact CPI WW - Service Client & Mentions Légales",
  description:
    "Contactez CPI WW : 01 23 45 67 89, contact@cpi-ww.fr. Service agréé SIV n°189226. Mentions légales, RGPD, conditions générales.",
  keywords: ["contact CPI WW", "service client", "mentions légales", "RGPD", "agrément SIV 189226"],
  openGraph: {
    title: "Contact CPI WW - Service Client & Mentions Légales",
    description: "Contactez notre équipe d'experts. Service agréé SIV n°189226. Réponse sous 2h ouvrées.",
    url: "https://cpi-ww.fr/contact",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Contact CPI WW - Service client professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CPI WW - Service Client",
    description: "Contactez notre équipe d'experts. Réponse sous 2h ouvrées.",
  },
  alternates: {
    canonical: "https://cpi-ww.fr/contact",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
