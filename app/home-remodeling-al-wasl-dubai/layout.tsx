import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Remodeling Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional home remodeling al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-remodeling-al-wasl-dubai", "home remodeling al wasl dubai", "home remodeling al wasl dubai services", "best home remodeling al wasl dubai", "professional home remodeling al wasl dubai", "home remodeling al wasl dubai company", "home remodeling al wasl dubai specialist", "expert home remodeling al wasl dubai",
  ],
  openGraph: {
    title: "Home Remodeling Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional home remodeling al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-remodeling-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-remodeling-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
