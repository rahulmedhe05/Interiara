import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Renovation Jbr Dubai | Premium Design Services | Interiara",
  description: "Professional home renovation jbr dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-renovation-jbr-dubai", "home renovation jbr dubai", "home renovation jbr dubai services", "best home renovation jbr dubai", "professional home renovation jbr dubai", "home renovation jbr dubai company", "home renovation jbr dubai specialist", "expert home renovation jbr dubai",
  ],
  openGraph: {
    title: "Home Renovation Jbr Dubai | Transform Your Space | Interiara",
    description: "Professional home renovation jbr dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-renovation-jbr-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-renovation-jbr-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
