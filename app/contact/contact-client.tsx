"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { 
  Building, 
  Clock, 
  FileText, 
  Mail, 
  MapPin, 
  Phone, 
  Shield, 
  Users,
  BadgeCheck,
  Send,
  MessageCircle,
  AlertCircle,
  Scale,
  Building2,
  UserCheck,
  FileCheck,
  Timer,
  HeadphonesIcon
} from "lucide-react"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ContactClientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact - CPI WW Services",
            "description": "Contactez CPI WW Services pour vos démarches d'immatriculation automobile",
            "url": "https://cpi-ww.fr/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Bureau-Immatriculation Services",
              "telephone": "+33 07 56 89 89 50",
              "email": "contact@bureau-immatriculation.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "83 ter rue Ernest Renan",
                "addressLocality": "Reims",
                "postalCode": "51100",
                "addressCountry": "FR"
              },
              "areaServed": [
                "Reims", "Witry-lès-reims", "Cormontreuil", "Bezannes", 
                "Cernay-lès-reims", "Bethny", "Taissy", "Loivre", 
                "Cormicy", "Châlons-en-champagne", "Epernay"
              ]
            }
          })
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative container mx-auto px-4 py-20">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <BadgeCheck className="w-4 h-4 mr-2" />
            Service agréé SIV
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Contactez-nous
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Notre équipe d'experts est à votre disposition pour toutes vos questions
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Timer className="w-4 h-4" />
                    <span>Réponse sous 2h</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <HeadphonesIcon className="w-4 h-4" />
                    <span>Support 7j/7</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <BadgeCheck className="w-4 h-4" />
                    <span>Service certifié</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection>
                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <MessageCircle className="h-6 w-6 text-blue-600" />
                      Envoyez-nous un message
                    </CardTitle>
                    <CardDescription className="text-base">
                      Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Nom complet *</Label>
                        <Input 
                          id="name" 
                          placeholder="Votre nom et prénom" 
                          className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="votre@email.com" 
                          className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Téléphone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+33 07 56 89 89 50" 
                        className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">Sujet *</Label>
                      <Input 
                        id="subject" 
                        placeholder="Objet de votre demande" 
                        className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre demande en détail..."
                        className="min-h-[120px] border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                      />
                    </div>
                    <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Contact Information */}
              <AnimatedSection>
                <div className="space-y-6">
                  {/* Main Contact Card */}
                  <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl font-bold flex items-center gap-3">
                        <Phone className="h-6 w-6 text-blue-600" />
                        Nos coordonnées
                      </CardTitle>
                      <CardDescription className="text-base">
                        Plusieurs moyens de nous contacter selon vos préférences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50 border border-blue-100">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <Phone className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-blue-900">Téléphone</h3>
                            <p className="text-blue-700 font-medium">+33 07 56 89 89 50</p>
                            <p className="text-sm text-blue-600">Appel gratuit depuis un fixe</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 border border-green-100">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                            <MessageCircle className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-green-900">WhatsApp</h3>
                            <a 
                              href="https://wa.me/330756898950" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-green-700 font-medium hover:text-green-800 transition-colors"
                            >
                              +33 07 56 89 89 50
                            </a>
                            <p className="text-sm text-green-600">Réponse rapide via WhatsApp</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-indigo-50 border border-indigo-100">
                          <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                            <Mail className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-indigo-900">Email</h3>
                            <p className="text-indigo-700 font-medium">contact@bureau-immatriculation.fr</p>
                            <p className="text-sm text-indigo-600">Réponse garantie sous 2h</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-purple-50 border border-purple-100">
                          <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-purple-900">Adresse du dépôt</h3>
                            <p className="text-purple-700 font-medium">83 ter rue Ernest Renan</p>
                            <p className="text-purple-700">51100 Reims, France</p>
                            <p className="text-sm text-purple-600">Proche centre-ville de Reims</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Hours */}
                  <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                        Horaires d'ouverture : 08:00 - 20:00 everyday
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="font-medium">Horaires</span>
              <span className="font-semibold text-green-600">08:00 - 20:00 tous les jours</span>
            </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Emergency Contact */}
                  <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-800 flex items-center gap-3">
                        <AlertCircle className="h-5 w-5" />
                        Contact d'urgence
                      </CardTitle>
                      <CardDescription className="text-orange-700">
                        Pour les demandes urgentes en dehors des heures d'ouverture
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <p className="text-orange-800 font-medium flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          contact@bureau-immatriculation.fr
                        </p>
                        <p className="text-sm text-orange-700 bg-orange-100 p-3 rounded-lg">
                          <strong>Réponse garantie sous 4h</strong>, même le week-end pour les cas urgents
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>

            {/* Service Areas Section */}
            <AnimatedSection>
              <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-blue-900 flex items-center gap-3">
                    <MapPin className="h-6 w-6" />
                    Zones d'intervention
                  </CardTitle>
                  <CardDescription className="text-blue-700">
                    Nous intervenons dans toute la région de Reims et ses environs pour vos démarches Bureau-Immatriculation et immatriculation temporaire
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4 text-blue-900 flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        Agglomération de Reims
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Badge variant="secondary" className="justify-center py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                          Reims
                        </Badge>
                        <Badge variant="secondary" className="justify-center py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                          Witry-lès-Reims
                        </Badge>
                        <Badge variant="secondary" className="justify-center py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                          Cormontreuil
                        </Badge>
                        <Badge variant="secondary" className="justify-center py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                          Bezannes
                        </Badge>
                        <Badge variant="secondary" className="justify-center py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                          Cernay-lès-Reims
                        </Badge>
                        <Badge variant="secondary" className="justify-center py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                          Bétheny
                        </Badge>
                        <Badge variant="secondary" className="justify-center py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                          Taissy
                        </Badge>
                        <Badge variant="secondary" className="justify-center py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                          Loivre
                        </Badge>
                        <Badge variant="secondary" className="justify-center py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                          Cormicy
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-blue-900 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Autres villes de la Marne
                      </h4>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="w-full justify-center py-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                          Châlons-en-Champagne
                        </Badge>
                        <Badge variant="secondary" className="w-full justify-center py-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                          Épernay
                        </Badge>
                      </div>
                      <div className="mt-4 p-4 bg-white/60 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-700 leading-relaxed">
                          <strong>Service Bureau-Immatriculation de proximité :</strong> Basés à Reims, nous garantissons une intervention rapide 
                          dans toutes ces communes pour vos démarches d'immatriculation temporaire et certificats provisoires.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </>
  )
}