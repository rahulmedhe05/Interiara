import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Experience luxury interior design in Downtown Dubai. Our premium design services create sophisticated, elegant spaces using the finest materials and furnishings. Perfect for discerning clients seeking excellence.",
  keywords: [
    "luxury interior design downtown dubai", "premium design downtown dubai", "high-end interior downtown dubai",
  ],
  openGraph: {
    title: "Luxury Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Experience luxury interior design in Downtown Dubai. Our premium design services create sophisticated, elegant spaces using the finest materials and furnishings. Perfect for discerning clients seeking excellence.",
    url: "https://interiara.com/luxury-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/luxury-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
