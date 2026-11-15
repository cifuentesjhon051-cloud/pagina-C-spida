// Encabezado que aparece al salir de la portada, menú del celular y botones que prellenan el formulario.
const cab = document.querySelector<HTMLElement>('[data-cabecera]');
const hero = document.querySelector<HTMLElement>('[data-hero]');

if (hero) {
  const actualizar = () => document.body.classList.toggle('con-cabecera', hero.getBoundingClientRect().bottom < innerHeight * 0.15);
  addEventListener('scroll', actualizar, { passive: true });
  addEventListener('resize', actualizar);
  actualizar();
}

if (cab) {
  const boton = cab.querySelector<HTMLButtonElement>('.cab__burger');
  const cerrar = () => { cab.removeAttribute('data-abierto'); boton?.setAttribute('aria-expanded', 'false'); boton?.setAttribute('aria-label', 'Abrir menú'); };
  boton?.addEventListener('click', () => {
    const abrir = !cab.hasAttribute('data-abierto');
    cab.toggleAttribute('data-abierto', abrir);
    boton.setAttribute('aria-expanded', String(abrir));
    boton.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
  });
  cab.querySelectorAll('nav a').forEach((a) => a.addEventListener('click', cerrar));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrar(); });
}

document.addEventListener('click', (e) => {
  const el = (e.target as Element).closest<HTMLElement>('[data-interes]');
  const campo = document.querySelector<HTMLTextAreaElement>('#formulario textarea[name="mensaje"]');
  if (el && campo && !campo.value.trim()) campo.value = el.dataset.interes ?? '';
});
