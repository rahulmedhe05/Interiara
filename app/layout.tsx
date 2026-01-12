import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Interiara - #1 Interior Designer Dubai | Luxury Villa, Apartment & Office Design UAE",
    template: "%s | Interiara Dubai"
  },
  description:
    "Award-winning Dubai interior design studio crafting bespoke luxury spaces since 2020. Experts in villa transformations, apartment makeovers, Arabic majlis design & commercial fit-outs. 500+ dream homes delivered. Free 3D visualization. WhatsApp: +91 635 358 3148",
  keywords: [
    // Primary Keywords
    "interior design Dubai",
    "interior designer Dubai",
    "best interior design company Dubai",
    "luxury interior design UAE",
    "Dubai interior designers",
    // Residential Keywords
    "villa interior design Dubai",
    "apartment interior design Dubai",
    "penthouse interior design UAE",
    "home interior design Dubai",
    "residential interior design Dubai",
    "house interior design UAE",
    // Style Keywords
    "Arabic style interior design Dubai",
    "modern interior design Dubai",
    "contemporary interior design UAE",
    "minimalist interior design Dubai",
    "luxury home design Dubai",
    "traditional Arabic interiors",
    // Commercial Keywords
    "office interior design Dubai",
    "commercial interior design UAE",
    "restaurant interior design Dubai",
    "cafe interior design Dubai",
    "retail shop interior design UAE",
    "hotel interior design Dubai",
    "showroom interior design Dubai",
    "office fit out Dubai",
    // Room Specific Keywords
    "kitchen interior design Dubai",
    "bedroom interior design Dubai",
    "living room interior design UAE",
    "bathroom interior design Dubai",
    "modular kitchen Dubai",
    "wardrobe design Dubai",
    // Service Keywords
    "3D interior visualization Dubai",
    "space planning Dubai",
    "interior renovation Dubai",
    "home renovation UAE",
    "furniture design Dubai",
    "custom furniture Dubai",
    "interior consultation Dubai",
    // Location Keywords
    "interior design Downtown Dubai",
    "interior designer Dubai Marina",
    "Palm Jumeirah interior design",
    "Business Bay interior designer",
    "JBR interior design",
    "Arabian Ranches villa interior",
    "Jumeirah interior design",
    "DIFC office interior",
    "Abu Dhabi interior design",
    "Sharjah interior designer",
    // Long-tail Keywords
    "affordable interior design Dubai",
    "budget interior design UAE",
    "turnkey interior solutions Dubai",
    "end to end interior design Dubai",
    "interior design and fit out Dubai",
    "Interiara Dubai",
    "Interiara interior design"
  ],
  authors: [{ name: "Interiara Dubai", url: "https://interiara.com" }],
  creator: "Interiara",
  publisher: "Interiara Interior Design Dubai",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://interiara.com"),
  alternates: {
    canonical: "https://interiara.com",
  },
  openGraph: {
    title: "Interiara Dubai | Transform Your Space with Award-Winning Interior Design",
    description:
      "Experience the art of luxury living. Interiara creates stunning interiors for villas, penthouses, apartments & offices across UAE. Blending Arabic heritage with contemporary elegance. Book your free design consultation today.",
    url: "https://interiara.com",
    siteName: "Interiara Interior Design Dubai",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://interiara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interiara - Luxury Interior Design Portfolio Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interiara Dubai | Where Innovation Meets Elegance",
    description: "Crafting extraordinary interiors for discerning clients. Villas, apartments, offices & more. Arabic-modern fusion specialists. Get your free 3D visualization!",
    images: ["https://interiara.com/og-image.jpg"],
    creator: "@interiaradubai",
    site: "@interiaradubai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://interiara.com/#business",
        name: "Interiara Interior Design Dubai",
        image: "https://interiara.com/logo.png",
        description: "Interiara is an award-winning interior design studio in Dubai, renowned for creating bespoke luxury spaces that blend functionality with artistic vision. From opulent villa transformations to sleek office fit-outs, we bring dreams to life with meticulous attention to detail.",
        url: "https://interiara.com",
        telephone: "+916353583148",
        email: "hello@interiara.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Business Bay",
          addressLocality: "Dubai",
          addressRegion: "Dubai",
          postalCode: "00000",
          addressCountry: "AE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "25.2048",
          longitude: "55.2708"
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "21:00"
          }
        ],
        sameAs: [
          "https://www.instagram.com/interiara",
          "https://www.facebook.com/interiara",
          "https://www.linkedin.com/company/interiara",
          "https://www.pinterest.com/interiara"
        ],
        priceRange: "$$$",
        currenciesAccepted: "AED",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        areaServed: [
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Abu Dhabi" },
          { "@type": "City", name: "Sharjah" },
          { "@type": "Country", name: "United Arab Emirates" }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Interior Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Villa Interior Design",
                description: "Complete villa interior design including space planning, 3D visualization, furniture selection, and project execution"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Apartment Interior Design",
                description: "Modern apartment interior design for studios, 1BHK, 2BHK, 3BHK and penthouses in Dubai"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Office Interior Design",
                description: "Professional office interior design and fit-out services for corporate spaces in UAE"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Arabic Style Interior Design",
                description: "Traditional and contemporary Arabic interior design blending heritage with modern aesthetics"
              }
            }
          ]
        }
      },
      {
        "@type": "Organization",
        "@id": "https://interiara.com/#organization",
        name: "Interiara",
        url: "https://interiara.com",
        logo: {
          "@type": "ImageObject",
          url: "https://interiara.com/logo.png",
          width: "512",
          height: "512"
        },
        foundingDate: "2024",
        foundingLocation: "Dubai, UAE",
        slogan: "Where Innovation Meets Elegance",
        knowsAbout: [
          "Interior Design",
          "Villa Interior Design",
          "Apartment Interior Design",
          "Penthouse Interior Design",
          "Office Interior Design",
          "Commercial Interior Design",
          "Arabic Style Interior Design",
          "Luxury Interior Design",
          "Modern Interior Design",
          "Minimalist Interior Design",
          "Kitchen Design",
          "Bedroom Design",
          "Living Room Design",
          "Bathroom Design",
          "Restaurant Interior Design",
          "Retail Shop Design",
          "Space Planning",
          "3D Visualization",
          "Furniture Design",
          "Custom Furniture",
          "Interior Renovation",
          "Home Renovation"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+916353583148",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic", "Hindi"],
          areaServed: "AE"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://interiara.com/#website",
        url: "https://interiara.com",
        name: "Interiara - Interior Design Dubai",
        description: "Best Interior Design Company in Dubai, UAE",
        publisher: {
          "@id": "https://interiara.com/#organization"
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://interiara.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://interiara.com/#service",
        name: "Interior Design Services Dubai",
        serviceType: "Interior Design",
        provider: {
          "@id": "https://interiara.com/#organization"
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: "25.2048",
            longitude: "55.2708"
          },
          geoRadius: "100000"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Interior Design Packages",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Residential Interior Design",
              itemListElement: [
                "Villa Interior Design",
                "Apartment Interior Design",
                "Penthouse Interior Design",
                "Home Renovation"
              ]
            },
            {
              "@type": "OfferCatalog",
              name: "Commercial Interior Design",
              itemListElement: [
                "Office Interior Design",
                "Restaurant Interior Design",
                "Retail Shop Interior Design",
                "Hotel Interior Design"
              ]
            }
          ]
        }
      },
      {
        "@type": "AggregateRating",
        "@id": "https://interiara.com/#rating",
        itemReviewed: {
          "@id": "https://interiara.com/#business"
        },
        ratingValue: "4.9",
        ratingCount: "237",
        reviewCount: "189",
        bestRating: "5",
        worstRating: "1"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://interiara.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://interiara.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://interiara.com/#services"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Gallery",
            item: "https://interiara.com/#gallery"
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contact",
            item: "https://interiara.com/#contact"
          }
        ]
      }
    ],
  }

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://interiara.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
