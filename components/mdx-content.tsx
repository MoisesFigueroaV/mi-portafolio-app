
"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"

export default function MdxContent({ children }: { children: string }) {
  return (
    <>
      <style jsx global>{`
        .prose {
          max-width: 80ch;
          margin: 0 auto;
        }
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          color: #fff;
          font-weight: 700;
          margin-top: 2.5em;
          margin-bottom: 1.5em;
        }
        .prose p {
          text-align: justify;
          margin-top: 1.5em;
          margin-bottom: 1.5em;
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        .prose a {
          color: #93c5fd;
          text-decoration: underline;
        }
        .prose a:hover {
          color: #60a5fa;
        }
        .prose hr {
          margin-top: 3em;
          margin-bottom: 3em;
        }
      `}</style>
      <div className="prose prose-invert max-w-none">
          <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
          >
              {children}
          </ReactMarkdown>
      </div>
    </>
  )
}
