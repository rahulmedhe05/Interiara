import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional modern interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modern-interior-design-marina-dubai", "modern interior design marina dubai", "modern interior design marina dubai services", "best modern interior design marina dubai", "professional modern interior design marina dubai", "modern interior design marina dubai company", "modern interior design marina dubai specialist", "expert modern interior design marina dubai",
  ],
  openGraph: {
    title: "Modern Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional modern interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modern-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modern-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
