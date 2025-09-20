import type { MetadataRoute } from "next"
import { personalInfo } from "@/lib/page-content"
import { projects } from "@/lib/projects-data"
import { posts } from "@/lib/blog-data"

// Función para generar slugs a partir de títulos
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD") // Normaliza a su forma descompuesta
    .replace(/[\u0300-\u036f]/g, "") // Elimina diacríticos
    .replace(/\s+/g, "-") // Reemplaza espacios con -
    .replace(/[^\w-]+/g, "") // Elimina caracteres no alfanuméricos (excepto guiones)
    .replace(/--+/g, "-") // Reemplaza múltiples guiones con uno solo
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = personalInfo.website

  // Páginas de proyectos dinámicas
  const projectRoutes = projects.map(project => ({
    url: `${baseUrl}/projects/${slugify(project.title.es)}`,
    lastModified: new Date(project.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Páginas de blog dinámicas
  const blogRoutes = posts.map(post => ({
    url: `${baseUrl}/blog/${slugify(post.title.es)}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Páginas principales estáticas
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/photos`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
