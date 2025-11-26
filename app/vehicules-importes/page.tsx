import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Véhicules importés | Bureau Immatriculation",
  description:
    "Immatriculation de véhicules importés (UE et hors UE). Dossier complet, accompagnement et CPI WW si nécessaire.",
  alternates: { canonical: "/vehicules-importes" },
  openGraph: {
    title: "Véhicules importés | Bureau Immatriculation",
    description:
      "Prise en charge des véhicules importés : conformité, quitus fiscal, et immatriculation définitive.",
    url: "https://www.bureau-immatriculation.fr/vehicules-importes",
    type: "article",
  },
}

export default function Page() {
  return (
    <main className="container mx-auto max-w-5xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Immatriculation des véhicules importés</h1>
      <p className="text-muted-foreground mb-8">
        Nous gérons l’immatriculation des véhicules importés depuis l’Union
        européenne et hors UE : constitution du dossier, conformité et
        immatriculation.
      </p>
      <AnimatedSection>
        <h2 className="text-2xl font-semibold mb-2">Notre accompagnement</h2>
        <p className="text-muted-foreground mb-6">Étapes prises en charge</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Quitus fiscal</h3>
            <p className="text-muted-foreground">Obtention et vérification.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Conformité technique</h3>
            <p className="text-muted-foreground">Certificat de conformité (COC).</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">CPI WW</h3>
            <p className="text-muted-foreground">Circulation provisoire rapide.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Carte grise définitive</h3>
            <p className="text-muted-foreground">Dossier complet et suivi.</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-12">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Nous contacter</CardTitle>
            <CardDescription>Les mêmes coordonnées que le site principal</CardDescription>
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