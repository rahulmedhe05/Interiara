import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Renovation Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional office renovation al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-renovation-al-wasl-dubai", "office renovation al wasl dubai", "office renovation al wasl dubai services", "best office renovation al wasl dubai", "professional office renovation al wasl dubai", "office renovation al wasl dubai company", "office renovation al wasl dubai specialist", "expert office renovation al wasl dubai",
  ],
  openGraph: {
    title: "Office Renovation Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional office renovation al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-renovation-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-renovation-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
