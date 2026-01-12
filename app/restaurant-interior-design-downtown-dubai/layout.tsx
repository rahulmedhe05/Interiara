import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional restaurant interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "restaurant-interior-design-downtown-dubai", "restaurant interior design downtown dubai", "restaurant interior design downtown dubai services", "best restaurant interior design downtown dubai", "professional restaurant interior design downtown dubai", "restaurant interior design downtown dubai company", "restaurant interior design downtown dubai specialist", "expert restaurant interior design downtown dubai",
  ],
  openGraph: {
    title: "Restaurant Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional restaurant interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/restaurant-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/restaurant-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
