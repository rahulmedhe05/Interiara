import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-business-bay-dubai", "interior design business bay dubai", "interior design business bay dubai services", "best interior design business bay dubai", "professional interior design business bay dubai", "interior design business bay dubai company", "interior design business bay dubai specialist", "expert interior design business bay dubai",
  ],
  openGraph: {
    title: "Interior Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional interior design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
