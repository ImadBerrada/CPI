import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL("https://cpi-ww.fr"),
  title: {
    default: "CPI WW - Immatriculation Temporaire France | Service Agréé SIV",
    template: "%s | CPI WW - Service Agréé SIV",
  },
  description:
    "Service professionnel d'immatriculation temporaire CPI WW et véhicules importés en France. Agrément SIV n°189226. Démarches rapides et sécurisées.",
  keywords: [
    "CPI WW",
    "immatriculation temporaire",
    "véhicules importés",
    "SIV",
    "France",
    "carte grise",
    "import auto",
  ],
  authors: [{ name: "CPI WW" }],
  creator: "CPI WW",
  publisher: "CPI WW",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cpi-ww.fr",
    siteName: "CPI WW",
    title: "CPI WW - Immatriculation Temporaire France | Service Agréé SIV",
    description:
      "Service professionnel d'immatriculation temporaire CPI WW et véhicules importés en France. Agrément SIV n°189226.",
    images: [
      {
        url: "/european-car-registration-office-professional.jpg",
        width: 1200,
        height: 630,
        alt: "CPI WW - Service d'immatriculation temporaire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPI WW - Immatriculation Temporaire France",
    description: "Service professionnel d'immatriculation temporaire CPI WW et véhicules importés en France.",
    images: ["/european-car-registration-office-professional.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CPI WW",
              description: "Service professionnel d'immatriculation temporaire pour véhicules importés en France",
              url: "https://cpi-ww.fr",
              logo: "https://cpi-ww.fr/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-1-23-45-67-89",
                contactType: "customer service",
                availableLanguage: "French",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "FR",
                addressLocality: "Paris",
              },
              sameAs: ["https://www.facebook.com/cpiww", "https://www.linkedin.com/company/cpiww"],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
