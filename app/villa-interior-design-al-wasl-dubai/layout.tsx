import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa Interior Design Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional villa interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "villa-interior-design-al-wasl-dubai", "villa interior design al wasl dubai", "villa interior design al wasl dubai services", "best villa interior design al wasl dubai", "professional villa interior design al wasl dubai", "villa interior design al wasl dubai company", "villa interior design al wasl dubai specialist", "expert villa interior design al wasl dubai",
  ],
  openGraph: {
    title: "Villa Interior Design Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional villa interior design al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/villa-interior-design-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/villa-interior-design-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
