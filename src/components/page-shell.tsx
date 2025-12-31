"use client"

import type React from "react"
import LanguageToggle from "@/components/language-toggle"
import SiteAside from "@/components/site-aside"
import SmoothScroll from "@/components/smooth-scroll"
import ScrollReveal from "@/components/scroll-reveal"
import Plasma from "@/components/plasma"
import { useIsMobile } from "@/hooks/use-mobile"

export default function PageShell({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()

  return (
    <>
      <SmoothScroll />
      <ScrollReveal />

      {/* Fondo animado fluido (WebGL) optimizado para "Humo" visible */}
      <div
        className="fixed inset-0 z-0 h-full w-full"
      >
        <Plasma
          color="#ffffff" // Blanco puro para visibilidad máxima
          speed={isMobile ? 0.05 : 0.15}
          direction="forward"
          scale={2.0}
          opacity={0.95} // Opacidad extrema pero con máscara se ve bien
          mouseInteractive={!isMobile}
        />
      </div>

      {/* Botón de idioma fijo */}
      <div className="fixed right-4 top-4 z-[51] flex items-center gap-2 sm:right-4 sm:top-4">
        <LanguageToggle />
      </div>

      {/* Layout principal completamente transparente */}
      <div className="relative z-10 mx-auto max-w-8xl px-4 pb-24 pt-16 sm:px-6 md:px-8 lg:px-12 xl:px-20 sm:pb-28 sm:pt-20">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          {/* Aside - solo visible en pantallas grandes */}
          <aside className="relative hidden lg:col-span-3 lg:block">
            <SiteAside />
          </aside>

          {/* Contenido principal */}
          <section className="lg:col-span-9">
            <div className="mx-auto max-w-3xl lg:max-w-4xl">{children}</div>
          </section>
        </div>
      </div>
    </>
  )
}