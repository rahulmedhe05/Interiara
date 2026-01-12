import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wardrobe Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional wardrobe design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "wardrobe-design-downtown-dubai", "wardrobe design downtown dubai", "wardrobe design downtown dubai services", "best wardrobe design downtown dubai", "professional wardrobe design downtown dubai", "wardrobe design downtown dubai company downtown dubai", "wardrobe design downtown dubai specialist", "expert wardrobe design downtown dubai",
  ],
  openGraph: {
    title: "Wardrobe Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional wardrobe design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/wardrobe-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/wardrobe-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
