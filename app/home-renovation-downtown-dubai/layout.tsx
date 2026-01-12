import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Renovation Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional home renovation downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "home-renovation-downtown-dubai", "home renovation downtown dubai", "home renovation downtown dubai services", "best home renovation downtown dubai", "professional home renovation downtown dubai", "home renovation downtown dubai company", "home renovation downtown dubai specialist", "expert home renovation downtown dubai",
  ],
  openGraph: {
    title: "Home Renovation Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional home renovation downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/home-renovation-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/home-renovation-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
