import { Shield, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-accent text-accent-foreground p-3 rounded-xl">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <div className="font-bold text-2xl">CPI WW</div>
                <div className="text-sm text-primary-foreground/70">Agrément SIV n°189226</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Service professionnel d'immatriculation temporaire pour véhicules importés en France.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
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
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>contact@cpi-ww.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-8 text-center text-primary-foreground/70">
          <p>&copy; 2025 CPI WW. Tous droits réservés. SIRET: 123 456 789 00012</p>
        </div>
      </div>
    </footer>
  )
}
