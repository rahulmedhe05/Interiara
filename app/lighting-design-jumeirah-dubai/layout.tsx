import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lighting Design Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional lighting design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "lighting-design-jumeirah-dubai", "lighting design jumeirah dubai", "lighting design jumeirah dubai services", "best lighting design jumeirah dubai", "professional lighting design jumeirah dubai", "lighting design jumeirah dubai company", "lighting design jumeirah dubai specialist", "expert lighting design jumeirah dubai",
  ],
  openGraph: {
    title: "Lighting Design Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional lighting design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/lighting-design-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/lighting-design-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
