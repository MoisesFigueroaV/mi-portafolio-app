"use client"

import { useEffect } from "react"
import PageShell from "@/components/page-shell"
import SectionRow from "@/components/section-row"
import { EnhancedProjectCard } from "@/components/enhanced-cards"
import { ViewerProvider } from "@/components/viewer-provider"
import { projects } from "@/lib/projects-data"
import { Code } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import ScrollProgress from "@/components/scroll-progress"
import SkipLinks from "@/components/skip-links"
import { useLanguage } from "@/components/language-provider"
import ScrollReveal from "@/components/scroll-reveal"

export default function ProjectsPage() {
  const all = projects.slice().sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
  const { t, language } = useLanguage()

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="main-content" className="font-mono min-h-screen bg-black text-white antialiased">
      <Style />
      <SkipLinks />
      <ScrollProgress />
      <ScrollReveal />
      <ViewerProvider>
        <PageShell>
          <Breadcrumbs items={[{ label: t("breadcrumb_home"), href: "/" }, { label: t("breadcrumb_projects") }]} />
          <SectionRow label={t("projects")} hint={t("all")} icon={<Code className="h-4 w-4" />}>
            <h1 className="mb-6 text-3xl font-bold reveal-on-scroll">{t("all_projects")}</h1>
                                    <div className="grid gap-4 sm:gap-4 sm:grid-cols-1">
              {all.map((p, i) => (
                <div key={p.title.es} className="reveal-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
                  <EnhancedProjectCard project={p} delay={0} />
                </div>
              ))}
            </div>
          </SectionRow>
        </PageShell>
      </ViewerProvider>
    </main>
  )
}

function Style() {
  return (
    <style jsx global>{`
      .font-mono {
        font-family: var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
          "Courier New", monospace !important;
      }
      @keyframes fade-up {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .reveal { opacity: 0; animation: fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      
      /* Animaciones activadas por scroll */
      .reveal-on-scroll { 
        opacity: 0; 
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      .reveal-on-scroll.visible { 
        opacity: 1; 
        transform: translateY(0);
      }
      
      /* Respeta prefers-reduced-motion */
      @media (prefers-reduced-motion: reduce) {
        .reveal { animation: none; opacity: 1; }
        .reveal-on-scroll { opacity: 1; transform: translateY(0); transition: none; }
      }
    `}</style>
  );
}