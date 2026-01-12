import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gym Interior Design Marina Dubai | Premium Design Services | Interiara",
  description: "Professional gym interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "gym-interior-design-marina-dubai", "gym interior design marina dubai", "gym interior design marina dubai services", "best gym interior design marina dubai", "professional gym interior design marina dubai", "gym interior design marina dubai company", "gym interior design marina dubai specialist", "expert gym interior design marina dubai",
  ],
  openGraph: {
    title: "Gym Interior Design Marina Dubai | Transform Your Space | Interiara",
    description: "Professional gym interior design marina dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/gym-interior-design-marina-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/gym-interior-design-marina-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
