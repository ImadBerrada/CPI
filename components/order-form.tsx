"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function OrderFormButton() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formEl = e.currentTarget
    const formData = new FormData(formEl)
    setLoading(true)
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        body: formData,
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || "Erreur inconnue")
      toast({ title: "Commande envoyée", description: "Nous vous contacterons rapidement." })
      formEl.reset()
      setOpen(false)
    } catch (err: any) {
      toast({ title: "Échec de l’envoi", description: err?.message || "Veuillez réessayer.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-6 right-6 z-50" variant="default">Commander</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Commande - Documents à fournir</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="full_name">Nom complet*</Label>
              <Input id="full_name" name="full_name" required placeholder="Nom et prénom" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="exemple@mail.com" />
            </div>
            <div>
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" name="phone" placeholder="06 12 34 56 78" />
            </div>
            <div>
              <Label htmlFor="address">Adresse</Label>
              <Input id="address" name="address" placeholder="Rue et numéro" />
            </div>
            <div>
              <Label htmlFor="city">Ville</Label>
              <Input id="city" name="city" placeholder="Ville" />
            </div>
            <div>
              <Label htmlFor="postal_code">Code postal</Label>
              <Input id="postal_code" name="postal_code" placeholder="Code postal" />
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" name="notes" placeholder="Informations complémentaires" />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Documents (formats: PDF, JPG, PNG)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="permis_recto">Permis (recto)</Label>
                <Input id="permis_recto" name="permis_recto" type="file" accept=".pdf,image/*" />
              </div>
              <div>
                <Label htmlFor="permis_verso">Permis (verso)</Label>
                <Input id="permis_verso" name="permis_verso" type="file" accept=".pdf,image/*" />
              </div>
              <div>
                <Label htmlFor="identite_recto">Pièce d’identité (recto)</Label>
                <Input id="identite_recto" name="identite_recto" type="file" accept=".pdf,image/*" />
              </div>
              <div>
                <Label htmlFor="identite_verso">Pièce d’identité (verso)</Label>
                <Input id="identite_verso" name="identite_verso" type="file" accept=".pdf,image/*" />
              </div>
              <div>
                <Label htmlFor="justificatif_domicile">Justificatif de domicile (&lt;6 mois)</Label>
                <Input id="justificatif_domicile" name="justificatif_domicile" type="file" accept=".pdf,image/*" />
              </div>
              <div>
                <Label htmlFor="assurance">Assurance</Label>
                <Input id="assurance" name="assurance" type="file" accept=".pdf,image/*" />
              </div>
              <div>
                <Label htmlFor="controle_technique">Contrôle technique</Label>
                <Input id="controle_technique" name="controle_technique" type="file" accept=".pdf,image/*" />
              </div>
              <div>
                <Label htmlFor="acte_de_vente">Acte de vente</Label>
                <Input id="acte_de_vente" name="acte_de_vente" type="file" accept=".pdf,image/*" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)} disabled={loading}>
              Annuler
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Envoi..." : "Envoyer la commande"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
