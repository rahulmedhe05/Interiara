import { MetadataRoute } from 'next'
import keywordsData from '@/keywords-all-pages.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://interiara.com'
  const currentDate = new Date()
  const entries: MetadataRoute.Sitemap = []

  // Add static pages
  const staticPages = [
    { path: '', priority: 1.0, frequency: 'weekly' as const },
    { path: '/about', priority: 0.8, frequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, frequency: 'weekly' as const },
    { path: '/blog', priority: 0.8, frequency: 'weekly' as const },
    { path: '/contact', priority: 0.9, frequency: 'monthly' as const },
  ]

  staticPages.forEach(({ path, priority, frequency }) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: frequency,
      priority,
    })
  })

  // Add all 5,165 service-location pages dynamically from keywords data
  Object.entries(keywordsData).forEach(([pageKey, pageData]: [string, any]) => {
    entries.push({
      url: `${baseUrl}/${pageKey}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  })

  return entries
}
