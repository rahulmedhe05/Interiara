import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Deira Dubai | Premium Design Services | Interiara",
  description: "Professional interior design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-deira-dubai", "interior design deira dubai", "interior design deira dubai services", "best interior design deira dubai", "professional interior design deira dubai", "interior design deira dubai company", "interior design deira dubai specialist", "expert interior design deira dubai",
  ],
  openGraph: {
    title: "Interior Design Deira Dubai | Transform Your Space | Interiara",
    description: "Professional interior design deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
