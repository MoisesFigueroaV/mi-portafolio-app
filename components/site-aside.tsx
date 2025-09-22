"use client"
import { useLanguage } from "@/components/language-provider"
import { personalInfo } from "@/lib/page-content"

export default function SiteAside() {
  const { t } = useLanguage()

  return (
    <div className="sticky top-24 pr-8 space-y-8 text-sm leading-relaxed text-white/60">
      <section>
        <h3 className="mb-4 font-bold uppercase tracking-wide text-white/90">{t("address")}</h3>
        <p className="whitespace-pre-line leading-relaxed">
          {personalInfo.location.city}, {personalInfo.location.country}
          <br />
          {personalInfo.location.workMode}
        </p>
      </section>

      <section>
        <h3 className="mb-4 font-bold uppercase tracking-wide text-white/90">{t("contact")}</h3>
        <ul className="space-y-3">
          <li>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 transition-colors hover:bg-white/10 hover:text-white/90"
            >
              <span className="underline break-all">{personalInfo.email}</span>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="mb-4 font-bold uppercase tracking-wide text-white/90">{t("social")}</h3>
        <ul className="space-y-3">
          <li>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 transition-colors hover:bg-white/10 hover:text-white/90"
            >
              <span className="underline">{t("github_link")}</span>
            </a>
          </li>
          <li>
            <a 
              href={personalInfo.twitter} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 transition-colors hover:bg-white/10 hover:text-white/90"
            >
              <span className="underline">{t("twitter_link")}</span>
            </a>
          </li>
          <li>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 rounded-md px-4 py-2 transition-colors hover:bg-white/10 hover:text-white/90"
            >
              <span className="underline">{t("linkedin_link")}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
