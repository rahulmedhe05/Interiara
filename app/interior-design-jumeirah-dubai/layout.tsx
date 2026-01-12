import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-jumeirah-dubai", "interior design jumeirah dubai", "interior design jumeirah dubai services", "best interior design jumeirah dubai", "professional interior design jumeirah dubai", "interior design jumeirah dubai company", "interior design jumeirah dubai specialist", "expert interior design jumeirah dubai",
  ],
  openGraph: {
    title: "Interior Design Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
