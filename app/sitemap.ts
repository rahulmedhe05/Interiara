import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://interiara.com'
  const currentDate = new Date()
  const entries: MetadataRoute.Sitemap = []

  // Add static pages with high priority
  const staticPages = [
    { path: '', priority: 1.0, frequency: 'weekly' as const },
    { path: '/about', priority: 0.8, frequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.9, frequency: 'weekly' as const },
    { path: '/blog', priority: 0.8, frequency: 'weekly' as const },
    { path: '/contact', priority: 0.9, frequency: 'weekly' as const },
  ]

  staticPages.forEach(({ path: pagePath, priority, frequency }) => {
    entries.push({
      url: `${baseUrl}${pagePath}`,
      lastModified: currentDate,
      changeFrequency: frequency,
      priority,
    })
  })

  // City hub pages - high priority for local SEO
  const cityHubs = [
    'interior-design-al-barsha-dubai',
    'interior-design-al-furjan-dubai',
    'interior-design-al-quoz-dubai',
    'interior-design-al-safa-dubai',
    'interior-design-al-wasl-dubai',
    'interior-design-arabian-ranches-dubai',
    'interior-design-business-bay-dubai',
    'interior-design-city-walk-dubai',
    'interior-design-downtown-dubai-dubai',
    'interior-design-dubai-creek-harbour-dubai',
    'interior-design-dubai-design-district-dubai',
    'interior-design-dubai-festival-city-dubai',
    'interior-design-dubai-hills-estate-dubai',
    'interior-design-dubai-land-dubai',
    'interior-design-dubai-marina-dubai',
    'interior-design-dubai-south-dubai',
    'interior-design-dubai-sports-city-dubai',
    'interior-design-jbr-dubai',
    'interior-design-jlt-dubai',
    'interior-design-jumeirah-dubai',
    'interior-design-jvc-dubai',
    'interior-design-jvt-dubai',
    'interior-design-meadows-dubai',
    'interior-design-mirdif-dubai',
    'interior-design-nad-al-sheba-dubai',
    'interior-design-palm-jumeirah-dubai',
    'interior-design-springs-dubai',
    'interior-design-the-villa-dubai',
    'interior-design-town-square-dubai',
    'interior-design-umm-suqeim-dubai',
  ]

  cityHubs.forEach((hub) => {
    entries.push({
      url: `${baseUrl}/${hub}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })
  })

  // Read service pages from directory structure or keywords JSON
  try {
    const keywordsPath = path.join(process.cwd(), 'keywords-all-pages.json')
    if (fs.existsSync(keywordsPath)) {
      const keywordsContent = fs.readFileSync(keywordsPath, 'utf-8')
      const keywordsData = JSON.parse(keywordsContent)
      
      // Add all service-location pages
      Object.keys(keywordsData).forEach((pageKey) => {
        // Skip if it's a city hub (already added above)
        if (!pageKey.includes('interior-design-') || !pageKey.includes('-dubai')) {
          entries.push({
            url: `${baseUrl}/${pageKey}`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          })
        }
      })
    } else {
      // Fallback: scan app directory for pages
      const appPath = path.join(process.cwd(), 'app')
      const dirs = fs.readdirSync(appPath)
      
      dirs.forEach((dir) => {
        const fullPath = path.join(appPath, dir)
        if (fs.statSync(fullPath).isDirectory() && !dir.startsWith('.') && dir.includes('-dubai')) {
          entries.push({
            url: `${baseUrl}/${dir}`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          })
        }
      })
    }
  } catch (error) {
    console.warn('Warning: Could not load service pages for sitemap', error)
  }

  return entries
}
