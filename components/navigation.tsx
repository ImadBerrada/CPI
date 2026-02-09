"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Phone, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Nos Services" },
  { href: "/guide", label: "Guide & FAQ" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  if (pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-primary text-primary-foreground p-3 rounded-xl shadow-sm">
                <Shield className="h-7 w-7" />
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">Bureau-Immatriculation</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-lg",
                    pathname === item.href ? "text-primary bg-accent" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-muted px-3 py-2 rounded-lg">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+33 07 56 89 89 50</span>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 shadow-sm">
                <Link href="/boutique">Commander maintenant</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              aria-label={isOpen ? "Fermer le menu mobile" : "Ouvrir le menu mobile"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-3 py-3 rounded-lg text-base font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-3 text-sm text-muted-foreground flex items-center space-x-2 bg-muted rounded-lg">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+33 07 56 89 89 50</span>
              </div>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/boutique">Commander maintenant</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}