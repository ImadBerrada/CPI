import type { Metadata } from "next"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Politique de confidentialité | Bureau Immatriculation",
  description:
    "Politique de confidentialité : collecte, utilisation et protection des données personnelles par Bureau Immatriculation.",
  alternates: { canonical: "/politique-confidentialite" },
  openGraph: {
    title: "Politique de confidentialité | Bureau Immatriculation",
    description:
      "Notre politique RGPD : données collectées, finalités, bases légales et vos droits.",
    url: "https://www.bureau-immatriculation.fr/politique-confidentialite",
    type: "article",
  },
}

export default function Page() {
  return (
    <main className="container mx-auto max-w-3xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>
      <section className="space-y-4 text-muted-foreground">
        <h2 className="text-xl font-semibold">Données collectées</h2>
        <p>
          Données d’identification et de contact nécessaires au traitement des
          dossiers d’immatriculation.
        </p>
        <h2 className="text-xl font-semibold mt-6">Finalités et bases légales</h2>
        <p>
          Exécution contractuelle, obligations légales (SIV), et intérêt
          légitime pour la communication.
        </p>
        <h2 className="text-xl font-semibold mt-6">Durées de conservation</h2>
        <p>
          Conformément aux exigences réglementaires et légales applicables.
        </p>
        <h2 className="text-xl font-semibold mt-6">Vos droits</h2>
        <p>
          Accès, rectification, effacement, limitation, opposition. Contact :
          <a href="mailto:contact@bureau-immatriculation.fr" className="underline">contact@bureau-immatriculation.fr</a>.
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