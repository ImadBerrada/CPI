import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Mentions légales | Bureau Immatriculation",
  description:
    "Mentions légales du Bureau Immatriculation : éditeur, hébergeur, contact, propriété intellectuelle et responsabilités.",
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    title: "Mentions légales | Bureau Immatriculation",
    description:
      "Informations légales du site Bureau Immatriculation : éditeur, hébergeur, contact et responsabilités.",
    url: "https://www.bureau-immatriculation.fr/mentions-legales",
    type: "article",
  },
}

export default function Page() {
  return (
    <main className="container mx-auto max-w-3xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>
      <section className="space-y-4 text-muted-foreground">
        <p>
          Ce site est édité par Bureau Immatriculation. Pour toute question, vous
          pouvez nous contacter au <a href="tel:+33326771143" className="underline">03 26 77 11 43</a> ou par
          e‑mail à <a href="mailto:contact@bureau-immatriculation.fr" className="underline">contact@bureau-immatriculation.fr</a>.
        </p>
        <h2 className="text-xl font-semibold mt-6">Éditeur du site</h2>
        <p>Bureau Immatriculation – Service d’immatriculation agréé SIV.</p>
        <h2 className="text-xl font-semibold mt-6">Hébergement</h2>
        <p>Hébergement sur infrastructure compatible Next.js/Vercel.</p>
        <h2 className="text-xl font-semibold mt-6">Propriété intellectuelle</h2>
        <p>
          Les contenus (textes, visuels, logos) sont protégés. Toute reproduction
          non autorisée est interdite.
        </p>
        <h2 className="text-xl font-semibold mt-6">Responsabilités</h2>
        <p>
          Les informations sont fournies à titre indicatif. Nous nous réservons
          le droit de les modifier à tout moment.
        </p>
      </section>

      <AnimatedSection className="mt-8">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Coordonnées</CardTitle>
            <CardDescription>Identiques au site principal</CardDescription>
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