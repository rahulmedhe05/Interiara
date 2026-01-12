import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drapes Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional drapes business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "drapes-business-bay-dubai", "drapes business bay dubai", "drapes business bay dubai services", "best drapes business bay dubai", "professional drapes business bay dubai", "drapes business bay dubai company", "drapes business bay dubai specialist", "expert drapes business bay dubai",
  ],
  openGraph: {
    title: "Drapes Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional drapes business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/drapes-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/drapes-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
