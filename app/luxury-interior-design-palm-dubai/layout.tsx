import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional luxury interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "luxury-interior-design-palm-dubai", "luxury interior design palm dubai", "luxury interior design palm dubai services", "best luxury interior design palm dubai", "professional luxury interior design palm dubai", "luxury interior design palm dubai company", "luxury interior design palm dubai specialist", "expert luxury interior design palm dubai",
  ],
  openGraph: {
    title: "Luxury Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional luxury interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/luxury-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/luxury-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
