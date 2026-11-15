// Portada: engranajes dorados que giran con el cursor, conectados a un circuito por el que viajan pulsos de luz.
// Cada tren de engranajes engrana de verdad: los vecinos giran en sentido contrario y a velocidad inversa a sus dientes.
import { gearD } from '../lib/engranajes';

type Gear = { x: number; y: number; r: number; n: number; phase: number; k: number; train: number; depth: number; sprite: HTMLCanvasElement; size: number };
type Train = { angle: number; omega: number; idle: number };
type Trace = { pts: [number, number][]; cum: number[]; total: number; gear: number };
type Pulse = { t: Trace; d: number; v: number };
type Kid = [number, number, Kid[]?]; // radio, ángulo, hijos
type Anchor = { fx: number; fy: number; r: number; kids?: Kid[] };

const ANCHORS: Anchor[] = [
  { fx: 0.104, fy: 0.155, r: 92, kids: [[52, -15, [[34, 30]]], [42, -100, [[28, -60]]]] },
  { fx: 0.066, fy: 0.855, r: 118, kids: [[60, 28, [[34, -5], [40, -75]]], [36, 88]] },
  { fx: 0.917, fy: 0.139, r: 100, kids: [[56, 200, [[32, 150]]], [44, -85, [[26, -130]]]] },
  { fx: 0.9375, fy: 0.878, r: 112, kids: [[62, 160, [[36, 185], [30, 250]]], [40, 95]] },
  { fx: 0.033, fy: 0.505, r: 46, kids: [[26, 15]] },
  { fx: 0.969, fy: 0.522, r: 42, kids: [[26, 170]] },
  { fx: 0.406, fy: 0.058, r: 34, kids: [[22, -8]] },
  { fx: 0.694, fy: 0.96, r: 36, kids: [[24, 172]] },
];
const DIRS: [number, number][] = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];

