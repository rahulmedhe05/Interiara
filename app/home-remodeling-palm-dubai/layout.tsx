import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Remodeling Palm Dubai | Premium Design Services | Interiara",
  description: "Professional home remodeling palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-remodeling-palm-dubai", "home remodeling palm dubai", "home remodeling palm dubai services", "best home remodeling palm dubai", "professional home remodeling palm dubai", "home remodeling palm dubai company", "home remodeling palm dubai specialist", "expert home remodeling palm dubai",
  ],
  openGraph: {
    title: "Home Remodeling Palm Dubai | Transform Your Space | Interiara",
    description: "Professional home remodeling palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-remodeling-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-remodeling-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
