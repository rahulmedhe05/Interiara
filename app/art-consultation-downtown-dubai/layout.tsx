import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Art Consultation Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional art consultation downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "art-consultation-downtown-dubai", "art consultation downtown dubai", "art consultation downtown dubai services", "best art consultation downtown dubai", "professional art consultation downtown dubai", "art consultation downtown dubai company", "art consultation downtown dubai specialist", "expert art consultation downtown dubai",
  ],
  openGraph: {
    title: "Art Consultation Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional art consultation downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/art-consultation-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/art-consultation-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
