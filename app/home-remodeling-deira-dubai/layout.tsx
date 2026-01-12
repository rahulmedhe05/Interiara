import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Remodeling Deira Dubai | Premium Design Services | Interiara",
  description: "Professional home remodeling deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-remodeling-deira-dubai", "home remodeling deira dubai", "home remodeling deira dubai services", "best home remodeling deira dubai", "professional home remodeling deira dubai", "home remodeling deira dubai company", "home remodeling deira dubai specialist", "expert home remodeling deira dubai",
  ],
  openGraph: {
    title: "Home Remodeling Deira Dubai | Transform Your Space | Interiara",
    description: "Professional home remodeling deira dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-remodeling-deira-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-remodeling-deira-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
