import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Comprehensive commercial interior design solutions for Downtown Dubai businesses. From retail spaces to corporate offices, we create stunning environments that drive customer engagement and operational efficiency.",
  keywords: [
    "commercial interior design downtown dubai", "commercial space design downtown dubai", "retail interior downtown dubai",
  ],
  openGraph: {
    title: "Commercial Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Comprehensive commercial interior design solutions for Downtown Dubai businesses. From retail spaces to corporate offices, we create stunning environments that drive customer engagement and operational efficiency.",
    url: "https://interiara.com/commercial-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/commercial-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
