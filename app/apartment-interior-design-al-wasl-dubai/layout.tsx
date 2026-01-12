import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apartment Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional apartment interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "apartment-interior-design-al-wasl-dubai", "apartment interior design al wasl dubai", "apartment interior design al wasl dubai services", "best apartment interior design al wasl dubai", "professional apartment interior design al wasl dubai", "apartment interior design al wasl dubai company", "apartment interior design al wasl dubai specialist", "expert apartment interior design al wasl dubai",
  ],
  openGraph: {
    title: "Apartment Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional apartment interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/apartment-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/apartment-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
