# Portafolio Personal con Next.js

Este es un portafolio personal construido con Next.js, TypeScript y Tailwind CSS. Está diseñado para ser fácilmente personalizable y extensible.

## Características

- **Multi-idioma**: Soporte para español e inglés en la interfaz y el contenido.
- **Gestión de contenido centralizada**: Toda la información personal, proyectos, posts del blog, etc., se gestionan desde archivos en el directorio `lib`.
- **Diseño responsive**: Adaptado para verse bien en dispositivos de escritorio y móviles.
- **Componentes reutilizables**: Construido con componentes de React reutilizables y bien estructurados.
- **SEO optimizado**: Configuración de metadatos para un buen posicionamiento en buscadores.
- **Modo oscuro**: Interfaz con tema oscuro por defecto.

## Tech Stack

- [Next.js](https://nextjs.org/) - El framework de React para producción.
- [TypeScript](https://www.typescriptlang.org/) - Para un código más robusto y mantenible.
- [Tailwind CSS](https://tailwindcss.com/) - Para un diseño rápido y personalizable.
- [Framer Motion](https://www.framer.com/motion/) - Para animaciones fluidas.
- [Lucide React](https://lucide.dev/) - Para los iconos.

## Primeros Pasos

Para empezar a trabajar con el proyecto, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Gestión de Contenido

Para personalizar el contenido de tu portafolio, edita los archivos en el directorio `lib`:

- **Información Personal**: Edita el objeto `personalInfo` en `lib/page-content.ts` para cambiar tu nombre, título, descripción, enlaces a redes sociales, etc.

- **Proyectos**: Para agregar o editar proyectos, modifica el array `projects` en `lib/projects-data.ts`. Recuerda seguir la estructura de datos y proporcionar los textos en español e inglés.

- **Posts del Blog**: Para agregar o editar posts, modifica el array `posts` en `lib/blog-data.ts`.

- **Stack Tecnológico**: Edita el array `techStackItems` en `lib/page-content.ts`.

- **Experiencia**: Edita el array `timelineData` en `lib/page-content.ts`.

- **Traducciones de la Interfaz**: Para cambiar los textos de la interfaz (botones, títulos, etc.), edita el objeto `translations` en `lib/translations.ts`.

Para más detalles, consulta el archivo `CONTENT-GUIDE.md`.

## Despliegue

La forma más fácil de desplegar tu aplicación Next.js es usar la [plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para más información.
