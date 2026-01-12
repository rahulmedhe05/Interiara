import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wardrobe Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional wardrobe design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "wardrobe-design-creek-dubai", "wardrobe design creek dubai", "wardrobe design creek dubai services", "best wardrobe design creek dubai", "professional wardrobe design creek dubai", "wardrobe design creek dubai company", "wardrobe design creek dubai specialist", "expert wardrobe design creek dubai",
  ],
  openGraph: {
    title: "Wardrobe Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional wardrobe design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/wardrobe-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/wardrobe-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
