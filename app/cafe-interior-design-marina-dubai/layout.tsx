import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cafe Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional cafe interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "cafe-interior-design-marina-dubai", "cafe interior design marina dubai", "cafe interior design marina dubai services", "best cafe interior design marina dubai", "professional cafe interior design marina dubai", "cafe interior design marina dubai company", "cafe interior design marina dubai specialist", "expert cafe interior design marina dubai",
  ],
  openGraph: {
    title: "Cafe Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional cafe interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/cafe-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/cafe-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
