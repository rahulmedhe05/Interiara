import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Art Consultation Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional art consultation jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "art-consultation-jumeirah-dubai", "art consultation jumeirah dubai", "art consultation jumeirah dubai services", "best art consultation jumeirah dubai", "professional art consultation jumeirah dubai", "art consultation jumeirah dubai company", "art consultation jumeirah dubai specialist", "expert art consultation jumeirah dubai",
  ],
  openGraph: {
    title: "Art Consultation Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional art consultation jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/art-consultation-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/art-consultation-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
