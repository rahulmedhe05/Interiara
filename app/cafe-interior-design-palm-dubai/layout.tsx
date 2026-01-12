import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cafe Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional cafe interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "cafe-interior-design-palm-dubai", "cafe interior design palm dubai", "cafe interior design palm dubai services", "best cafe interior design palm dubai", "professional cafe interior design palm dubai", "cafe interior design palm dubai company", "cafe interior design palm dubai specialist", "expert cafe interior design palm dubai",
  ],
  openGraph: {
    title: "Cafe Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional cafe interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/cafe-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/cafe-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
