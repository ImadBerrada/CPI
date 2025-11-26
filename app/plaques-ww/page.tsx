import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Plaques WW | Bureau Immatriculation",
  description:
    "Plaques WW provisoires pour CPI WW : délivrance rapide et conforme aux exigences réglementaires.",
  alternates: { canonical: "/plaques-ww" },
  openGraph: {
    title: "Plaques WW | Bureau Immatriculation",
    description:
      "Obtenez vos plaques WW provisoires pour circuler légalement en attendant la carte grise.",
    url: "https://www.bureau-immatriculation.fr/plaques-ww",
    type: "article",
  },
}

export default function Page() {
  return (
    <main className="container mx-auto max-w-5xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Plaques WW provisoires</h1>
      <p className="text-muted-foreground mb-8">
        Nous fournissons des plaques WW conformes pour les certificats
        provisoires d’immatriculation (CPI WW).
      </p>
      <AnimatedSection>
        <h2 className="text-2xl font-semibold mb-2">Ce que nous proposons</h2>
        <p className="text-muted-foreground mb-6">Simple et rapide</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Délivrance express</h3>
            <p className="text-muted-foreground">Prêt à poser, au format réglementaire.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Conformité WW</h3>
            <p className="text-muted-foreground">Respect des normes en vigueur.</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Nous contacter</CardTitle>
            <CardDescription>Coordonnées alignées avec le site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Téléphone</div>
                  <div className="text-muted-foreground">+33 07 56 89 89 50</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <a href="https://wa.me/330756898950" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">+33 07 56 89 89 50</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">contact@bureau-immatriculation.fr</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Adresse</div>
                  <div className="text-muted-foreground">83 ter rue Ernest Renan, 51100 Reims, France</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </main>
  )
}