"use client"

import { useState } from "react"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import type { Photo } from "@/lib/content-manager"

export default function MediaMosaic({ photos = [] as Photo[] }: { photos?: Photo[] }) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<Photo | null>(null)

  function openPhoto(p: Photo) {
    // En móvil no abrir modal, solo mostrar la imagen en grande
    if (window.innerWidth < 768) {
      return
    }
    setCurrent(p)
    setOpen(true)
  }

  return (
    <>
      <div className="columns-1 gap-3 sm:gap-2 md:gap-3 sm:columns-2 md:columns-3">
        {photos.map((p, i) => (
          <img
            key={p.src + i}
            src={p.src || "/placeholder.svg"}
            alt={p.alt}
            width={p.width}
            height={p.height}
            className="mb-3 sm:mb-2 md:mb-3 inline-block w-full cursor-zoom-in sm:cursor-zoom-in break-inside-avoid border border-white/20 transition-all hover:opacity-90 active:opacity-95 reveal-on-scroll"
            onClick={() => openPhoto(p)}
            style={{ animationDelay: `${i * 50}ms` }}
          />
        ))}
      </div>

      {/* Modal solo para desktop con botón de cerrar visible */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl bg-black p-1 sm:p-2 border border-white/20">
          {/* Botón de cerrar personalizado */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-2 top-2 z-10 inline-flex h-8 w-8 items-center justify-center bg-black/80 text-white hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
            aria-label="Cerrar imagen"
          >
            <X className="h-4 w-4" />
          </button>

          {current && (
            <img
              src={current.src || "/placeholder.svg"}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="mx-auto max-h-[85vh] w-auto object-contain"
            />
          )}
          <DialogTitle className="sr-only">{current?.alt || "Foto"}</DialogTitle>
        </DialogContent>
      </Dialog>
    </>
  )
}
