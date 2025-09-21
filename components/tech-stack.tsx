"use client"

import { BadgeCheck } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import type { LocalizedString } from "@/lib/content-manager"

export type StackItem = {
  name: LocalizedString
  description: LocalizedString
  tags?: string[]
  role?: "frontend" | "backend" | "tools" | "content" | "database" | "data";
}

export default function TechStack({
  items = [
    { name: { es: "Astro", en: "Astro" }, description: { es: "Islands + contenido estático rápido.", en: "Islands + fast static content." }, tags: ["Islands", "MDX"], role: "frontend" },
  ],
}: {
  items?: StackItem[]
}) {
  const { language } = useLanguage()

  return (
    <div className="grid gap-6 sm:gap-4 sm:grid-cols-2">
      {items.map((it, index) => (
        <div
          key={it.name.es}
          className="p-4 sm:p-3 border border-white/20 bg-white/5 text-white reveal-on-scroll"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="mb-2 sm:mb-1 flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 sm:h-4 sm:w-4 text-white" />
            <h3 className="text-base sm:text-sm font-bold">{it.name[language]}</h3>
          </div>
          <p className="text-sm sm:text-xs text-white/70 leading-relaxed">{it.description[language]}</p>
          <div className="mt-3 sm:mt-2 flex flex-wrap gap-2">
            {it.tags?.map((t) => (
              <span
                key={t}
                className="px-2 py-1 sm:px-2 sm:py-0.5 text-xs sm:text-[10px] text-white/60 border border-white/20"
              >
                {t}
              </span>
            ))}
            {it.role && (
              <span className="px-2 py-1 sm:px-2 sm:py-0.5 text-xs sm:text-[10px] text-white/60 border border-white/20">
                {it.role}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}