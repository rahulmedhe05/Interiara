import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acoustic Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional acoustic design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "acoustic-design-downtown-dubai", "acoustic design downtown dubai", "acoustic design downtown dubai services", "best acoustic design downtown dubai", "professional acoustic design downtown dubai", "acoustic design downtown dubai company downtown dubai", "acoustic design downtown dubai specialist", "expert acoustic design downtown dubai",
  ],
  openGraph: {
    title: "Acoustic Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional acoustic design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/acoustic-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/acoustic-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
