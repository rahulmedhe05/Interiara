import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Design luxury hospitality spaces in Downtown Dubai with our expert hotel interior design services. We create welcoming, stylish environments that enhance guest experiences and maximize revenue.",
  keywords: [
    "hotel interior design downtown dubai", "hospitality design downtown dubai", "hotel lobby design downtown dubai",
  ],
  openGraph: {
    title: "Hotel Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Design luxury hospitality spaces in Downtown Dubai with our expert hotel interior design services. We create welcoming, stylish environments that enhance guest experiences and maximize revenue.",
    url: "https://interiara.com/hotel-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/hotel-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
