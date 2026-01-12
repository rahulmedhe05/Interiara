import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outdoor Living Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional outdoor living design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "outdoor-living-design-creek-dubai", "outdoor living design creek dubai", "outdoor living design creek dubai services", "best outdoor living design creek dubai", "professional outdoor living design creek dubai", "outdoor living design creek dubai company", "outdoor living design creek dubai specialist", "expert outdoor living design creek dubai",
  ],
  openGraph: {
    title: "Outdoor Living Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional outdoor living design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/outdoor-living-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/outdoor-living-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
