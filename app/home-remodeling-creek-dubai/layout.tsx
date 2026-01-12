import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Remodeling Creek Dubai | Premium Design Services | Interiara",
  description: "Professional home remodeling creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-remodeling-creek-dubai", "home remodeling creek dubai", "home remodeling creek dubai services", "best home remodeling creek dubai", "professional home remodeling creek dubai", "home remodeling creek dubai company", "home remodeling creek dubai specialist", "expert home remodeling creek dubai",
  ],
  openGraph: {
    title: "Home Remodeling Creek Dubai | Transform Your Space | Interiara",
    description: "Professional home remodeling creek dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-remodeling-creek-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-remodeling-creek-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
