import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

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

  staticPages.forEach(({ path: pagePath, priority, frequency }) => {
    entries.push({
      url: `${baseUrl}${pagePath}`,
      lastModified: currentDate,
      changeFrequency: frequency,
      priority,
    })
  })

  // Read keywords JSON file efficiently
  try {
    const keywordsPath = path.join(process.cwd(), 'keywords-all-pages.json')
    const keywordsContent = fs.readFileSync(keywordsPath, 'utf-8')
    const keywordsData = JSON.parse(keywordsContent)
    
    // Add all 5,165 service-location pages from keywords data
    Object.keys(keywordsData).forEach((pageKey) => {
      entries.push({
        url: `${baseUrl}/${pageKey}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    })
  } catch (error) {
    console.warn('Warning: Could not load keywords data for sitemap')
  }

  return entries
}
