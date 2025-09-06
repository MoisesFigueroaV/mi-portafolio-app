import type { Post } from "./content-manager"

// 📝 BLOG POSTS - Agrega/edita aquí tus artículos
export const posts: Post[] = [
  {
    title: { es: "Interfaces sin ruido visual", en: "Interfaces without visual noise [TRANSLATE]" },
    readingTime: "3 min",
    excerpt: { es: "Equilibra jerarquías: color, peso, ritmo.", en: "Balance hierarchies: color, weight, rhythm. [TRANSLATE]" },
    updatedAt: "2024-12-28",
    content: {
      es: "Contenido del post.",
      en: "Post content."
    },
  },
  {
    title: { es: "Diseño con restricciones", en: "Design with constraints [TRANSLATE]" },
    readingTime: "4 min",
    excerpt: { es: "Las restricciones guían la creatividad.", en: "Constraints guide creativity. [TRANSLATE]" },
    updatedAt: "2024-12-10",
    content: {
      es: "Contenido del post.",
      en: "Post content."
    },
  },
]
