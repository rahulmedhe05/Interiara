import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outdoor Living Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional outdoor living design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "outdoor-living-design-downtown-dubai", "outdoor living design downtown dubai", "outdoor living design downtown dubai services", "best outdoor living design downtown dubai", "professional outdoor living design downtown dubai", "outdoor living design downtown dubai company downtown dubai", "outdoor living design downtown dubai specialist", "expert outdoor living design downtown dubai",
  ],
  openGraph: {
    title: "Outdoor Living Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional outdoor living design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/outdoor-living-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/outdoor-living-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
