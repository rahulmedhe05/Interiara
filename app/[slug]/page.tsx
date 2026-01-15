import { Metadata } from "next"
import { DynamicServicePageContent } from "./content"
import { allPageSlugs } from "@/lib/pages-data"

export function generateStaticParams() {
  // Generate static pages for only top 10 slugs for fast initial deploy
  // Rest will be generated on-demand via ISR (revalidate: 3600)
  return allPageSlugs.slice(0, 10).map((slug) => ({
    slug,
  }))
}

// Enable Incremental Static Regeneration - regenerate pages every hour
export const revalidate = 3600

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  if (!params?.slug) {
    return {
      title: "Service | Interiara",
      description: "Professional interior design services in Dubai.",
    }
  }
  
  const serviceName = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return {
    title: `${serviceName} in Dubai | Interiara`,
    description: `Professional ${serviceName} services in Dubai. Expert designers, quality finishes, and timely delivery. 300+ projects completed.`,
    keywords: [serviceName, 'Dubai', 'Interior Design', 'Professional', 'Custom Solutions', 'Interior Designer'],
    openGraph: {
      title: `${serviceName} in Dubai | Interiara`,
      description: `Professional ${serviceName} services in Dubai. Expert designers, quality finishes, and timely delivery.`,
      type: 'website',
    },
  }
}

export default function DynamicServicePage({ params }: { params: { slug: string } }) {
  return <DynamicServicePageContent slug={params.slug} />
}
