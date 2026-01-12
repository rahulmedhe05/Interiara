import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wardrobe Design Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional wardrobe design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "wardrobe-design-downtown-dubai", "wardrobe design downtown dubai", "wardrobe design downtown dubai services", "best wardrobe design downtown dubai", "professional wardrobe design downtown dubai", "wardrobe design downtown dubai company", "wardrobe design downtown dubai specialist", "expert wardrobe design downtown dubai",
  ],
  openGraph: {
    title: "Wardrobe Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional wardrobe design downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/wardrobe-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/wardrobe-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
