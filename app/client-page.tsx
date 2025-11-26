"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Shield, Clock, FileText, CheckCircle, Star, ArrowRight, Users, Award, Phone, Mail, MapPin, TrendingUp, Zap, Globe, HeadphonesIcon, ChevronDown, ChevronUp, Euro, Calendar, Truck, Car, FileCheck, CreditCard, UserCheck, BadgeCheck, Clipboard, Timer, Send, Download, Building2, Scale, Gavel } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function ClientPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with sophisticated overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/european-car-registration-office-professional.jpg')`,
            }}
          />
          <div className="absolute inset-0 gradient-overlay" />
          
          {/* Floating elements for visual interest */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            className="space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-balance leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              CPI WW Reims et Carte Grise{" "}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Marne</span>
              <br />
              <span className="text-3xl lg:text-5xl font-normal text-white/90">Service Rapide Agréé dans la Marne</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-white/80 text-pretty max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Service professionnel d'immatriculation temporaire CPI WW et carte grise à Reims pour véhicules importés. Changement carte grise, duplicata carte grise, carte grise perdue ou volée. Intervention rapide à Witry-lès-Reims, Cormontreuil, Bezannes, Châlons-en-Champagne et Épernay. Démarches
              simplifiées, délais respectés, conformité garantie.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-10 py-6 rounded-xl relative overflow-hidden group"
              >
                <Link href="/boutique">
                  <span className="relative z-10">Commander maintenant</span>
                  <ArrowRight className="ml-3 h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 text-lg px-10 py-6"
              >
                <Link href="/guide">Voir le guide</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 text-lg px-10 py-6"
              >
                <Link href="/admin/login">Admin</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 pt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { icon: BadgeCheck, text: "Service agréé", color: "text-green-400" },
                { icon: Timer, text: "Traitement 24-48h", color: "text-blue-400" },
                { icon: Shield, text: "Données sécurisées", color: "text-white" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/90 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust badges moved lower */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="trust-badge bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Shield className="w-4 h-4" />
                
              </div>
              <div className="trust-badge bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <Award className="w-4 h-4" />
                
              </div>
              <div className="trust-badge bg-white/10 text-white border-white/20 backdrop-blur-sm">
                <BadgeCheck className="w-4 h-4" />
                Paiement sécurisé
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: 15000, label: "Dossiers traités", suffix: "+" },
              { number: 98, label: "Taux de satisfaction", suffix: "%" },
              { number: 24, label: "Délai moyen", suffix: "h" },
              { number: 10, label: "Années d'expérience", suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={stat.number} />
                  {stat.suffix}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Transparency Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Tarifs transparents
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Des prix clairs et compétitifs pour tous vos besoins d'immatriculation
              </p>
            </motion.div>
          </div>

          {/* CPI WW Standard Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl border border-blue-200 overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">CPI WW Standard</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Service d'immatriculation temporaire pour véhicules importés. Traitement rapide en 24-48h.
                  </p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                      79.95€
                  </div>
                  <p className="text-sm text-gray-500">Prix transparent, sans frais cachés</p>
                </div>
                
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  <Link href="/boutique">
                    Commander maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nos Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services d'immatriculation et de carte grise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Carte Grise Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Service Individuel
                  </span>
                  <FileText className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Carte Grise
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Service de traitement de carte grise pour tous types de véhicules.
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">29€</span>
                </div>
                
                <Button asChild className="w-full">
                  <Link href="/boutique">
                    Commander
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Changement d'adresse Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    Service Individuel
                  </span>
                  <MapPin className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Changement d'adresse
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Mise à jour de votre adresse sur votre carte grise.
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">19€</span>
                </div>
                
                <Button asChild className="w-full">
                  <Link href="/boutique">
                    Commander
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Déclaration d'achat Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                    Service Individuel
                  </span>
                  <Clipboard className="h-6 w-6 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  Déclaration d'achat
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Déclaration officielle d'achat de véhicule.
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">19€</span>
                </div>
                
                <Button asChild className="w-full">
                  <Link href="/boutique">
                    Commander
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Cessions de véhicule Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                    Service Individuel
                  </span>
                  <UserCheck className="h-6 w-6 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  Cessions de véhicule
                </h3>
                
                <p className="text-gray-600 mb-4">
                  Formalités de cession pour la vente de votre véhicule.
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">19€</span>
                </div>
                
                <Button asChild className="w-full">
                  <Link href="/boutique">
                    Commander
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/boutique">
                Voir tous nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Démarche en 3 étapes à Reims</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Un processus simplifié pour votre immatriculation temporaire dans la Marne
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Envoi des documents",
                desc: "Transmettez votre carte grise étrangère et les justificatifs requis via notre interface sécurisée",
                icon: Send,
              },
              {
                step: "02",
                title: "Traitement express",
                desc: "Notre équipe certifiée vérifie et valide votre dossier dans un délai de 24 à 48 heures",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Réception CPI WW",
                desc: "Recevez votre certificat par email immédiatement, puis par courrier recommandé",
                icon: Download,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card-premium text-center h-full group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-blue-200 text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>

                {/* Connection line */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Enhanced Features Section */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-muted/30 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Pourquoi choisir notre service à Reims ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une expertise reconnue pour vos démarches d'immatriculation temporaire dans la Marne et l'agglomération rémoise
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Scale,
                title: "Service agréé SIV",
                description: "Habilitation officielle n°189226 pour toutes vos démarches d'immatriculation",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: Timer,
                title: "Traitement ultra-rapide",
                description: "Délai de traitement de 24 à 48h pour votre certificat CPI WW",
                color: "from-yellow-500 to-orange-600",
              },
              {
                icon: Car,
                title: "Interface moderne",
                description: "Plateforme intuitive et accompagnement personnalisé à chaque étape",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: Building2,
                title: "Expertise reconnue",
                description: "Plus de 10 ans d'expérience dans l'immatriculation de véhicules importés",
                color: "from-purple-500 to-indigo-600",
              },
              {
                icon: HeadphonesIcon,
                title: "Support premium",
                description: "Équipe dédiée disponible pour répondre à toutes vos questions",
                color: "from-pink-500 to-rose-600",
              },
              {
                icon: Gavel,
                title: "Conformité garantie",
                description: "Respect strict de la réglementation française et européenne",
                color: "from-teal-500 to-green-600",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="card-premium h-full group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                  <div className={`bg-gradient-to-br ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>



      <AnimatedSection className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ils nous font confiance</h2>
            <p className="text-xl text-muted-foreground">Découvrez les témoignages de nos clients satisfaits</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie Dubois",
                role: "Particulier",
                content:
                  "Service impeccable ! J'ai reçu mon CPI WW en 24h. L'équipe est très professionnelle et répond rapidement aux questions.",
                rating: 5,
              },
              {
                name: "Jean-Pierre Martin",
                role: "Concessionnaire",
                content:
                  "Nous travaillons avec eux depuis 3 ans. Toujours dans les délais, jamais de problème. Je recommande vivement !",
                rating: 5,
              },
              {
                name: "Sophie Laurent",
                role: "Importateur",
                content:
                  "Interface simple, prix transparent, service client au top. Exactement ce qu'il faut pour nos démarches d'import.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-premium h-full">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

   

      {/* Local News & Events Section */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Actualités CPI WW Reims & Marne</h2>
            <p className="text-xl text-muted-foreground">Restez informé des dernières nouveautés et événements locaux</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Nouvelle réglementation 2024",
                date: "15 Janvier 2024",
                category: "Réglementation",
                excerpt: "Découvrez les nouvelles dispositions pour l'immatriculation des véhicules importés dans la Marne.",
                location: "Reims, Marne",
                icon: <FileCheck className="h-6 w-6" />
              },
              {
                title: "Salon de l'Auto Reims 2024",
                date: "8-10 Mars 2024",
                category: "Événement",
                excerpt: "Retrouvez-nous au Salon de l'Automobile de Reims pour vos questions sur l'immatriculation.",
                location: "Parc des Expositions, Reims",
                icon: <Car className="h-6 w-6" />
              },
              {
                title: "Partenariat Concessionnaires Marne",
                date: "22 Février 2024",
                category: "Partenariat",
                excerpt: "Extension de notre réseau de partenaires concessionnaires dans le département de la Marne.",
                location: "Châlons-en-Champagne",
                icon: <Building2 className="h-6 w-6" />
              },
              {
                title: "Service Express Épernay",
                date: "5 Avril 2024",
                category: "Service",
                excerpt: "Ouverture d'un nouveau point de service express à Épernay pour vos démarches CPI WW.",
                location: "Épernay, Marne",
                icon: <Zap className="h-6 w-6" />
              },
              {
                title: "Formation Professionnels Auto",
                date: "18 Mai 2024",
                category: "Formation",
                excerpt: "Session de formation gratuite pour les professionnels de l'automobile sur les nouvelles procédures.",
                location: "Reims",
                icon: <Users className="h-6 w-6" />
              },
              {
                title: "Digitalisation des Démarches",
                date: "12 Juin 2024",
                category: "Innovation",
                excerpt: "Lancement de notre nouvelle plateforme digitale pour simplifier vos démarches d'immatriculation.",
                location: "Service en ligne",
                icon: <Globe className="h-6 w-6" />
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {news.category}
                    </span>
                    <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      {news.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{news.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/actualites">
                Voir toutes les actualités
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Carte Grise Benefits and Features Section */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Avantages de notre Service Carte Grise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bureau carte grise agréé dans la Marne - Service professionnel pour tous vos besoins carte grise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: BadgeCheck,
                title: "Service Agréé SIV",
                description: "Habilitation officielle n°279558 pour tous services carte grise",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Timer,
                title: "Traitement Express",
                description: "Carte grise traitée en 24-48h maximum, certificat provisoire immédiat",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: Euro,
                title: "Prix Transparents",
                description: "Tarifs carte grise clairs, sans frais cachés, devis gratuit",
                color: "from-yellow-500 to-orange-600"
              },
              {
                icon: HeadphonesIcon,
                title: "Accompagnement",
                description: "Support dédié pour toutes vos démarches carte grise",
                color: "from-purple-500 to-indigo-600"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} mb-6`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Types de Cartes Grises Traitées</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Car, title: "Voitures particulières", desc: "Carte grise voiture, changement propriétaire" },
                { icon: Truck, title: "Véhicules utilitaires", desc: "Carte grise camionnette, fourgon" },
                { icon: FileCheck, title: "Motos et scooters", desc: "Carte grise moto, cyclomoteur" },
                { icon: Building2, title: "Véhicules de collection", desc: "Carte grise collection, véhicule ancien" },
                { icon: Globe, title: "Véhicules importés", desc: "Import UE, hors UE, homologation" },
                { icon: CreditCard, title: "Véhicules neufs", desc: "Première immatriculation, concessionnaire" }
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <type.icon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{type.title}</h4>
                    <p className="text-sm text-gray-600">{type.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Questions fréquentes sur le CPI WW à Reims</h2>
            <p className="text-xl text-muted-foreground">
              Trouvez rapidement les réponses à vos questions sur l'immatriculation temporaire dans la Marne
            </p>
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Qu'est-ce qu'un CPI WW ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Le CPI WW (Certificat Provisoire d'Immatriculation WW) est un document officiel qui permet de circuler temporairement en France avec un véhicule importé, en attendant l'immatriculation définitive."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Combien de temps faut-il pour obtenir le certificat ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Le délai standard est de 24 à 48 heures ouvrées après réception de votre dossier complet. Nous proposons également un service express en 24h."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quels documents sont nécessaires ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Vous devez fournir la carte grise étrangère, un justificatif d'identité, un justificatif de domicile, et selon le cas, un certificat de conformité européen."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Le CPI WW est-il valable dans toute l'Europe ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Le CPI WW est principalement destiné à la circulation en France. Pour circuler dans d'autres pays européens, vérifiez les réglementations locales."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Que se passe-t-il après l'expiration du CPI WW ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Vous devez effectuer l'immatriculation définitive française avant l'expiration. Nous pouvons vous accompagner dans cette démarche."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Comment faire un changement de carte grise ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Pour un changement de carte grise (changement de propriétaire), vous devez fournir l'ancienne carte grise, un certificat de cession, une pièce d'identité et un justificatif de domicile. Notre service agréé traite votre dossier en 24-48h."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Combien coûte un duplicata de carte grise ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Le prix d'un duplicata de carte grise comprend les taxes officielles plus nos frais de service. Contactez-nous pour un devis personnalisé selon votre véhicule et votre situation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Que faire en cas de carte grise perdue ou volée ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "En cas de carte grise perdue ou volée, vous devez faire une déclaration en préfecture ou gendarmerie, puis demander un duplicata. Nous nous occupons de toutes les démarches pour vous."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Comment changer l'adresse sur ma carte grise ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Pour un changement d'adresse carte grise, vous devez le faire dans le mois suivant votre déménagement. Nous traitons rapidement votre demande avec les nouveaux justificatifs de domicile."
                    }
                  }
                ]
              })
            }}
          />

          <div className="space-y-4">
            {[
              {
                question: "Qu'est-ce qu'un CPI WW ?",
                answer: "Le CPI WW (Certificat Provisoire d'Immatriculation WW) est un document officiel qui permet de circuler temporairement en France avec un véhicule importé, en attendant l'immatriculation définitive."
              },
              {
                question: "Combien de temps faut-il pour obtenir le certificat ?",
                answer: "Le délai standard est de 24 à 48 heures ouvrées après réception de votre dossier complet. Nous proposons également un service express en 24h."
              },
              {
                question: "Quels documents sont nécessaires ?",
                answer: "Vous devez fournir la carte grise étrangère, un justificatif d'identité, un justificatif de domicile, et selon le cas, un certificat de conformité européen."
              },
              {
                question: "Le CPI WW est-il valable dans toute l'Europe ?",
                answer: "Le CPI WW est principalement destiné à la circulation en France. Pour circuler dans d'autres pays européens, vérifiez les réglementations locales."
              },
              {
                question: "Que se passe-t-il après l'expiration du CPI WW ?",
                answer: "Vous devez effectuer l'immatriculation définitive française avant l'expiration. Nous pouvons vous accompagner dans cette démarche."
              },
              {
                question: "Comment faire un changement de carte grise ?",
                answer: "Pour un changement de carte grise (changement de propriétaire), vous devez fournir l'ancienne carte grise, un certificat de cession, une pièce d'identité et un justificatif de domicile. Notre service agréé traite votre dossier en 24-48h."
              },
              {
                question: "Combien coûte un duplicata de carte grise ?",
                answer: "Le prix d'un duplicata de carte grise comprend les taxes officielles plus nos frais de service. Contactez-nous pour un devis personnalisé selon votre véhicule et votre situation."
              },
              {
                question: "Que faire en cas de carte grise perdue ou volée ?",
                answer: "En cas de carte grise perdue ou volée, vous devez faire une déclaration en préfecture ou gendarmerie, puis demander un duplicata. Nous nous occupons de toutes les démarches pour vous."
              },
              {
                question: "Comment changer l'adresse sur ma carte grise ?",
                answer: "Pour un changement d'adresse carte grise, vous devez le faire dans le mois suivant votre déménagement. Nous traitons rapidement votre demande avec les nouveaux justificatifs de domicile."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-blue-700" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Prêt à obtenir votre CPI WW ?</h2>
            <p className="text-xl mb-12 text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Commencez votre démarche dès maintenant et recevez votre certificat sous 48h
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-primary hover:bg-background/90 text-lg px-10 py-6 group"
              >
                <Link href="/boutique">
                  Commander maintenant
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent backdrop-blur-sm text-lg px-10 py-6"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* City-Specific Services Section */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">CPI WW dans la Marne</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Service d'immatriculation temporaire disponible dans toutes les principales villes de la région
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "Reims",
                description: "Service principal CPI WW dans la capitale de la Champagne. Traitement express 24-48h pour tous vos véhicules importés.",
                highlights: ["Centre-ville accessible", "Service express", "Équipe dédiée"]
              },
              {
                city: "Châlons-en-Champagne",
                description: "Intervention CPI WW dans la préfecture de la Marne. Service complet d'immatriculation temporaire.",
                highlights: ["Préfecture Marne", "Service complet", "Déplacements possibles"]
              },
              {
                city: "Épernay",
                description: "CPI WW disponible dans la capitale du Champagne. Expertise pour véhicules de prestige et importés.",
                highlights: ["Véhicules prestige", "Expertise reconnue", "Service personnalisé"]
              },
              {
                city: "Witry-lès-Reims",
                description: "Service CPI WW dans l'agglomération rémoise. Proximité et rapidité garanties.",
                highlights: ["Agglomération", "Service rapide", "Proximité client"]
              },
              {
                city: "Cormontreuil",
                description: "Intervention CPI WW dans cette commune dynamique de l'agglomération rémoise.",
                highlights: ["Zone dynamique", "Accès facile", "Service local"]
              },
              {
                city: "Bezannes",
                description: "Service CPI WW disponible dans cette commune résidentielle proche de Reims.",
                highlights: ["Zone résidentielle", "Service de proximité", "Intervention rapide"]
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    {location.city}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {location.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {location.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-blue-700">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Couverture complète de la Marne</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Notre service CPI WW couvre l'ensemble du département de la Marne avec une attention particulière 
                pour l'agglomération rémoise. Nous intervenons également dans les communes limitrophes pour 
                vos démarches d'immatriculation temporaire.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Contactez-nous pour votre ville
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

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
                  
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Service professionnel d'immatriculation temporaire CPI WW à Reims et dans la Marne.
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
                  <span>+33 07 56 89 89 50</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>contact@bureau-immatriculation.Fr</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>Reims, Marne</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-16 pt-8 text-center text-primary-foreground/70">
            <p>&copy; 2025 CPI WW. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}