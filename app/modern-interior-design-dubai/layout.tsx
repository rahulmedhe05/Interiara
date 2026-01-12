import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Interior Design Dubai | Expert Modern Interior Design Dubai Design Services UAE | Interiara",
  description: "Create stunning modern interiors with expert modern interior design services in Dubai. Clean lines, functionality, and style. 350+ modern spaces designed. Call +91 635 358 3148",
  keywords: [
    "modern interior design dubai",
    "modern design dubai",
    "contemporary interior design dubai",
    "modern home design dubai",
    "minimalist interior design dubai",
    "best modern interior design company dubai",
    "modern renovation dubai",
    "modern interior decoration dubai",
    "modern fit out dubai",
    "sleek modern design dubai",
    "modern space planning dubai",
    "modern styling dubai",
    "modern interior solutions dubai",
    "modern apartment design dubai",
    "modern villa design dubai"
  ],
  openGraph: {
    title: "Modern Interior Design Dubai | Transform Your Space | Interiara",
    description: "Expert Modern Interior Design Dubai design specialists creating beautiful spaces across Dubai & UAE. Free consultation!",
    url: "https://interiara.com/modern-interior-design-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/modern-interior-design-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
