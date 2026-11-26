# Guía de contenido

Todo texto visible va en dos idiomas con la forma `{ en: "...", es: "..." }`. El inglés es el idioma principal.

## Proyectos

1. Sube un ícono cuadrado a `public/projects/` (SVG o PNG de 64×64), por ejemplo `public/projects/mi-proyecto.svg`.
2. En `src/data/site.ts`, copia la entrada de `projects` y edítala:

```ts
{
  slug: "mi-proyecto",                       // URL: /projects/mi-proyecto
  when: { en: "2026", es: "2026" },          // o { en: "Ongoing", es: "En curso" }
  title: { en: "My project", es: "Mi proyecto" },
  summary: { en: "One sentence.", es: "Una frase." },
  stack: ["Python", "PostgreSQL"],
  icon: "/projects/mi-proyecto.svg",
  repo: "https://github.com/...",            // opcional
  url: "https://...",                        // opcional
  overview: { en: "...", es: "..." },        // párrafo de la página de detalle
  features: [{ en: "...", es: "..." }],      // lista "What's inside"
  decisions: [{ en: "...", es: "..." }],     // opcional, lista "Details"
},
```

El orden del arreglo es el orden en la página.

## Experiencia y educación

En `src/data/site.ts`, arreglos `experience` y `education`. `years` es lo que aparece en la columna izquierda; `dates` es la línea pequeña bajo el cargo.

## Artículos

Cada artículo son dos archivos en `src/content/writing/`, uno por idioma, con el mismo valor en `post`:

```md
---
title: "My article"
excerpt: "One sentence."
date: 2026-11-26
readingTime: 6
lang: en
post: my-article        # URL: /writing/my-article (igual en los dos archivos)
draft: false            # opcional: true lo oculta
---

Text in Markdown. Start sections with ## (the page already has the title).
```

Si falta una traducción, el sitio muestra la versión que exista en ambos idiomas.

## Fotos

1. Sube la foto a `public/photos/` en webp, idealmente de no más de 1400 px de lado.
2. Agrégala a `photos` en `src/data/site.ts` con su ancho, alto y texto alternativo.

## CV, avatar y redes

- CV: reemplaza `public/cv/moises-figueroa-cv.pdf` manteniendo el nombre.
- Avatar: `public/avatar.png` (32×32). Si cambias el dibujo, ajusta la posición de los párpados de la gatita en `src/components/Avatar.astro`.
- Redes, email y ubicación: `profile` y `social` en `src/data/site.ts`.
