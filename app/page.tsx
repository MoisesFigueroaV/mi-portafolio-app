"use client";
import Link from "next/link";
import { Space_Mono } from "next/font/google";
import { BookOpen, Code, ExternalLink, Github, Mail, Terminal, User, Linkedin } from "lucide-react";
import PageShell from "@/components/page-shell";
import SectionRow from "@/components/section-row";
import { EnhancedProjectCard, EnhancedBlogCard } from "@/components/enhanced-cards";
// import MediaMosaic from "@/components/media-mosaic";
import { ViewerProvider } from "@/components/viewer-provider";
import { getFeaturedProjects, getLatestPosts } from "@/lib/data-helpers";
// import { photos } from "@/lib/images-data";
import TechStack from "@/components/tech-stack";
import ScrollProgress from "@/components/scroll-progress";
import SkipLinks from "@/components/skip-links";
import Timeline from "@/components/timeline";
import MobileInfo from "@/components/mobile-info";
import { personalInfo, techStackItems } from "@/lib/page-content";
import { useLanguage } from "@/components/language-provider";
import LanguageToggleWrapper from "@/components/language-toggle-wrapper"; // Added import

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function Page() {
  const { t, language } = useLanguage();
  const featuredProjects = getFeaturedProjects(4);
  const latestPosts = getLatestPosts(4);
  // const photosPreview = photos.slice(0, 6);

  return (
    <main
      id="main-content"
      className={[
        spaceMono.variable,
        "font-mono min-h-screen antialiased selection:bg-white/20 selection:text-white",
        "text-white",
      ].join(" ")}
    >
      <Style />
      <SkipLinks />
      <ScrollProgress />

      <ViewerProvider>
        <PageShell>
          {/* Etiqueta pequeña */}
          <div className="reveal mb-4 sm:mb-6 inline-flex items-center gap-2 text-sm sm:text-xs uppercase text-white/70">
            <Terminal className="h-5 w-5 sm:h-4 sm:w-4" />
            <span>{t("portfolio")}</span>
          </div>

          {/* Título grande */}
          <h1
            className="reveal text-left text-2xl xs:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white"
            style={{ animationDelay: "120ms" }}
            id="intro"
          >
            {t("designer_developer")}
          </h1>

          {/* Intro en columnas */}
          <div
            className="reveal mt-6 sm:mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
            style={{ animationDelay: "180ms" }}
          >
            <p className="text-m lg:text-m leading-relaxed text-white/80 reveal-on-scroll">{language === "es" ? personalInfo.description : personalInfo.description_en}</p>
            <p
              className="text-m lg:text-m leading-relaxed text-white/80 reveal-on-scroll"
              style={{ animationDelay: "100ms" }}
            >
              {language === "es" ? personalInfo.intro_2 : personalInfo.intro_2_en}
            </p>
            <p
              className="text-m lg:text-m leading-relaxed text-white/80 reveal-on-scroll"
              style={{ animationDelay: "200ms" }}
            >
              {language === "es" ? personalInfo.intro_3 : personalInfo.intro_3_en}
            </p>
          </div>

          {/* INFO MÓVIL - Solo visible en móvil */}
          <MobileInfo />

          {/* PROYECTOS */}
          <SectionRow
            id="projects"
            label={t("projects")}
            hint={t("selection")}
            spacing="xl"
            icon={<Code className="h-5 w-5 sm:h-4 sm:w-4" />}
          >
                                    <div className="grid grid-cols-1 gap-4"> {/* Always 1 column, reduced gap */}
              {featuredProjects.map((p, i) => (
                <div key={p.title.es} className="reveal-on-scroll" style={{ animationDelay: `${i * 150}ms` }}>
                  <EnhancedProjectCard project={p} delay={0} />
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-6 reveal-on-scroll text-center sm:text-left">
              <Link
                href="/projects"
                                className="inline-flex items-center gap-2 px-5 py-4 text-base sm:px-3 sm:py-2 sm:text-xs text-white bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all duration-300"
              >
                {t("see_all_projects")}
              </Link>
            </div>
          </SectionRow>

          {/* BLOG */}
          <SectionRow
            id="blog"
            label={t("blog")}
            hint={t("latest")}
            spacing="xl"
            icon={<BookOpen className="h-5 w-5 sm:h-4 sm:w-4" />}
          >
                                    <div className="grid gap-6 sm:gap-3 md:grid-cols-2 lg:grid-cols-2">
              {latestPosts.map((p, i) => (
                <div key={p.title.es} className="reveal-on-scroll" style={{ animationDelay: `${i * 150}ms` }}>
                  <EnhancedBlogCard post={p} delay={0} />
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-6 reveal-on-scroll text-center sm:text-left">
              <Link
                href="/blog"
                                className="inline-flex items-center gap-2 px-5 py-4 text-base sm:px-3 sm:py-2 sm:text-xs text-white bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all duration-300"
              >
                {t("see_more_blog")}
              </Link>
            </div>
          </SectionRow>

          {/* FOTOS */}
          {/* <SectionRow
            id="photos"
            label={t("photos")}
            hint={t("personal_mosaic")}
            spacing="xl"
            icon={<Camera className="h-5 w-5 sm:h-4 sm:w-4" />}
          >
            <div className="reveal-on-scroll">
              <MediaMosaic photos={photosPreview} />
            </div>
            <div className="mt-8 sm:mt-6 reveal-on-scroll">
              <Link
                href="/photos"
                                className="inline-flex items-center gap-2 px-4 py-3 text-sm sm:px-3 sm:py-2 sm:text-xs text-white bg-white/5 hover:bg-white/10 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
              >
                {t("see_all_photos")}
              </Link>
            </div>
          </SectionRow> */}

          {/* EXPERIENCIA - Timeline */}
          <SectionRow
            id="experience"
            label={t("experience")}
            hint={t("trajectory")}
            spacing="xl"
            icon={<User className="h-5 w-5 sm:h-4 sm:w-4" />}
          >
            <div className="reveal-on-scroll">
              <Timeline />
            </div>
          </SectionRow>

          {/* STACK TECNOLÓGICO */}
          <SectionRow id="stack" label={t("stack")} hint={t("technologies_used")} spacing="xl">
            <TechStack items={techStackItems} />
          </SectionRow>

          {/* CONTACTO */}
          <SectionRow id="contact" label={t("contact")} hint={t("lets_work_together")} spacing="xl">
            <div className="reveal-on-scroll">
              <div className="grid grid-cols-2 gap-4">
                {/* Email */}
                <a href={`mailto:${personalInfo.email}`} className="col-span-2 flex items-center gap-3 bg-white/5 p-4 text-sm font-medium text-white/90 transition-colors hover:bg-white/10">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
                {/* GitHub */}
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white/5 p-4 text-center text-sm font-medium text-white/90 transition-colors hover:bg-white/10">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                {/* LinkedIn */}
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white/5 p-4 text-center text-sm font-medium text-white/90 transition-colors hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                {/* CV */}
                <a href="/cv/CV_MoisesFigueroa.pdf" target="_blank" rel="noreferrer" className="col-span-2 flex items-center justify-center gap-3 bg-white p-4 text-center text-sm font-bold text-black transition-colors hover:bg-white/90">
                  <span>{t("cv")}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </SectionRow>
        </PageShell>
      </ViewerProvider>
    </main>
  );
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