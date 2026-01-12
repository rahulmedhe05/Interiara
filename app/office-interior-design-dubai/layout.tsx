import type { Metadata } from "next"

// KEYWORDS (15-20):
// Primary: office interior design dubai, commercial interior design dubai, office design dubai
// Secondary: office fit out dubai, corporate interior design dubai, workspace design dubai
// Long-tail: best office interior design company dubai, modern office interior design dubai,
// luxury office interior design uae, affordable office design dubai, office renovation dubai
// Related: office furniture dubai, office space planning dubai, office decor dubai,
// commercial fit out dubai, business interior design dubai, co-working space design dubai

export const metadata: Metadata = {
  title: "Office Interior Design Dubai | Commercial & Corporate Interior Designers UAE | Interiara",
  description: "Transform your workspace with Dubai's leading office interior design experts. Interiara specializes in corporate offices, co-working spaces, and commercial fit-outs. 300+ offices designed. Free 3D visualization & consultation. Call +91 635 358 3148",
  keywords: [
    "office interior design dubai",
    "commercial interior design dubai",
    "office design dubai",
    "office fit out dubai",
    "corporate interior design dubai",
    "workspace design dubai",
    "best office interior design company dubai",
    "modern office interior design dubai",
    "luxury office interior design uae",
    "affordable office design dubai",
    "office renovation dubai",
    "office furniture dubai",
    "office space planning dubai",
    "office decor dubai",
    "commercial fit out dubai",
    "business interior design dubai",
    "co-working space design dubai"
  ],
  openGraph: {
    title: "Office Interior Design Dubai | Transform Your Workspace | Interiara",
    description: "Expert office interior designers creating productive workspaces across Dubai & UAE. Corporate offices, startups, co-working spaces - we design it all. Book free consultation!",
    url: "https://interiara.com/office-interior-design-dubai",
    type: "website",
  },
  alternates: {
    canonical: "https://interiara.com/office-interior-design-dubai",
  },
}

export default function OfficeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
