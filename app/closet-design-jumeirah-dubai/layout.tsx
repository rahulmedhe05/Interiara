import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Closet Design Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional closet design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "closet-design-jumeirah-dubai", "closet design jumeirah dubai", "closet design jumeirah dubai services", "best closet design jumeirah dubai", "professional closet design jumeirah dubai", "closet design jumeirah dubai company", "closet design jumeirah dubai specialist", "expert closet design jumeirah dubai",
  ],
  openGraph: {
    title: "Closet Design Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional closet design jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/closet-design-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/closet-design-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
