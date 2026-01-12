import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional modern interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "modern-interior-design-al-wasl-dubai", "modern interior design al wasl dubai", "modern interior design al wasl dubai services", "best modern interior design al wasl dubai", "professional modern interior design al wasl dubai", "modern interior design al wasl dubai company", "modern interior design al wasl dubai specialist", "expert modern interior design al wasl dubai",
  ],
  openGraph: {
    title: "Modern Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional modern interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/modern-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modern-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
