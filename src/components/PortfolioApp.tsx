import React from "react";

import { BookOpen, Code, ExternalLink, Github, Mail, Terminal, User, Linkedin } from "lucide-react";
import PageShell from "@/components/page-shell";
import SectionRow from "@/components/section-row";
import { EnhancedProjectCard, EnhancedBlogCard } from "@/components/enhanced-cards";
import { ViewerProvider } from "@/components/viewer-provider";
import { getFeaturedProjects, getLatestPosts } from "@/lib/data-helpers";
import TechStack from "@/components/tech-stack";
import ScrollProgress from "@/components/scroll-progress";
import SkipLinks from "@/components/skip-links";
import Timeline from "@/components/timeline";
import { personalInfo, techStackItems } from "@/lib/page-content";
import { useLanguage, LanguageProvider } from "@/components/language-provider";

// Reemplazamos next/font/google por una clase CSS o fuente importada globalmente en Astro.
// Por ahora usaremos una variable simulada o la definiremos en globals.css
const spaceMonoVariable = "font-space-mono";

function PageContent() {
    const { t, language, isTransitioning } = useLanguage();
    const featuredProjects = getFeaturedProjects(4);
    const latestPosts = getLatestPosts(4);

    return (
        <main
            id="main-content"
            className={[
                spaceMonoVariable,
                "font-mono min-h-screen antialiased selection:bg-white/20 selection:text-white",
                "text-white transition-opacity duration-300 ease-in-out",
                isTransitioning ? "opacity-0" : "opacity-100"
            ].join(" ")}
        >
            <SkipLinks />
            <ScrollProgress />

            <ViewerProvider>
                <PageShell>
                    {/* HERO SECTION - Terminal Style (Left Aligned) */}
                    <div className="flex flex-col items-start justify-center min-h-[60vh] text-left mb-20 sm:mb-32 pl-4 sm:pl-0">
                        {/* Location Breadcrumb */}
                        <div className="reveal mb-8 font-mono text-xs tracking-widest text-white/30 uppercase">
                            ~/concepción/chile
                        </div>

                        {/* Name (Refined Size) */}
                        <h1
                            className="reveal text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-8"
                            style={{ animationDelay: "100ms" }}
                        >
                            Moisés Figueroa
                        </h1>

                        {/* Roles (Subtle) */}
                        <div
                            className="reveal font-mono text-xs sm:text-sm text-white/40 tracking-[0.2em] uppercase mb-16"
                            style={{ animationDelay: "200ms" }}
                        >
                            data analyst · developer · photographer
                        </div>

                        {/* Intro Text (Minimal Left) */}
                        <div className="reveal max-w-2xl text-white/50 leading-loose text-sm font-mono" style={{ animationDelay: "300ms" }}>
                            <p className="mb-6">{language === "es" ? personalInfo.description : personalInfo.description_en}</p>

                            <div className="w-12 h-px bg-white/10 my-8"></div>

                            <p>{language === "es" ? "Transformo datos en insights, código en productos, y momentos en imágenes." : "I transform data into insights, code into products, and moments into images."}</p>
                        </div>
                    </div>


                    {/* EXPERIENCIA - Log Style */}
                    <SectionRow
                        id="experience"
                        label="cat experience.log"
                        spacing="xl"
                    >
                        <div className="reveal-on-scroll">
                            <Timeline />
                        </div>
                    </SectionRow>

                    {/* PROYECTOS - Ls Style (Text Only) */}
                    <SectionRow
                        id="projects"
                        label="ls projects/"
                        spacing="xl"
                    >
                        <div className="flex flex-col gap-4">
                            {featuredProjects.map((p, i) => (
                                <a
                                    key={p.title.es}
                                    href={`/projects/${p.slug}`}
                                    className="group block w-full p-5 sm:p-8 bg-[#050505] border border-white/10 hover:border-white/20 transition-all duration-300 reveal-on-scroll"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    {/* Number */}
                                    <div className="font-mono text-xs text-white/20 mb-4 sm:mb-6">
                                        00{i + 1}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-mono text-white mb-3 transition-colors break-all sm:break-normal">
                                        ./{p.slug.replace(/-/g, '_')}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-white/40 font-mono mb-6 sm:mb-8 truncate">
                                        {p.description[language]}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 sm:gap-4 text-xs font-mono text-white/20">
                                        {(p.tags || []).slice(0, 4).map(t => (
                                            <span key={t}>#{t.toLowerCase()}</span>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="mt-8 text-center sm:text-left font-mono text-xs opacity-30 hover:opacity-100 transition-opacity pl-4 sm:pl-0">
                            <a href="/projects">cd /all_projects →</a>
                        </div>
                    </SectionRow>

                    {/* BLOG */}
                    <SectionRow
                        id="blog"
                        label="ls thoughts_&_ideas/"
                        spacing="xl"
                    >
                        <div className="flex flex-col gap-4">
                            {latestPosts.map((p, i) => (
                                <a
                                    key={p.title.es}
                                    href={`/blog/${p.slug}`}
                                    className="group block w-full p-5 sm:p-8 bg-[#050505] border border-white/10 hover:border-white/20 transition-all duration-300 reveal-on-scroll"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    {/* Date/Number */}
                                    <div className="font-mono text-xs text-white/20 mb-4 sm:mb-6">
                                        {new Date(p.updatedAt).getFullYear()}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg sm:text-xl font-mono text-white mb-3 transition-colors break-all sm:break-normal">
                                        ./{p.slug.replace(/-/g, '_')}.md
                                    </h3>

                                    {/* Description/Title */}
                                    <p className="text-sm text-white/40 font-mono truncate">
                                        {p.title[language]}
                                    </p>
                                </a>
                            ))}
                        </div>
                        <div className="mt-8 text-center sm:text-left font-mono text-xs opacity-30 hover:opacity-100 transition-opacity pl-4 sm:pl-0">
                            <a href="/blog">cd /blog →</a>
                        </div>
                    </SectionRow>

                    {/* STACK - Json Style Label */}
                    <SectionRow id="stack" label="cat stack.json" spacing="xl">
                        <TechStack items={techStackItems} />
                    </SectionRow>

                    {/* Footer Spacing since Contact is gone */}
                    <div className="h-32"></div>
                </PageShell>
            </ViewerProvider>
        </main>
    );
}

export default function PortfolioApp() {
    return (
        <LanguageProvider>
            <PageContent />
        </LanguageProvider>
    );
}
