"use client"
import { useLanguage } from "@/components/language-provider"
import { personalInfo } from "@/lib/page-content"

export default function SiteAside() {
  const { t } = useLanguage()

  return (
    <div className="sticky top-24 space-y-8 text-xs leading-5 text-white/60">
      <section>
        <h3 className="mb-2 font-bold uppercase tracking-wide text-white/80">{t("address")}</h3>
        <p className="whitespace-pre-line">
          {personalInfo.location.city}, {personalInfo.location.country}
          <br />
          {personalInfo.location.workMode}
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-bold uppercase tracking-wide text-white/80">{t("contact")}</h3>
        <ul className="space-y-1">
          <li>
            <a
              href={`mailto:${personalInfo.email}?subject=Hola!%20Tengo%20un%20proyecto&body=Hola,%0A%0AMe%20gustaría%20hablar%20contigo%20sobre%20un%20proyecto.%0A%0AGracias!`}
              className="underline hover:text-white/80"
            >
              {t("email")}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold uppercase tracking-wide text-white/80">{t("social")}</h3>
        <ul className="space-y-1">
          <li>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="underline hover:text-white/80">
              {t("github_link")}
            </a>
          </li>
          <li>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="underline hover:text-white/80">
              {t("twitter_link")}
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
