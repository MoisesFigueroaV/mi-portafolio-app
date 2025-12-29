# 📝 Guía para Modificar Contenido

## 🎯 Información Personal

Edita `src/lib/page-content.ts` en el objeto `personalInfo` para cambiar:
- ✅ Nombre, título, descripción
- ✅ Email, GitHub, Twitter, LinkedIn
- ✅ Ubicación y modo de trabajo
- ✅ Configuración SEO

## 🚀 Agregar Proyectos

1. **Sube la imagen** a `public/projects/nombre-proyecto.png` (o jpeg)
2. **Edita** `src/lib/projects-data.ts` en la sección `projects`
3. **Copia** un proyecto existente y modifica. Recuerda añadir la traducción en inglés:
   ```typescript
   {
     title: { es: "Mi Nuevo Proyecto", en: "My New Project" },
     subtitle: { es: "Descripción corta", en: "Short description" },
     description: { es: "Descripción detallada...", en: "Detailed description..." },
     image: "/projects/mi-proyecto.png", // Tu imagen en public/projects
     siteUrl: "https://mi-sitio.com", // URL del proyecto
     repoUrl: "https://github.com/usuario/repo", // GitHub
     tags: ["React", "TypeScript"], // Tecnologías
     updatedAt: "2024-01-15", // Fecha actual
     featured: true, // true = aparece en homepage
   }
   ```

## 📝 Agregar Blog Posts

1. **Edita** `src/lib/blog-data.ts` en la sección `posts`
2. **Copia** un post existente y modifica. Recuerda añadir la traducción en inglés:
   ```typescript
   {
     title: { es: "Mi Nuevo Post", en: "My New Post" },
     readingTime: "5 min",
     excerpt: { es: "Resumen corto...", en: "Short excerpt..." },
     updatedAt: "2024-01-15",
     content: {
        es: `
          # Mi Post
          Contenido en **Markdown**.
        `,
        en: `
          # My Post
          Content in **Markdown**.
        `
     }
   }
   ```

## 📸 Agregar Fotos

1. **Sube la imagen** a `public/photos/mi-foto.jpg`
2. **Edita** `src/lib/images-data.ts` en la sección `photos`:
   ```typescript
   { src: "/photos/mi-foto.jpg", alt: "Descripción de la foto" }
   ```

## 🔗 Cambiar Enlaces

Todos los enlaces se actualizan automáticamente desde `src/lib/page-content.ts` en el objeto `personalInfo`.

## 🎨 Personalizar Tema

Los estilos globales están en `src/styles/globals.css`. La configuración de Tailwind está en `tailwind.config.mjs`.

## 📊 SEO

El SEO se configura automáticamente desde `src/lib/page-content.ts` en el objeto `personalInfo.seo`.