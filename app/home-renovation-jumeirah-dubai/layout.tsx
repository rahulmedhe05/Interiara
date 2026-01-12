import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Renovation Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional home renovation jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-renovation-jumeirah-dubai", "home renovation jumeirah dubai", "home renovation jumeirah dubai services", "best home renovation jumeirah dubai", "professional home renovation jumeirah dubai", "home renovation jumeirah dubai company", "home renovation jumeirah dubai specialist", "expert home renovation jumeirah dubai",
  ],
  openGraph: {
    title: "Home Renovation Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional home renovation jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-renovation-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-renovation-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
