import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cafe Interior Design Deira Dubai | Premium Design Services | Interiara",
  description: "Professional cafe interior design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "cafe-interior-design-deira-dubai", "cafe interior design deira dubai", "cafe interior design deira dubai services", "best cafe interior design deira dubai", "professional cafe interior design deira dubai", "cafe interior design deira dubai company", "cafe interior design deira dubai specialist", "expert cafe interior design deira dubai",
  ],
  openGraph: {
    title: "Cafe Interior Design Deira Dubai | Transform Your Space | Interiara",
    description: "Professional cafe interior design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/cafe-interior-design-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/cafe-interior-design-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
