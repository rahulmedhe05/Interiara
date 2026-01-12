import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Renovation Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional home renovation al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-renovation-al-wasl-dubai", "home renovation al wasl dubai", "home renovation al wasl dubai services", "best home renovation al wasl dubai", "professional home renovation al wasl dubai", "home renovation al wasl dubai company", "home renovation al wasl dubai specialist", "expert home renovation al wasl dubai",
  ],
  openGraph: {
    title: "Home Renovation Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional home renovation al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-renovation-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-renovation-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
