"use client"

import { MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { timelineData } from "@/lib/page-content"

export default function Timeline() {
  const { t, language } = useLanguage()

  return (
    <div className="space-y-12" role="list" aria-label={t("experience")}>
      {timelineData.map((item, i) => (
        <div key={i} className="reveal-on-scroll font-mono group" style={{ animationDelay: `${i * 150}ms` }} role="listitem">

          {/* Header Line: Year — Company */}
          <div className="flex items-center gap-4 text-sm sm:text-base text-white/50 mb-2">
            <span>{item.year}</span>
            <span className="w-4 h-px bg-white/20"></span>
            <span className="uppercase tracking-wide">{item.company[language]}</span>
          </div>

          {/* Title (Big) */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 transition-colors">
            {item.title[language]}
          </h3>

          {/* Description (Minimal) */}
          {/* <p className="text-white/60 text-sm max-w-2xl mb-4 leading-relaxed">
            {item.description[language]}
            </p> */}

          {/* Tags (Console style) */}
          <div className="flex flex-wrap gap-3">
            {item.technologies?.map((tech) => (
              <span key={tech} className="text-sm text-white/40 font-mono lowercase">
                #{tech.toLowerCase().replace(" ", "_")}
              </span>
            ))}
            {!item.technologies && (
              <span className="text-sm text-white/40 font-mono lowercase">#work</span>
            )}
          </div>

        </div>
      ))}
    </div>
  )
}