import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Dubai Hills Dubai | Premium Design Services | Interiara",
  description: "Professional interior design dubai hills dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-dubai-hills-dubai", "interior design dubai hills dubai", "interior design dubai hills dubai services", "best interior design dubai hills dubai", "professional interior design dubai hills dubai", "interior design dubai hills dubai company", "interior design dubai hills dubai specialist", "expert interior design dubai hills dubai",
  ],
  openGraph: {
    title: "Interior Design Dubai Hills Dubai | Transform Your Space | Interiara",
    description: "Professional interior design dubai hills dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-dubai-hills-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-dubai-hills-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
