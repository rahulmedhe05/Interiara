import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Interior Design Deira Dubai | Premium Design Services | Interiara",
  description: "Professional modern interior design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modern-interior-design-deira-dubai", "modern interior design deira dubai", "modern interior design deira dubai services", "best modern interior design deira dubai", "professional modern interior design deira dubai", "modern interior design deira dubai company", "modern interior design deira dubai specialist", "expert modern interior design deira dubai",
  ],
  openGraph: {
    title: "Modern Interior Design Deira Dubai | Transform Your Space | Interiara",
    description: "Professional modern interior design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modern-interior-design-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modern-interior-design-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
