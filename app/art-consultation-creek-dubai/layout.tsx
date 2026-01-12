import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Art Consultation Creek Dubai | Premium Design Services | Interiara",
  description: "Professional art consultation creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "art-consultation-creek-dubai", "art consultation creek dubai", "art consultation creek dubai services", "best art consultation creek dubai", "professional art consultation creek dubai", "art consultation creek dubai company", "art consultation creek dubai specialist", "expert art consultation creek dubai",
  ],
  openGraph: {
    title: "Art Consultation Creek Dubai | Transform Your Space | Interiara",
    description: "Professional art consultation creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/art-consultation-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/art-consultation-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
