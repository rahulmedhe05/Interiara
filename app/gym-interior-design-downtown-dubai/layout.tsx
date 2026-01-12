import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gym Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional gym interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "gym-interior-design-downtown-dubai", "gym interior design downtown dubai", "gym interior design downtown dubai services", "best gym interior design downtown dubai", "professional gym interior design downtown dubai", "gym interior design downtown dubai company downtown dubai", "gym interior design downtown dubai specialist", "expert gym interior design downtown dubai",
  ],
  openGraph: {
    title: "Gym Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional gym interior design downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/gym-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/gym-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
