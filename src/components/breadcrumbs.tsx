"use client"


import { ChevronRight } from "lucide-react"

type BreadcrumbItem = {
  label: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 hidden sm:block">
      <ol className="flex items-center gap-2 text-lg sm:text-sm text-white/60">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="h-4 w-4 sm:h-3 sm:w-3" />}
            {item.href ? (
              <a href={item.href} className="hover:text-white/80">
                {item.label}
              </a>
            ) : (
              <span className="text-white/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
