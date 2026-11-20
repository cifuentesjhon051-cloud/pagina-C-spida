// Datos de contacto y conexiones. Se llenan con variables de entorno (ver .env.example);
// mientras estén vacías, los botones llevan al formulario de contacto.
const env = import.meta.env;

export const config = {
  nombre: 'Cúspida',
  eslogan: 'Elevación Empresarial',
  ciudad: 'Medellín, Colombia',
  // WhatsApp con indicativo y sin signos, por ejemplo 573001234567
  whatsapp: (env.PUBLIC_WHATSAPP ?? '').replace(/\D/g, ''),
  correo: env.PUBLIC_CORREO ?? '',
  // Enlace de la agenda en línea (Calendly, Cal.com u otra)
  agenda: env.PUBLIC_AGENDA_URL ?? '',
  // Formulario → Supabase (tabla `contactos`, ver supabase/contactos.sql)
  supabaseUrl: (env.PUBLIC_SUPABASE_URL ?? '').replace(/\/$/, ''),
  supabaseKey: env.PUBLIC_SUPABASE_ANON_KEY ?? '',
  // Dirección pública del sitio, cuando exista el dominio
  sitio: (env.PUBLIC_SITE_URL ?? '').replace(/\/$/, ''),
  // Analítica sin cookies (Umami). Sin ID, no se carga nada.
  umamiId: env.PUBLIC_UMAMI_ID ?? '',
  umamiSrc: env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js',
  // Google Tag Manager (contenedor "GTM-XXXXXXX"); desde ahí se configura Google Analytics 4. Sin ID, no se carga nada.
  gtmId: /^GTM-[A-Z0-9]+$/.test(env.PUBLIC_GTM_ID ?? '') ? (env.PUBLIC_GTM_ID as string) : '',
  // Para la política de datos (Ley 1581 de 2012)
  responsable: env.PUBLIC_RESPONSABLE ?? 'Cúspida',
  nit: env.PUBLIC_NIT ?? '',
};

export const waHref = (texto: string) =>
  config.whatsapp ? `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(texto)}` : '#contacto';

export const agendaHref = config.agenda || '#contacto';
