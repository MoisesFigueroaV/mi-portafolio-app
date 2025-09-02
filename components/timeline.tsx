"use client"

import { MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { timelineData, type TimelineItem } from "@/lib/page-content"

export default function Timeline() {
  const { t } = useLanguage() // Se mantiene para la etiqueta "Actual"

  return (
    <div className="space-y-8">
      {timelineData.map((item, i) => (
        <div key={i} className="relative flex gap-6 reveal-on-scroll" style={{ animationDelay: `${i * 200}ms` }}>
          {/* Timeline line con puntos */}
          <div className="flex flex-col items-center pt-1.5">
            <div className={`w-2 h-2 rounded-full ${item.current ? "bg-white" : "bg-white/40"}`} />
            {i < timelineData.length - 1 && <div className="w-px h-16 bg-white/20 mt-2" />}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm sm:text-xs text-white/60">{item.year}</span>
              {item.current && <span className="text-xs bg-white text-black px-2 py-0.5">{t("current")}</span>}
            </div>
            <h3 className="font-bold text-base sm:text-sm text-white">{item.title}</h3>
            <p className="text-base sm:text-sm text-white/80">{item.company}</p>
            <div className="flex items-center gap-1 mt-1 text-sm sm:text-xs text-white/60">
              <MapPin className="h-4 w-4 sm:h-3 sm:w-3" />
              {item.location}
            </div>
            <p className="text-base sm:text-sm text-white/80 mt-2 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
