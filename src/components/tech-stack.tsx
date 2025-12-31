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
    <div className="flex flex-col gap-4">
      {items.map((it, index) => (
        <div
          key={it.name.es}
          className="group block w-full p-5 sm:p-8 bg-[#050505] border border-white/10 hover:border-white/20 transition-all duration-300 reveal-on-scroll"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {/* Header with Role */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="font-mono text-xs text-white/20 uppercase tracking-wider">
              {it.role || 'tool'}
            </div>
            {/* Icon removed */}
          </div>

          {/* Title - Matched Project Style */}
          <h3 className="text-xl sm:text-2xl font-mono text-white mb-3 transition-colors break-all sm:break-normal">
            ./{it.name[language].toLowerCase().replace(/\s+/g, '_').replace(/\+/g, '_plus_')}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/40 font-mono mb-6 sm:mb-8 truncate">
            {it.description[language]}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs font-mono text-white/20">
            {it.tags?.map((t) => (
              <span key={t}>#{t.toLowerCase()}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}