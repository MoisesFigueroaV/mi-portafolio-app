import React from 'react';
import type { Post } from '@/lib/content-manager';
import ReactMarkdown from 'react-markdown';
import PageShell from '@/components/page-shell';
import SectionRow from '@/components/section-row';
import { useLanguage, LanguageProvider } from '@/components/language-provider';
import { ViewerProvider } from "@/components/viewer-provider";

const BlogDetailContent = ({ post }: { post: Post }) => {
    const { language } = useLanguage();

    if (!post) return null;

    return (
        <main className="font-mono min-h-screen text-white">
            <ViewerProvider>
                <PageShell>
                    <div className="mb-12">
                        <a href="/" className="text-white/40 hover:text-emerald-400 transition-colors text-sm mb-8 inline-block">
                            ../back_to_root
                        </a>

                        <div className="text-white/40 text-xs mb-2">
                            {new Date(post.updatedAt).toLocaleDateString()}
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono text-white mb-8">
                            {post.title[language]}
                        </h1>

                        <div className="p-6 bg-white/5 border border-white/10 rounded font-mono text-sm leading-relaxed text-white/80">
                            <ReactMarkdown
                                components={{
                                    h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mt-6 mb-4 text-white" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-5 mb-3 text-white" {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="text-lg font-semibold mt-4 mb-2 text-white" {...props} />,
                                    p: ({ node, ...props }) => <p className="mb-4 text-white/70" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-4 space-y-2 text-white/70" {...props} />,
                                    ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-4 space-y-2 text-white/70" {...props} />,
                                    li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                                    strong: ({ node, ...props }) => <strong className="font-bold text-white" {...props} />,
                                    a: ({ node, ...props }) => <a className="text-emerald-400 hover:underline" {...props} />,
                                    blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-emerald-400 pl-4 py-1 italic text-white/50 mb-4" {...props} />,
                                }}
                            >
                                {post.content[language]}
                            </ReactMarkdown>
                        </div>
                    </div>
                </PageShell>
            </ViewerProvider>
        </main>
    );
};

export default function BlogDetail({ post }: { post: Post }) {
    return (
        <LanguageProvider>
            <BlogDetailContent post={post} />
        </LanguageProvider>
    );
}
