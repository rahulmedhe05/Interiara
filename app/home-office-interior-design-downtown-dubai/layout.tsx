import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Office Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional home office interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "home-office-interior-design-downtown-dubai", "home office interior design downtown dubai", "home office interior design downtown dubai services", "best home office interior design downtown dubai", "professional home office interior design downtown dubai", "home office interior design downtown dubai company downtown dubai", "home office interior design downtown dubai specialist", "expert home office interior design downtown dubai",
  ],
  openGraph: {
    title: "Home Office Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional home office interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/home-office-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-office-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
