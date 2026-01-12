import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sustainable Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional sustainable interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "sustainable-interior-design-marina-dubai", "sustainable interior design marina dubai", "sustainable interior design marina dubai services", "best sustainable interior design marina dubai", "professional sustainable interior design marina dubai", "sustainable interior design marina dubai company", "sustainable interior design marina dubai specialist", "expert sustainable interior design marina dubai",
  ],
  openGraph: {
    title: "Sustainable Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional sustainable interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/sustainable-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/sustainable-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
