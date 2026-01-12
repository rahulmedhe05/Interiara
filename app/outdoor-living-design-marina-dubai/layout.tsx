import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outdoor Living Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional outdoor living design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "outdoor-living-design-marina-dubai", "outdoor living design marina dubai", "outdoor living design marina dubai services", "best outdoor living design marina dubai", "professional outdoor living design marina dubai", "outdoor living design marina dubai company", "outdoor living design marina dubai specialist", "expert outdoor living design marina dubai",
  ],
  openGraph: {
    title: "Outdoor Living Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional outdoor living design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/outdoor-living-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/outdoor-living-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
