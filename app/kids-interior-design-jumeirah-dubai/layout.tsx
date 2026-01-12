import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kids Interior Design Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional kids interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "kids-interior-design-jumeirah-dubai", "kids interior design jumeirah dubai", "kids interior design jumeirah dubai services", "best kids interior design jumeirah dubai", "professional kids interior design jumeirah dubai", "kids interior design jumeirah dubai company", "kids interior design jumeirah dubai specialist", "expert kids interior design jumeirah dubai",
  ],
  openGraph: {
    title: "Kids Interior Design Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional kids interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/kids-interior-design-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/kids-interior-design-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
