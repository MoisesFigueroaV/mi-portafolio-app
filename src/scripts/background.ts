/**
 * Fondo: descenso infinito entre columnas de cubos, inspirado en la pantalla
 * de arranque de la PS2. Canvas 2D, sin dependencias.
 *
 * - La cámara mira hacia abajo y baja sin parar; los cubos se generan con un hash
 *   por columna y nivel, así el pozo nunca termina.
 * - Lucecitas de colores viajan de una columna a otra.
 * - Cada tema (oscuro/claro) tiene su paleta.
 * - Se pausa con la pestaña oculta y queda quieto con prefers-reduced-motion.
 */

type RGB = [number, number, number];
type Palette = {
  base: string;
  fog: RGB;
  glowIn: (pulse: number) => string;
  glowMid: string;
  top: RGB;
  sideA: RGB;
  sideB: RGB;
  alpha: number;
  lights: string[];
  lightMode: GlobalCompositeOperation;
  lightCore: string;
};

const PALETTES: Record<"dark" | "light", Palette> = {
  dark: {
    base: "#040409",
    fog: [5, 6, 16],
    glowIn: (p) => `rgba(70,95,230,${0.5 + p * 0.3})`,
    glowMid: "rgba(30,44,140,.22)",
    top: [214, 220, 240],
    sideA: [150, 158, 190],
    sideB: [118, 126, 165],
    alpha: 0.85,
    lights: ["110,255,140", "255,95,210", "120,215,255", "200,210,255"],
    lightMode: "lighter",
    lightCore: "255,255,255",
  },
  light: {
    base: "#eeeef4",
    fog: [236, 236, 243],
    glowIn: (p) => `rgba(140,155,255,${0.42 + p * 0.25})`,
    glowMid: "rgba(185,192,250,.22)",
    top: [255, 255, 255],
    sideA: [196, 200, 224],
    sideB: [168, 174, 208],
    alpha: 0.95,
    lights: ["30,170,80", "215,50,160", "40,120,230", "110,90,220"],
    lightMode: "source-over",
    lightCore: "255,255,255",
  },
};

type Column = { x: number; z: number; s: number; seed: number; run: number; den: number };
type Light = {
  active: boolean;
  next: number;
  trail: [number, number, number][];
  a?: Column;
  b?: Column;
  y0?: number;
  y1?: number;
  t0?: number;
  dur?: number;
  col?: number;
};

