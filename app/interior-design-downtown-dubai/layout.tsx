import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "interior-design-downtown-dubai", "interior design downtown dubai", "interior design downtown dubai services", "best interior design downtown dubai", "professional interior design downtown dubai", "interior design downtown dubai company downtown dubai", "interior design downtown dubai specialist", "expert interior design downtown dubai",
  ],
  openGraph: {
    title: "Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
