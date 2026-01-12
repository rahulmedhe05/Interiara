import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wardrobe Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional wardrobe design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "wardrobe-design-marina-dubai", "wardrobe design marina dubai", "wardrobe design marina dubai services", "best wardrobe design marina dubai", "professional wardrobe design marina dubai", "wardrobe design marina dubai company", "wardrobe design marina dubai specialist", "expert wardrobe design marina dubai",
  ],
  openGraph: {
    title: "Wardrobe Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional wardrobe design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/wardrobe-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/wardrobe-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
