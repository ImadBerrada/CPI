import type { Metadata } from "next"
import BreadcrumbSchema from "../../components/breadcrumb-schema"
import { Calendar, MapPin, Clock, User, Tag, ArrowRight, FileCheck, Car, Building2, Zap, Users, Globe, Award, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Actualités CPI WW Reims & Marne - Nouvelles et Événements Locaux",
  description: "Découvrez toutes les actualités, nouveautés et événements CPI WW à Reims et dans la Marne. Restez informé des dernières réglementations et services d'immatriculation temporaire.",
  keywords: "actualités CPI WW, nouvelles Reims, événements Marne, réglementation immatriculation, salon automobile Reims, formation professionnels auto",
  openGraph: {
    title: "Actualités CPI WW Reims & Marne - Nouvelles et Événements",
    description: "Toutes les actualités et événements CPI WW à Reims et dans la Marne. Informations sur les nouvelles réglementations et services.",
    url: "https://cpi-ww.fr/actualites",
    siteName: "CPI WW Reims",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.bureau-immatriculation.fr/actualites",
  },
}

export default function ActualitesPage() {
  const newsArticles = [
    {
      id: "nouvelle-reglementation-2024",
      title: "Nouvelle réglementation 2024 pour l'immatriculation des véhicules importés",
      date: "15 Janvier 2024",
      category: "Réglementation",
      author: "Équipe CPI WW Reims",
      excerpt: "Découvrez les nouvelles dispositions réglementaires qui entrent en vigueur en 2024 pour l'immatriculation des véhicules importés dans la Marne.",
      content: "Les nouvelles dispositions réglementaires de 2024 apportent des changements significatifs dans les procédures d'immatriculation des véhicules importés. Ces modifications visent à simplifier les démarches tout en renforçant les contrôles de sécurité...",
      location: "Reims, Marne",
      icon: <FileCheck className="h-6 w-6" />,
      featured: true
    },
    {
      id: "salon-automobile-reims-2024",
      title: "Salon de l'Automobile de Reims 2024 - Retrouvez-nous !",
      date: "8-10 Mars 2024",
      category: "Événement",
      author: "Service Commercial",
      excerpt: "CPI WW Reims sera présent au Salon de l'Automobile de Reims. Venez nous rencontrer pour toutes vos questions sur l'immatriculation temporaire.",
      content: "Nous serons présents au Salon de l'Automobile de Reims du 8 au 10 mars 2024. Notre équipe d'experts sera disponible pour répondre à toutes vos questions concernant l'immatriculation temporaire, les démarches CPI WW...",
      location: "Parc des Expositions, Reims",
      icon: <Car className="h-6 w-6" />,
      featured: false
    },
    {
      id: "extension-reseau-partenaires",
      title: "Extension de notre réseau de partenaires dans la Marne",
      date: "22 Février 2024",
      category: "Partenariat",
      author: "Direction Commerciale",
      excerpt: "Nous étendons notre réseau de partenaires concessionnaires dans le département de la Marne pour mieux vous servir.",
      content: "Dans le cadre de notre développement, nous sommes fiers d'annoncer l'extension de notre réseau de partenaires concessionnaires dans la Marne. Cette expansion nous permet de proposer nos services CPI WW...",
      location: "Châlons-en-Champagne",
      icon: <Building2 className="h-6 w-6" />,
      featured: false
    },
    {
      id: "nouveau-service-epernay",
      title: "Ouverture d'un nouveau service express à Épernay",
      date: "5 Avril 2024",
      category: "Service",
      author: "Équipe Épernay",
      excerpt: "Un nouveau point de service express ouvre ses portes à Épernay pour traiter vos demandes CPI WW en 24h.",
      content: "Nous sommes ravis d'annoncer l'ouverture de notre nouveau service express à Épernay. Ce point de service permettra aux habitants d'Épernay et des communes environnantes de bénéficier d'un traitement accéléré...",
      location: "Épernay, Marne",
      icon: <Zap className="h-6 w-6" />,
      featured: true
    },
    {
      id: "formation-professionnels-automobile",
      title: "Formation gratuite pour les professionnels de l'automobile",
      date: "18 Mai 2024",
      category: "Formation",
      author: "Service Formation",
      excerpt: "Session de formation gratuite destinée aux professionnels de l'automobile sur les nouvelles procédures d'immatriculation.",
      content: "Nous organisons une session de formation gratuite le 18 mai 2024 à destination des professionnels de l'automobile. Cette formation portera sur les nouvelles procédures d'immatriculation...",
      location: "Reims",
      icon: <Users className="h-6 w-6" />,
      featured: false
    },
    {
      id: "plateforme-digitale",
      title: "Lancement de notre nouvelle plateforme digitale",
      date: "12 Juin 2024",
      category: "Innovation",
      author: "Équipe Technique",
      excerpt: "Découvrez notre nouvelle plateforme digitale qui simplifie encore plus vos démarches d'immatriculation temporaire.",
      content: "Nous sommes fiers de vous présenter notre nouvelle plateforme digitale, conçue pour simplifier au maximum vos démarches d'immatriculation temporaire. Cette interface moderne et intuitive...",
      location: "Service en ligne",
      icon: <Globe className="h-6 w-6" />,
      featured: true
    },
    {
      id: "certification-iso-9001",
      title: "Certification ISO 9001 obtenue pour nos services",
      date: "3 Juillet 2024",
      category: "Qualité",
      author: "Direction Qualité",
      excerpt: "CPI WW Reims obtient la certification ISO 9001, gage de qualité et de professionnalisme de nos services.",
      content: "Nous sommes fiers d'annoncer l'obtention de la certification ISO 9001 pour l'ensemble de nos services. Cette certification reconnaît la qualité de nos processus...",
      location: "Reims",
      icon: <Award className="h-6 w-6" />,
      featured: false
    },
    {
      id: "partenariat-assureurs-locaux",
      title: "Nouveau partenariat avec les assureurs locaux",
      date: "25 Août 2024",
      category: "Partenariat",
      author: "Service Partenariats",
      excerpt: "Signature d'accords de partenariat avec les principales compagnies d'assurance de la région pour faciliter vos démarches.",
      content: "Dans le cadre de notre volonté de simplifier vos démarches, nous avons signé des accords de partenariat avec les principales compagnies d'assurance de la région...",
      location: "Reims, Marne",
      icon: <Building2 className="h-6 w-6" />,
      featured: false
    }
  ]

  const featuredArticles = newsArticles.filter(article => article.featured)
  const regularArticles = newsArticles.filter(article => !article.featured)

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Accueil", url: "https://cpi-ww.fr" },
          { name: "Actualités", url: "https://cpi-ww.fr/actualites" }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Actualités CPI WW
              <span className="block text-blue-200">Reims & Marne</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Restez informé des dernières nouveautés, événements et réglementations 
              concernant l'immatriculation temporaire dans la région Reims-Marne.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Nouvelles Réglementations</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Événements Locaux</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Services & Innovations</span>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">À la Une</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border-2 border-blue-200">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                        {article.category}
                      </span>
                      <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        {article.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{article.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={`/actualites/${article.id}`}>
                        Lire la suite
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Toutes les Actualités</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        {article.category}
                      </span>
                      <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        {article.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{article.location}</span>
                      </div>
                    </div>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/actualites/${article.id}`}>
                        Lire l'article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Restez Informé</h2>
            <p className="text-xl mb-8 opacity-90">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités CPI WW directement dans votre boîte mail.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3">
                S'abonner
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Une Question sur nos Services ?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions sur l'immatriculation temporaire.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-gray-600">+33 07 56 89 89 50</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">contact@bureau-immatriculation.fr</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">
                  Nous Contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}