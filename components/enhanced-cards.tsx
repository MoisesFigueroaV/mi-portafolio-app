"use client"

import { useState } from "react"
import Image from "next/image"
import { useViewer } from "@/components/viewer-provider"
import type { Project, Post } from "@/lib/content-manager"
import { useLanguage } from "@/components/language-provider"

export function EnhancedProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { openProject } = useViewer()
  const [imageLoaded, setImageLoaded] = useState(false)
  const { language } = useLanguage()

  return (
    <button
      onClick={() => openProject(project)}
      className={[
        "group w-full overflow-hidden text-left",
        "bg-white/5 transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:bg-white/10",
        "active:translate-y-0 active:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
        "flex items-stretch", // Contenedor Flex
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Ver proyecto: ${project.title[language]}`}
    >
      {/* Columna de la imagen (1/3 del ancho) */}
      <figure className="relative w-1/3 overflow-hidden">
        {!imageLoaded && <div className="h-full w-full bg-white/10 animate-pulse" />}
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title[language]}
          fill
          className={`object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </figure>

      {/* Columna del contenido (2/3 del ancho) */}
      <div className="w-2/3 p-4 sm:p-3 flex flex-col justify-center">
        <div className="space-y-2 sm:space-y-1">
          <h3 className="text-base sm:text-sm font-bold group-hover:text-white transition-colors text-white/90">
            {project.title[language]}
          </h3>
          {project.subtitle && <p className="text-sm sm:text-xs text-white/60">{project.subtitle[language]}</p>}
          {project.description && (
            <p className="line-clamp-2 text-sm sm:text-xs leading-relaxed text-white/60">{project.description[language]}</p>
          )}

          <div className="flex flex-wrap gap-2 sm:gap-1.5 pt-2 sm:pt-1">
            {project.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 sm:px-2 sm:py-0.5 text-xs sm:text-[10px] text-white/60"
              >
                {tag}
              </span>
            ))}
            {project.tags && project.tags.length > 3 && (
              <span className="px-2 py-1 sm:px-2 sm:py-0.5 text-xs sm:text-[10px] text-white/60">
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
  const { language } = useLanguage()

  return (
    <button
      onClick={() => openPost(post)}
            className={[
        "group w-full p-4 sm:p-3 text-left",
        "bg-white/5 transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-md hover:bg-white/10",
        "active:translate-y-0 active:shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
        "flex items-center", // Contenedor Flex
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Leer post: ${post.title[language]}`}
    >
      <div className="flex-grow">
        <h3 className="text-base sm:text-sm font-bold leading-tight group-hover:text-white transition-colors text-white/90">
          {post.title[language]}
        </h3>
        {post.excerpt && (
          <p className="mt-2 sm:mt-1 line-clamp-2 text-sm sm:text-xs leading-relaxed text-white/60">{post.excerpt[language]}</p>
        )}
      </div>
      {post.readingTime && <span className="flex-shrink-0 ml-4 text-sm sm:text-xs text-white/60">{post.readingTime}</span>}
    </button>
  )
}