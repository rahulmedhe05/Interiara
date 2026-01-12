import { MetadataRoute } from 'next'

// Services array from jvc-services.json
const SERVICES = [
  'residential-interior-design',
  'office-interior-design',
  'commercial-interior-design',
  'villa-interior-design',
  'apartment-interior-design',
  'kitchen-interior-design',
  'bathroom-interior-design',
  'modular-kitchens',
  'lighting-design',
  'home-renovation',
  'office-renovation',
  'office-fit-out',
  'custom-furniture-design',
  'space-planning',
  'home-decor-consultation',
  '3d-interior-rendering',
]

// Dubai areas covered by Interiara
const AREAS = [
  'al-barsha', 'al-barsha-south', 'al-furjan', 'al-hamriya', 'al-jaddaf',
  'al-karama', 'al-khawaneej', 'al-mizhar', 'al-quoz', 'al-safa', 'al-satwa',
  'al-warqaa', 'al-wasl', 'arabian-ranches', 'bur-dubai', 'business-bay',
  'city-walk', 'culture-village', 'deira', 'difc', 'discovery-gardens',
  'discovery-hills', 'downtown-dubai', 'dubai-creek-harbour',
  'dubai-design-district', 'dubai-festival-city', 'dubai-harbour',
  'dubai-hills', 'dubai-hills-estate', 'dubai-marina', 'emirates-hills',
  'jbr', 'jlt', 'jumeirah', 'jvc', 'jvt', 'lakes', 'marina', 'meadows',
  'mirdif', 'palm-jumeirah', 'sheikh-zayed-road', 'springs',
  'the-sustainable-city', 'town-square', 'umm-suqeim',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://interiara.ae'
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

  // Add service pages (service-location combinations)
  SERVICES.forEach(service => {
    AREAS.forEach(area => {
      entries.push({
        url: `${baseUrl}/${service}-${area}-dubai`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    })

    // Also add base service pages
    entries.push({
      url: `${baseUrl}/${service}-dubai`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })
  })

  // Add area listing pages
  AREAS.forEach(area => {
    entries.push({
      url: `${baseUrl}/services/${area}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  })

  return entries
}
