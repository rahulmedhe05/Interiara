import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apartment Interior Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional apartment interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "apartment-interior-design-downtown-dubai", "apartment interior design downtown dubai", "apartment interior design downtown dubai services", "best apartment interior design downtown dubai", "professional apartment interior design downtown dubai", "apartment interior design downtown dubai company", "apartment interior design downtown dubai specialist", "expert apartment interior design downtown dubai",
  ],
  openGraph: {
    title: "Apartment Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional apartment interior design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/apartment-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/apartment-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
