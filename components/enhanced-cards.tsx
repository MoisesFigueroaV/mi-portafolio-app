"use client"

import { useState } from "react"
import { useViewer } from "@/components/viewer-provider"
import type { Project, Post } from "@/lib/content-manager"

export function EnhancedProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { openProject } = useViewer()
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <button
      onClick={() => openProject(project)}
      className={[
        "group w-full overflow-hidden text-left",
        "border border-white/20 bg-white/5 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:border-white/40 hover:bg-white/10",
        "active:translate-y-0 active:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Ver proyecto: ${project.title}`}
    >
      <figure className="relative overflow-hidden">
        {!imageLoaded && <div className="h-40 sm:h-32 md:h-40 w-full bg-white/10 animate-pulse" />}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`h-40 sm:h-32 md:h-40 w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </figure>

      <div className="p-4 sm:p-3">
        <div className="space-y-2 sm:space-y-1">
          <h3 className="text-base sm:text-sm font-bold group-hover:text-white transition-colors text-white/90">
            {project.title}
          </h3>
          {project.subtitle && <p className="text-sm sm:text-xs text-white/60">{project.subtitle}</p>}
          {project.description && (
            <p className="line-clamp-2 text-sm sm:text-xs leading-relaxed text-white/60">{project.description}</p>
          )}

          <div className="flex flex-wrap gap-2 sm:gap-1.5 pt-2 sm:pt-1">
            {project.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 sm:px-2 sm:py-0.5 text-xs sm:text-[10px] text-white/60 border border-white/20"
              >
                {tag}
              </span>
            ))}
            {project.tags && project.tags.length > 3 && (
              <span className="px-2 py-1 sm:px-2 sm:py-0.5 text-xs sm:text-[10px] text-white/60 border border-white/20">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}

export function EnhancedBlogCard({ post, delay = 0 }: { post: Post; delay?: number }) {
  const { openPost } = useViewer()

  return (
    <button
      onClick={() => openPost(post)}
      className={[
        "group w-full p-4 sm:p-3 text-left",
        "border border-white/20 bg-white/5 transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-md hover:border-white/40 hover:bg-white/10",
        "active:translate-y-0 active:shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Leer post: ${post.title}`}
    >
      <div className="flex items-start justify-between gap-4 sm:gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-base sm:text-sm font-bold leading-tight group-hover:text-white transition-colors text-white/90">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="mt-2 sm:mt-1 line-clamp-2 text-sm sm:text-xs leading-relaxed text-white/60">{post.excerpt}</p>
          )}
        </div>
        {post.readingTime && <span className="shrink-0 text-sm sm:text-xs text-white/60">{post.readingTime}</span>}
      </div>
    </button>
  )
}
