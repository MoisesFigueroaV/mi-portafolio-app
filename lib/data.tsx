import type { Project, Post } from "./content-manager";
import { projects } from "./projects-data";
import { posts } from "./blog-data";

// 🔧 FUNCIONES HELPER (no editar)
export function getFeaturedProjects(limit = 4): Project[] {
  const featured = projects.filter((p) => p.featured);
  const base = (featured.length ? featured : projects).slice().sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
  return base.slice(0, limit);
}

export function getLatestPosts(limit = 4): Post[] {
  return posts
    .slice()
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
    .slice(0, limit);
}