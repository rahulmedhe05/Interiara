import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Decor Consultation Palm Dubai | Premium Design Services | Interiara",
  description: "Professional home decor consultation palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-decor-consultation-palm-dubai", "home decor consultation palm dubai", "home decor consultation palm dubai services", "best home decor consultation palm dubai", "professional home decor consultation palm dubai", "home decor consultation palm dubai company", "home decor consultation palm dubai specialist", "expert home decor consultation palm dubai",
  ],
  openGraph: {
    title: "Home Decor Consultation Palm Dubai | Transform Your Space | Interiara",
    description: "Professional home decor consultation palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-decor-consultation-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-decor-consultation-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
