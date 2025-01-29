export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/en/landing',
      disallow: '/en/home',
    },
    sitemap: 'http://localhost:3000/sitemap.xml',
  }
}