import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa Interior Design Dubai | Expert Villa Interior Design Dubai Design Services UAE | Interiara",
  description: "Design stunning villa interiors with Dubai's premier villa interior design specialists. Luxury villas, modern designs, and complete fit-outs. 250+ villas transformed. Free consultation. Call +91 635 358 3148",
  keywords: [
    "villa interior design dubai",
    "villa design dubai",
    "luxury villa interior design dubai",
    "villa home design dubai",
    "modern villa interior design uae",
    "best villa interior design company dubai",
    "luxury villa interiors dubai",
    "villa renovation dubai",
    "villa fit out dubai",
    "villa interior decoration dubai",
    "upscale villa design dubai",
    "premium villa interiors uae",
    "villa space planning dubai",
    "custom villa design dubai",
    "villa styling dubai"
  ],
  openGraph: {
    title: "Villa Interior Design Dubai | Transform Your Space | Interiara",
    description: "Expert Villa Interior Design Dubai design specialists creating beautiful spaces across Dubai & UAE. Free consultation!",
    url: "https://interiara.com/villa-interior-design-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/villa-interior-design-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
