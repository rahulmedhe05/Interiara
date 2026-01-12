import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restaurant Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Create an unforgettable dining experience with our restaurant interior design services in Downtown Dubai. We design captivating spaces that enhance your culinary brand and delight your customers.",
  keywords: [
    "restaurant interior design downtown dubai", "cafe design downtown dubai", "dining space design downtown dubai",
  ],
  openGraph: {
    title: "Restaurant Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Create an unforgettable dining experience with our restaurant interior design services in Downtown Dubai. We design captivating spaces that enhance your culinary brand and delight your customers.",
    url: "https://interiara.com/restaurant-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/restaurant-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
