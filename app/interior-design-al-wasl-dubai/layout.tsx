import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-al-wasl-dubai", "interior design al wasl dubai", "interior design al wasl dubai services", "best interior design al wasl dubai", "professional interior design al wasl dubai", "interior design al wasl dubai company", "interior design al wasl dubai specialist", "expert interior design al wasl dubai",
  ],
  openGraph: {
    title: "Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
