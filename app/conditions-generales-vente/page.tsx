import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) | Bureau Immatriculation",
  description:
    "Conditions générales de vente du Bureau Immatriculation : prestations, tarifs, paiement, rétractation et réclamations.",
  alternates: { canonical: "/conditions-generales-vente" },
  openGraph: {
    title: "Conditions Générales de Vente (CGV) | Bureau Immatriculation",
    description:
      "CGV du Bureau Immatriculation : modalités des services d’immatriculation, tarifs et responsabilités.",
    url: "https://www.bureau-immatriculation.fr/conditions-generales-vente",
    type: "article",
  },
}

export default function Page() {
  return (
    <main className="container mx-auto max-w-3xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Conditions Générales de Vente (CGV)</h1>
      <section className="space-y-4 text-muted-foreground">
        <h2 className="text-xl font-semibold">Objet</h2>
        <p>
          Les présentes CGV régissent les prestations d’immatriculation (CPI WW,
          carte grise, duplicata, changement d’adresse) réalisées par Bureau
          Immatriculation.
        </p>
        <h2 className="text-xl font-semibold mt-6">Tarifs et paiement</h2>
        <p>
          Les tarifs sont indiqués avant toute commande. Le paiement est exigible
          à la validation du dossier.
        </p>
        <h2 className="text-xl font-semibold mt-6">Droit de rétractation</h2>
        <p>
          Conformément au Code de la consommation, le droit de rétractation ne
          s’applique pas aux prestations intégralement exécutées avant la fin du
          délai.
        </p>
        <h2 className="text-xl font-semibold mt-6">Réclamations</h2>
        <p>
          Pour toute réclamation, contactez <a href="mailto:contact@bureau-immatriculation.fr" className="underline">contact@bureau-immatriculation.fr</a>.
        </p>
      </section>

      <AnimatedSection className="mt-8">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Coordonnées</CardTitle>
            <CardDescription>Alignées avec le site</CardDescription>
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