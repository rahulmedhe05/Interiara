import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Art Consultation Palm Dubai | Premium Design Services | Interiara",
  description: "Professional art consultation palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "art-consultation-palm-dubai", "art consultation palm dubai", "art consultation palm dubai services", "best art consultation palm dubai", "professional art consultation palm dubai", "art consultation palm dubai company", "art consultation palm dubai specialist", "expert art consultation palm dubai",
  ],
  openGraph: {
    title: "Art Consultation Palm Dubai | Transform Your Space | Interiara",
    description: "Professional art consultation palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/art-consultation-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/art-consultation-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
