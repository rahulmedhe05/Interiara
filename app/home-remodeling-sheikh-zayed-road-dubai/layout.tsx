import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Remodeling Sheikh Zayed Road Dubai | Premium Design Services | Interiara",
  description: "Professional home remodeling sheikh zayed road dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-remodeling-sheikh-zayed-road-dubai", "home remodeling sheikh zayed road dubai", "home remodeling sheikh zayed road dubai services", "best home remodeling sheikh zayed road dubai", "professional home remodeling sheikh zayed road dubai", "home remodeling sheikh zayed road dubai company", "home remodeling sheikh zayed road dubai specialist", "expert home remodeling sheikh zayed road dubai",
  ],
  openGraph: {
    title: "Home Remodeling Sheikh Zayed Road Dubai | Transform Your Space | Interiara",
    description: "Professional home remodeling sheikh zayed road dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-remodeling-sheikh-zayed-road-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-remodeling-sheikh-zayed-road-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
