'use client'
import { useLanguage } from "@/components/language-provider"
import { personalInfo } from "@/lib/page-content"

// Array de los colores y sus valores para mostrarlos
const colors = [
  { name: '--background', value: 'oklch(1 0 0)' },
  { name: '--foreground', value: 'oklch(0.145 0 0)' },
  { name: '--primary', value: 'oklch(0.205 0 0)' },
  { name: '--primary-foreground', value: 'oklch(0.985 0 0)' },
  { name: '--secondary', value: 'oklch(0.97 0 0)' },
  { name: '--muted', value: 'oklch(0.97 0 0)' },
];

export default function SiteAside() {
  const { t, language } = useLanguage()

  return (
    <div className="sticky top-24 space-y-8 text-sm leading-relaxed text-white/60">
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
              className="underline transition-colors hover:text-white/80 break-words"
            >
              <span className="underline">{personalInfo.email}</span>
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
              className="underline text-white/60 transition-colors hover:text-white/80"
            >
              {t("github_link")}
            </a>
          </li>
          <li>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noreferrer"
              className="underline text-white/60 transition-colors hover:text-white/80"
            >
              <span className="underline">{t("twitter_link")}</span>
            </a>
          </li>
          <li>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="underline text-white/60 transition-colors hover:text-white/80"
            >
              {t("linkedin_link")}
            </a>
          </li>
        </ul>
      </section>

      {/* Nueva sección de Paleta de Colores */}
      <section className="mt-80 opacity-50 hover:opacity-100 transition-opacity">
        <h3 className="mb-4 font-bold uppercase tracking-wide text-white/90">{language === "es" ? "Paleta" : "Palette"}</h3>
        <div className="flex flex-col gap-2 font-mono text-xs">
          {colors.map((color) => (
            <div key={color.name} className="flex items-center gap-3">
              <div
                className="h-4 w-4 flex-shrink-0 border border-white/20"
                style={{ backgroundColor: `var(${color.name})` }}
              />
              <span>
                {color.name}: {color.value};
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}