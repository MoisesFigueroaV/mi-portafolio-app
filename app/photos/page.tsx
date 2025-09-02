"use client"

import { useEffect } from "react"
import PageShell from "@/components/page-shell"
import SectionRow from "@/components/section-row"
import MediaMosaic from "@/components/media-mosaic"
import { photos } from "@/lib/images-data"
import { Camera } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import ScrollProgress from "@/components/scroll-progress"
import SkipLinks from "@/components/skip-links"

export default function PhotosPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="main-content" className="font-mono min-h-screen bg-black text-white antialiased">
      <SkipLinks />
      <ScrollProgress />
      <PageShell>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Fotos" }]} />
        <SectionRow label="Fotos" hint="Mosaico personal" icon={<Camera className="h-4 w-4" />}>
          <h1 className="mb-6 text-3xl font-bold reveal-on-scroll">Fotos</h1>
          <div className="reveal-on-scroll">
            <MediaMosaic photos={photos} />
          </div>
        </SectionRow>
      </PageShell>
    </main>
  )
}
