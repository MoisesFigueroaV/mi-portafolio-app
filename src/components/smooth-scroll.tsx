"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Importación dinámica para asegurar que se ejecute solo en cliente
    import("lenis").then((LenisModule) => {
      const Lenis = LenisModule.default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4x87
        smoothWheel: true,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Handle anchor links with Lenis
      function onClick(e: MouseEvent) {
        const el = e.target as HTMLElement | null;
        if (!el) return;
        const anchor = el.closest("a") as HTMLAnchorElement | null;
        if (!anchor) return;
        const href = anchor.getAttribute("href") || "";
        if (!href.startsWith("#")) return;
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();
        lenis.scrollTo(target, { offset: -80 }); // Adjust offset for header

        window.setTimeout(() => {
          try {
            history.pushState(null, "", `#${id}`);
          } catch { }
        }, 1000);
      }

      document.addEventListener("click", onClick, { passive: false });

      return () => {
        lenis.destroy();
        document.removeEventListener("click", onClick);
      }
    });

  }, []);

  return null;
}
