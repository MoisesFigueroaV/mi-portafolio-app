import type { MetadataRoute } from "next"
import { personalInfo } from "@/lib/page-content"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"], // Bloquea rutas privadas si las tienes
    },
    sitemap: `${personalInfo.website}/sitemap.xml`,
  }
}
