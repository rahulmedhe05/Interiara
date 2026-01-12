import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Art Consultation Marina Dubai | Premium Design Services | Interiara",
  description: "Professional art consultation marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "art-consultation-marina-dubai", "art consultation marina dubai", "art consultation marina dubai services", "best art consultation marina dubai", "professional art consultation marina dubai", "art consultation marina dubai company", "art consultation marina dubai specialist", "expert art consultation marina dubai",
  ],
  openGraph: {
    title: "Art Consultation Marina Dubai | Transform Your Space | Interiara",
    description: "Professional art consultation marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/art-consultation-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/art-consultation-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
