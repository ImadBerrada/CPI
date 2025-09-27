"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, Clock, FileText, CheckCircle, X, ArrowRight, Car, Truck, Building, BadgeCheck, Timer, Send, Download, CreditCard, Users, Award, Zap, Globe, HeadphonesIcon, Star } from "lucide-react"
import Link from "next/link"
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
                <span className="text-sm font-medium">Service agréé SIV n°189226</span>
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
            {/* Pricing Cards */}
            <AnimatedSection className="mb-20">
              <motion.div
                className="grid md:grid-cols-4 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {/* CPI WW Basic */}
                <motion.div variants={fadeInUp}>
                  <Card className="relative h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 group">
                    <CardHeader className="text-center pb-8">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Car className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">CPI WW</CardTitle>
                      <CardDescription className="text-base">Certificat provisoire d'immatriculation</CardDescription>
                      <div className="pt-4">
                        <span className="text-4xl font-bold text-primary">89€</span>
                        <span className="text-muted-foreground"> TTC</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {[
                          "Certificat CPI WW valide 1 mois",
                          "Traitement sous 24-48h",
                          "Envoi par email + courrier",
                          "Support client inclus",
                          "Conformité garantie",
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full mt-6 group-hover:bg-primary/90">
                        <Link href="#commander">
                          Commander
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* CPI WW Express */}
                <motion.div variants={fadeInUp}>
                  <Card className="relative h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-primary shadow-xl group scale-105">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Le plus populaire
                    </div>
                    <CardHeader className="text-center pb-8">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Timer className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">CPI WW Express</CardTitle>
                      <CardDescription className="text-base">Traitement prioritaire 24h</CardDescription>
                      <div className="pt-4">
                        <span className="text-4xl font-bold text-primary">129€</span>
                        <span className="text-muted-foreground"> TTC</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {[
                          "Certificat CPI WW valide 1 mois",
                          "Traitement prioritaire 24h",
                          "Envoi par email + courrier recommandé",
                          "Support prioritaire",
                          "Conformité garantie",
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90">
                        <Link href="#commander">
                          Commander
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Livraison Express */}
                <motion.div variants={fadeInUp}>
                  <Card className="relative h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 group">
                    <CardHeader className="text-center pb-8">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Truck className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">Livraison Express</CardTitle>
                      <CardDescription className="text-base">Réception sous 24h</CardDescription>
                      <div className="pt-4">
                        <span className="text-4xl font-bold text-primary">+39€</span>
                        <span className="text-muted-foreground"> TTC</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {[
                          "Livraison express 24h",
                          "Suivi en temps réel",
                          "Remise en main propre",
                          "Assurance incluse",
                          "Disponible partout en France",
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="w-full mt-6">
                        <Link href="#commander">
                          Ajouter
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Immatriculation Définitive */}
                <motion.div variants={fadeInUp}>
                  <Card className="relative h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 group">
                    <CardHeader className="text-center pb-8">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Building className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">Immatriculation Définitive</CardTitle>
                      <CardDescription className="text-base">Service complet</CardDescription>
                      <div className="pt-4">
                        <span className="text-4xl font-bold text-primary">249€</span>
                        <span className="text-muted-foreground"> TTC</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {[
                          "Démarche complète d'immatriculation",
                          "Nouvelle carte grise française",
                          "Gestion de tous les documents",
                          "Support dédié",
                          "Garantie de conformité",
                        ].map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <BadgeCheck className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="w-full mt-6">
                        <Link href="#commander">
                          Commander
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Comparison Table */}
            <AnimatedSection className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comparaison des services</h2>
                <p className="text-xl text-muted-foreground">Trouvez la formule qui correspond à vos besoins</p>
              </div>

              <Card className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold text-foreground">Caractéristiques</TableHead>
                      <TableHead className="text-center font-semibold text-foreground">CPI WW</TableHead>
                      <TableHead className="text-center font-semibold text-foreground bg-orange-50">
                        Renouvellement
                      </TableHead>
                      <TableHead className="text-center font-semibold text-foreground bg-blue-50">
                        CPI WW + Plaques
                      </TableHead>
                      <TableHead className="text-center font-semibold text-foreground">Immat. Définitive</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        feature: "Certificat d'immatriculation",
                        basic: true,
                        renewal: true,
                        premium: true,
                        definitive: true,
                      },
                      {
                        feature: "Plaques temporaires WW",
                        basic: false,
                        renewal: false,
                        premium: true,
                        definitive: false,
                      },
                      {
                        feature: "Plaques françaises définitives",
                        basic: false,
                        renewal: false,
                        premium: false,
                        definitive: true,
                      },
                      {
                        feature: "Délai de traitement",
                        basic: "24-48h",
                        renewal: "24h",
                        premium: "24-48h",
                        definitive: "5-7 jours",
                      },
                      {
                        feature: "Validité",
                        basic: "1 mois",
                        renewal: "+1 mois",
                        premium: "1 mois",
                        definitive: "Définitive",
                      },
                      {
                        feature: "Support client",
                        basic: "Standard",
                        renewal: "Standard",
                        premium: "Prioritaire",
                        definitive: "Dédié",
                      },
                      {
                        feature: "Prix TTC",
                        basic: "89€",
                        renewal: "59€",
                        premium: "149€",
                        definitive: "249€",
                      },
                    ].map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-center">
                          {typeof row.basic === "boolean" ? (
                            row.basic ? (
                              <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            row.basic
                          )}
                        </TableCell>
                        <TableCell className="text-center bg-orange-50/50">
                          {typeof row.renewal === "boolean" ? (
                            row.renewal ? (
                              <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            row.renewal
                          )}
                        </TableCell>
                        <TableCell className="text-center bg-blue-50/50">
                          {typeof row.premium === "boolean" ? (
                            row.premium ? (
                              <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            row.premium
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {typeof row.definitive === "boolean" ? (
                            row.definitive ? (
                              <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            row.definitive
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
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
