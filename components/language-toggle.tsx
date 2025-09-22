"use client"

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion" // Added motion and AnimatePresence import
import { useLanguage } from "@/components/language-provider"

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button
        className="inline-flex h-12 w-12 items-center justify-center border border-white/30 text-sm text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:h-9 sm:w-9 sm:text-xs"
        aria-label="Change language"
        title="Change language"
      >
        <Globe className="h-5 w-5 sm:h-4 sm:w-4" />
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
      className="inline-flex h-12 w-12 items-center justify-center border border-white/30 text-sm text-white hover:bg-white/10 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:h-9 sm:w-9 sm:text-xs"
      aria-label={t("change_language")}
      title={t("change_language")}
    >
      <motion.span
        key={language} // Key changes when language changes, triggering animation
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="text-base font-mono font-bold sm:text-xs"
      >
        {language.toUpperCase()}
      </motion.span>
    </button>
  )
}
