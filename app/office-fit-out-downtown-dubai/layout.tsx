import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Office Fit Out Downtown Dubai | Premium Design Services | Interiara",
  description: "Professional office fit out downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "office-fit-out-downtown-dubai", "office fit out downtown dubai", "office fit out downtown dubai services", "best office fit out downtown dubai", "professional office fit out downtown dubai", "office fit out downtown dubai company", "office fit out downtown dubai specialist", "expert office fit out downtown dubai",
  ],
  openGraph: {
    title: "Office Fit Out Downtown Dubai | Transform Your Space | Interiara",
    description: "Professional office fit out downtown dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/office-fit-out-downtown-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-fit-out-downtown-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
