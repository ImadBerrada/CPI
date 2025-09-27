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
              "name": "CPI WW Services",
              "telephone": "+33 1 23 45 67 89",
              "email": "contact@cpi-ww.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Avenue de la République",
                "addressLocality": "Paris",
                "postalCode": "75011",
                "addressCountry": "FR"
              }
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
                  Service agréé SIV n°189226
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
                        placeholder="01 23 45 67 89" 
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
                            <p className="text-blue-700 font-medium">+33 1 23 45 67 89</p>
                            <p className="text-sm text-blue-600">Appel gratuit depuis un fixe</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50 border border-green-100">
                          <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                            <Mail className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-green-900">Email</h3>
                            <p className="text-green-700 font-medium">contact@cpi-ww.fr</p>
                            <p className="text-sm text-green-600">Réponse garantie sous 2h</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-purple-50 border border-purple-100">
                          <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-purple-900">Adresse</h3>
                            <p className="text-purple-700 font-medium">123 Avenue de la République</p>
                            <p className="text-purple-700">75011 Paris, France</p>
                            <p className="text-sm text-purple-600">Métro République (Lignes 3, 5, 8, 9, 11)</p>
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
                        Horaires d'ouverture
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium">Lundi - Vendredi</span>
                          <span className="font-semibold text-green-600">9h00 - 18h00</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium">Samedi</span>
                          <span className="font-semibold text-green-600">9h00 - 12h00</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="font-medium">Dimanche</span>
                          <span className="text-red-500 font-semibold">Fermé</span>
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
                          urgence@cpi-ww.fr
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

            {/* Legal Information Section */}
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Mentions légales
                </h2>
                <p className="text-xl text-gray-600">Informations légales et réglementaires</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Company Information */}
                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Building2 className="h-6 w-6 text-blue-600" />
                      Informations société
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-900 mb-1">Raison sociale</h4>
                      <p className="text-blue-700">CPI WW Services SARL</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="font-semibold text-green-900 mb-1">SIRET</h4>
                      <p className="text-green-700 font-mono">123 456 789 00012</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <h4 className="font-semibold text-purple-900 mb-1">Code APE</h4>
                      <p className="text-purple-700">8211Z - Services administratifs combinés de bureau</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                      <h4 className="font-semibold text-orange-900 mb-1">Capital social</h4>
                      <p className="text-orange-700">50 000 € entièrement libéré</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                      <h4 className="font-semibold mb-1 flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4" />
                        Agrément SIV
                      </h4>
                      <p className="font-bold text-lg">n°189226</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Legal Compliance */}
                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Scale className="h-6 w-6 text-blue-600" />
                      Conformité légale
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-blue-900 mb-1">Autorité de tutelle</h4>
                      <p className="text-blue-700">Ministère de l'Intérieur</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="font-semibold text-green-900 mb-1">Assurance professionnelle</h4>
                      <p className="text-green-700">AXA Pro - Police n°123456789</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <h4 className="font-semibold text-purple-900 mb-1">Hébergement</h4>
                      <p className="text-purple-700">OVH SAS - 2 rue Kellermann, 59100 Roubaix</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                      <h4 className="font-semibold text-orange-900 mb-1">DPO</h4>
                      <p className="text-orange-700">dpo@cpi-ww.fr</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* GDPR Information */}
              <Card className="mt-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <UserCheck className="h-6 w-6 text-blue-600" />
                    Protection des données personnelles (RGPD)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-semibold mb-3 text-blue-900 flex items-center gap-2">
                        <FileCheck className="h-4 w-4" />
                        Collecte des données
                      </h4>
                      <p className="text-sm text-blue-700 leading-relaxed">
                        Nous collectons uniquement les données nécessaires au traitement de votre demande
                        d'immatriculation. Aucune donnée n'est partagée avec des tiers sans votre consentement
                        explicite.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="font-semibold mb-3 text-green-900 flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4" />
                        Vos droits
                      </h4>
                      <p className="text-sm text-green-700 leading-relaxed">
                        Vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos
                        données. Contactez notre DPO pour exercer vos droits.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <h4 className="font-semibold mb-3 text-purple-900 flex items-center gap-2">
                        <Timer className="h-4 w-4" />
                        Conservation
                      </h4>
                      <p className="text-sm text-purple-700 leading-relaxed">
                        Vos données sont conservées pendant la durée légale requise (5 ans pour les documents
                        d'immatriculation) puis supprimées automatiquement.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                      <h4 className="font-semibold mb-3 text-orange-900 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Sécurité
                      </h4>
                      <p className="text-sm text-orange-700 leading-relaxed">
                        Toutes les données sont chiffrées et stockées sur des serveurs sécurisés en France. Nous
                        respectons les standards de sécurité les plus élevés.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terms of Service */}
              <Card className="mt-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <FileText className="h-6 w-6 text-blue-600" />
                    Conditions générales de vente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-semibold mb-3 text-blue-900 flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Commande
                      </h4>
                      <p className="text-sm text-blue-700 leading-relaxed">
                        Toute commande implique l'acceptation pleine et entière de nos conditions générales de vente.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="font-semibold mb-3 text-green-900 flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4" />
                        Paiement
                      </h4>
                      <p className="text-sm text-green-700 leading-relaxed">
                        Le paiement s'effectue en ligne par carte bancaire sécurisée. Aucun traitement sans paiement
                        préalable.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <h4 className="font-semibold mb-3 text-purple-900 flex items-center gap-2">
                        <Timer className="h-4 w-4" />
                        Rétractation
                      </h4>
                      <p className="text-sm text-purple-700 leading-relaxed">
                        Droit de rétractation de 14 jours, sauf si le service a été entièrement exécuté avec votre
                        accord.
                      </p>
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
