// Utility functions for generating JSON-LD schema markup for SEO

export interface SchemaMarkupOptions {
  service: string
  location: string
  fullLocation: string
  description?: string
  keywords?: string[]
  businessPhone?: string
  businessEmail?: string
  businessAddress?: string
  imageUrl?: string
}

/**
 * Generate LocalBusiness schema for service pages
 */
export function generateLocalBusinessSchema(options: SchemaMarkupOptions) {
  const {
    service,
    location,
    fullLocation,
    description,
    businessPhone = '+971 XXXX XXXX',
    businessEmail = 'info@interiara.ae',
    businessAddress = 'Dubai, UAE',
    imageUrl,
  } = options

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://interiara.ae/${service}-${location}-dubai`,
    name: `${service.replace(/-/g, ' ')} in ${fullLocation}`,
    description: description || `Professional ${service.replace(/-/g, ' ')} services in ${fullLocation}, Dubai`,
    image: imageUrl || 'https://interiara.ae/logo.png',
    url: `https://interiara.ae/${service}-${location}-dubai`,
    telephone: businessPhone,
    email: businessEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessAddress,
      addressLocality: fullLocation,
      addressRegion: 'Dubai',
      postalCode: '',
      addressCountry: 'AE',
    },
    areaServed: [
      {
        '@type': 'City',
        name: fullLocation,
        address: {
          '@type': 'PostalAddress',
          addressLocality: fullLocation,
          addressRegion: 'Dubai',
          addressCountry: 'AE',
        },
      },
      {
        '@type': 'State',
        name: 'Dubai',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
        },
      },
    ],
    priceRange: '$$$',
  }
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(options: SchemaMarkupOptions) {
  const { service, location, fullLocation, description } = options

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.replace(/-/g, ' ')} in ${fullLocation}`,
    description: description || `Professional ${service.replace(/-/g, ' ')} services in ${fullLocation}, Dubai`,
    serviceType: service.replace(/-/g, ' '),
    areaServed: {
      '@type': 'City',
      name: fullLocation,
      address: {
        '@type': 'PostalAddress',
        addressLocality: fullLocation,
        addressRegion: 'Dubai',
        addressCountry: 'AE',
      },
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Interiara',
      url: 'https://interiara.ae',
    },
  }
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Interiara',
    url: 'https://interiara.ae',
    logo: 'https://interiara.ae/logo.png',
    description: 'Expert interior design services across Dubai and UAE',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971 XXXX XXXX',
        contactType: 'Sales',
        email: 'info@interiara.ae',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971 XXXX XXXX',
        contactType: 'Support',
        email: 'support@interiara.ae',
      },
    ],
    sameAs: [
      'https://www.facebook.com/interiara',
      'https://www.instagram.com/interiara',
      'https://www.linkedin.com/company/interiara',
      'https://www.tiktok.com/@interiara',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dubai',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
  }
}

/**
 * Generate BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(
  service: string,
  location: string,
  fullLocation: string
) {
  const serviceName = service.replace(/-/g, ' ')
  const locationName = fullLocation

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://interiara.ae',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://interiara.ae/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: serviceName,
        item: `https://interiara.ae/${service}-dubai`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: `${serviceName} in ${locationName}`,
        item: `https://interiara.ae/${service}-${location}-dubai`,
      },
    ],
  }
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate ImageObject schema
 */
export function generateImageSchema(
  url: string,
  name: string,
  description: string,
  width = 1200,
  height = 800
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    url: url,
    name: name,
    description: description,
    width: width,
    height: height,
  }
}

/**
 * Combine multiple schemas into a single array for JSON-LD
 */
export function combineSchemas(
  ...schemas: any[]
): { '@context': string; '@graph': any[] } {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  }
}

/**
 * Format schema as JSON-LD script tag content
 */
export function formatSchemaAsJsonLd(schema: any): string {
  return JSON.stringify(schema, null, 2)
}
