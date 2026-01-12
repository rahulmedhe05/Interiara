import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apartment Interior Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional apartment interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "apartment-interior-design-creek-dubai", "apartment interior design creek dubai", "apartment interior design creek dubai services", "best apartment interior design creek dubai", "professional apartment interior design creek dubai", "apartment interior design creek dubai company", "apartment interior design creek dubai specialist", "expert apartment interior design creek dubai",
  ],
  openGraph: {
    title: "Apartment Interior Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional apartment interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/apartment-interior-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/apartment-interior-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
