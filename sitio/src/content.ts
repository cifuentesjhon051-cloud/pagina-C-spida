import { waHref } from './config';

// Precio de la auditoría (se descuenta completo del proyecto si el cliente contrata). Cámbialo solo aquí.
export const precioAuditoria = '$100.000';

// ---- El problema ----
export const problema = {
  sobre: 'El problema',
  titulo: '¿Tu negocio depende de que alguien se acuerde de todo?',
  giro: 'Hay otra forma de operar: que lo repetitivo se haga solo y tu equipo se dedique a vender y a crecer.',
};

export const tarjetas = [
  { icono: 'doc', titulo: '¿Tus datos viven en mil archivos?', cuerpo: 'Reunimos tu información en un solo sistema, siempre al día, para que sepas cómo va tu negocio sin tener que preguntarle a nadie.' },
  { icono: 'engranaje', titulo: '¿Tu equipo copia y pega todo el día?', cuerpo: 'Conectamos tus herramientas para que la información pase sola de una a otra. Menos errores y horas devueltas a tu equipo.' },
  { icono: 'chat', titulo: '¿Tus clientes esperan horas una respuesta?', cuerpo: 'Asistentes con inteligencia artificial atienden por WhatsApp a cualquier hora y pasan el caso a una persona solo cuando hace falta.' },
  { icono: 'chispa', titulo: '¿Para crecer tendrías que contratar más gente?', cuerpo: 'Automatizamos lo repetitivo para que tu operación crezca sin que el desorden ni los costos crezcan con ella.' },
];

export const hosting = {
  datos: [
    { icono: 'reloj', titulo: 'Respaldo automático', texto: 'De toda tu información' },
    { icono: 'pin', titulo: 'Tus datos, ubicados', texto: 'Te decimos dónde viven' },
    { icono: 'nube', titulo: 'Restauración probada', texto: 'Comprobamos que las copias sirven' },
  ],
};

// ---- Servicios: tres pilares explicados como beneficios ----
export const pilares = {
  sobre: 'Cómo te ayudamos',
  titulo: 'Tres formas de recuperar tu tiempo',
  texto: 'Elige por dónde empezar. Todo se cotiza con precio cerrado, por escrito, después de la auditoría.',
};

export const caminos = [
  {
    icono: 'engranaje', titulo: 'Un sistema hecho a tu medida',
    texto: 'Diseñamos el punto de venta, el inventario o el control que tu negocio realmente necesita, no uno genérico al que tengas que adaptarte.',
    resultado: 'Menos errores, información siempre al día y decisiones con datos reales, no con corazonadas.',
    boton: 'Cuéntanos qué necesitas', href: waHref('Hola, necesito un sistema hecho a la medida para mi negocio.'), estilo: 'oro',
  },
  {
    icono: 'diana', titulo: 'Tus herramientas hablando entre sí',
    texto: 'Conectamos tu WhatsApp, tu CRM, tu facturación y tus hojas de cálculo para que la información pase sola de una a otra, sin que nadie la copie a mano.',
    resultado: 'Horas recuperadas cada semana y ningún dato perdido por el camino.',
    boton: 'Cuéntanos tu proceso', href: waHref('Hola, quiero conectar mis herramientas y automatizar un proceso.'), estilo: 'linea',
  },
  {
    icono: 'chispa', titulo: 'Inteligencia artificial que trabaja por ti',
    texto: 'Asistentes que responden a tus clientes a cualquier hora, clasifican solicitudes y preparan reportes. Cuando haga falta, con modelos que corren en tu propia infraestructura para que tu información no salga de tu control.',
    resultado: 'Respuesta inmediata a tus clientes y un equipo dedicado a lo que de verdad aporta.',
    boton: 'Cuéntanos cómo atiendes hoy', href: waHref('Hola, quiero un asistente con inteligencia artificial para atender a mis clientes.'), estilo: 'linea',
  },
];

export const listos = {
  texto: 'Próximamente: sistemas ya construidos para que empieces rápido, sin esperar un desarrollo.',
  boton: 'Avísame cuando estén',
  interes: 'Quiero que me avisen cuando estén listos los sistemas.',
};

