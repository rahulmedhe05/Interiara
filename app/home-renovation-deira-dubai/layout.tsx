import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Renovation Deira Dubai | Premium Design Services | Interiara",
  description: "Professional home renovation deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-renovation-deira-dubai", "home renovation deira dubai", "home renovation deira dubai services", "best home renovation deira dubai", "professional home renovation deira dubai", "home renovation deira dubai company", "home renovation deira dubai specialist", "expert home renovation deira dubai",
  ],
  openGraph: {
    title: "Home Renovation Deira Dubai | Transform Your Space | Interiara",
    description: "Professional home renovation deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-renovation-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-renovation-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
