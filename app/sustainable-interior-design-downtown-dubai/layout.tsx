import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sustainable Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional sustainable interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "sustainable-interior-design-downtown-dubai", "sustainable interior design downtown dubai", "sustainable interior design downtown dubai services", "best sustainable interior design downtown dubai", "professional sustainable interior design downtown dubai", "sustainable interior design downtown dubai company downtown dubai", "sustainable interior design downtown dubai specialist", "expert sustainable interior design downtown dubai",
  ],
  openGraph: {
    title: "Sustainable Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional sustainable interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/sustainable-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/sustainable-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
