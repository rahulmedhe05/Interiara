import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Remodeling Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional home remodeling downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-remodeling-downtown-dubai", "home remodeling downtown dubai", "home remodeling downtown dubai services", "best home remodeling downtown dubai", "professional home remodeling downtown dubai", "home remodeling downtown dubai company", "home remodeling downtown dubai specialist", "expert home remodeling downtown dubai",
  ],
  openGraph: {
    title: "Home Remodeling Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional home remodeling downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-remodeling-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-remodeling-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
