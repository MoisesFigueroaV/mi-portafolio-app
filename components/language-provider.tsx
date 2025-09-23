"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import { personalInfo } from "@/lib/page-content"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-language") as Language
    if (saved && (saved === "es" || saved === "en")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("portfolio-language", lang)
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
    }
  }

  const t = (key: TranslationKey): string => {
    let translation: string = translations[language]?.[key] || translations.es[key] || key

    const replacements = {
      ...personalInfo,
      ...personalInfo.location,
      ...personalInfo.seo,
      github_handle: personalInfo.github.split("/").pop() || "",
    }

    for (const placeholder in replacements) {
      const value = replacements[placeholder as keyof typeof replacements]
      let replacementValue = ''

      if (typeof value === "string") {
        replacementValue = value
      } else if (typeof value === 'object' && value !== null && 'es' in value && 'en' in value) {
        replacementValue = value[language]
      }

      if (replacementValue) {
        translation = translation.replace(new RegExp(`{${placeholder}}`, "g"), replacementValue)
      }
    }

    return translation
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
