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
        <div className="mb-4 sm:mb-4 lg:hidden font-mono opacity-60 text-sm">
          <span className="mr-2">$</span>
          <span>{label}</span>
        </div>

        {/* Header desktop */}
        <div className="mb-6 hidden lg:block opacity-50 font-mono text-sm tracking-wide">
          <span className="mr-2">$</span>
          <span className="text-white/70">{label}</span>
        </div>

        <div>{children}</div>
      </div>
    </section>
  )
}
