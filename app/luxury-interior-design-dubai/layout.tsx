import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Interior Design Dubai | Expert Luxury Interior Design Dubai Design Services UAE | Interiara",
  description: "Experience luxury interior design excellence in Dubai. Premium finishes, bespoke designs, exclusive spaces. Interiara delivers 500+ luxury transformations. Free consultation. Call +91 635 358 3148",
  keywords: [
    "luxury interior design dubai",
    "luxury interior design uae",
    "luxury home design dubai",
    "premium interior design dubai",
    "high-end interior design dubai",
    "best luxury interior design company dubai",
    "luxury renovation dubai",
    "luxury interior decoration dubai",
    "luxury fit out dubai",
    "bespoke luxury design dubai",
    "exclusive interior design dubai",
    "luxury space planning dubai",
    "luxury styling dubai",
    "upscale interior design dubai",
    "luxury interior solutions dubai"
  ],
  openGraph: {
    title: "Luxury Interior Design Dubai | Transform Your Space | Interiara",
    description: "Expert Luxury Interior Design Dubai design specialists creating beautiful spaces across Dubai & UAE. Free consultation!",
    url: "https://interiara.com/luxury-interior-design-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/luxury-interior-design-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
