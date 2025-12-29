import React, { useEffect } from "react"
import PageShell from "@/components/page-shell"
import SectionRow from "@/components/section-row"
import { EnhancedBlogCard } from "@/components/enhanced-cards"
import { ViewerProvider } from "@/components/viewer-provider"
import { posts } from "@/lib/blog-data"
import { BookOpen, ArrowLeft } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import ScrollProgress from "@/components/scroll-progress"
import SkipLinks from "@/components/skip-links"
import { useLanguage, LanguageProvider } from "@/components/language-provider"
import ScrollReveal from "@/components/scroll-reveal"

function BlogContent() {
    const all = posts.slice().sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
    const { t } = useLanguage()

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main id="main-content" className="font-mono min-h-screen bg-black text-white antialiased">
            <SkipLinks />
            <ScrollProgress />
            <ScrollReveal />
            <ViewerProvider>
                <PageShell>
                    <div className="mb-4 sm:hidden">
                        <button
                            onClick={() => history.back()}
                            className="inline-flex items-center gap-2 px-4 py-3 text-sm text-white border border-white/30 hover:bg-white/10 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span>{t("back")}</span>
                        </button>
                    </div>
                    <Breadcrumbs
                        items={[
                            { label: t("breadcrumb_home"), href: "/" },
                            { label: t("breadcrumb_blog") },
                        ]}
                    />
                    <SectionRow
                        label={t("blog")}
                        hint={t("all_notes")}
                        icon={<BookOpen className="h-4 w-4" />}
                    >
                        <h1 className="mb-4 sm:mb-6 text-3xl xs:text-4xl md:text-5xl font-bold leading-tight reveal-on-scroll">{t("blog")}</h1>
                        <div className="grid gap-6 sm:gap-3 md:grid-cols-2 lg:grid-cols-2">
                            {all.map((p, i) => (
                                <div
                                    key={p.title.es}
                                    className="reveal-on-scroll"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
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

export default function BlogApp() {
    return (
        <LanguageProvider>
            <BlogContent />
        </LanguageProvider>
    );
}
