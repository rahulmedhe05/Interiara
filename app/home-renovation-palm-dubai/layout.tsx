import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Renovation Palm Dubai | Premium Design Services | Interiara",
  description: "Professional home renovation palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-renovation-palm-dubai", "home renovation palm dubai", "home renovation palm dubai services", "best home renovation palm dubai", "professional home renovation palm dubai", "home renovation palm dubai company", "home renovation palm dubai specialist", "expert home renovation palm dubai",
  ],
  openGraph: {
    title: "Home Renovation Palm Dubai | Transform Your Space | Interiara",
    description: "Professional home renovation palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-renovation-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-renovation-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
