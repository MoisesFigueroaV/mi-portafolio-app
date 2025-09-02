
import type { Project } from "./content-manager"

// 🎯 PROYECTOS - Agrega/edita aquí tus proyectos
export const projects: Project[] = [
  {
    title: "Specular UI",
    subtitle: "Componentes accesibles y rápidos",
    description: "Librería de componentes centrada en accesibilidad y rendimiento.",
    image: "/specular-ui-preview.png", // 📁 Sube tu imagen a public/
    siteUrl: "https://specular-ui.com", // 🔗 Cambia por tu URL
    repoUrl: "https://github.com/tu-usuario/specular-ui", // 🔗 Cambia por tu repo
    tags: ["React", "Tailwind", "A11y"],
    updatedAt: "2025-01-15",
    featured: true, // ⭐ Aparece en homepage
    body: "\n# Specular UI\n\nSpecular UI prioriza la accesibilidad y el rendimiento.\n\n## Características\n\n- Componentes totalmente accesibles\n- Optimizado para performance\n- Diseño minimalista\n\n```tsx\nfunction Button({ children, ...props }) {\n  return (\n    <button className=\"px-3 py-1.5 ring-1\" {...props}>\n      {children}\n    </button>\n  )\n}\n```\n    ",
  },

  // 📝 PLANTILLA PARA NUEVO PROYECTO:
  // {
  //   title: "Nombre del Proyecto",
  //   subtitle: "Descripción corta",
  //   description: "Descripción más detallada del proyecto.",
  //   image: "/mi-proyecto.png", // Sube la imagen a public/
  //   siteUrl: "https://mi-proyecto.com", // URL del sitio (opcional)
  //   repoUrl: "https://github.com/usuario/proyecto", // URL del repo (opcional)
  //   tags: ["React", "Next.js", "TypeScript"], // Tecnologías usadas
  //   updatedAt: "2024-01-15", // Fecha actual
  //   featured: true, // true = aparece en homepage
  // },

  {
    title: "Vector Notes",
    subtitle: "Notas con CRDT local-first",
    description: "Editor de notas resistente a conflictos, offline-first.",
    image: "/vector-notes-local-first-app.png",
    siteUrl: "https://vector-notes.app",
    repoUrl: "https://github.com/tu-usuario/vector-notes",
    tags: ["Tauri", "CRDT", "Rust"],
    updatedAt: "2024-12-20",
    featured: true,
  },

  {
    title: "Monochrome Blog",
    subtitle: "Blog ultrarrápido con MDX",
    description: "Contenido en MDX con métricas, OG automático y diseño monocromo.",
    image: "/monochrome-blog-mdx.png",
    siteUrl: "https://monochrome-blog.com",
    repoUrl: "https://github.com/tu-usuario/monochrome-blog",
    tags: ["MDX", "Next.js", "SEO"],
    updatedAt: "2024-11-18",
    featured: true,
  },


]
