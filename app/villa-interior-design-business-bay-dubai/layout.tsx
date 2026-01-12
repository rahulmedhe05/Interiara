import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa Interior Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional villa interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "villa-interior-design-business-bay-dubai", "villa interior design business bay dubai", "villa interior design business bay dubai services", "best villa interior design business bay dubai", "professional villa interior design business bay dubai", "villa interior design business bay dubai company", "villa interior design business bay dubai specialist", "expert villa interior design business bay dubai",
  ],
  openGraph: {
    title: "Villa Interior Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional villa interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/villa-interior-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/villa-interior-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
