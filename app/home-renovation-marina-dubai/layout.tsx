import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Renovation Marina Dubai | Premium Design Services | Interiara",
  description: "Professional home renovation marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-renovation-marina-dubai", "home renovation marina dubai", "home renovation marina dubai services", "best home renovation marina dubai", "professional home renovation marina dubai", "home renovation marina dubai company", "home renovation marina dubai specialist", "expert home renovation marina dubai",
  ],
  openGraph: {
    title: "Home Renovation Marina Dubai | Transform Your Space | Interiara",
    description: "Professional home renovation marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-renovation-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-renovation-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
