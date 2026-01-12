import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kitchen Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional kitchen interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "kitchen interior design downtown dubai", "modern kitchen downtown dubai", "kitchen renovation downtown dubai",
  ],
  openGraph: {
    title: "Kitchen Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional kitchen interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/kitchen-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/kitchen-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
