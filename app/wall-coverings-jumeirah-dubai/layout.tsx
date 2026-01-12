import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wall Coverings Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional wall coverings jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "wall-coverings-jumeirah-dubai", "wall coverings jumeirah dubai", "wall coverings jumeirah dubai services", "best wall coverings jumeirah dubai", "professional wall coverings jumeirah dubai", "wall coverings jumeirah dubai company", "wall coverings jumeirah dubai specialist", "expert wall coverings jumeirah dubai",
  ],
  openGraph: {
    title: "Wall Coverings Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional wall coverings jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/wall-coverings-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/wall-coverings-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
