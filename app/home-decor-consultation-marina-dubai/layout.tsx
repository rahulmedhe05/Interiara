import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Decor Consultation Marina Dubai | Premium Design Services | Interiara",
  description: "Professional home decor consultation marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-decor-consultation-marina-dubai", "home decor consultation marina dubai", "home decor consultation marina dubai services", "best home decor consultation marina dubai", "professional home decor consultation marina dubai", "home decor consultation marina dubai company", "home decor consultation marina dubai specialist", "expert home decor consultation marina dubai",
  ],
  openGraph: {
    title: "Home Decor Consultation Marina Dubai | Transform Your Space | Interiara",
    description: "Professional home decor consultation marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-decor-consultation-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-decor-consultation-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
