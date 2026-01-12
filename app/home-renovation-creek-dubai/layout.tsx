import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Renovation Creek Dubai | Premium Design Services | Interiara",
  description: "Professional home renovation creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-renovation-creek-dubai", "home renovation creek dubai", "home renovation creek dubai services", "best home renovation creek dubai", "professional home renovation creek dubai", "home renovation creek dubai company", "home renovation creek dubai specialist", "expert home renovation creek dubai",
  ],
  openGraph: {
    title: "Home Renovation Creek Dubai | Transform Your Space | Interiara",
    description: "Professional home renovation creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-renovation-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-renovation-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
