import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Interior Design Dubai | Expert Hotel Interior Design Dubai Design Services UAE | Interiara",
  description: "Design premium hotel spaces with expert hotel interior design in Dubai. Luxury, comfort, memorable experiences. 120+ hotels designed. Call +91 635 358 3148",
  keywords: [
    "hotel interior design dubai",
    "hotel design dubai",
    "hotel fit out dubai",
    "hotel renovation dubai",
    "luxury hotel interior design dubai",
    "modern hotel design dubai",
    "best hotel interior design company dubai",
    "boutique hotel design dubai",
    "hotel lobby design dubai",
    "hotel room design dubai",
    "hotel space planning dubai",
    "hotel interior decoration dubai",
    "hotel styling dubai",
    "hotel interior solutions dubai",
    "upscale hotel design dubai"
  ],
  openGraph: {
    title: "Hotel Interior Design Dubai | Transform Your Space | Interiara",
    description: "Expert Hotel Interior Design Dubai design specialists creating beautiful spaces across Dubai & UAE. Free consultation!",
    url: "https://interiara.com/hotel-interior-design-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/hotel-interior-design-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
