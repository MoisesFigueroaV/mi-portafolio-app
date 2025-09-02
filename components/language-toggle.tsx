"use client"

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button
        className="inline-flex h-9 w-9 items-center justify-center border border-white/30 text-xs text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        aria-label="Change language"
        title="Change language"
      >
        <Globe className="h-4 w-4" />
      </button>
    )
  }

  function toggleLanguage() {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex h-9 w-9 items-center justify-center border border-white/30 text-xs text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      aria-label={t("change_language")}
      title={t("change_language")}
    >
      <span className="text-xs font-mono font-bold">{language.toUpperCase()}</span>
    </button>
  )
}
