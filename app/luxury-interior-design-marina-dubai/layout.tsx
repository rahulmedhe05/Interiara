import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional luxury interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "luxury-interior-design-marina-dubai", "luxury interior design marina dubai", "luxury interior design marina dubai services", "best luxury interior design marina dubai", "professional luxury interior design marina dubai", "luxury interior design marina dubai company", "luxury interior design marina dubai specialist", "expert luxury interior design marina dubai",
  ],
  openGraph: {
    title: "Luxury Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional luxury interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/luxury-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/luxury-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
