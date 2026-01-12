import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Interior Design Downtown Dubai | Premium Design Services Downtown Dubai | Interiara",
  description: "Elevate your business workspace with professional office interior design in Downtown Dubai. We design productive, inspiring work environments that reflect your brand identity and enhance employee satisfaction.",
  keywords: [
    "office interior design downtown dubai", "office design downtown dubai", "corporate office downtown dubai", "business space design downtown dubai",
  ],
  openGraph: {
    title: "Office Interior Design Downtown Dubai | Transform Your Space | Interiara",
    description: "Elevate your business workspace with professional office interior design in Downtown Dubai. We design productive, inspiring work environments that reflect your brand identity and enhance employee satisfaction.",
    url: "https://interiara.com/office-interior-design-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-interior-design-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
