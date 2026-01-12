import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Renovation Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional home renovation business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-renovation-business-bay-dubai", "home renovation business bay dubai", "home renovation business bay dubai services", "best home renovation business bay dubai", "professional home renovation business bay dubai", "home renovation business bay dubai company", "home renovation business bay dubai specialist", "expert home renovation business bay dubai",
  ],
  openGraph: {
    title: "Home Renovation Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional home renovation business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-renovation-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-renovation-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
