import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wardrobe Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional wardrobe design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "wardrobe-design-al-wasl-dubai", "wardrobe design al wasl dubai", "wardrobe design al wasl dubai services", "best wardrobe design al wasl dubai", "professional wardrobe design al wasl dubai", "wardrobe design al wasl dubai company", "wardrobe design al wasl dubai specialist", "expert wardrobe design al wasl dubai",
  ],
  openGraph: {
    title: "Wardrobe Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional wardrobe design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/wardrobe-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/wardrobe-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
