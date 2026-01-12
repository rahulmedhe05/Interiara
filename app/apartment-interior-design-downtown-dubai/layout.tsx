import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apartment Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional apartment interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "apartment interior design downtown dubai", "flat design downtown dubai", "apartment decoration downtown dubai",
  ],
  openGraph: {
    title: "Apartment Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional apartment interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/apartment-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/apartment-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
