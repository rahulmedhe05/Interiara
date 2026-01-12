import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Art Consultation Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional art consultation al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "art-consultation-al-wasl-dubai", "art consultation al wasl dubai", "art consultation al wasl dubai services", "best art consultation al wasl dubai", "professional art consultation al wasl dubai", "art consultation al wasl dubai company", "art consultation al wasl dubai specialist", "expert art consultation al wasl dubai",
  ],
  openGraph: {
    title: "Art Consultation Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional art consultation al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/art-consultation-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/art-consultation-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
