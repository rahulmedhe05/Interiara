import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contemporary Interior Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional contemporary interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "contemporary-interior-design-creek-dubai", "contemporary interior design creek dubai", "contemporary interior design creek dubai services", "best contemporary interior design creek dubai", "professional contemporary interior design creek dubai", "contemporary interior design creek dubai company", "contemporary interior design creek dubai specialist", "expert contemporary interior design creek dubai",
  ],
  openGraph: {
    title: "Contemporary Interior Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional contemporary interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/contemporary-interior-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/contemporary-interior-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
