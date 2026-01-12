import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Salon Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional salon interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "salon-interior-design-downtown-dubai", "salon interior design downtown dubai", "salon interior design downtown dubai services", "best salon interior design downtown dubai", "professional salon interior design downtown dubai", "salon interior design downtown dubai company", "salon interior design downtown dubai specialist", "expert salon interior design downtown dubai",
  ],
  openGraph: {
    title: "Salon Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional salon interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/salon-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/salon-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
