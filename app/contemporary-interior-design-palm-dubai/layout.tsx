import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contemporary Interior Design Palm Dubai | Premium Design Services | Interiara",
  description: "Professional contemporary interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "contemporary-interior-design-palm-dubai", "contemporary interior design palm dubai", "contemporary interior design palm dubai services", "best contemporary interior design palm dubai", "professional contemporary interior design palm dubai", "contemporary interior design palm dubai company", "contemporary interior design palm dubai specialist", "expert contemporary interior design palm dubai",
  ],
  openGraph: {
    title: "Contemporary Interior Design Palm Dubai | Transform Your Space | Interiara",
    description: "Professional contemporary interior design palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/contemporary-interior-design-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/contemporary-interior-design-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
