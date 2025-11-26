/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect non-www to www (permanent redirect)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'bureau-immatriculation.fr',
          },
        ],
        destination: 'https://www.bureau-immatriculation.fr/:path*',
        permanent: true,
      },
      // Redirect HTTP to HTTPS www (permanent redirect)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.bureau-immatriculation.fr',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.bureau-immatriculation.fr/:path*',
        permanent: true,
      },
      // --- SEO routing fixes: map legacy/non-existent routes to relevant pages ---
      // City roots
      {
        source: '/cpi-ww-reims',
        destination: '/reims',
        permanent: true,
      },
      {
        source: '/cpi-ww-chalons-en-champagne',
        destination: '/chalons-en-champagne',
        permanent: true,
      },
      {
        source: '/cpi-ww-witry-les-reims',
        destination: '/cpi-ww-witry-les-reims',
        permanent: true,
      },
      // Service routes by city
      {
        source: '/cpi-ww-reims/immatriculation-temporaire',
        destination: '/immatriculation-temporaire',
        permanent: true,
      },
      {
        source: '/cpi-ww-epernay/immatriculation-temporaire',
        destination: '/immatriculation-temporaire',
        permanent: true,
      },
      {
        source: '/cpi-ww-reims/certificat-provisoire',
        destination: '/certificat-provisoire',
        permanent: true,
      },
      {
        source: '/cpi-ww-chalons-en-champagne/certificat-provisoire',
        destination: '/certificat-provisoire',
        permanent: true,
      },
      {
        source: '/cpi-ww-epernay/certificat-provisoire',
        destination: '/certificat-provisoire',
        permanent: true,
      },
      // Synonyms and legacy slugs
      {
        source: '/certificat-provisoire-immatriculation',
        destination: '/certificat-provisoire',
        permanent: true,
      },
      {
        source: '/carte-grise-temporaire',
        destination: '/immatriculation-temporaire',
        permanent: true,
      },
      // Communes in Reims agglomeration → Reims city page
      { source: '/cpi-ww-cormontreuil', destination: '/reims', permanent: true },
      { source: '/cpi-ww-taissy', destination: '/reims', permanent: true },
      { source: '/cpi-ww-cernay-les-reims', destination: '/reims', permanent: true },
      { source: '/cpi-ww-cormicy', destination: '/reims', permanent: true },
      { source: '/cpi-ww-bezannes', destination: '/reims', permanent: true },
      { source: '/cpi-ww-betheny', destination: '/reims', permanent: true },
      { source: '/cpi-ww-loivre', destination: '/reims', permanent: true },
    ]
  },
}

export default nextConfig
