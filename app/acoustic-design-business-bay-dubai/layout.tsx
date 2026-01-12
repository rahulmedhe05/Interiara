import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acoustic Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional acoustic design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "acoustic-design-business-bay-dubai", "acoustic design business bay dubai", "acoustic design business bay dubai services", "best acoustic design business bay dubai", "professional acoustic design business bay dubai", "acoustic design business bay dubai company", "acoustic design business bay dubai specialist", "expert acoustic design business bay dubai",
  ],
  openGraph: {
    title: "Acoustic Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional acoustic design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/acoustic-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/acoustic-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
