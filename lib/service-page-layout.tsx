import type { Metadata } from "next"
import { AreaWiseFooter } from "@/components/area-wise-footer"

interface ServicePageLayoutProps {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogTitle: string
  ogDescription: string
  children: React.ReactNode
  currentArea?: string
  currentService?: string
}

/**
 * Reusable layout component for service pages
 * Automatically adds footer with area-wise internal linking
 * Handles metadata and SEO markup
 */
export function ServicePageLayout({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  children,
  currentArea,
  currentService,
}: ServicePageLayoutProps) {
  return (
    <>
      {children}
      <AreaWiseFooter currentArea={currentArea} currentService={currentService} />
    </>
  )
}

/**
 * Helper function to generate metadata for service pages
 */
export function generateServicePageMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  robotsIndex = true,
}: {
  title: string
  description: string
  keywords: string[]
  canonicalUrl: string
  ogTitle: string
  ogDescription: string
  robotsIndex?: boolean
}): Metadata {
  return {
    title,
    description,
    keywords,
    robots: {
      index: robotsIndex,
      follow: true,
      googleBot: {
        index: robotsIndex,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "Interiara",
      images: [
        {
          url: "https://interiara.ae/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      creator: "@interiara",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    verification: {
      google: "your-google-verification-code",
    },
  }
}
