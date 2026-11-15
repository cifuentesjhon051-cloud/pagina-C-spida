// Envío del formulario: a Supabase si está configurado; si no, abre WhatsApp o el correo con el mensaje ya escrito.
const form = document.querySelector<HTMLFormElement>('#formulario');

if (form) {
  const estado = form.querySelector<HTMLElement>('.form__estado')!;
  const boton = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const decir = (txt: string, tipo: 'ok' | 'error' | '' = '') => { estado.textContent = txt; estado.dataset.tipo = tipo; };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { supabaseUrl, supabaseKey, whatsapp, correo } = form.dataset;
    const d = new FormData(form);
    const val = (k: string) => String(d.get(k) ?? '').trim();
    form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));

    const faltan: string[] = [];
    if (!val('nombre')) faltan.push('nombre');
    if (val('contacto').length < 3) faltan.push('contacto');
    if (!d.get('acepto')) faltan.push('acepto');
    if (faltan.length) {
      faltan.forEach((k) => form.querySelector(`[name="${k}"]`)?.setAttribute('aria-invalid', 'true'));
      (form.querySelector(`[name="${faltan[0]}"]`) as HTMLElement)?.focus();
      return decir(faltan.includes('acepto') && faltan.length === 1 ? 'Para continuar, autoriza el tratamiento de tus datos.' : 'Revisa los campos marcados: nombre y un WhatsApp o correo.', 'error');
    }
    if (val('web')) return decir('Gracias, recibimos tu mensaje.', 'ok'); // trampa para robots

    const datos = { nombre: val('nombre'), empresa: val('empresa') || null, contacto: val('contacto'), mensaje: val('mensaje') || null, acepto_datos: true, origen: 'web' };
    const texto = `Hola, soy ${datos.nombre}${datos.empresa ? ` de ${datos.empresa}` : ''}. ${datos.mensaje ?? ''}\nMi contacto: ${datos.contacto}`.trim();

    boton.disabled = true; decir('Enviando…');
    try {
      if (supabaseUrl && supabaseKey) {
        const r = await fetch(`${supabaseUrl}/rest/v1/contactos`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, Prefer: 'return=minimal' },
          body: JSON.stringify(datos),
        });
        if (!r.ok) throw new Error(String(r.status));
        form.reset();
        decir('¡Gracias! Recibimos tu mensaje y te escribiremos pronto.', 'ok');
      } else if (whatsapp) {
        open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
        decir('Abrimos WhatsApp con tu mensaje listo para enviar.', 'ok');
      } else if (correo) {
        location.href = `mailto:${correo}?subject=${encodeURIComponent('Contacto desde la web')}&body=${encodeURIComponent(texto)}`;
        decir('Abrimos tu correo con el mensaje listo para enviar.', 'ok');
      } else {
        decir('El formulario aún no está conectado. Por favor, vuelve a intentarlo más tarde.', 'error');
      }
    } catch {
      decir('No pudimos enviar tu mensaje. Inténtalo de nuevo en unos minutos.', 'error');
    } finally { boton.disabled = false; }
  });
}
