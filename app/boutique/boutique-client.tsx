"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, Clock, FileText, CheckCircle, X, ArrowRight, Car, Truck, Building } from "lucide-react"
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

export default function BoutiqueClientPage() {
  return (
    <div className="min-h-screen">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Service agréé SIV n°189226
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Nos services d'immatriculation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Choisissez la formule adaptée à vos besoins. Traitement rapide et sécurisé garanti.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-20"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* CPI WW Basic */}
            <motion.div variants={fadeInUp}>
              <Card className="relative h-full hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader className="text-center pb-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">CPI WW</CardTitle>
                  <CardDescription className="text-base">Certificat provisoire d'immatriculation</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">89€</span>
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
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700" size="lg">
                    Commander maintenant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* CPI WW + Plaques */}
            <motion.div variants={fadeInUp}>
              <Card className="relative h-full hover:shadow-xl transition-all duration-300 border-2 border-blue-200 bg-blue-50/30">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">Le plus populaire</Badge>
                </div>
                <CardHeader className="text-center pb-8">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">CPI WW + Plaques</CardTitle>
                  <CardDescription className="text-base">Certificat + plaques temporaires WW</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">149€</span>
                    <span className="text-muted-foreground"> TTC</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Certificat CPI WW valide 1 mois",
                      "Paire de plaques WW incluses",
                      "Traitement sous 24-48h",
                      "Livraison express 48-72h",
                      "Support client prioritaire",
                      "Conformité garantie",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700" size="lg">
                    Commander maintenant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Immatriculation Définitive */}
            <motion.div variants={fadeInUp}>
              <Card className="relative h-full hover:shadow-xl transition-all duration-300 border-2">
                <CardHeader className="text-center pb-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Immatriculation Définitive</CardTitle>
                  <CardDescription className="text-base">Démarche complète d'immatriculation</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">249€</span>
                    <span className="text-muted-foreground"> TTC</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      "Carte grise française définitive",
                      "Gestion complète du dossier",
                      "Traitement sous 5-7 jours",
                      "Plaques françaises incluses",
                      "Support client dédié",
                      "Garantie satisfaction",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-green-600 hover:bg-green-700" size="lg">
                    Commander maintenant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
                      premium: true,
                      definitive: true,
                    },
                    {
                      feature: "Plaques temporaires WW",
                      basic: false,
                      premium: true,
                      definitive: false,
                    },
                    {
                      feature: "Plaques françaises définitives",
                      basic: false,
                      premium: false,
                      definitive: true,
                    },
                    {
                      feature: "Délai de traitement",
                      basic: "24-48h",
                      premium: "24-48h",
                      definitive: "5-7 jours",
                    },
                    {
                      feature: "Validité",
                      basic: "1 mois",
                      premium: "1 mois",
                      definitive: "Définitive",
                    },
                    {
                      feature: "Support client",
                      basic: "Standard",
                      premium: "Prioritaire",
                      definitive: "Dédié",
                    },
                    {
                      feature: "Prix TTC",
                      basic: "89€",
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
          </motion.div>

          {/* Process Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comment ça marche ?</h2>
              <p className="text-xl text-muted-foreground">Un processus simple et transparent</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
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
                  icon: FileText,
                },
                {
                  step: "3",
                  title: "Traitement express",
                  description: "Vérification et validation de votre dossier",
                  icon: Clock,
                },
                {
                  step: "4",
                  title: "Réception",
                  description: "Certificat par email et/ou courrier selon formule",
                  icon: CheckCircle,
                },
              ].map((item, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="pt-8">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {item.step}
                    </div>
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center bg-blue-600 text-white rounded-2xl p-12"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Une question sur nos services ?</h2>
            <p className="text-xl mb-8 text-blue-100">Notre équipe d'experts est là pour vous accompagner</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/guide">Consulter le guide</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
