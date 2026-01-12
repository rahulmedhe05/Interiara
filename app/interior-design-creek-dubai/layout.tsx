import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Creek Dubai | Premium Design Services | Interiara",
  description: "Professional interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-creek-dubai", "interior design creek dubai", "interior design creek dubai services", "best interior design creek dubai", "professional interior design creek dubai", "interior design creek dubai company", "interior design creek dubai specialist", "expert interior design creek dubai",
  ],
  openGraph: {
    title: "Interior Design Creek Dubai | Transform Your Space | Interiara",
    description: "Professional interior design creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
