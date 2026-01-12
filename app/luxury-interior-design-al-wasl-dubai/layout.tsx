import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional luxury interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "luxury-interior-design-al-wasl-dubai", "luxury interior design al wasl dubai", "luxury interior design al wasl dubai services", "best luxury interior design al wasl dubai", "professional luxury interior design al wasl dubai", "luxury interior design al wasl dubai company", "luxury interior design al wasl dubai specialist", "expert luxury interior design al wasl dubai",
  ],
  openGraph: {
    title: "Luxury Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional luxury interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/luxury-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/luxury-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
