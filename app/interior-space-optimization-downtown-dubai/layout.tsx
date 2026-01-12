import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Space Optimization Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional interior space optimization downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "interior-space-optimization-downtown-dubai", "interior space optimization downtown dubai", "interior space optimization downtown dubai services", "best interior space optimization downtown dubai", "professional interior space optimization downtown dubai", "interior space optimization downtown dubai company", "interior space optimization downtown dubai specialist", "expert interior space optimization downtown dubai",
  ],
  openGraph: {
    title: "Interior Space Optimization Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional interior space optimization downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/interior-space-optimization-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/interior-space-optimization-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
