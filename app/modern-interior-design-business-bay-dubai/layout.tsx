import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Interior Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional modern interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modern-interior-design-business-bay-dubai", "modern interior design business bay dubai", "modern interior design business bay dubai services", "best modern interior design business bay dubai", "professional modern interior design business bay dubai", "modern interior design business bay dubai company", "modern interior design business bay dubai specialist", "expert modern interior design business bay dubai",
  ],
  openGraph: {
    title: "Modern Interior Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional modern interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modern-interior-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modern-interior-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
