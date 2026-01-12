import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Interior Design Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional modern interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modern-interior-design-jumeirah-dubai", "modern interior design jumeirah dubai", "modern interior design jumeirah dubai services", "best modern interior design jumeirah dubai", "professional modern interior design jumeirah dubai", "modern interior design jumeirah dubai company", "modern interior design jumeirah dubai specialist", "expert modern interior design jumeirah dubai",
  ],
  openGraph: {
    title: "Modern Interior Design Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional modern interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modern-interior-design-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modern-interior-design-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
