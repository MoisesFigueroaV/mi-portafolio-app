# Moisés Figueroa · Portafolio

Sitio personal: una columna, inglés y español, modo claro y oscuro, y un fondo animado inspirado en la pantalla de arranque de la PS2.

## Stack

- [Astro 7](https://astro.build/) como generador estático, sin framework de UI.
- TypeScript para los scripts del navegador (`src/scripts/`).
- Canvas 2D para el fondo, sin librerías.
- CSS propio con variables por tema (`src/styles/global.css`).

Dependencias: `astro`, más `@astrojs/check` y `typescript` para desarrollo.

## Comandos

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run build` revisa los tipos (`astro check`) y genera `dist/`. Vercel lo despliega con `vercel.json`.

## Estructura

```
src/
  data/site.ts         Perfil, experiencia, educación, proyectos, fotos y redes (EN/ES)
  content/writing/     Artículos en Markdown, un archivo por idioma
  pages/               Inicio, /writing, /gallery, /projects/[slug], 404
  layouts/Base.astro   Estructura común: fondo, idioma, tema, parpadeo y pie
  components/          T (texto bilingüe), Avatar, Row, SubHeader
  scripts/             background.ts (fondo) y prefs.ts (idioma, tema, gatita)
public/
  avatar.png           Avatar 32×32
  cv/                  CV en PDF
  photos/              Fotos de la galería (webp)
  projects/            Íconos de proyectos
```

Para agregar o editar contenido, ver [CONTENT-GUIDE.md](./CONTENT-GUIDE.md).
