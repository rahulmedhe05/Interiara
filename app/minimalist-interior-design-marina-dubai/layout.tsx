import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Minimalist Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional minimalist interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "minimalist-interior-design-marina-dubai", "minimalist interior design marina dubai", "minimalist interior design marina dubai services", "best minimalist interior design marina dubai", "professional minimalist interior design marina dubai", "minimalist interior design marina dubai company", "minimalist interior design marina dubai specialist", "expert minimalist interior design marina dubai",
  ],
  openGraph: {
    title: "Minimalist Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional minimalist interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/minimalist-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/minimalist-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