// ---- Cómo trabajamos ----
export const pasos = [
  { titulo: 'Reunión inicial, sin costo', texto: 'Nos cuentas cómo trabajas y qué te frena. En unos minutos sabrás si podemos ayudarte.' },
  { titulo: 'Auditoría', texto: `Revisamos tu operación a fondo: qué funciona, qué falla y qué se puede mejorar. Si ya sabes qué falla, lo investigamos hasta la raíz. Cuesta ${precioAuditoria} y se descuenta completa si contratas.` },
  { titulo: 'Construcción', texto: 'Entregas parciales que puedes probar mientras avanzamos.' },
  { titulo: 'Acompañamiento', texto: 'Capacitación, soporte, hosting y respaldos.' },
];

// ---- Casos de uso ----
// Todavía no hay cifras medidas. Son ejemplos de lo que se puede automatizar, no resultados de clientes.
// Cuando existan casos reales con números, reemplaza estas tarjetas y cambia la etiqueta.
export const casos = {
  sobre: 'Casos de uso',
  titulo: 'Lo que cambia cuando tu operación se automatiza',
  etiqueta: 'Ejemplo ilustrativo',
  nota: 'Estamos documentando nuestros primeros casos con cifras reales. Los publicaremos aquí.',
  lista: [
    { sector: 'Comercio y punto de venta', antes: 'Cuadras caja e inventario a mano al cierre del día, con diferencias que nadie sabe explicar.', despues: 'El cierre se hace solo: caja, inventario y ventas del día en un reporte listo para revisar.' },
    { sector: 'Atención por WhatsApp', antes: 'Clientes escribiendo a toda hora y mensajes que se quedan sin respuesta hasta el día siguiente.', despues: 'Un asistente responde al instante, toma el pedido o la reserva y avisa a una persona solo cuando hace falta.' },
    { sector: 'Facturación y administración', antes: 'Facturas digitadas una por una, con errores que se descubren tarde.', despues: 'La información pasa sola de la venta a la factura y al reporte, sin copiar nada.' },
  ],
};

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
  { q: '¿Cuánto cuesta y de qué depende el precio?', a: `La primera reunión no tiene costo. La auditoría cuesta ${precioAuditoria} y se descuenta completa del proyecto si decides contratar. Los proyectos se cotizan con precio cerrado, por escrito, después de la auditoría: así sabes cuánto pagarás antes de empezar.` },
  { q: '¿Qué incluye la auditoría?', a: 'Es el trabajo completo de entender tu operación: revisamos contigo cómo trabajas hoy, qué funciona, qué falla y qué se puede mejorar. Si ya sabes qué hay que arreglar, lo investigamos a fondo hasta dar con la causa. Al final recibes un informe con prioridades y una propuesta con presupuesto cerrado.' },
  { q: '¿Cuánto tarda un proyecto?', a: 'Depende de su tamaño. Después de la auditoría te entregamos un cronograma por escrito, con entregas parciales para que pruebes lo construido mientras avanzamos.' },
  { q: '¿Necesito saber de tecnología?', a: 'No. Nos explicas cómo trabaja tu negocio con tus palabras y nosotros nos encargamos de lo técnico. También te capacitamos para que tú y tu equipo usen el sistema con confianza.' },
  { q: 'Ya uso Excel u otro sistema, ¿hay que empezar de cero?', a: 'No. Partimos de lo que ya tienes: podemos importar tus datos y conectar las herramientas que uses, para que no repitas trabajo.' },
  { q: '¿De quién es el sistema y de quién son los datos?', a: 'Tuyos. Lo que construimos para ti y la información de tu negocio te pertenecen.' },
  { q: '¿Dónde se guarda mi información y cada cuánto se respalda?', a: 'Los sistemas que hemos construido hasta ahora funcionan en tu propio equipo o red local y hacen copias de seguridad automáticas. Nuestro servicio de alojamiento está en preparación: cuando esté disponible publicaremos dónde se guardan los datos, cada cuánto se respalda y cómo comprobamos las restauraciones.' },
];

export const enlaces = [
  { href: '#caminos', texto: 'Servicios' },
  { href: '#hosting', texto: 'Hosting' },
  { href: '#proceso', texto: 'Cómo trabajamos' },
  { href: '#casos', texto: 'Casos' },
  { href: '#preguntas', texto: 'Preguntas' },
  { href: '#contacto', texto: 'Contacto' },
];
