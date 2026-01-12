import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Interior Design Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional luxury interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "luxury-interior-design-jumeirah-dubai", "luxury interior design jumeirah dubai", "luxury interior design jumeirah dubai services", "best luxury interior design jumeirah dubai", "professional luxury interior design jumeirah dubai", "luxury interior design jumeirah dubai company", "luxury interior design jumeirah dubai specialist", "expert luxury interior design jumeirah dubai",
  ],
  openGraph: {
    title: "Luxury Interior Design Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional luxury interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/luxury-interior-design-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/luxury-interior-design-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
