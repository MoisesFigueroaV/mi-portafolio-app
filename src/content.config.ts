import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Artículos del blog. Cada artículo tiene dos archivos, uno por idioma,
 * que comparten el mismo campo `post`:  mi-post.en.md  y  mi-post.es.md
 */
const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    readingTime: z.number().int().positive(),
    lang: z.enum(["en", "es"]),
    post: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { writing };
