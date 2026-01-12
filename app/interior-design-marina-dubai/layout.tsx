import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-marina-dubai", "interior design marina dubai", "interior design marina dubai services", "best interior design marina dubai", "professional interior design marina dubai", "interior design marina dubai company", "interior design marina dubai specialist", "expert interior design marina dubai",
  ],
  openGraph: {
    title: "Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
