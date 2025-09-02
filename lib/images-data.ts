
import type { Photo } from "./content-manager"

// 📸 FOTOS - Agrega aquí tus imágenes
export const photos: Photo[] = [
  { src: "/photos/p1.png", alt: "Calle en blanco y negro" },
  { src: "/photos/p2.png", alt: "Arquitectura minimal" },
  { src: "/photos/p3.png", alt: "Sombra y luz" },
  { src: "/photos/p4.png", alt: "Texturas urbanas" },
  { src: "/photos/p5.png", alt: "Retrato monocromo" },
  { src: "/photos/p6.png", alt: "Horizonte" },

  // 📝 PARA AGREGAR FOTOS:
  // 1. Sube la imagen a public/photos/
  // 2. Agrega esta línea:
  // { src: "/photos/mi-foto.jpg", alt: "Descripción de la foto" },
]
