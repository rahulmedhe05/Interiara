import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Remodeling Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional home remodeling business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-remodeling-business-bay-dubai", "home remodeling business bay dubai", "home remodeling business bay dubai services", "best home remodeling business bay dubai", "professional home remodeling business bay dubai", "home remodeling business bay dubai company", "home remodeling business bay dubai specialist", "expert home remodeling business bay dubai",
  ],
  openGraph: {
    title: "Home Remodeling Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional home remodeling business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-remodeling-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-remodeling-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
