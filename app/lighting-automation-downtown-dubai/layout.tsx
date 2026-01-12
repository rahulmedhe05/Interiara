import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lighting Automation Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional lighting automation downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "lighting-automation-downtown-dubai", "lighting automation downtown dubai", "lighting automation downtown dubai services", "best lighting automation downtown dubai", "professional lighting automation downtown dubai", "lighting automation downtown dubai company", "lighting automation downtown dubai specialist", "expert lighting automation downtown dubai",
  ],
  openGraph: {
    title: "Lighting Automation Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional lighting automation downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/lighting-automation-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/lighting-automation-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
