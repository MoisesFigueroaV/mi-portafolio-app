"use client";
import Link from "next/link";
import { Space_Mono } from "next/font/google";
import { BookOpen, Code, ExternalLink, Github, Mail, Terminal, Camera, User } from "lucide-react";
import PageShell from "@/components/page-shell";
import SectionRow from "@/components/section-row";
import { EnhancedProjectCard, EnhancedBlogCard } from "@/components/enhanced-cards";
import MediaMosaic from "@/components/media-mosaic";
import { ViewerProvider } from "@/components/viewer-provider";
import { getFeaturedProjects, getLatestPosts } from "@/lib/data";
import { photos } from "@/lib/images-data";
import TechStack from "@/components/tech-stack";
import ScrollProgress from "@/components/scroll-progress";
import SkipLinks from "@/components/skip-links";
import Timeline from "@/components/timeline";
import MobileInfo from "@/components/mobile-info";
import { personalInfo, techStackItems } from "@/lib/page-content";
import { useLanguage } from "@/components/language-provider";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function Page() {
  const { t } = useLanguage();
  const featuredProjects = getFeaturedProjects(4);
  const latestPosts = getLatestPosts(4);
  const photosPreview = photos.slice(0, 6);

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
            className="reveal text-left text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
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
            <p className="text-base sm:text-sm leading-relaxed text-white/80 reveal-on-scroll">{t("intro_1")}</p>
            <p
              className="text-base sm:text-sm leading-relaxed text-white/80 reveal-on-scroll"
              style={{ animationDelay: "100ms" }}
            >
              {t("intro_2")}
            </p>
            <p
              className="text-base sm:text-sm leading-relaxed text-white/80 reveal-on-scroll"
              style={{ animationDelay: "200ms" }}
            >
              {t("intro_3")}
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
            <div className="grid gap-6 sm:gap-4 sm:grid-cols-2">
              {featuredProjects.map((p, i) => (
                <div key={p.title} className="reveal-on-scroll" style={{ animationDelay: `${i * 150}ms` }}>
                  <EnhancedProjectCard project={p} delay={0} />
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-6 reveal-on-scroll">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-3 sm:px-3 sm:py-2 text-sm sm:text-xs text-white border border-white/30 hover:bg-white/10 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
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
            <div className="grid gap-6 sm:gap-3 sm:grid-cols-2">
              {latestPosts.map((p, i) => (
                <div key={p.title} className="reveal-on-scroll" style={{ animationDelay: `${i * 150}ms` }}>
                  <EnhancedBlogCard post={p} delay={0} />
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-6 reveal-on-scroll">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-3 sm:px-3 sm:py-2 text-sm sm:text-xs text-white border border-white/30 hover:bg-white/10 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
              >
                {t("see_more_blog")}
              </Link>
            </div>
          </SectionRow>

          {/* FOTOS */}
          <SectionRow
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
                className="inline-flex items-center gap-2 px-4 py-3 sm:px-3 sm:py-2 text-sm sm:text-xs text-white border border-white/30 hover:bg-white/10 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
              >
                {t("see_all_photos")}
              </Link>
            </div>
          </SectionRow>

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
            <div className="space-y-6 reveal-on-scroll">
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-3">
                <a
                  href={`mailto:${personalInfo.email}?subject=Hola!%20Tengo%20un%20proyecto&body=Hola,%0A%0AMe%20gustaría%20hablar%20contigo%20sobre%20un%20proyecto.%0A%0AGracias!`}
                  className="inline-flex items-center gap-3 sm:gap-2 border border-white/30 bg-white/5 px-4 py-3 sm:px-3 sm:py-2 text-sm sm:text-xs text-white hover:bg-white/10 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
                >
                  <Mail className="h-5 w-5 sm:h-4 sm:w-4" />
                  <span>{t("email")}</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 sm:gap-2 border border-white/30 bg-white/5 px-4 py-3 sm:px-3 sm:py-2 text-sm sm:text-xs text-white hover:bg-white/10 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
                >
                  <Github className="h-5 w-5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">{t("github_handle")}</span>
                  <span className="sm:hidden">GitHub</span>
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-1 border border-white bg-white px-4 py-3 sm:px-3 sm:py-2 text-sm sm:text-xs text-black hover:bg-white/90 active:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
                >
                  {t("cv")} <ExternalLink className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
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