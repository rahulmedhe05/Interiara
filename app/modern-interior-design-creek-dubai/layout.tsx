import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Interior Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional modern interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modern-interior-design-creek-dubai", "modern interior design creek dubai", "modern interior design creek dubai services", "best modern interior design creek dubai", "professional modern interior design creek dubai", "modern interior design creek dubai company", "modern interior design creek dubai specialist", "expert modern interior design creek dubai",
  ],
  openGraph: {
    title: "Modern Interior Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional modern interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modern-interior-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modern-interior-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
