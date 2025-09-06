// 🚀 GUÍA RÁPIDA PARA AGREGAR CONTENIDO

export type LocalizedString = {
  es: string
  en: string
}

export type Project = {
  // ✅ OBLIGATORIO
  title: LocalizedString
  subtitle: LocalizedString
  description: LocalizedString
  image: string // Ruta: "/images/proyecto-nombre.jpg"
  updatedAt: string // Formato: "2024-01-15"

  // ✅ ENLACES (al menos uno)
  siteUrl?: string // URL del sitio web
  repoUrl?: string // URL del repositorio

  // ✅ OPCIONAL
  tags?: string[] // ["React", "TypeScript", "API"]
  body?: LocalizedString // Contenido detallado en Markdown
  featured?: boolean // true = aparece en homepage
}

export type Post = {
  // ✅ OBLIGATORIO
  title: LocalizedString
  content: LocalizedString // Contenido en Markdown
  updatedAt: string // Formato: "2024-01-15"

  // ✅ OPCIONAL
  readingTime?: string // "5 min"
  excerpt?: LocalizedString // Resumen corto
}

export type Photo = {
  // ✅ OBLIGATORIO
  src: string // Ruta: "/photos/foto-nombre.jpg"
  alt: string // Descripción para accesibilidad
}

/* 
📝 CÓMO AGREGAR CONTENIDO:

1. PROYECTOS:
   - Agrega la imagen en public/images/
   - Abre lib/projects-data.ts y copia un proyecto existente.
   - Cambia title, subtitle, description, image, urls.
   - Pon featured: true para que aparezca en homepage.

2. BLOG POSTS:
   - Abre lib/blog-data.ts y copia un post existente.
   - Cambia title, content (usa Markdown).
   - Actualiza updatedAt con fecha actual.

3. FOTOS:
   - Sube la imagen a public/photos/
   - Abre lib/images-data.ts y agrega un nuevo objeto al array.

4. INFORMACIÓN PERSONAL Y ENLACES:
   - Edita el objeto `personalInfo` en lib/page-content.ts.
   - Los enlaces se actualizan automáticamente en toda la página.
*/
