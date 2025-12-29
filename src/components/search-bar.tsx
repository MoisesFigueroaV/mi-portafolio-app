"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { projects } from "@/lib/projects-data";
import { posts } from "@/lib/blog-data";

type SearchResult = {
  type: "project" | "post"
  title: string
  description?: string
  excerpt?: string
  tags?: string[]
  onClick: () => void
}

import { useLanguage } from "@/components/language-provider"

export default function SearchBar({ onResultClick }: { onResultClick?: (result: SearchResult) => void }) {
  const { language } = useLanguage()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchResults: SearchResult[] = []
    const lowerQuery = query.toLowerCase()

    // Buscar en proyectos
    projects.forEach((p) => {
      const matches =
        p.title[language].toLowerCase().includes(lowerQuery) ||
        p.description[language]?.toLowerCase().includes(lowerQuery) ||
        p.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))

      if (matches) {
        searchResults.push({
          type: "project",
          title: p.title[language],
          description: p.description[language],
          tags: p.tags,
          onClick: () =>
            onResultClick?.({
              type: "project",
              title: p.title[language],
              description: p.description[language],
              tags: p.tags,
              onClick: () => {},
            }),
        })
      }
    })

    // Buscar en posts
    posts.forEach((p) => {
      const matches =
        p.title[language].toLowerCase().includes(lowerQuery) ||
        p.excerpt?.[language]?.toLowerCase().includes(lowerQuery) ||
        p.content[language].toLowerCase().includes(lowerQuery)

      if (matches) {
        searchResults.push({
          type: "post",
          title: p.title[language],
          excerpt: p.excerpt?.[language],
          onClick: () => onResultClick?.({ type: "post", title: p.title[language], excerpt: p.excerpt?.[language], onClick: () => {} }),
        })
      }
    })

    setResults(searchResults.slice(0, 6))
  }, [query, onResultClick, language])

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-[#4d4d4d] sm:left-3 sm:h-4 sm:w-4" />
        <input
          type="text"
          placeholder="Buscar proyectos, posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full rounded-md border border-gray-300 bg-white pl-12 pr-12 py-3 text-base focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:border-[#4d4d4d] dark:bg-[#1a1a1a] dark:text-[#cccccc] dark:focus:border-[#cccccc] sm:pl-10 sm:pr-10 sm:py-2 sm:text-sm"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setResults([])
              setIsOpen(false)
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-[#4d4d4d] dark:hover:text-[#cccccc] sm:right-3"
          >
            <X className="h-5 w-5 sm:h-4 sm:w-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border border-gray-300 bg-white shadow-lg dark:border-[#4d4d4d] dark:bg-[#1a1a1a]">
          {results.map((result, i) => (
            <button
              key={i}
              onClick={() => {
                result.onClick()
                setIsOpen(false)
              }}
              className="w-full px-4 py-4 text-left hover:bg-gray-100 dark:hover:bg-[#000000] first:rounded-t-md last:rounded-b-md sm:py-3"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-[#4d4d4d] sm:text-xs">
                  {result.type === "project" ? "Proyecto" : "Post"}
                </span>
              </div>
              <div className="font-medium text-base sm:text-sm">{result.title}</div>
              {(result.description || result.excerpt) && (
                <div className="text-sm text-gray-500 dark:text-[#4d4d4d] mt-1 line-clamp-1 sm:text-xs">
                  {result.description || result.excerpt}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
