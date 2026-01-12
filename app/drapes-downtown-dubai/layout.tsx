import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drapes Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional drapes downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "drapes-downtown-dubai", "drapes downtown dubai", "drapes downtown dubai services", "best drapes downtown dubai", "professional drapes downtown dubai", "drapes downtown dubai company downtown dubai", "drapes downtown dubai specialist", "expert drapes downtown dubai",
  ],
  openGraph: {
    title: "Drapes Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional drapes downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/drapes-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/drapes-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
