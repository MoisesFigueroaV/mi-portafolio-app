import { getCollection, type CollectionEntry } from "astro:content";

export type Post = {
  slug: string;
  date: Date;
  readingTime: number;
  en?: CollectionEntry<"writing">;
  es?: CollectionEntry<"writing">;
};

/** Agrupa los artículos por slug (una entrada por idioma) y los ordena del más nuevo al más antiguo. */
export async function getPosts(): Promise<Post[]> {
  const entries = await getCollection("writing", (e) => !e.data.draft);
  const bySlug = new Map<string, Post>();
  for (const e of entries) {
    const p = bySlug.get(e.data.post) ?? { slug: e.data.post, date: e.data.date, readingTime: e.data.readingTime };
    p[e.data.lang] = e;
    bySlug.set(e.data.post, p);
  }
  return [...bySlug.values()].sort((a, b) => b.date.getTime() - a.date.getTime());
}

/** Texto bilingüe de un campo, usando el otro idioma si falta una traducción. */
export function pick(p: Post, field: "title" | "excerpt") {
  const en = p.en?.data[field] ?? p.es?.data[field] ?? "";
  const es = p.es?.data[field] ?? en;
  return { en, es };
}

export function formatDate(d: Date) {
  return {
    en: d.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" }),
    es: d.toLocaleDateString("es-CL", { month: "short", year: "numeric", timeZone: "UTC" }),
  };
}
