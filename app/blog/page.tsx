"use client"

import { useEffect } from "react"
import PageShell from "@/components/page-shell"
import SectionRow from "@/components/section-row"
import { EnhancedBlogCard } from "@/components/enhanced-cards"
import { ViewerProvider } from "@/components/viewer-provider"
import { posts } from "@/lib/blog-data"
import { BookOpen } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import ScrollProgress from "@/components/scroll-progress"
import SkipLinks from "@/components/skip-links"
import { useLanguage } from "@/components/language-provider"

export default function BlogPage() {
  const all = posts.slice().sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
  const { t, language } = useLanguage()

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="main-content" className="font-mono min-h-screen bg-black text-white antialiased">
      <SkipLinks />
      <ScrollProgress />
      <ViewerProvider>
        <PageShell>
          <Breadcrumbs items={[{ label: t("breadcrumb_home"), href: "/" }, { label: t("breadcrumb_blog") }]} />
          <SectionRow label={t("blog")} hint={t("all_notes")} icon={<BookOpen className="h-4 w-4" />}>
            <h1 className="mb-6 text-3xl font-bold reveal-on-scroll">{t("blog")}</h1>
            <div className="grid gap-4 sm:gap-3 sm:grid-cols-2">
              {all.map((p, i) => (
                <div key={p.title.es} className="reveal-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
                  <EnhancedBlogCard post={p} delay={0} />
                </div>
              ))}
            </div>
          </SectionRow>
        </PageShell>
      </ViewerProvider>
    </main>
  )
}