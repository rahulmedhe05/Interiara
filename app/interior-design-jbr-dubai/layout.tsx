import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Jbr Dubai | Premium Design Services | Interiara",
  description: "Professional interior design jbr dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-jbr-dubai", "interior design jbr dubai", "interior design jbr dubai services", "best interior design jbr dubai", "professional interior design jbr dubai", "interior design jbr dubai company", "interior design jbr dubai specialist", "expert interior design jbr dubai",
  ],
  openGraph: {
    title: "Interior Design Jbr Dubai | Transform Your Space | Interiara",
    description: "Professional interior design jbr dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-jbr-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-jbr-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
