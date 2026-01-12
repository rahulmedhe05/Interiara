import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Renovation Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional office renovation business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-renovation-business-bay-dubai", "office renovation business bay dubai", "office renovation business bay dubai services", "best office renovation business bay dubai", "professional office renovation business bay dubai", "office renovation business bay dubai company", "office renovation business bay dubai specialist", "expert office renovation business bay dubai",
  ],
  openGraph: {
    title: "Office Renovation Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional office renovation business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-renovation-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-renovation-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
