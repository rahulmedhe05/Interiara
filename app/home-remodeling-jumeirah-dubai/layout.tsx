import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Remodeling Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional home remodeling jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-remodeling-jumeirah-dubai", "home remodeling jumeirah dubai", "home remodeling jumeirah dubai services", "best home remodeling jumeirah dubai", "professional home remodeling jumeirah dubai", "home remodeling jumeirah dubai company", "home remodeling jumeirah dubai specialist", "expert home remodeling jumeirah dubai",
  ],
  openGraph: {
    title: "Home Remodeling Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional home remodeling jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-remodeling-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-remodeling-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
