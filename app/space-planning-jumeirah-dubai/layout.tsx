import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Space Planning Jumeirah Dubai | Premium Design Services | Interiara",
  description: "Professional space planning jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "space-planning-jumeirah-dubai", "space planning jumeirah dubai", "space planning jumeirah dubai services", "best space planning jumeirah dubai", "professional space planning jumeirah dubai", "space planning jumeirah dubai company", "space planning jumeirah dubai specialist", "expert space planning jumeirah dubai",
  ],
  openGraph: {
    title: "Space Planning Jumeirah Dubai | Transform Your Space | Interiara",
    description: "Professional space planning jumeirah dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/space-planning-jumeirah-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/space-planning-jumeirah-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
