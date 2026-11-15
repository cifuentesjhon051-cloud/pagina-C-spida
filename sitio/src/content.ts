import { waHref, agendaHref } from './config';

export const tarjetas = [
  { icono: 'lupa', titulo: 'Primero, entender tu empresa', cuerpo: 'Antes de proponerte algo, escuchamos. Analizamos cómo trabaja hoy tu empresa y te entregamos un diagnóstico claro: qué funciona, qué te está frenando y por dónde conviene empezar.' },
  { icono: 'diana', titulo: '¿Ya sabes qué está fallando?', cuerpo: 'Si ya detectaste un problema en tu proceso, lo resolvemos contigo. Buscamos la solución más sencilla y eficiente, no la más cara ni la más complicada.' },
  { icono: 'engranaje', titulo: 'Herramientas hechas a tu medida', cuerpo: 'Diseñamos la tecnología que tu negocio necesita: punto de venta (POS), CRM, ERP, páginas web y más. Se adaptan a tu forma de trabajar, y no al revés.' },
  { icono: 'chispa', titulo: 'Inteligencia artificial que trabaja contigo', cuerpo: 'Conectamos tus herramientas con inteligencia artificial para que lo repetitivo se haga solo: resúmenes de reuniones, reportes, seguimiento a clientes. La IA hace el trabajo pesado; las decisiones siguen siendo tuyas.' },
];

export const hosting = {
  datos: [
    { icono: 'reloj', titulo: 'Respaldo automático', texto: 'De toda tu información' },
    { icono: 'pin', titulo: 'Tus datos, ubicados', texto: 'Te decimos dónde viven' },
    { icono: 'nube', titulo: 'Restauración probada', texto: 'Comprobamos que las copias sirven' },
  ],
};

export const caminos = [
  { estado: 'Disponible', icono: 'engranaje', titulo: 'Sistemas a la medida', texto: 'Cuando tu empresa necesita algo que no existe, lo construimos contigo.', precio: 'Presupuesto cerrado después del diagnóstico', boton: 'Agenda tu diagnóstico', href: agendaHref, estilo: 'oro' },
  { estado: 'Disponible', icono: 'diana', titulo: 'Integración de flujos de trabajo', texto: 'Conectamos las herramientas que ya usas para que la información pase sola de una a otra.', precio: 'Desde $100.000', boton: 'Cuéntanos tu proceso', href: waHref('Hola, quiero contarles mi proceso para ver cómo automatizarlo.'), estilo: 'linea' },
  { estado: 'Próximamente', icono: 'doc', titulo: 'Sistemas listos', texto: 'Estamos preparando sistemas ya construidos para que empieces rápido, sin esperar un desarrollo.', precio: 'Precio fijo, muy pronto', boton: 'Avísame cuando estén', href: '#contacto', interes: 'Quiero que me avisen cuando estén listos los sistemas.', estilo: 'linea' },
];

export const pasos = [
  { titulo: 'Primer contacto', texto: 'Nos cuentas tu caso por WhatsApp, en unos minutos y sin costo.' },
  { titulo: 'Diagnóstico', texto: 'Sesión de trabajo. Su valor se descuenta completo de tu proyecto.' },
  { titulo: 'Construcción', texto: 'Entregas parciales que puedes probar.' },
  { titulo: 'Acompañamiento', texto: 'Capacitación, soporte, hosting y respaldos.' },
];

export const compromisos = [
  { icono: 'llave', titulo: 'Lo que construimos es tuyo', texto: 'El sistema y tus datos te pertenecen.' },
  { icono: 'doc', titulo: 'Precio cerrado por escrito', texto: 'Sabes cuánto vas a pagar antes de empezar.' },
  { icono: 'libre', titulo: 'Sin contratos forzosos', texto: 'Te quedas porque te sirve, no por obligación.' },
  { icono: 'nube', titulo: 'Tu información respaldada', texto: 'Copias fuera de sitio y restauración comprobada.' },
  { icono: 'persona', titulo: 'Siempre te atiende una persona', texto: 'Hablas con quien conoce tu proyecto.' },
  { icono: 'sello', titulo: 'Garantía después de la entrega', texto: 'Si algo falla, lo corregimos.' },
];

// Descripciones tomadas de los README de los dos sistemas construidos (sin nombres de clientes).
export const trabajos = [
  {
    icono: 'engranaje',
    titulo: 'POS para un resort',
    etiqueta: 'Construido a la medida',
    puntos: ['Restaurante y bar: mesas, pedidos y comandas a cocina', 'Hotel: reservas, check-in y cargo a la habitación', 'Inventario con recetas y reportes con exportación a Excel y PDF', 'Reservas en línea con pago, y preparado para facturación electrónica DIAN'],
  },
  {
    icono: 'doc',
    titulo: 'POS para un supermercado',
    etiqueta: 'Construido a la medida',
    puntos: ['Caja con lector de código de barras y turnos con arqueo', 'Inventario con kardex, costo promedio y mermas', '22 informes con exportación a Excel y PDF', 'Funciona sin internet y hace copias de seguridad automáticas'],
  },
];

export const faqs = [
  { q: '¿Cuánto cuesta y de qué depende el precio?', a: 'Depende del alcance. La integración de flujos de trabajo parte desde $100.000. Los sistemas a la medida se cotizan con precio cerrado, por escrito, después del diagnóstico. El diagnóstico tiene un valor que se descuenta completo del proyecto si decides contratar.' },
  { q: '¿Cuánto tarda un proyecto?', a: 'Depende de su tamaño. Después del diagnóstico te entregamos un cronograma por escrito, con entregas parciales para que pruebes lo construido mientras avanzamos.' },
  { q: '¿Necesito saber de tecnología?', a: 'No. Nos explicas cómo trabaja tu negocio con tus palabras y nosotros nos encargamos de lo técnico. También te capacitamos para que tú y tu equipo usen el sistema con confianza.' },
  { q: 'Ya uso Excel u otro sistema, ¿hay que empezar de cero?', a: 'No. Partimos de lo que ya tienes: podemos importar tus datos y conectar las herramientas que uses, para que no repitas trabajo.' },
  { q: '¿De quién es el sistema y de quién son los datos?', a: 'Tuyos. Lo que construimos para ti y la información de tu negocio te pertenecen.' },
  { q: '¿Dónde se guarda mi información y cada cuánto se respalda?', a: 'Los sistemas que hemos construido hasta ahora funcionan en tu propio equipo o red local y hacen copias de seguridad automáticas. Nuestro servicio de alojamiento está en preparación: cuando esté disponible publicaremos dónde se guardan los datos, cada cuánto se respalda y cómo comprobamos las restauraciones.' },
];

export const enlaces = [
  { href: '#servicios', texto: 'Servicios' },
  { href: '#hosting', texto: 'Hosting' },
  { href: '#proceso', texto: 'Cómo trabajamos' },
  { href: '#preguntas', texto: 'Preguntas' },
  { href: '#contacto', texto: 'Contacto' },
];
