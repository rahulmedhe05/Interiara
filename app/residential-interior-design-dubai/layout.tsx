import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Interior Design Dubai | Expert Home Interior Designers UAE | Interiara",
  description: "Transform your home with Dubai's leading residential interior design experts. Interiara specializes in luxury villa interiors, modern apartments, and family home designs. 500+ homes transformed. Free 3D visualization & consultation. Call +91 635 358 3148",
  keywords: [
    "residential interior design dubai",
    "home interior design dubai",
    "house interior design dubai",
    "interior designer for home dubai",
    "residential interior designer uae",
    "home decoration dubai",
    "best residential interior design company dubai",
    "affordable home interior design dubai",
    "luxury residential interior design uae",
    "modern home interior design dubai",
    "villa home design dubai",
    "dubai home makeover",
    "family home interior dubai",
    "residential renovation dubai",
    "home styling dubai",
    "interior fit out residential dubai",
    "complete home interior solutions dubai"
  ],
  openGraph: {
    title: "Residential Interior Design Dubai | Transform Your Home | Interiara",
    description: "Expert residential interior designers creating stunning homes across Dubai & UAE. Villas, apartments, townhouses - we design it all. Book free consultation!",
    url: "https://interiara.com/residential-interior-design-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/residential-interior-design-dubai",
  },
}

export default function ResidentialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
