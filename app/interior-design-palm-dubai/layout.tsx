import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-palm-dubai", "interior design palm dubai", "interior design palm dubai services", "best interior design palm dubai", "professional interior design palm dubai", "interior design palm dubai company", "interior design palm dubai specialist", "expert interior design palm dubai",
  ],
  openGraph: {
    title: "Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
