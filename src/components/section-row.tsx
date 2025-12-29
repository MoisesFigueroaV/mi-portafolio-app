"use client"

import type React from "react"

export default function SectionRow({
  id,
  label,
  hint,
  icon,
  spacing = "lg",
  children,
}: {
  id?: string
  label: string
  hint?: string
  icon?: React.ReactNode
  spacing?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}) {
  const pt =
    spacing === "xl"
      ? "pt-12 sm:pt-16 lg:pt-24"
      : spacing === "lg"
        ? "pt-10 sm:pt-12 lg:pt-20"
        : spacing === "md"
          ? "pt-8 sm:pt-10 lg:pt-16"
          : "pt-6 sm:pt-8"

  return (
    <section id={id} className={`reveal scroll-mt-20 sm:scroll-mt-20 ${pt}`} style={{ animationDelay: "120ms" }}>
      <hr className="mb-6 sm:mb-8 lg:hidden border-white/20" />
      <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        {/* Header móvil */}
        <div className="mb-4 sm:mb-4 lg:hidden">
          <div className="flex items-center gap-2">
            {icon && <div className="text-white/60">{icon}</div>}
            <div className="text-base sm:text-sm font-bold uppercase text-white/80">{label}</div>
            {hint && <div className="text-base sm:text-sm text-white/60">— {hint}</div>}
          </div>
        </div>

        {/* Header desktop */}
        <div className="mb-6 hidden lg:block">
          <div className="text-sm font-bold uppercase tracking-wider text-white/80">{label}</div>
          {hint && <div className="mt-2 text-sm text-white/60 leading-relaxed">{hint}</div>}
          {icon && <div className="mt-4 text-white/60">{icon}</div>}
        </div>

        <div>{children}</div>
      </div>
    </section>
  )
}
