"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, FileText, Clock, CheckCircle, AlertTriangle, ArrowRight, BadgeCheck, Send, Timer, Download, Scale, FileCheck, HelpCircle, BookOpen, Users, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import { OrderNowButton } from "@/components/order-form-provider"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)

export default function GuideClientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Qu'est-ce qu'un certificat CPI WW ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le Certificat Provisoire d'Immatriculation WW est un document officiel qui permet de circuler temporairement en France avec un véhicule importé, en attendant l'immatriculation définitive. Il est valable 1 mois et peut être renouvelé une fois.",
                },
              },
              {
                "@type": "Question",
                name: "Combien de temps faut-il pour obtenir le CPI WW ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le délai de traitement est de 24 à 48 heures ouvrées après réception de votre dossier complet. Le certificat vous est envoyé par email immédiatement, et l'original suit par courrier recommandé.",
                },
              },
              {
                "@type": "Question",
                name: "Puis-je circuler partout en Europe avec un CPI WW ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le CPI WW permet de circuler uniquement sur le territoire français. Pour circuler dans d'autres pays européens, vous devez obtenir l'immatriculation définitive française ou conserver l'immatriculation du pays d'origine selon les accords bilatéraux.",
                },
              },
            ],
          }),
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
                  <BookOpen className="w-4 h-4 mr-2" />
                  Guide complet CPI WW
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Guide Complet
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Tout ce que vous devez savoir sur le Certificat Provisoire d'Immatriculation WW
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Timer className="w-4 h-4" />
                    <span>Démarche 24-48h</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <BadgeCheck className="w-4 h-4" />
                    <span>Service agréé</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <HelpCircle className="w-4 h-4" />
                    <span>Support expert</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 space-y-20">
          {/* Quick Steps */}
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Démarche en 3 étapes simples</h2>
              <p className="text-xl text-gray-600">Un processus optimisé pour votre confort</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Préparez vos documents",
                    description: "Rassemblez tous les justificatifs nécessaires",
                    icon: Send,
                    color: "from-blue-500 to-blue-600",
                    bgColor: "from-blue-50 to-blue-100",
                  },
                  {
                    step: "2",
                    title: "Commandez en ligne",
                    description: "Choisissez votre formule et envoyez vos documents",
                    icon: Timer,
                    color: "from-orange-500 to-orange-600",
                    bgColor: "from-orange-50 to-orange-100",
                  },
                  {
                    step: "3",
                    title: "Recevez votre CPI WW",
                    description: "Certificat envoyé sous 24-48h par email",
                    icon: Download,
                    color: "from-green-500 to-green-600",
                    bgColor: "from-green-50 to-green-100",
                  },
                ].map((item, index) => (
                  <Card key={index} className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group bg-white/80 backdrop-blur-sm">
                    <CardContent className="pt-8 pb-6">
                      <div className={`bg-gradient-to-r ${item.color} text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.step}
                      </div>
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300`}>
                        <item.icon className="h-10 w-10 text-slate-700" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3 text-slate-800">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
          </AnimatedSection>

          {/* Documents Required */}
          <AnimatedSection delay={0.2}>
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                      <FileCheck className="h-6 w-6 text-blue-600" />
                    </div>
                    Documents nécessaires
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600">
                    Liste complète des justificatifs à fournir pour votre demande CPI WW
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <Alert className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <AlertDescription className="text-amber-800 font-medium">
                      Tous les documents doivent être lisibles et en couleur. Les photocopies noir et blanc ne sont pas
                      acceptées.
                    </AlertDescription>
                  </Alert>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-green-600 flex items-center gap-2">
                        <BadgeCheck className="h-5 w-5" />
                        Documents obligatoires
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "Carte grise étrangère (original)",
                          "Pièce d'identité du demandeur",
                          "Justificatif de domicile (-3 mois)",
                          "Certificat de conformité européen",
                          "Facture d'achat du véhicule",
                        ].map((doc, index) => (
                          <li key={index} className="flex items-center gap-3 text-sm bg-green-50 p-3 rounded-lg">
                            <BadgeCheck className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-slate-700">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-orange-600 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Documents complémentaires
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "Procuration si représentant",
                          "Certificat de cession si occasion",
                          "Contrôle technique si requis",
                          "Attestation d'assurance",
                        ].map((doc, index) => (
                          <li key={index} className="flex items-center gap-3 text-sm bg-orange-50 p-3 rounded-lg">
                            <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                            <span className="text-slate-700">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </AnimatedSection>

          {/* FAQ Section */}
          <AnimatedSection delay={0.3}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
                <HelpCircle className="h-8 w-8 text-blue-600" />
                Foire aux questions
              </h2>
              <p className="text-xl text-gray-600">Toutes les réponses à vos interrogations</p>
            </div>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Qu'est-ce qu'un certificat CPI WW ?",
                    answer: "Le Certificat Provisoire d'Immatriculation WW est un document officiel qui permet de circuler temporairement en France avec un véhicule importé, en attendant l'immatriculation définitive. Il est valable 1 mois et peut être renouvelé une fois."
                  },
                  {
                    question: "Combien de temps faut-il pour obtenir le CPI WW ?",
                    answer: "Le délai de traitement est de 24 à 48 heures ouvrées après réception de votre dossier complet. Le certificat vous est envoyé par email immédiatement, et l'original suit par courrier recommandé."
                  },
                  {
                    question: "Puis-je circuler partout en Europe avec un CPI WW ?",
                    answer: "Le CPI WW permet de circuler uniquement sur le territoire français. Pour circuler dans d'autres pays européens, vous devez obtenir l'immatriculation définitive française ou conserver l'immatriculation du pays d'origine selon les accords bilatéraux."
                  },
                  {
                    question: "Que faire si mon dossier est incomplet ?",
                    answer: "Si votre dossier est incomplet, nous vous contactons dans les 24h pour vous indiquer les documents manquants. Le traitement reprend dès réception des pièces complémentaires. Aucun frais supplémentaire n'est appliqué."
                  },
                  {
                    question: "Les plaques WW sont-elles obligatoires ?",
                    answer: "Les plaques WW ne sont pas obligatoires si vous conservez temporairement les plaques d'origine du véhicule. Cependant, elles sont fortement recommandées pour éviter tout contrôle et faciliter l'identification du véhicule par les forces de l'ordre."
                  },
                  {
                    question: "Puis-je renouveler mon CPI WW ?",
                    answer: "Oui, le CPI WW peut être renouvelé une seule fois pour une durée d'1 mois supplémentaire. Au-delà, vous devez obligatoirement procéder à l'immatriculation définitive française. Le renouvellement coûte 59€ TTC."
                  },
                  {
                    question: "Quels sont les délais pour l'immatriculation définitive ?",
                    answer: "L'immatriculation définitive prend généralement 5 à 7 jours ouvrés. Ce délai peut être prolongé en cas de contrôle technique obligatoire ou de vérifications supplémentaires par les services préfectoraux."
                  },
                  {
                    question: "Que faire en cas de contrôle routier ?",
                    answer: "Présentez votre CPI WW, votre permis de conduire et l'attestation d'assurance. Le certificat fait foi auprès des forces de l'ordre. En cas de difficulté, notre service client peut intervenir pour confirmer la validité du document."
                  }
                ].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`} className="border-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    <AccordionTrigger className="text-left px-6 py-4 hover:no-underline font-medium text-slate-800">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 px-6 pb-4 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
                  </Accordion>
                </CardContent>
              </Card>
          </AnimatedSection>

          {/* Legal References */}
          <AnimatedSection delay={0.4}>
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                      <Scale className="h-6 w-6 text-blue-600" />
                    </div>
                    Références légales
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600">
                    Textes de loi et réglementations applicables
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-slate-800">Code de la route</h4>
                      <ul className="space-y-3">
                        {[
                          "Article R322-1 : Obligation d'immatriculation",
                          "Article R322-8 : Certificat provisoire",
                          "Article R322-9 : Durée de validité"
                        ].map((item, index) => (
                          <li key={index} className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg text-slate-800">Arrêtés ministériels</h4>
                      <ul className="space-y-3">
                        {[
                          "Arrêté du 9 février 2009",
                          "Arrêté du 5 novembre 2020",
                          "Circulaire du 15 mars 2021"
                        ].map((item, index) => (
                          <li key={index} className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Alert className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <BadgeCheck className="h-5 w-5 text-blue-600" />
                    <AlertDescription className="text-blue-800 font-medium">
                      Notre service est agréé par le Ministère de l'Intérieur sous le numéro SIV  279558. Toutes nos
                      démarches respectent strictement la réglementation en vigueur.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection delay={0.5}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-12 text-center shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
              <div className="relative">
                <h2 className="text-4xl font-bold mb-4 text-white">Prêt à commencer votre démarche ?</h2>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  Vous avez toutes les informations nécessaires, lancez votre demande maintenant
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <OrderNowButton serviceType="CPI WW Standard" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3" size="lg">
                    <span className="flex items-center gap-2">Commander maintenant<ArrowRight className="h-5 w-5" /></span>
                  </OrderNowButton>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Une question ?
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <Footer />
      </div>
    </>
  )
}
