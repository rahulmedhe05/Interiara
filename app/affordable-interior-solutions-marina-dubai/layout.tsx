import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Affordable Interior Solutions Marina Dubai | Premium Design Services | Interiara",
  description: "Professional affordable interior solutions marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "affordable-interior-solutions-marina-dubai", "affordable interior solutions marina dubai", "affordable interior solutions marina dubai services", "best affordable interior solutions marina dubai", "professional affordable interior solutions marina dubai", "affordable interior solutions marina dubai company", "affordable interior solutions marina dubai specialist", "expert affordable interior solutions marina dubai",
  ],
  openGraph: {
    title: "Affordable Interior Solutions Marina Dubai | Transform Your Space | Interiara",
    description: "Professional affordable interior solutions marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/affordable-interior-solutions-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/affordable-interior-solutions-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
