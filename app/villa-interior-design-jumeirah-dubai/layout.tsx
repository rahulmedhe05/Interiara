import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa Interior Design Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional villa interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "villa-interior-design-jumeirah-dubai", "villa interior design jumeirah dubai", "villa interior design jumeirah dubai services", "best villa interior design jumeirah dubai", "professional villa interior design jumeirah dubai", "villa interior design jumeirah dubai company", "villa interior design jumeirah dubai specialist", "expert villa interior design jumeirah dubai",
  ],
  openGraph: {
    title: "Villa Interior Design Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional villa interior design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/villa-interior-design-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/villa-interior-design-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
