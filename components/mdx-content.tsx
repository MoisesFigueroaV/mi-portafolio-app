
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
          font-family: var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
            "Courier New", monospace !important;
        }
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          color: #fff;
          font-weight: 700;
          margin-top: 2.5em;
          margin-bottom: 1.5em;
        }
                @media (max-width: 640px) { /* Tailwind's sm breakpoint is 640px */
          .prose h1 { font-size: 2.5rem; } /* text-4xl */
          .prose h2 { font-size: 2rem; } /* text-3xl */
          .prose h3 { font-size: 1.75rem; } /* text-2xl */
          .prose h4 { font-size: 1.5rem; } /* text-xl */
          .prose h5 { font-size: 1.25rem; } /* text-lg */
          .prose h6 { font-size: 1.125rem; } /* text-base */
          .prose p {
            font-size: 1.125rem; /* text-lg (18px) for mobile paragraphs to match main page */
            line-height: 1.75; /* leading-relaxed */
            text-align: justify; /* Default for paragraphs */
          }
        }
        .prose p {
          text-align: justify;
          margin-top: 0.75em; /* Reduced */
          margin-bottom: 0.75em; /* Reduced */
          font-size: 1.125rem; /* text-lg (18px) for larger screens */
          line-height: 1.75; /* leading-relaxed */
        }
        .prose a {
          color: #93c5fd;
          text-decoration: underline;
        }
        .prose a:hover {
          color: #60a5fa;
        }
        .prose hr {
          margin-top: 2em; /* Reduced from 3em */
          margin-bottom: 2em; /* Reduced from 3em */
        }

        /* Further adjustments for vertical rhythm within prose content */
        .prose > :first-child {
          margin-top: 0;
        }
        .prose > :last-child {
          margin-bottom: 0;
        }
        .prose p,
        .prose ul,
        .prose ol,
        .prose blockquote,
        .prose pre,
        .prose table {
          margin-top: 0.75em;
          margin-bottom: 0.75em;
        }
        .prose li {
          margin-top: 0.25em;
          margin-bottom: 0.25em;
        }
        .prose ul > li p,
        .prose ol > li p {
          margin-top: 0;
          margin-bottom: 0;
        }
        .prose img {
          margin-top: 1em;
          margin-bottom: 1em;
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
