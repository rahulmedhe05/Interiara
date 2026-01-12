import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Penthouse Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional penthouse interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "penthouse-interior-design-downtown-dubai", "penthouse interior design downtown dubai", "penthouse interior design downtown dubai services", "best penthouse interior design downtown dubai", "professional penthouse interior design downtown dubai", "penthouse interior design downtown dubai company downtown dubai", "penthouse interior design downtown dubai specialist", "expert penthouse interior design downtown dubai",
  ],
  openGraph: {
    title: "Penthouse Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional penthouse interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/penthouse-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/penthouse-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
