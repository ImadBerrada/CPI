import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button";
import { OrderFormProvider } from "@/components/order-form-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bureau-immatriculation.fr"),
  title: {
    default: "Carte Grise Reims - CPI WW | Immatriculation Temporaire Marne | Service Agréé SIV",
    template: "%s | Carte Grise Reims - CPI WW | Service Agréé SIV",
  },
  description:
    "Service professionnel carte grise et immatriculation temporaire CPI WW à Reims et dans la Marne. Démarches rapides pour Witry-lès-Reims, Cormontreuil, Bezannes, Châlons-en-Champagne, Épernay.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/CPI WW-carte grise.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/CPI WW-carte grise.png',
  },
  keywords: [
    "carte grise Reims",
    "bureau carte grise Reims",
    "service carte grise Reims",
    "carte grise rapide Reims",
    "carte grise Marne",
    "CPI WW Reims",
    "immatriculation temporaire Reims",
    "véhicules importés Marne",
    "SIV Reims",
    "immatriculation Witry-lès-Reims",
    "carte grise Cormontreuil",
    "CPI WW Châlons-en-Champagne",
    "immatriculation Épernay",
    "carte grise Châlons-en-Champagne",
    "carte grise Épernay",
    "service agréé Reims",
    "plaques WW Marne",
    "import auto Reims",
    "certificat provisoire Reims",
    "démarches administratives Reims",
    "bureau immatriculation Reims"
  ],
  authors: [{ name: "CPI WW Reims" }],
  creator: "CPI WW Reims",
  publisher: "CPI WW Reims",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.bureau-immatriculation.fr",
    siteName: "Carte Grise Reims - CPI WW",
    title: "Carte Grise Reims - CPI WW | Immatriculation Temporaire Marne | Service Agréé SIV",
    description:
      "Service professionnel carte grise et immatriculation temporaire CPI WW à Reims et dans la Marne. Intervention rapide dans toute l'agglomération rémoise.",
    images: [
      {
        url: "/CPI WW-carte grise.png",
        width: 1200,
        height: 630,
        alt: "Carte Grise Reims - CPI WW | Service d'immatriculation temporaire dans la Marne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carte Grise Reims - CPI WW | Immatriculation Temporaire Marne",
    description: "Service professionnel carte grise et immatriculation temporaire CPI WW à Reims et dans la Marne. Intervention rapide dans toute l'agglomération.",
    images: ["/CPI WW-carte grise.png"],
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
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr",
    languages: {
      'fr-FR': 'https://www.bureau-immatriculation.fr',
        'fr': 'https://www.bureau-immatriculation.fr',
    },
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
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CPI WW",
              description: "Service professionnel d'immatriculation temporaire pour véhicules importés en France",
              url: "https://www.bureau-immatriculation.fr",
      logo: "https://www.bureau-immatriculation.fr/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33 07 56 89 89 50",
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
        <OrderFormProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            {children}
          </Suspense>
          <Analytics />
          <WhatsAppButton />
          <Toaster />
        </OrderFormProvider>
      </body>
    </html>
  )
}