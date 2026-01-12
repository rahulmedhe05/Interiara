import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Furniture Design Business Bay Dubai | Premium Design Services | Interiara",
  description: "Professional custom furniture design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
  keywords: [
    "custom-furniture-design-business-bay-dubai", "custom furniture design business bay dubai", "custom furniture design business bay dubai services", "best custom furniture design business bay dubai", "professional custom furniture design business bay dubai", "custom furniture design business bay dubai company", "custom furniture design business bay dubai specialist", "expert custom furniture design business bay dubai",
  ],
  openGraph: {
    title: "Custom Furniture Design Business Bay Dubai | Transform Your Space | Interiara",
    description: "Professional custom furniture design business bay dubai services. We create stunning, functional spaces tailored to your needs. Expert design team with 15+ years of experience. Free consultation and custom design proposal.",
    url: "https://interiara.com/custom-furniture-design-business-bay-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/custom-furniture-design-business-bay-dubai",
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
