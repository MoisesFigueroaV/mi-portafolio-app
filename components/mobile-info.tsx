"use client"

import { MapPin, Mail, Github, Twitter } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function MobileInfo() {
  const { t } = useLanguage()

  return (
    <div
      className="reveal lg:hidden mt-8 space-y-6 p-4 border border-white/20 bg-white/5"
      style={{ animationDelay: "240ms" }}
    >
      {/* Address */}
      <section>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/80 flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {t("address")}
        </h3>
        <p className="text-sm text-white/70 whitespace-pre-line">{t("location")}</p>
      </section>

      {/* Contact */}
      <section>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/80 flex items-center gap-2">
          <Mail className="h-4 w-4" />
          {t("contact")}
        </h3>
        <a
          href="mailto:hello@example.com?subject=Hola!%20Tengo%20un%20proyecto&body=Hola,%0A%0AMe%20gustaría%20hablar%20contigo%20sobre%20un%20proyecto.%0A%0AGracias!"
          className="text-sm text-white/70 hover:text-white/90 underline"
        >
          {t("email")}
        </a>
      </section>

      {/* Social */}
      <section>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white/80 flex items-center gap-2">
          <Github className="h-4 w-4" />
          {t("social")}
        </h3>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/70 hover:text-white/90 underline flex items-center gap-1"
          >
            <Github className="h-3 w-3" />
            {t("github_link")}
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white/90 underline flex items-center gap-1">
            <Twitter className="h-3 w-3" />
            {t("twitter_link")}
          </a>
        </div>
      </section>
    </div>
  )
}
