import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional modern interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modern-interior-design-palm-dubai", "modern interior design palm dubai", "modern interior design palm dubai services", "best modern interior design palm dubai", "professional modern interior design palm dubai", "modern interior design palm dubai company", "modern interior design palm dubai specialist", "expert modern interior design palm dubai",
  ],
  openGraph: {
    title: "Modern Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional modern interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modern-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modern-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
