"use client"

import { createContext, useContext, useState, useCallback, useMemo } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

type OrderFormContextValue = {
  openOrderForm: (serviceType?: string) => void
}

const OrderFormContext = createContext<OrderFormContextValue | null>(null)

export function OrderFormProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [serviceType, setServiceType] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const openOrderForm = useCallback((type?: string) => {
    if (type) setServiceType(type)
    setOpen(true)
  }, [])

  function normalizeServiceType(type: string): "cpi-ww" | "carte-grise" | "cession" | "kbis" | "changement-adresse" | "quitus-fiscal" | "autre" {
    const t = (type || "").toLowerCase()
    if (t.includes("cpi") && t.includes("ww")) return "cpi-ww"
    if (t.includes("carte") && t.includes("grise")) return "carte-grise"
    if (t.includes("cession")) return "cession"
    if (t.includes("kbis")) return "kbis"
    if (t.includes("changement") && t.includes("adresse")) return "changement-adresse"
    if (t.includes("quitus")) return "quitus-fiscal"
    return "autre"
  }

  const docsByService = useMemo(() => {
    const common = [
      { name: "permis_recto", label: "Permis (recto)" },
      { name: "permis_verso", label: "Permis (verso)" },
      { name: "identite_recto", label: "Pièce d’identité (recto)" },
      { name: "identite_verso", label: "Pièce d’identité (verso)" },
      { name: "justificatif_domicile", label: "Justificatif de domicile (<6 mois)" },
      { name: "assurance", label: "Assurance" },
      { name: "controle_technique", label: "Contrôle technique" },
      { name: "acte_de_vente", label: "Acte de vente" },
    ] as const

    const cession = [
      { name: "carte_grise", label: "Carte grise" },
      { name: "acte_de_vente", label: "Acte de vente" },
      { name: "identite_recto", label: "Pièce d’identité du vendeur (recto)" },
      { name: "identite_verso", label: "Pièce d’identité du vendeur (verso)" },
    ] as const

    const cpiWw = [
      { name: "carte_grise", label: "Carte grise (deux volets)" },
      { name: "acte_de_vente", label: "Acte de vente" },
      { name: "assurance", label: "Assurance" },
      { name: "permis_recto", label: "Permis (recto)" },
      { name: "permis_verso", label: "Permis (verso)" },
      { name: "identite_recto", label: "Pièce d’identité (recto)" },
      { name: "identite_verso", label: "Pièce d’identité (verso)" },
      { name: "justificatif_domicile", label: "Justificatif de domicile (<6 mois)" },
    ] as const

    const carteGrise = [
      { name: "permis_recto", label: "Permis (recto)" },
      { name: "permis_verso", label: "Permis (verso)" },
      { name: "identite_recto", label: "Pièce d’identité (recto)" },
      { name: "identite_verso", label: "Pièce d’identité (verso)" },
      { name: "justificatif_domicile", label: "Justificatif de domicile (<6 mois)" },
      { name: "assurance", label: "Assurance" },
      { name: "controle_technique", label: "Contrôle technique" },
      { name: "acte_de_vente", label: "Acte de vente" },
    ] as const

    const kbis = [
      { name: "identite_recto", label: "Pièce d’identité de l’acquéreur (recto)" },
      { name: "identite_verso", label: "Pièce d’identité de l’acquéreur (verso)" },
      { name: "carte_grise", label: "Carte grise" },
      { name: "cession", label: "Déclaration de cession" },
    ] as const

    const changementAdresse = [
      { name: "identite_recto", label: "Pièce d’identité (recto)" },
      { name: "identite_verso", label: "Pièce d’identité (verso)" },
      { name: "carte_grise", label: "Carte grise" },
      { name: "justificatif_domicile", label: "Justificatif de domicile (nouvelle adresse, <6 mois)" },
    ] as const

    const quitusFiscal = [
      { name: "carte_grise", label: "Carte grise" },
      { name: "identite_recto", label: "Pièce d’identité (recto)" },
      { name: "identite_verso", label: "Pièce d’identité (verso)" },
      { name: "permis_recto", label: "Permis (recto)" },
      { name: "permis_verso", label: "Permis (verso)" },
      { name: "justificatif_domicile", label: "Justificatif de domicile (<6 mois)" },
      { name: "certificat_conformite", label: "Certificat de conformité" },
      { name: "acte_de_vente", label: "Acte de vente" },
      { name: "assurance", label: "Assurance" },
    ] as const

    const normalized = normalizeServiceType(serviceType)
    switch (normalized) {
      case "cession":
        return cession
      case "cpi-ww":
        return cpiWw
      case "carte-grise":
        return carteGrise
      case "kbis":
        return kbis
      case "changement-adresse":
        return changementAdresse
      case "quitus-fiscal":
        return quitusFiscal
      default:
        return common
    }
  }, [serviceType])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formEl = e.currentTarget
    const formData = new FormData(formEl)
    if (serviceType) formData.set("service_type", serviceType)
    setLoading(true)
    try {
      const res = await fetch("/api/orders", { method: "POST", body: formData })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || "Erreur inconnue")
      toast({ title: "Commande envoyée", description: "Nous vous contacterons rapidement." })
      formEl.reset()
      setOpen(false)
      setServiceType("")
    } catch (err: any) {
      toast({ title: "Échec de l’envoi", description: err?.message || "Veuillez réessayer.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <OrderFormContext.Provider value={{ openOrderForm }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {serviceType ? `Commande – ${serviceType}` : "Commande - Documents à fournir"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            <input type="hidden" name="service_type" value={serviceType} />

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
                {docsByService.map((doc) => (
                  <div key={doc.name}>
                    <Label htmlFor={doc.name}>{doc.label}</Label>
                    <Input id={doc.name} name={doc.name} type="file" accept=".pdf,image/*" />
                  </div>
                ))}
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
    </OrderFormContext.Provider>
  )
}

export function useOrderForm() {
  const ctx = useContext(OrderFormContext)
  if (!ctx) throw new Error("useOrderForm must be used within OrderFormProvider")
  return ctx
}

export function OrderNowButton({ serviceType, children, className, size, variant }: { serviceType: string; children?: React.ReactNode; className?: string; size?: any; variant?: any }) {
  const { openOrderForm } = useOrderForm()
  return (
    <Button className={className} size={size as any} variant={variant as any} onClick={() => openOrderForm(serviceType)}>
      {children ?? "Commander"}
    </Button>
  )
}
