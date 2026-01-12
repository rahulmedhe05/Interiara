import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Visualization Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Professional interior visualization downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
  keywords: [
    "interior-visualization-downtown-dubai", "interior visualization downtown dubai", "interior visualization downtown dubai services", "best interior visualization downtown dubai", "professional interior visualization downtown dubai", "interior visualization downtown dubai company downtown dubai", "interior visualization downtown dubai specialist", "expert interior visualization downtown dubai",
  ],
  openGraph: {
    title: "Interior Visualization Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional interior visualization downtown dubai services in Downtown Dubai. Transform your space with our expert design team. Contact us for a free consultation and custom design proposal.",
    url: "https://interiara.com/interior-visualization-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-visualization-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
