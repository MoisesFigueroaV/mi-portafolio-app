
import type { Photo } from "./content-manager"

// 📸 FOTOS - Agrega aquí tus imágenes
export const photos: Photo[] = [
  { src: "/photos/p1.png", alt: "Calle en blanco y negro", width: 500, height: 500 },
  { src: "/photos/p2.png", alt: "Arquitectura minimal", width: 500, height: 500 },
  { src: "/photos/p3.png", alt: "Sombra y luz", width: 500, height: 500 },
  { src: "/photos/p4.png", alt: "Texturas urbanas", width: 500, height: 500 },
  { src: "/photos/p5.png", alt: "Retrato monocromo", width: 500, height: 500 },
  { src: "/photos/p6.png", alt: "Horizonte", width: 500, height: 500 },

  // 📝 PARA AGREGAR FOTOS:
  // 1. Sube la imagen a public/photos/
  // 2. Agrega esta línea:
  // { src: "/photos/mi-foto.jpg", alt: "Descripción de la foto", width: 800, height: 600 },
]
