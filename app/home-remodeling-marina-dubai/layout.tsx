import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Remodeling Marina Dubai | Premium Design Services | Interiara",
  description: "Professional home remodeling marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-remodeling-marina-dubai", "home remodeling marina dubai", "home remodeling marina dubai services", "best home remodeling marina dubai", "professional home remodeling marina dubai", "home remodeling marina dubai company", "home remodeling marina dubai specialist", "expert home remodeling marina dubai",
  ],
  openGraph: {
    title: "Home Remodeling Marina Dubai | Transform Your Space | Interiara",
    description: "Professional home remodeling marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-remodeling-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-remodeling-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
