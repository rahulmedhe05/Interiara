import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Design Emirates Hills Dubai | Premium Design Services | Interiara",
  description: "Professional interior design emirates hills dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-design-emirates-hills-dubai", "interior design emirates hills dubai", "interior design emirates hills dubai services", "best interior design emirates hills dubai", "professional interior design emirates hills dubai", "interior design emirates hills dubai company", "interior design emirates hills dubai specialist", "expert interior design emirates hills dubai",
  ],
  openGraph: {
    title: "Interior Design Emirates Hills Dubai | Transform Your Space | Interiara",
    description: "Professional interior design emirates hills dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-design-emirates-hills-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-design-emirates-hills-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
