// Eventos de analítica (Umami). No se envía ningún dato personal: solo qué sección se vio, qué botón se tocó, etc.
// Si el sitio no tiene el script de Umami (sin PUBLIC_UMAMI_ID), este archivo no hace nada.
type Datos = Record<string, string | number>;
type Umami = { track: (nombre: string, datos?: Datos) => void };

const activo = !!document.querySelector('script[data-website-id]');
const cola: [string, Datos | undefined][] = [];
const umami = () => (window as unknown as { umami?: Umami }).umami;

function vaciar() { const u = umami(); while (u && cola.length) { const [n, d] = cola.shift()!; u.track(n, d); } }
export function track(nombre: string, datos?: Datos) {
  if (!activo) return;
  cola.push([nombre, datos]);
  vaciar();
}

if (activo) {
  // El script de Umami carga con "defer": si un evento llega antes, espera en cola unos segundos.
  let vueltas = 0;
  const espera = setInterval(() => { vaciar(); if (++vueltas > 40) { clearInterval(espera); cola.length = 0; } }, 250);

  const seccionDe = (el: Element) =>
    el.closest('section[id]')?.id ?? (el.closest('[data-cabecera]') ? 'cabecera' : el.closest('footer') ? 'pie' : el.classList.contains('wa-flot') ? 'flotante' : 'otro');

  // 1. Hasta dónde llegan: cada sección que entra en pantalla, una sola vez
  const vistas = new Set<string>();
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting && !vistas.has(e.target.id)) { vistas.add(e.target.id); track('vista_seccion', { seccion: e.target.id }); }
  }), { threshold: 0.35 });
  document.querySelectorAll('main section[id]').forEach((s) => io.observe(s));

  // 2. Profundidad de scroll
  const hitos = [25, 50, 75, 90]; let siguiente = 0;
  addEventListener('scroll', () => {
    const pct = ((scrollY + innerHeight) / document.documentElement.scrollHeight) * 100;
    while (siguiente < hitos.length && pct >= hitos[siguiente]) track('scroll', { profundidad: hitos[siguiente++] });
  }, { passive: true });

  // 3. Clics: WhatsApp, botones y dónde estaban
  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLElement>('a, button');
    if (!a) return;
    const href = a.getAttribute('href') ?? '';
    if (href.includes('wa.me')) track('click_whatsapp', { seccion: seccionDe(a) });
    else if (a.classList.contains('btn') && a.getAttribute('type') !== 'submit') track('click_boton', { boton: (a.textContent ?? '').trim().slice(0, 40), seccion: seccionDe(a) });
    else if (href.startsWith('#') && a.closest('nav')) track('click_menu', { destino: href.slice(1) });
  });

  // 4. Preguntas frecuentes abiertas
  document.addEventListener('toggle', (e) => {
    const d = e.target as HTMLDetailsElement;
    if (d.open && d.classList.contains('faq__item')) track('faq_abierta', { pregunta: (d.querySelector('summary')?.textContent ?? '').trim().slice(0, 60) });
  }, true);

  // 5. Quien empieza a llenar el formulario
  document.querySelector('#formulario')?.addEventListener('focusin', () => track('formulario_iniciado'), { once: true });
}
