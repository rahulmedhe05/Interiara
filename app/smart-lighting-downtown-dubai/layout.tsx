import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Lighting Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional smart lighting downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "smart-lighting-downtown-dubai", "smart lighting downtown dubai", "smart lighting downtown dubai services", "best smart lighting downtown dubai", "professional smart lighting downtown dubai", "smart lighting downtown dubai company downtown dubai", "smart lighting downtown dubai specialist", "expert smart lighting downtown dubai",
  ],
  openGraph: {
    title: "Smart Lighting Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional smart lighting downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/smart-lighting-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/smart-lighting-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
