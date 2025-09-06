import type { Project } from "./content-manager"

// 🎯 PROYECTOS - Agrega/edita aquí tus proyectos
export const projects: Project[] = [
  {
    title: { es: "Specular UI", en: "Specular UI [TRANSLATE]" },
    subtitle: { es: "Componentes accesibles y rápidos", en: "Accessible and fast components [TRANSLATE]" },
    description: { es: "Librería de componentes centrada en accesibilidad y rendimiento.", en: "Component library focused on accessibility and performance. [TRANSLATE]" },
    image: "/specular-ui-preview.png", // 📁 Sube tu imagen a public/
    siteUrl: "https://specular-ui.com", // 🔗 Cambia por tu URL
    repoUrl: "https://github.com/tu-usuario/specular-ui", // 🔗 Cambia por tu repo
    tags: ["React", "Tailwind", "A11y"],
    updatedAt: "2025-01-15",
    featured: true, // ⭐ Aparece en homepage
    body: {
      es: "Contenido del proyecto.",
      en: "Project content."
    },
  },

  // 📝 PLANTILLA PARA NUEVO PROYECTO:
  // {
  //   title: { es: "Nombre del Proyecto", en: "Project Name" },
  //   subtitle: { es: "Descripción corta", en: "Short description" },
  //   description: { es: "Descripción más detallada del proyecto.", en: "More detailed project description." },
  //   image: "/mi-proyecto.png", // Sube la imagen a public/
  //   siteUrl: "https://mi-proyecto.com", // URL del sitio (opcional)
  //   repoUrl: "https://github.com/usuario/proyecto", // URL del repo (opcional)
  //   tags: ["React", "Next.js", "TypeScript"], // Tecnologías usadas
  //   updatedAt: "2024-01-15", // Fecha actual
  //   featured: true, // true = aparece en homepage
  // },

  {
    title: { es: "Vector Notes", en: "Vector Notes [TRANSLATE]" },
    subtitle: { es: "Notas con CRDT local-first", en: "Notes with local-first CRDT [TRANSLATE]" },
    description: { es: "Editor de notas resistente a conflictos, offline-first.", en: "Conflict-resistant, offline-first notes editor. [TRANSLATE]" },
    image: "/vector-notes-local-first-app.png",
    siteUrl: "https://vector-notes.app",
    repoUrl: "https://github.com/tu-usuario/vector-notes",
    tags: ["Tauri", "CRDT", "Rust"],
    updatedAt: "2024-12-20",
    featured: true,
  },

  {
    title: { es: "Monochrome Blog", en: "Monochrome Blog [TRANSLATE]" },
    subtitle: { es: "Blog ultrarrápido con MDX", en: "Ultrafast blog with MDX [TRANSLATE]" },
    description: { es: "Contenido en MDX con métricas, OG automático y diseño monocromo.", en: "MDX content with metrics, automatic OG, and monochrome design. [TRANSLATE]" },
    image: "/monochrome-blog-mdx.png",
    siteUrl: "https://monochrome-blog.com",
    repoUrl: "https://github.com/tu-usuario/monochrome-blog",
    tags: ["MDX", "Next.js", "SEO"],
    updatedAt: "2024-11-18",
    featured: true,
  },


]
