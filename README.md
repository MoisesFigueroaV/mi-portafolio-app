# Portafolio Personal (Versión Astro)

Este es un portafolio personal migrado a **Astro**, manteniendo la interactividad de React (Framer Motion, Radix UI) y el diseño original con Tailwind CSS.

## Características

- **Rendimiento Mejorado**: Arquitectura basada en islas de Astro para menor JS inicial.
- **Multi-idioma**: Soporte para español e inglés (Mantenido vía React Context).
- **Gestión de contenido centralizada**: Toda la información se gestiona desde `src/lib`.
- **Diseño responsive**: Adaptado para móviles y escritorio.
- **Animaciones**: Framer Motion para transiciones suaves.

## Tech Stack

- [Astro](https://astro.build/) - Framework web para contenido.
- [React](https://react.dev/) - Biblioteca UI para componentes interactivos.
- [Tailwind CSS](https://tailwindcss.com/) - Estilos utilitarios.
- [Framer Motion](https://www.framer.com/motion/) - Animaciones.

## Primeros Pasos

1. **Instala las dependencias**:
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

   Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

## Gestión de Contenido

El contenido se gestiona en `src/lib`:

- **Información Personal**: `src/lib/page-content.ts`
- **Proyectos**: `src/lib/projects-data.ts`
- **Blog**: `src/lib/blog-data.ts`
- **Traducciones**: `src/lib/translations.ts`

Para más detalles, consulta `CONTENT-GUIDE.md`.

## Despliegue

Puedes desplegar este proyecto en Vercel, Netlify o cualquier host estático adaptando el adaptador de Astro si es necesario (actualmente estático por defecto).

```bash
npm run build
```
