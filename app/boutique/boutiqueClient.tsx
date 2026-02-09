"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, Clock, FileText, CheckCircle, X, ArrowRight, Car, Truck, Building, BadgeCheck, Timer, Send, Download, CreditCard, Users, Award, Zap, Globe, HeadphonesIcon, Star } from "lucide-react"
import Link from "next/link"
import { OrderNowButton } from "@/components/order-form-provider"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default function BoutiqueClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "CPI WW - Certificat Provisoire d'Immatriculation",
            description: "Service d'immatriculation temporaire pour véhicules importés en France",
            brand: {
              "@type": "Brand",
              name: "CPI WW",
            },
            offers: [
              {
                "@type": "Offer",
                name: "CPI WW Basic",
                description: "Certificat provisoire d'immatriculation valide 1 mois",
                price: "89",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                validFrom: new Date().toISOString(),
                priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
                seller: {
                  "@type": "Organization",
                  name: "CPI WW",
                },
              },
              {
                "@type": "Offer",
                name: "Renouvellement CPI WW",
                description: "Prolongation du certificat pour 1 mois supplémentaire",
                price: "59",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                validFrom: new Date().toISOString(),
                priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
                seller: {
                  "@type": "Organization",
                  name: "CPI WW",
                },
              },
              {
                "@type": "Offer",
                name: "CPI WW + Plaques",
                description: "Certificat + plaques temporaires WW",
                price: "149",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                validFrom: new Date().toISOString(),
                priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
                seller: {
                  "@type": "Organization",
                  name: "CPI WW",
                },
              },
              {
                "@type": "Offer",
                name: "Immatriculation Définitive",
                description: "Démarche complète d'immatriculation française",
                price: "249",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                validFrom: new Date().toISOString(),
                priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
                seller: {
                  "@type": "Organization",
                  name: "CPI WW",
                },
              },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/elegant-modern-car-registration-office-with-profes.jpg')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-700/90" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <BadgeCheck className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">Service agréé SIV</span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Nos services d'<span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">immatriculation</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Choisissez la formule adaptée à vos besoins. Traitement rapide et sécurisé garanti.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* CPI WW main section removed; CPI WW Standard added to services grid below */}

            {/* Individual Services Section */}
            <AnimatedSection className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Services</h2>
              </div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {/* CPI WW Standard */}
                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <CardHeader className="text-center pb-6">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Car className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">CPI WW Standard</CardTitle>
                      <div className="pt-2">
                        <span className="text-3xl font-bold text-primary">99.95€</span>
                        <span className="text-muted-foreground"> TTC</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center mb-4">Certificat provisoire d'immatriculation (WW) – traitement 24–48h</p>
                      <OrderNowButton className="w-full" serviceType="CPI WW Standard">
                        Commander
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </OrderNowButton>
                    </CardContent>
                  </Card>
                </motion.div>
                {/* Carte Grise */}
                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <CardHeader className="text-center pb-6">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">Carte grise</CardTitle>
                      <div className="pt-2">
                        <span className="text-3xl font-bold text-primary">29€</span>
                        <span className="text-muted-foreground"> TTC</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center mb-4">Service de traitement de carte grise</p>
                      <OrderNowButton className="w-full" serviceType="Carte Grise">
                        Commander
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </OrderNowButton>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Changement d'adresse */}
                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <CardHeader className="text-center pb-6">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Building className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">Changement d'adresse</CardTitle>
                      <div className="pt-2">
                        <span className="text-3xl font-bold text-primary">19€</span>
                        <span className="text-muted-foreground"> TTC</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center mb-4">Mise à jour de votre adresse</p>
                      <OrderNowButton className="w-full" serviceType="Changement d'adresse">
                        Commander
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </OrderNowButton>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Déclaration d'achat */}
                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <CardHeader className="text-center pb-6">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <CreditCard className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">Déclaration d'achat</CardTitle>
                      <div className="pt-2">
                        <span className="text-3xl font-bold text-primary">19€</span>
                        <span className="text-muted-foreground"> TTC</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center mb-4">Déclaration officielle d'achat</p>
                      <OrderNowButton className="w-full" serviceType="Déclaration d'achat">
                        Commander
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </OrderNowButton>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Cessions de véhicule */}
                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <CardHeader className="text-center pb-6">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Car className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">Cessions de véhicule</CardTitle>
                      <div className="pt-2">
                        <span className="text-3xl font-bold text-primary">19€</span>
                        <span className="text-muted-foreground"> TTC</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center mb-4">Formalités de cession</p>
                      <OrderNowButton className="w-full" serviceType="Cessions de véhicule">
                        Commander
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </OrderNowButton>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quitus Fiscal */}
                <motion.div variants={fadeInUp}>
                  <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <CardHeader className="text-center pb-6">
                      <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">Quitus Fiscal</CardTitle>
                      <div className="pt-2">
                        <span className="text-3xl font-bold text-primary">39€</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center mb-4">Quitus Fiscal pour véhicule importé</p>
                      <OrderNowButton className="w-full" serviceType="Quitus Fiscal">
                        Commander
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </OrderNowButton>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Process Section */}
            <AnimatedSection className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comment ça marche ?</h2>
                <p className="text-xl text-muted-foreground">Un processus simple et transparent</p>
              </div>

              <motion.div 
                className="grid md:grid-cols-4 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    step: "1",
                    title: "Choisissez votre formule",
                    description: "Sélectionnez le service adapté à vos besoins",
                    icon: Car,
                  },
                  {
                    step: "2",
                    title: "Envoyez vos documents",
                    description: "Carte grise étrangère et justificatifs requis",
                    icon: Send,
                  },
                  {
                    step: "3",
                    title: "Traitement express",
                    description: "Vérification et validation de votre dossier",
                    icon: Timer,
                  },
                  {
                    step: "4",
                    title: "Réception",
                    description: "Certificat par email et/ou courrier selon formule",
                    icon: Download,
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                      <CardContent className="pt-8">
                        <div className="bg-gradient-to-br from-primary to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold group-hover:scale-110 transition-transform">
                          {item.step}
                        </div>
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <item.icon className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection>
              <div className="text-center bg-gradient-to-br from-primary to-blue-700 text-white rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/elegant-modern-car-registration-office-with-profes.jpg')] bg-cover bg-center opacity-10" />
                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Une question sur nos services ?</h2>
                  <p className="text-xl mb-8 text-white/80">Notre équipe d'experts est là pour vous accompagner</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                      <Link href="/contact">
                        <HeadphonesIcon className="mr-2 h-5 w-5" />
                        Nous contacter
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary bg-transparent shadow-lg"
                    >
                      <Link href="/guide">
                        <FileText className="mr-2 h-5 w-5" />
                        Consulter le guide
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
