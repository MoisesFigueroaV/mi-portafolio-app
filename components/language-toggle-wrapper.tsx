"use client"

import LanguageToggle from "@/components/language-toggle"
import { useViewer } from "@/components/viewer-provider"

export default function LanguageToggleWrapper() {
  const { isOpen } = useViewer()

  if (isOpen) {
    return null // Hide language toggle when viewer is open
  }

  return (
    <div className="fixed right-3 top-3 z-51 flex items-center gap-2 sm:right-4 sm:top-4">
      <LanguageToggle />
    </div>
  )
}