function mulberry32(a: number) {
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

export function iniciarHero(hero: HTMLElement, canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const logoGears = ['no', 'ne', 'so', 'se'].map((k) => hero.querySelector<SVGElement>(`#engranaje-${k}`));
  const LOGO_DIR = [1, -1.35, -1, 1.2];

  let W = 0, H = 0, dpr = 1, u = 1;
  let gears: Gear[] = [], trains: Train[] = [], traces: Trace[] = [], pulses: Pulse[] = [];
  let traceLayer: HTMLCanvasElement | null = null;
  let hx = 0, hy = 0, tx = 0, ty = 0, lastMove = -1e9, lastX = 0, lastY = 0, lastT = 0, hasLast = false;
  let logoAngle = 0, lastScroll = scrollY, running = false, visible = true, raf = 0, prev = 0;

  function build() {
    const rect = hero.getBoundingClientRect();
    W = rect.width; H = rect.height; dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    const small = W < 700;
    u = small ? (W / 390) * 0.62 : Math.min(W / 1440, H / 900);
    const rnd = mulberry32(11);
    gears = []; trains = []; pulses = [];

    const teeth = (r0: number) => Math.max(8, Math.round((2 * r0) / 11));
    const sprite = (g: Omit<Gear, 'sprite' | 'size'>) => {
      const rt = g.r + 5 * u, rb = g.r - 6 * u, size = Math.ceil(rt * 2 + 6);
      const c = document.createElement('canvas');
      c.width = Math.round(size * dpr); c.height = Math.round(size * dpr);
      const x = c.getContext('2d')!; x.scale(dpr, dpr);
      const big = g.r > 48 * u, cx = size / 2;
      const grad = x.createLinearGradient(0, 0, size, size);
      grad.addColorStop(0, '#F3DC8B'); grad.addColorStop(0.45, '#D9B647'); grad.addColorStop(1, '#B38D2A');
      x.fillStyle = grad; x.strokeStyle = grad;
      const rin = big ? rb - Math.max(7 * u, g.r * 0.15) : g.r * 0.36;
      const body = new Path2D(gearD(cx, cx, rt, rb, g.n, g.phase, rin));
      x.fill(body, 'evenodd');
      if (big) {
        const hub = g.r * 0.22;
        x.lineWidth = g.r * 0.09;
        for (let i = 0; i < 6; i++) {
          const a = ((g.phase + i * 60) * Math.PI) / 180;
          x.beginPath(); x.moveTo(cx + (hub - 2) * Math.cos(a), cx - (hub - 2) * Math.sin(a)); x.lineTo(cx + (rin + 2) * Math.cos(a), cx - (rin + 2) * Math.sin(a)); x.stroke();
        }
        x.fill(new Path2D(gearD(cx, cx, hub, hub, 8, 0, hub * 0.42)), 'evenodd');
      }
      x.strokeStyle = 'rgba(255,242,184,.35)'; x.lineWidth = 1; x.stroke(body);
      return { sprite: c, size };
    };
    const add = (x: number, y: number, r0: number, phase: number, k: number, train: number): Gear => {
      const base = { x, y, r: r0 * u, n: teeth(r0), phase, k, train, depth: 0.6 + (1 - Math.min(r0, 120) / 120) * 0.7 };
      const g = { ...base, ...sprite(base) };
      gears.push(g); return g;
    };
    const mesh = (p: Gear, r0: number, ang: number, kids: Kid[] | undefined, train: number) => {
      const r = r0 * u, a = (ang * Math.PI) / 180, dist = p.r + r + 1.5 * u;
      const n = teeth(r0), s1 = 360 / p.n, s2 = 360 / n;
      const d1 = ((((ang - p.phase) % s1) + s1) % s1) / s1;
      const g = add(p.x + dist * Math.cos(a), p.y - dist * Math.sin(a), r0, ang + 180 - (d1 + 0.5) * s2, (-p.k * p.n) / n, train);
      kids?.forEach(([kr, ka, kk]) => mesh(g, kr, ka, kk, train));
    };
    const anchors = small ? ANCHORS.slice(0, 6) : ANCHORS;
    anchors.forEach((a, i) => {
      trains.push({ angle: 0, omega: 0, idle: (i % 2 ? 1 : -1) * 0.05 });
      const root = add(a.fx * W, a.fy * H, a.r, rnd() * 30, 1, i);
      a.kids?.forEach(([kr, ka, kk]) => mesh(root, kr, ka, kk, i));
    });

    // Trazas del circuito: tramos rectos con giros de 45° que terminan en nodos; muchas nacen en el borde de un engranaje.
    const grid = 40 * u, count = small ? 26 : 46;
    const zx = small ? 0.385 : 0.24, zy = small ? 0.32 : 0.372;
    const inZone = (x: number, y: number) => ((x - W / 2) / (zx * W)) ** 2 + ((y - H / 2) / (zy * H)) ** 2 < 1;
    const inGear = (x: number, y: number, ign: number) => gears.some((g, i) => i !== ign && Math.hypot(x - g.x, y - g.y) < g.r + 12 * u);
    traces = [];
    let tries = 0;
    while (traces.length < count && tries++ < 6000) {
      let x: number, y: number, di = Math.floor(rnd() * 8), ign = -1;
      if (traces.length % 2 === 0) {
        ign = Math.floor(rnd() * gears.length); const g = gears[ign], d = DIRS[di], l = Math.hypot(...d);
        x = g.x + (d[0] / l) * (g.r + 8 * u); y = g.y + (d[1] / l) * (g.r + 8 * u);
      } else { x = Math.round((rnd() * W) / grid) * grid; y = Math.round((rnd() * H) / grid) * grid; }
      if (inZone(x, y) || inGear(x, y, ign)) continue;
      const pts: [number, number][] = [[x, y]]; let ok = true;
      const segs = 2 + Math.floor(rnd() * 3);
      for (let s = 0; s < segs && ok; s++) {
        const len = (2 + Math.floor(rnd() * 4)) * grid, d = DIRS[di], l = Math.hypot(...d);
        const nx = x + (d[0] / l) * len, ny = y + (d[1] / l) * len;
        for (let t = 0; t <= 1; t += 0.1) {
          const px = x + (nx - x) * t, py = y + (ny - y) * t;
          if (inZone(px, py) || inGear(px, py, ign) || px < -10 || px > W + 10 || py < -10 || py > H + 10) ok = false;
        }
        if (ok) { x = nx; y = ny; pts.push([x, y]); di = (di + (rnd() < 0.5 ? 1 : 7)) % 8; }
      }
      if (pts.length < 3) continue;
      const cum = [0];
      for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
      traces.push({ pts, cum, total: cum[cum.length - 1], gear: ign });
    }

    // Capa fija del circuito
    traceLayer = document.createElement('canvas');
    traceLayer.width = canvas.width; traceLayer.height = canvas.height;
    const t = traceLayer.getContext('2d')!; t.scale(dpr, dpr);
    t.lineJoin = 'round'; t.lineCap = 'round';
    traces.forEach((tr, i) => {
      t.strokeStyle = 'rgba(212,175,55,.42)'; t.lineWidth = Math.max(1.1, 1.5 * u);
      t.beginPath(); tr.pts.forEach(([px, py], j) => (j ? t.lineTo(px, py) : t.moveTo(px, py))); t.stroke();
      const e = tr.pts[tr.pts.length - 1], nr = Math.max(3, 4.6 * u);
      if (i % 2) { t.fillStyle = 'rgba(212,175,55,.8)'; t.beginPath(); t.arc(e[0], e[1], nr, 0, 6.2832); t.fill(); }
      else { t.fillStyle = '#0F1B33'; t.beginPath(); t.arc(e[0], e[1], nr, 0, 6.2832); t.fill(); t.stroke(); }
    });

    hx = tx = W * 0.23; hy = ty = H * 0.66;
  }

  function pointAt(tr: Trace, d: number): [number, number] {
    let i = 1;
    while (i < tr.cum.length - 1 && tr.cum[i] < d) i++;
    const f = (d - tr.cum[i - 1]) / (tr.cum[i] - tr.cum[i - 1] || 1);
    return [tr.pts[i - 1][0] + (tr.pts[i][0] - tr.pts[i - 1][0]) * f, tr.pts[i - 1][1] + (tr.pts[i][1] - tr.pts[i - 1][1]) * f];
  }

  function frame(dt: number, now: number) {
    // Física: cada tren frena hacia su giro lento de reposo.
    for (const t of trains) {
      t.omega += (t.idle - t.omega) * (1 - Math.exp(-dt * 1.2));
      t.angle += t.omega * dt;
    }
    // Pulsos de luz: nacen donde un engranaje gira rápido y viajan por la traza hasta su nodo.
    for (const tr of traces) {
      const act = tr.gear >= 0 ? Math.min(1, Math.abs(trains[gears[tr.gear].train].omega) / 5) : 0;
      if (pulses.length < 36 && Math.random() < dt * (0.04 + act * 5)) pulses.push({ t: tr, d: 0, v: (150 + Math.random() * 120) * Math.max(u, 0.6) });
    }
    pulses = pulses.filter((p) => ((p.d += p.v * dt), p.d < p.t.total + 30));
    const avg = trains.reduce((s, t) => s + Math.abs(t.omega), 0) / (trains.length || 1);
    logoAngle += (avg + 0.06) * dt;
    logoGears.forEach((el, i) => el && (el.style.transform = `rotate(${(logoAngle * LOGO_DIR[i] * 180) / Math.PI}deg)`));

    // Halo que sigue al cursor (vuelve a su sitio si el cursor lleva rato quieto)
    if (now - lastMove > 3000) { tx = W * 0.23; ty = H * 0.66; }
    hx += (tx - hx) * (1 - Math.exp(-dt * 7)); hy += (ty - hy) * (1 - Math.exp(-dt * 7));
    draw();
  }

  function draw() {
    if (!ctx || !traceLayer) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const px = ((hx - W / 2) / W) * -16, py = ((hy - H / 2) / H) * -10;
    ctx.drawImage(traceLayer, px * 0.6, py * 0.6, W, H);
    const reach = 380 * Math.max(u, 0.7);
    for (const g of gears) {
      const near = Math.max(0, 1 - Math.hypot(g.x - hx, g.y - hy) / reach);
      ctx.save();
      ctx.globalAlpha = 0.4 + 0.55 * near;
      ctx.translate(g.x + px * g.depth, g.y + py * g.depth);
      ctx.rotate(-trains[g.train].angle * g.k);
      ctx.drawImage(g.sprite, -g.size / 2, -g.size / 2, g.size, g.size);
      ctx.restore();
    }
    ctx.globalCompositeOperation = 'lighter';
    const R = 340 * Math.max(u, 0.7), halo = ctx.createRadialGradient(hx, hy, 0, hx, hy, R);
    halo.addColorStop(0, 'rgba(243,220,139,.26)'); halo.addColorStop(0.5, 'rgba(212,175,55,.09)'); halo.addColorStop(1, 'rgba(212,175,55,0)');
    ctx.fillStyle = halo; ctx.fillRect(hx - R, hy - R, R * 2, R * 2);
    ctx.globalCompositeOperation = 'source-over';
    if (pulses.length) {
      ctx.save();
      ctx.strokeStyle = '#FFF2B8'; ctx.lineWidth = Math.max(2, 2.6 * u); ctx.lineCap = 'round';
      ctx.shadowColor = 'rgba(243,220,139,.9)'; ctx.shadowBlur = 8;
      ctx.translate(px * 0.6, py * 0.6);
      for (const p of pulses) {
        const a = Math.max(0, p.d - 26 * u), b = Math.min(p.t.total, p.d);
        if (b <= a) continue;
        ctx.beginPath();
        const s = pointAt(p.t, a); ctx.moveTo(...s);
        for (let i = 1; i < p.t.cum.length - 1; i++) if (p.t.cum[i] > a && p.t.cum[i] < b) ctx.lineTo(...p.t.pts[i]);
        ctx.lineTo(...pointAt(p.t, b)); ctx.stroke();
      }
      ctx.restore();
    }
  }

  // ---- Entrada: el cursor "arrastra" los engranajes cercanos según su movimiento ----
  function mover(x: number, y: number, t: number) {
    tx = x; ty = y; lastMove = t;
    if (hasLast) {
      const dt = Math.min(0.1, Math.max(0.008, (t - lastT) / 1000)), vx = (x - lastX) / dt, vy = (y - lastY) / dt;
      const R = 260 * Math.max(u, 0.6);
      gears.forEach((g) => {
        const rx = x - g.x, ry = y - g.y, dist = Math.hypot(rx, ry);
        if (dist > R + g.r) return;
        const falloff = (1 - Math.min(1, Math.max(0, dist - g.r) / R)) ** 2;
        const tang = (rx * vy - ry * vx) / (dist || 1);
        const tr = trains[g.train];
        tr.omega = Math.max(-5, Math.min(5, tr.omega + ((-tang / Math.max(dist, g.r)) * falloff * 0.04) / g.k));
      });
    }
    lastX = x; lastY = y; lastT = t; hasLast = true;
  }
  const local = (cx: number, cy: number): [number, number] => { const r = hero.getBoundingClientRect(); return [cx - r.left, cy - r.top]; };

  function loop(t: number) {
    if (!running) return;
    const dt = Math.min(0.05, (t - prev) / 1000 || 0.016); prev = t;
    frame(dt, t);
    raf = requestAnimationFrame(loop);
  }
  function start() { if (reduce || running || !visible || document.hidden) return; running = true; prev = performance.now(); raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  build();
  if (reduce) { draw(); }
  else {
    hero.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' || e.pointerType === 'pen') mover(...local(e.clientX, e.clientY), e.timeStamp); }, { passive: true });
    hero.addEventListener('pointerleave', () => { hasLast = false; });
    hero.addEventListener('touchmove', (e) => { const t = e.touches[0]; if (t) mover(...local(t.clientX, t.clientY), e.timeStamp); }, { passive: true });
    hero.addEventListener('touchend', () => { hasLast = false; }, { passive: true });
    addEventListener('scroll', () => {
      const d = scrollY - lastScroll; lastScroll = scrollY;
      if (!visible) return;
      trains.forEach((t, i) => (t.omega = Math.max(-5, Math.min(5, t.omega + d * 0.006 * (i % 2 ? 1 : -1)))));
    }, { passive: true });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); }).observe(hero);
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    start();
  }
  let to = 0;
  new ResizeObserver(() => { clearTimeout(to); to = window.setTimeout(() => { build(); if (reduce || !running) draw(); }, 150); }).observe(hero);
}
