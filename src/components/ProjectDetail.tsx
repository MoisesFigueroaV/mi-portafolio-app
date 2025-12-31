import React from 'react';
import type { Project } from '@/lib/content-manager';
import PageShell from '@/components/page-shell';
import SectionRow from '@/components/section-row';
import { useLanguage, LanguageProvider } from '@/components/language-provider';
import { ViewerProvider } from "@/components/viewer-provider";

const ProjectDetailContent = ({ project }: { project: Project }) => {
    const { language } = useLanguage();

    if (!project) return null;

    return (
        <main className="font-mono min-h-screen text-white">
            <ViewerProvider>
                <PageShell>
                    <div className="mb-12">
                        <a href="/" className="text-white/40 hover:text-emerald-400 transition-colors text-sm mb-8 inline-block">
                            ../back_to_root
                        </a>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono text-white mb-4">
                            ./{project.slug.replace(/-/g, '_')}
                        </h1>

                        {project.image && (
                            <div className="w-full aspect-video bg-white/5 rounded-lg border border-white/10 overflow-hidden mb-8">
                                <img
                                    src={project.image}
                                    alt={project.title[language]}
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </div>
                        )}

                        <p className="text-white/60 text-lg mb-8">
                            {project.description[language]}
                        </p>

                        {/* Mock content since we don't have MDX setup yet fully verified */}
                        <div className="p-6 bg-white/5 border border-white/10 rounded font-mono text-sm leading-relaxed text-white/70">
                             // Project Content Placeholder <br />
                             // {project.title[language]} <br />
                             // {project.subtitle[language]} <br /> <br />

                            {project.tags?.map(t => <span key={t} className="mr-3 text-emerald-400">#{t.toLowerCase()}</span>)}
                        </div>
                    </div>
                </PageShell>
            </ViewerProvider>
        </main>
    );
};

export default function ProjectDetail({ project }: { project: Project }) {
    return (
        <LanguageProvider>
            <ProjectDetailContent project={project} />
        </LanguageProvider>
    );
}