export function startBackground(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const cx = ctx;

  // Columnas con semilla fija: el pozo es siempre el mismo
  let seed = 23;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cols: Column[] = [];
  for (let i = 0; i < 46; i++) {
    const a = rnd() * Math.PI * 2;
    const r = 2.2 + Math.pow(rnd(), 0.7) * 10;
    cols.push({
      x: Math.cos(a) * r,
      z: Math.sin(a) * r,
      s: 0.26 + rnd() * 0.14,
      seed: rnd() * 1000,
      run: 1 + Math.floor(rnd() * 3),
      den: 0.22 + rnd() * 0.2,
    });
  }
  const hash = (a: number, b: number) => {
    const v = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
    return v - Math.floor(v);
  };

  const lights: Light[] = Array.from({ length: 9 }, () => ({ active: false, next: Math.random() * 3, trail: [] }));
  const spawn = (L: Light, t: number, camY: number) => {
    L.a = cols[Math.floor(Math.random() * cols.length)];
    L.b = cols[Math.floor(Math.random() * cols.length)];
    L.y0 = camY - (3 + Math.random() * 10);
    L.y1 = L.y0 + (Math.random() - 0.5) * 3;
    L.t0 = t;
    L.dur = 1.4 + Math.random() * 2.2;
    L.col = Math.floor(Math.random() * 4);
    L.trail = [];
    L.active = true;
  };

  let W = 0;
  let H = 0;
  const resize = () => {
    const d = Math.min(devicePixelRatio || 1, 1.25);
    W = innerWidth;
    H = innerHeight;
    canvas.width = Math.round(W * d);
    canvas.height = Math.round(H * d);
    cx.setTransform(d, 0, 0, d, 0, 0);
  };
  resize();

  const theme = () => (document.documentElement.dataset.theme === "light" ? PALETTES.light : PALETTES.dark);
  const shade = (base: RGB, fog: number, F: RGB) =>
    `rgb(${Math.round(F[0] + (base[0] - F[0]) * fog)},${Math.round(F[1] + (base[1] - F[1]) * fog)},${Math.round(F[2] + (base[2] - F[2]) * fog)})`;

  let pulse = 0;
  const DEPTH = 34;

  function frame(t: number) {
    const P = theme();
    const camY = -t * 0.55; // la cámara baja sin parar
    const rot = t * 0.012;
    const cr = Math.cos(rot);
    const sr = Math.sin(rot);
    const f = Math.min(W, H) * 0.5;
    const ox = W / 2;
    const oy = H / 2;

    cx.globalCompositeOperation = "source-over";
    cx.globalAlpha = 1;
    cx.fillStyle = P.base;
    cx.fillRect(0, 0, W, H);

    // resplandor al fondo del pozo
    const gr = Math.max(W, H) * 0.32 * (1 + 0.06 * Math.sin(t * 0.6) + pulse * 0.25);
    const g = cx.createRadialGradient(ox, oy, 0, ox, oy, gr);
    g.addColorStop(0, P.glowIn(pulse));
    g.addColorStop(0.3, P.glowMid);
    g.addColorStop(1, "rgba(0,0,0,0)");
    cx.fillStyle = g;
    cx.fillRect(0, 0, W, H);

    // cubos, de lejos a cerca
    const lv0 = Math.floor(camY - DEPTH);
    const lv1 = Math.floor(camY - 0.2);
    for (let lv = lv0; lv <= lv1; lv++) {
      const Dt = camY - (lv + 0.82);
      const Db = camY - lv;
      if (Db <= 0.05) continue;
      const dt = Math.max(Dt, 0.05);
      const fog = Math.max(0, Math.min(1, Math.exp(-Dt * 0.13) * 1.1));
      if (fog < 0.02) continue;
      const near = Math.max(0, Math.min(1, (dt - 0.4) / 3.2));
      if (near <= 0) continue;
      for (const c of cols) {
        if (hash(c.seed, Math.floor(lv / c.run)) > c.den) continue;
        const x = c.x * cr - c.z * sr;
        const z = c.x * sr + c.z * cr;
        const s = c.s;
        const pr = (px: number, pz: number, D: number): [number, number] => [ox + (f * px) / D, oy + (f * pz) / D];
        const tq = [pr(x - s, z - s, dt), pr(x + s, z - s, dt), pr(x + s, z + s, dt), pr(x - s, z + s, dt)];
        const bq = [pr(x - s, z - s, Db), pr(x + s, z - s, Db), pr(x + s, z + s, Db), pr(x - s, z + s, Db)];
        cx.globalAlpha = P.alpha * near;
        const sides: [boolean, number, number, RGB][] = [
          [x + s < 0, 1, 2, P.sideA],
          [x - s > 0, 3, 0, P.sideA],
          [z + s < 0, 2, 3, P.sideB],
          [z - s > 0, 0, 1, P.sideB],
        ];
        for (const [vis, i, j, col] of sides) {
          if (!vis) continue;
          cx.fillStyle = shade(col, fog, P.fog);
          cx.beginPath();
          cx.moveTo(tq[i][0], tq[i][1]);
          cx.lineTo(tq[j][0], tq[j][1]);
          cx.lineTo(bq[j][0], bq[j][1]);
          cx.lineTo(bq[i][0], bq[i][1]);
          cx.closePath();
          cx.fill();
        }
        cx.fillStyle = shade(P.top, fog, P.fog);
        cx.beginPath();
        cx.moveTo(tq[0][0], tq[0][1]);
        for (let k = 1; k < 4; k++) cx.lineTo(tq[k][0], tq[k][1]);
        cx.closePath();
        cx.fill();
      }
    }

    // lucecitas
    cx.globalAlpha = 1;
    cx.globalCompositeOperation = P.lightMode;
    cx.lineCap = "round";
    for (const L of lights) {
      if (L.active && L.a && L.b) {
        const k = Math.min(1, (t - L.t0!) / L.dur!);
        const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        const ax = L.a.x * cr - L.a.z * sr;
        const az = L.a.x * sr + L.a.z * cr;
        const bx = L.b.x * cr - L.b.z * sr;
        const bz = L.b.x * sr + L.b.z * cr;
        const x = ax + (bx - ax) * e;
        const z = az + (bz - az) * e;
        const y = L.y0! + (L.y1! - L.y0!) * e + Math.sin(k * Math.PI) * 0.8;
        const D = camY - y;
        if (D > 0.3) {
          L.trail.push([ox + (f * x) / D, oy + (f * z) / D, D]);
          if (L.trail.length > 22) L.trail.shift();
        }
        if (k >= 1) {
          L.active = false;
          L.next = t + 1 + Math.random() * 3;
        }
      } else if (L.trail.length) {
        L.trail.shift();
      } else if (t >= L.next) {
        spawn(L, t, camY);
      }
      const tr = L.trail;
      if (tr.length < 2) continue;
      const col = P.lights[L.col ?? 0];
      const fog = Math.max(0, Math.min(1, Math.exp(-tr[tr.length - 1][2] * 0.05) * 1.4));
      for (let i = 1; i < tr.length; i++) {
        const a = i / tr.length;
        cx.strokeStyle = `rgba(${col},${a * 0.85 * fog})`;
        cx.lineWidth = Math.max(1.5, (a * 5 * 8) / tr[i][2]);
        cx.beginPath();
        cx.moveTo(tr[i - 1][0], tr[i - 1][1]);
        cx.lineTo(tr[i][0], tr[i][1]);
        cx.stroke();
      }
      const h = tr[tr.length - 1];
      const rr = Math.max(12, 150 / h[2]);
      const g2 = cx.createRadialGradient(h[0], h[1], 0, h[0], h[1], rr);
      g2.addColorStop(0, `rgba(${P.lightCore},${0.9 * fog})`);
      g2.addColorStop(0.25, `rgba(${col},${0.6 * fog})`);
      g2.addColorStop(1, `rgba(${col},0)`);
      cx.fillStyle = g2;
      cx.beginPath();
      cx.arc(h[0], h[1], rr, 0, Math.PI * 2);
      cx.fill();
    }
    cx.globalCompositeOperation = "source-over";
  }

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const START = 40; // arranca con el pozo ya poblado
  const t0 = performance.now();
  let still = START;

  addEventListener("resize", () => {
    resize();
    if (reduce) frame(still);
  });
  // Al cambiar idioma o tema, el resplandor late una vez
  document.addEventListener("prefs:change", () => {
    pulse = 1;
    if (reduce) frame(still);
  });

  if (reduce) {
    frame(still);
    return;
  }
  const loop = (now: number) => {
    pulse *= 0.94;
    if (!document.hidden) {
      still = (now - t0) / 1000 + START;
      frame(still);
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
