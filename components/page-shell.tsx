"use client"

import type React from "react"
import LanguageToggle from "@/components/language-toggle"
import SiteAside from "@/components/site-aside"
import SmoothScroll from "@/components/smooth-scroll"
import ScrollReveal from "@/components/scroll-reveal"
import Plasma from "@/components/plasma"

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <ScrollReveal />

      {/* Fondo animado fijo con color más claro y visible */}
      <div className="fixed inset-0 z-0">
        <Plasma color="#3a3a5e" speed={0.3} direction="forward" scale={1.1} opacity={0.5} mouseInteractive={true} />
      </div>

      {/* Botón de idioma fijo */}
      <div className="fixed right-3 top-3 z-50 flex items-center gap-2 sm:right-4 sm:top-4">
        <LanguageToggle />
      </div>

      {/* Layout principal completamente transparente */}
      <div className="relative z-10 mx-auto max-w-7xl px-3 pb-20 pt-12 sm:px-4 md:px-8 sm:pb-28 sm:pt-16">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-10">
          {/* Aside - solo visible en desktop */}
          <aside className="relative col-span-3 hidden lg:block">
            <SiteAside />
          </aside>

          {/* Contenido principal */}
          <section className="col-span-12 lg:col-span-9">
            <div className="mx-auto">{children}</div>
          </section>
        </div>
      </div>
    </>
  )
}
