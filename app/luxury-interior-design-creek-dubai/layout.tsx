import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Interior Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional luxury interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "luxury-interior-design-creek-dubai", "luxury interior design creek dubai", "luxury interior design creek dubai services", "best luxury interior design creek dubai", "professional luxury interior design creek dubai", "luxury interior design creek dubai company", "luxury interior design creek dubai specialist", "expert luxury interior design creek dubai",
  ],
  openGraph: {
    title: "Luxury Interior Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional luxury interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/luxury-interior-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/luxury-interior-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
