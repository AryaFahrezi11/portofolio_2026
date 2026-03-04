import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Jauhkan halaman admin dari pencarian Google
    },
    sitemap: 'https://aryafahreziamarully.vercel.app/sitemap.xml',
  }
}