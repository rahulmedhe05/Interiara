import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Decor Consultation Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional home decor consultation al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-decor-consultation-al-wasl-dubai", "home decor consultation al wasl dubai", "home decor consultation al wasl dubai services", "best home decor consultation al wasl dubai", "professional home decor consultation al wasl dubai", "home decor consultation al wasl dubai company", "home decor consultation al wasl dubai specialist", "expert home decor consultation al wasl dubai",
  ],
  openGraph: {
    title: "Home Decor Consultation Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional home decor consultation al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-decor-consultation-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-decor-consultation-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
