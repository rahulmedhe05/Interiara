import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cafe Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional cafe interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "cafe-interior-design-downtown-dubai", "cafe interior design downtown dubai", "cafe interior design downtown dubai services", "best cafe interior design downtown dubai", "professional cafe interior design downtown dubai", "cafe interior design downtown dubai company downtown dubai", "cafe interior design downtown dubai specialist", "expert cafe interior design downtown dubai",
  ],
  openGraph: {
    title: "Cafe Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional cafe interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/cafe-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/cafe-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
