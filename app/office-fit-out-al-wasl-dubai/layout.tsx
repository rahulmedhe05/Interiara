import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Fit Out Al Wasl Dubai | Premium Design Services | Interiara",
  description: "Professional office fit out al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-fit-out-al-wasl-dubai", "office fit out al wasl dubai", "office fit out al wasl dubai services", "best office fit out al wasl dubai", "professional office fit out al wasl dubai", "office fit out al wasl dubai company", "office fit out al wasl dubai specialist", "expert office fit out al wasl dubai",
  ],
  openGraph: {
    title: "Office Fit Out Al Wasl Dubai | Transform Your Space | Interiara",
    description: "Professional office fit out al wasl dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-fit-out-al-wasl-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-fit-out-al-wasl-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
