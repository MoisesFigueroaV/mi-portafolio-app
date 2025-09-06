# 📝 Guía para Modificar Contenido

## 🎯 Información Personal

Edita `lib/page-content.ts` en el objeto `personalInfo` para cambiar:
- ✅ Nombre, título, descripción
- ✅ Email, GitHub, Twitter, LinkedIn
- ✅ Ubicación y modo de trabajo
- ✅ Configuración SEO

## 🚀 Agregar Proyectos

1. **Sube la imagen** a `public/images/nombre-proyecto.png`
2. **Edita** `lib/projects-data.ts` en la sección `projects`
3. **Copia** un proyecto existente y modifica. Recuerda añadir la traducción en inglés:
   ```typescript
   {
     title: { es: "Mi Nuevo Proyecto", en: "My New Project" },
     subtitle: { es: "Descripción corta", en: "Short description" },
     description: { es: "Descripción detallada...", en: "Detailed description..." },
     image: "/images/mi-proyecto.png", // Tu imagen
     siteUrl: "https://mi-sitio.com", // URL del proyecto
     repoUrl: "https://github.com/usuario/repo", // GitHub
     tags: ["React", "TypeScript"], // Tecnologías
     updatedAt: "2024-01-15", // Fecha actual
     featured: true, // true = aparece en homepage
   }
   ```

## 📝 Agregar Blog Posts

1. **Edita** `lib/blog-data.ts` en la sección `posts`
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
2. **Edita** `lib/images-data.ts` en la sección `photos`:
   ```typescript
   { src: "/photos/mi-foto.jpg", alt: "Descripción de la foto" }
   ```

## 🔗 Cambiar Enlaces

Todos los enlaces se actualizan automáticamente desde `lib/page-content.ts` en el objeto `personalInfo`.

## 🎨 Personalizar Tema

La configuración del tema ya no se gestiona en `lib/config.ts`. Los estilos se pueden modificar directamente en los archivos de componentes y en `app/globals.css`.

## 📊 SEO

El SEO se configura automáticamente desde `lib/page-content.ts` en el objeto `personalInfo.seo`.