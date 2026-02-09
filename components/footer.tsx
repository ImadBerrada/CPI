import { Shield, Phone, Mail, MapPin, Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-6 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-accent text-accent-foreground p-3 rounded-xl">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <div className="font-bold text-2xl">CPI WW</div>
                
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Service
              {" "}
              <Button
                asChild
                variant="link"
                className="p-0 h-auto align-baseline text-primary-foreground underline hover:text-primary-foreground"
              >
                <Link href="/admin/login">professionnel</Link>
              </Button>
              {" "}
              de carte grise et d'immatriculation temporaire pour véhicules importés en France. Carte grise en ligne rapide et sécurisée.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Services Carte Grise</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <Link href="/carte-grise" className="hover:text-primary-foreground transition-colors">
                  Carte Grise en ligne
                </Link>
              </li>
              <li>
                <Link href="/carte-grise-reims" className="hover:text-primary-foreground transition-colors">
                  Carte Grise Reims
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-primary-foreground transition-colors">
                  Changement carte grise
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-primary-foreground transition-colors">
                  Duplicata carte grise
                </Link>
              </li>
              <li>
                <Link href="/immatriculation-temporaire" className="hover:text-primary-foreground transition-colors">
                  Carte grise temporaire
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Services CPI</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <Link href="/boutique" className="hover:text-primary-foreground transition-colors">
                  CPI WW
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-primary-foreground transition-colors">
                  Plaques temporaires
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-primary-foreground transition-colors">
                  Immatriculation définitive
                </Link>
              </li>
              <li>
                <Link href="/certificat-provisoire" className="hover:text-primary-foreground transition-colors">
                  Certificat provisoire
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Zones d'intervention</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <Link href="/reims" className="hover:text-primary-foreground transition-colors">
                  Reims
                </Link>
              </li>
              <li>
                <Link href="/chalons-en-champagne" className="hover:text-primary-foreground transition-colors">
                  Châlons-en-Champagne
                </Link>
              </li>
              <li>
                <Link href="/epernay" className="hover:text-primary-foreground transition-colors">
                  Épernay
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <Link href="/guide" className="hover:text-primary-foreground transition-colors">
                  Guide & FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+33 07 56 89 89 50</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>contact@bureau-immatriculation.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-8 text-center text-primary-foreground/70 group relative">
          <p>&copy; 2025 CPI WW. Tous droits réservés.</p>
          <Link
            href="/admin/login"
            aria-label="Accès administrateur"
            title="Accès administrateur"
            className="inline-flex items-center justify-center ml-3 align-middle opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300"
          >
            <Lock className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}