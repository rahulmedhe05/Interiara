import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cafe Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional cafe interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "cafe-interior-design-al-wasl-dubai", "cafe interior design al wasl dubai", "cafe interior design al wasl dubai services", "best cafe interior design al wasl dubai", "professional cafe interior design al wasl dubai", "cafe interior design al wasl dubai company", "cafe interior design al wasl dubai specialist", "expert cafe interior design al wasl dubai",
  ],
  openGraph: {
    title: "Cafe Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional cafe interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/cafe-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/cafe-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
