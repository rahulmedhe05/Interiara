import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Renovation Palm Dubai | Premium Design Services | Interiara",
  description: "Professional office renovation palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-renovation-palm-dubai", "office renovation palm dubai", "office renovation palm dubai services", "best office renovation palm dubai", "professional office renovation palm dubai", "office renovation palm dubai company", "office renovation palm dubai specialist", "expert office renovation palm dubai",
  ],
  openGraph: {
    title: "Office Renovation Palm Dubai | Transform Your Space | Interiara",
    description: "Professional office renovation palm dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-renovation-palm-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-renovation-palm-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
