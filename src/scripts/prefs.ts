/**
 * Idioma (en/es) y tema (oscuro/claro).
 * El valor inicial lo fija un script inline en <head> antes del primer pintado;
 * aquí se manejan los botones, el parpadeo y la gatita.
 */

type Lang = "en" | "es";
type Theme = "dark" | "light";

const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

const save = (k: string, v: string) => {
  try {
    localStorage.setItem(k, v);
  } catch {
    /* almacenamiento bloqueado: el cambio vale solo para esta visita */
  }
};

function syncButtons() {
  document.querySelectorAll<HTMLButtonElement>("[data-set-lang]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.setLang === root.dataset.lang));
  });
  const tb = document.querySelector<HTMLButtonElement>("[data-toggle-theme]");
  if (tb) {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    const label = root.dataset.lang === "es" ? (next === "light" ? "Cambiar a modo claro" : "Cambiar a modo oscuro") : `Switch to ${next} mode`;
    tb.setAttribute("aria-label", label);
    tb.title = label;
  }
  const t = root.dataset[root.dataset.lang === "es" ? "titleEs" : "titleEn"];
  if (t) document.title = t;
}

/* Ojos de la gatita */
const catLids = () => document.querySelectorAll<SVGGElement>(".cat-lids");
function catBlink(closed: boolean) {
  catLids().forEach((g) => g.setAttribute("opacity", closed ? "1" : "0"));
}
if (!reduce) {
  const idle = () =>
    setTimeout(() => {
      catBlink(true);
      setTimeout(() => {
        catBlink(false);
        idle();
      }, 140);
    }, 2500 + Math.random() * 4000);
  idle();
}

/* Parpadeo: cierra los párpados, aplica el cambio con los ojos cerrados y los abre */
let busy = false;
function blink(apply: () => void) {
  const main = document.querySelector("main");
  const lids = document.querySelectorAll(".lid");
  if (reduce || !lids.length) {
    apply();
    document.dispatchEvent(new CustomEvent("prefs:change"));
    return;
  }
  if (busy) return;
  busy = true;
  lids.forEach((l) => {
    l.classList.remove("open");
    l.classList.add("close");
  });
  catBlink(true);
  setTimeout(() => {
    apply();
    document.dispatchEvent(new CustomEvent("prefs:change"));
    main?.classList.remove("wake");
    void (main as HTMLElement | null)?.offsetWidth;
    main?.classList.add("wake");
    lids.forEach((l) => {
      l.classList.remove("close");
      l.classList.add("open");
    });
    setTimeout(() => catBlink(false), 160);
    setTimeout(() => (busy = false), 360);
  }, 300);
}

function setLang(lang: Lang) {
  if (lang === root.dataset.lang) return;
  blink(() => {
    root.dataset.lang = lang;
    root.lang = lang;
    save("lang", lang);
    syncButtons();
  });
}

function toggleTheme() {
  const next: Theme = root.dataset.theme === "dark" ? "light" : "dark";
  blink(() => {
    root.dataset.theme = next;
    save("theme", next);
    syncButtons();
  });
}

document.addEventListener("click", (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>("[data-set-lang],[data-toggle-theme],[data-copy]");
  if (!el) return;
  if (el.dataset.setLang) setLang(el.dataset.setLang as Lang);
  else if (el.hasAttribute("data-toggle-theme")) toggleTheme();
  else if (el.dataset.copy) copy(el, el.dataset.copy);
});

/* Copiar email */
function copy(el: HTMLElement, text: string) {
  const note = el.querySelectorAll<HTMLElement>("[data-copy-note]");
  const done = () => {
    note.forEach((n) => (n.dataset.done = "1"));
    setTimeout(() => note.forEach((n) => delete n.dataset.done), 1500);
  };
  navigator.clipboard?.writeText(text).then(done, () => {
    const r = document.createRange();
    r.selectNodeContents(el);
    getSelection()?.removeAllRanges();
    getSelection()?.addRange(r);
  });
}

syncButtons();
