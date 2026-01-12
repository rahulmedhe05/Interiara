import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional villa interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "villa interior design downtown dubai", "luxury villa design downtown dubai", "villa decoration downtown dubai",
  ],
  openGraph: {
    title: "Villa Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional villa interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/villa-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/villa-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
