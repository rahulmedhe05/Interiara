import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contemporary Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional contemporary interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "contemporary-interior-design-marina-dubai", "contemporary interior design marina dubai", "contemporary interior design marina dubai services", "best contemporary interior design marina dubai", "professional contemporary interior design marina dubai", "contemporary interior design marina dubai company", "contemporary interior design marina dubai specialist", "expert contemporary interior design marina dubai",
  ],
  openGraph: {
    title: "Contemporary Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional contemporary interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/contemporary-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/contemporary-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
