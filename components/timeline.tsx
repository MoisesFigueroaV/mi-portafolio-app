"use client"

import { MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { timelineData } from "@/lib/page-content"

export default function Timeline() {
  const { t, language } = useLanguage() // Se mantiene para la etiqueta "Actual"

  return (
    <div className="space-y-8" role="list" aria-label={t("experience")}>
      {timelineData.map((item, i) => (
        <div key={i} className="relative flex gap-6 reveal-on-scroll p-4 sm:p-3 border border-white/20 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 font-mono" style={{ animationDelay: `${i * 200}ms` }} role="listitem">
          {/* Timeline line con puntos */}
          <div className="flex flex-col items-center pt-1.5">
            <div className={`w-2 h-2 rounded-full ${item.current ? "bg-white" : "bg-white/40"}`} />
            {i < timelineData.length - 1 && <div className="w-px h-16 bg-white/20 mt-2" />}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base sm:text-xs text-white/60">{item.year}</span>
              {item.current && <span className="text-sm bg-white text-black px-3 py-1">{t("current")}</span>}
            </div>
            <h3 className="font-bold text-lg sm:text-sm text-white">{item.title[language]}</h3>
            <p className="text-lg sm:text-sm text-white/80">{item.company[language]}</p>
            <div className="flex items-center gap-1 mt-1 text-base sm:text-xs text-white/60">
              <MapPin className="h-5 w-5 sm:h-3 sm:w-3" />
              {item.location[language]}
            </div>
            <p className="text-base sm:text-base text-white/80 mt-2 leading-relaxed">{item.description[language]}</p>
          </div>
        </div>
      ))}
    </div>
  )
}