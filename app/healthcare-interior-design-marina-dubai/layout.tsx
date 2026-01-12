import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Healthcare Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional healthcare interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "healthcare-interior-design-marina-dubai", "healthcare interior design marina dubai", "healthcare interior design marina dubai services", "best healthcare interior design marina dubai", "professional healthcare interior design marina dubai", "healthcare interior design marina dubai company", "healthcare interior design marina dubai specialist", "expert healthcare interior design marina dubai",
  ],
  openGraph: {
    title: "Healthcare Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional healthcare interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/healthcare-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/healthcare-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
