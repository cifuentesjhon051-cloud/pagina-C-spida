// Animaciones ligadas al scroll. Todo el contenido es visible sin JavaScript; aquí solo se añade el movimiento.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ss = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const $$ = <T extends Element = HTMLElement>(sel: string) => gsap.utils.toArray<T>(sel);

// ---- Tarjetas: entran flotando sobre una ola que pierde fuerza hasta quedar centradas ----
function servicios(ancho: boolean) {
  const sec = document.querySelector<HTMLElement>('#servicios');
  const cards = $$('#servicios .tarjeta');
  if (!sec || !cards.length) return () => {};
  const limpiar = () => cards.forEach((c) => { c.style.transform = ''; c.style.opacity = ''; c.style.removeProperty('--r'); c.style.removeProperty('--lift'); });

  // Animación con tiempo propio (no depende de cuánto se baje): cada tarjeta sube con retraso y rebota sobre una ola
  // que viaja de una a otra y se va apagando, hasta quedar quieta. En pantallas angostas las tarjetas van en columna y
  // cada una hace su entrada al llegar a la vista.
  const A = ancho ? 62 : 26, retraso = ancho ? 0.16 : 0, TOTAL = 4.2;
  const salida = (x: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
  const pintar = (c: HTMLElement, i: number, t: number) => {
    const l = t - i * retraso;
    if (l <= 0) { c.style.opacity = '0'; c.style.transform = `translate3d(0, ${innerHeight * 0.3}px, 0)`; return; }
    const e = salida(l / 1.05), a = A * Math.exp(-l / 1.15) * Math.min(1, l / 0.35), fase = l * 4.2 - i * 0.9;
    const s = Math.sin(fase), co = Math.cos(fase), fin = Math.min(1, Math.max(0, (TOTAL - l) / 1.2)); // se aquieta del todo al final
    const y = (1 - e) * innerHeight * 0.3 + a * s * fin, rot = (a / A) * 5 * co * fin * (ancho ? 1 : 0.6);
    c.style.opacity = String(Math.min(1, l / 0.45));
    c.style.transform = `translate3d(0, ${y}px, 0) rotate(${rot}deg)`;
    c.style.setProperty('--lift', String(((s + 1) / 2) * (a / A) * fin));
    c.style.setProperty('--r', String(ss(0.75, 1.55, l)));
  };

  const arrancar = (grupo: HTMLElement[]) => {
    const ini = performance.now();
    const paso = (ahora: number) => {
      const t = (ahora - ini) / 1000;
      grupo.forEach((c, i) => pintar(c, i, t));
      if (t < TOTAL + grupo.length * retraso) raf.push(requestAnimationFrame(paso));
      else grupo.forEach((c) => { c.style.transform = ''; c.style.opacity = ''; c.style.removeProperty('--r'); c.style.removeProperty('--lift'); });
    };
    raf.push(requestAnimationFrame(paso));
  };
  const raf: number[] = [], triggers: ScrollTrigger[] = [];
  cards.forEach((c, i) => pintar(c, i, 0));
  if (ancho) {
    triggers.push(ScrollTrigger.create({ trigger: sec, start: 'top 58%', once: true, onEnter: () => arrancar(cards) }));
  } else {
    cards.forEach((c) => triggers.push(ScrollTrigger.create({ trigger: c, start: 'top 88%', once: true, onEnter: () => arrancar([c]) })));
  }
  return () => { raf.forEach(cancelAnimationFrame); triggers.forEach((t) => t.kill()); limpiar(); };
}

// ---- Torres de servidores: emergen de abajo con tres planos de profundidad ----
function hosting() {
  const sec = document.querySelector('#hosting');
  if (!sec) return;
  const grande = matchMedia('(min-width: 701px)').matches;
  const svg = `#hosting .hosting__svg--${grande ? 'grande' : 'chico'}`;
  const alto = grande ? 620 : 380;
  const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: grande ? 'top 80%' : 'top 40%', end: grande ? 'top 5%' : 'bottom 85%', scrub: 0.8 } });
  tl.fromTo(`${svg} .hosting__sol`, { y: alto * 0.45 }, { y: 0, duration: 1, ease: 'none' }, 0)
    .fromTo(`${svg} .torre--fondo`, { y: alto }, { y: 0, duration: 1, stagger: 0.025, ease: 'power1.out' }, 0)
    .fromTo(`${svg} .torre--medio`, { y: alto }, { y: 0, duration: 1, stagger: 0.025, ease: 'power1.out' }, 0.15)
    .fromTo(`${svg} .torre--frente`, { y: alto }, { y: 0, duration: 1, stagger: 0.03, ease: 'power1.out' }, 0.3);
  if (grande) tl.fromTo('#hosting .hosting__contenido > *', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: 'none' }, 0.75);
}

// ---- Cómo trabajamos: la ruta se dibuja hacia la cumbre y los pasos se encienden ----
function proceso() {
  const sec = document.querySelector<HTMLElement>('#proceso');
  const ruta = sec?.querySelector<SVGPathElement>('.ruta');
  if (!sec || !ruta) return;
  const pasos = $$('#proceso .paso'), nodos = $$<SVGElement>('#proceso .nodo');
  gsap.set(ruta, { strokeDasharray: 1, strokeDashoffset: 1 });
  // Cada paso se enciende al llegar al 78 % de la altura de la pantalla; la ruta avanza con el último encendido.
  const actualizar = () => {
    const linea = innerHeight * 0.78, tops = pasos.map((p) => p.getBoundingClientRect().top);
    tops.forEach((t, i) => { const off = t > linea; pasos[i].classList.toggle('pendiente', off); nodos[i]?.classList.toggle('pendiente', off); });
    const n = tops.filter((t) => t <= linea).length;
    const frac = n === 0 ? 0 : n >= pasos.length ? 1 : Math.min(1, (linea - tops[n - 1]) / Math.max(1, tops[n] - tops[n - 1])) * 0 + n / pasos.length + Math.min(1, (linea - tops[n - 1]) / Math.max(1, tops[n] - tops[n - 1])) / pasos.length;
    gsap.to(ruta, { strokeDashoffset: 1 - frac, duration: 0.5, ease: 'power1.out', overwrite: true });
  };
  actualizar();
  ScrollTrigger.create({ trigger: sec, start: 'top bottom', end: 'bottom top', onUpdate: actualizar, onRefresh: actualizar });
}

// ---- Aparición suave de bloques ----
function revelar() {
  $$('[data-revelar]').forEach((el) => {
    gsap.from(el, { opacity: 0, y: 34, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
  });
}

const mm = gsap.matchMedia();
// La condición "siempre" garantiza que la función corra en cualquier pantalla (GSAP solo la ejecuta si alguna condición se cumple).
mm.add({ siempre: '(min-width: 1px)', ancho: '(min-width: 1100px)', quieto: '(prefers-reduced-motion: reduce)' }, (ctx) => {
  const { ancho, quieto } = ctx.conditions as { ancho: boolean; quieto: boolean };
  if (quieto) return;
  const limpiar = servicios(ancho);
  hosting(); proceso(); revelar();
  return () => limpiar();
});

document.fonts?.ready.then(() => ScrollTrigger.refresh());
addEventListener('load', () => ScrollTrigger.refresh());
