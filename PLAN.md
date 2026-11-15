# Plan de la página web · Cúspida

**Estado:** en planeación. No se escribe código hasta que lo indiques.
**Última actualización:** 14 de noviembre de 2026

---

## 1. Qué debe lograr la página

- Que quien llegue sienta de inmediato una marca seria y de primer nivel, y entienda en pocos segundos qué hace Cúspida: consultoría y sistemas para automatizar negocios.
- Que dé un paso concreto: agendar un diagnóstico, escribirnos por WhatsApp o apuntarse a la lista de espera de los sistemas listos.

**Qué vendemos**

| Línea | En qué consiste |
|---|---|
| Sistemas listos | Sistemas ya diseñados que el cliente descarga y usa |
| Integración de flujos de trabajo | Conectar y automatizar las herramientas y procesos que la empresa ya tiene |
| Sistemas a la medida | Personalización según las necesidades de cada empresa |
| Hosting y respaldos | La web y los sistemas del cliente en nuestros servidores, con copia de seguridad |

**Mensaje central (sale de la investigación, punto 6):** todo en un mismo lugar y explicado sin tecnicismos. Pocas de las empresas analizadas reúnen sistemas listos, integración de flujos y hosting con respaldos, y las que ofrecen hosting rara vez lo explican con claridad a una pyme.

**Público:** dueños y gerentes de pequeñas y medianas empresas en Colombia, con foco en Medellín. Precios en pesos colombianos.

**Punto de partida real (noviembre de 2026):** los sistemas listos aún no existen, hay dos sistemas POS hechos a la medida y el servidor propio aún no está montado. La página dice solo lo que ya es cierto y marca lo demás como próximo.

**Los dos POS (leídos de sus README el 15 de noviembre de 2026):**

| | POS Las Heliconias | POS Supermercado |
|---|---|---|
| Negocio | Resort con hotel, restaurante, bar, go-karts, pesca, pasadías, tienda y eventos | Supermercado de un solo computador |
| Funciones | Mesas y comandas, caja y turnos, inventario con recetas, hotel (reservas, check-in, cargo a habitación), go-karts y pesca, eventos, 9 reportes, copias automáticas, reservas en línea con pago Wompi | Caja con lector de código de barras, turnos con arqueo ciego, inventario con kardex y mermas, 22 informes, roles y auditoría, copias automáticas |
| Factura electrónica DIAN | Sí: POS electrónico, factura, notas y contingencia (proveedor Taxxa o simulador) | No: solo tiquete interno; el README la deja como siguiente fase |
| Sin internet | Sí; el documento se envía al volver la conexión | Sí; todo corre en el equipo |
| Tecnología | Node.js, PostgreSQL, interfaz web, app Android; servidor Windows en red local con tablets por WiFi | Python (FastAPI), SQLite, instalador de Windows |
| Estado | Versión 0.8.0, fases 0 a 7 listas; el README no menciona un cliente en producción | Empaquetado de Windows sin probar en Windows real; cajón monedero sin probar con hardware |

**Aclaración del 15 de noviembre de 2026:** los dos POS se hicieron para negocios de tus padres, y un tercero, para una panadería, te lo pidieron por WhatsApp y aún no se construye. Esa panadería sería el primer cliente externo.

Consecuencias para la página:

- **Permiso y texto:** al ser de tus padres, el permiso para mostrarlos es sencillo. Decidido: se presentan como "construidos a la medida", sin decir "en uso".
- **Panadería:** puede ser el primer caso documentado y el primer testimonio externo. Del POS Las Heliconias aprovecha las recetas en gramos y mililitros; del supermercado, la caja con lector de códigos y el inventario. Conviene acordar desde el inicio que se podrá mostrar como caso, y confirmar con su contador si debe emitir documento equivalente electrónico POS.

- **Factura electrónica:** solo puede anunciarse con el POS Las Heliconias. El de supermercado no la tiene todavía.
- **"Sistemas que ya construimos":** el texto dice "construidos a la medida", ya corregido en los dos bocetos.
- **Primer sistema listo:** el POS Las Heliconias es el candidato más completo, pero está hecho para un resort; hay que decidir si se generaliza o se ofrece como caso a la medida. El de supermercado es más genérico y es el más cercano a un producto descargable.
- **Material para mostrar:** el de supermercado tiene capturas en su carpeta `docs\img`; el de Heliconias tiene 16 videos de capacitación y una guía de 46 minutos (sin capturas en el repositorio). Ambos requieren permiso de sus dueños antes de publicarse.

---

## 2. Identidad visual

Todo sale del logo: un escudo coronado por tres cumbres y una llama, con un núcleo de engranajes y circuitos. La idea rectora es que **el fondo del primer panel sea el interior del emblema, ampliado a toda la pantalla**.

### Paleta

Aproximada a partir de la foto del logo; se afina con el archivo original.

| Color | Código | Uso |
|---|---|---|
| Azul profundo | `#0F1B33` | Fondo de la portada, parte alta del cielo del atardecer |
| Azul Cúspida | `#1B2B4F` | Tarjetas, torres de servidores |
| Oro | `#D4AF37` | Logo, engranajes, títulos sobre azul |
| Oro claro | `#F3DC8B` | Brillos y pulsos de luz |
| Oro viejo | `#8A6A1F` | Sombras del metal; único dorado para texto sobre blanco |
| Marfil | `#F8F5EC` | Texto sobre azul |
| Blanco | `#FFFFFF` | Fondo del panel de tarjetas |
| Tinta | `#111318` | Texto sobre blanco |

### Legibilidad (medida con esta paleta)

El mínimo recomendado para texto de lectura es 4.5 : 1.

| Combinación | Contraste | ¿Se lee bien? |
|---|---|---|
| Negro sobre azul Cúspida | 1.5 : 1 | No |
| Marfil sobre azul Cúspida | 12.8 : 1 | Sí |
| Oro sobre azul Cúspida | 6.6 : 1 | Sí |
| Oro sobre blanco | 2.1 : 1 | No |
| Oro viejo sobre blanco | 5.0 : 1 | Sí |

Dos consecuencias:

1. **El texto negro sobre tarjetas azules no se lee.** Probé también un azul medio (negro 3.3 : 1, oro 3.1 : 1) y un azul claro (negro 16.7 : 1, oro 1.7 : 1): no existe un azul donde el negro y el dorado se lean bien a la vez. **Decidido: el cuerpo de texto de las tarjetas va en marfil.**
2. **El dorado brillante va solo sobre azul.** Sobre blanco, los títulos usan tinta, azul Cúspida u oro viejo.

### Tipografías

- **Nombre:** romana con remates, estilo Cinzel (muy parecida a la del logo).
- **Eslogan y textos:** sans geométrica, estilo Montserrat.

Por confirmar si conoces las tipografías exactas del logo.

### Proporción áurea (φ = 1.618)

Para el bloque central de la portada propongo secciones áureas sucesivas:

- El bloque completo (emblema + nombre + eslogan) mide el 61.8 % del alto de la pantalla.
- De ese bloque, el emblema ocupa el 61.8 %.
- Del 38.2 % restante, el nombre ocupa el 61.8 % y el eslogan el 38.2 %.

Así cada parte guarda la proporción áurea con la siguiente: bloque ÷ emblema = φ, emblema ÷ (nombre + eslogan) = φ, nombre ÷ eslogan = φ.

| Alto de pantalla | Bloque | Emblema | Franja del nombre | Franja del eslogan |
|---|---|---|---|---|
| 1080 px | 667 px | 413 px | 158 px | 97 px |
| 900 px | 556 px | 344 px | 131 px | 81 px |
| 768 px | 475 px | 293 px | 112 px | 69 px |

Valores redondeados. "Franja" es el espacio de cada elemento con su aire incluido; las letras se ajustan dentro de su franja. En celulares el bloque se limita por el ancho para que el nombre quepa completo.

La misma proporción se reutiliza en el resto de la página: divisiones 61.8 / 38.2 entre imagen y texto, y escala de espacios.

---

## 3. Mapa de la página

Una sola página que se recorre con el scroll. Los tres primeros paneles son los que pediste. El resto completa el sitio y sale de mi propuesta o de la investigación.

| # | Sección | Fondo | Animación | Origen |
|---|---|---|---|---|
| 1 | Portada | Azul profundo | Engranajes y circuitos que reaccionan al cursor | Tuyo |
| 2 | Así te ayudamos | Blanco | Tarjetas azules en ola | Tuyo |
| 3 | Hosting y respaldos | Atardecer dorado | Torres de servidores que emergen | Tuyo |
| 4 | Tres caminos (qué puedes contratar) | Azul profundo | Sobria | Propuesta e investigación |
| 5 | Cómo trabajamos | De azul a marfil | Ruta que sube a la cumbre | Propuesta |
| 6 | Nuestros compromisos | Marfil | Sobria | Investigación |
| 7 | Preguntas frecuentes | Blanco | — | Investigación |
| 8 | Contacto | Azul profundo | — | Propuesta |
| 9 | Pie de página | Azul profundo | — | Propuesta |

**Elementos fijos:** un botón de contacto pequeño arriba a la derecha desde el inicio; el encabezado completo aparece al salir de la portada; botón flotante de WhatsApp.

**Hilo visual:** la página recorre un día. Portada nocturna, mediodía blanco en las tarjetas, atardecer en los servidores, noche en los tres caminos y amanecer al llegar a la cumbre en "Cómo trabajamos".

**Ritmo:** los tres primeros paneles son el espectáculo. A partir del cuarto las animaciones son discretas, para que el contenido se lea y la página no canse.

---

## 4. Detalle de cada panel

### 4.1 Portada: engranajes y circuitos

**Contenido:** emblema, nombre y eslogan ("Elevación Empresarial") centrados, en dorado, con la proporción áurea del punto 2.

**Fondo, en tres capas:**

1. **Circuito (al fondo):** trazas finas doradas como las de una placa electrónica, con giros a 45° y terminadas en nodos, igual que las del emblema. Incluye chips y figuras geométricas doradas. Muy tenue.
2. **Engranajes (en medio):** entre 20 y 30 engranajes dorados de distintos tamaños, agrupados en trenes que engranan de verdad. Acabado metálico con degradados de oro viejo a oro claro.
3. **Luz (al frente):** un halo dorado suave que sigue al cursor e ilumina lo que tiene cerca.

**Comportamiento:**

- **En reposo:** todo gira muy despacio, para que la escena nunca se vea muerta.
- **Al mover el cursor:** el engranaje más cercano recibe un impulso según la velocidad del movimiento y lo transmite a los que tiene conectados. Cada uno gira en sentido contrario a su vecino, y más rápido o más lento según su tamaño, como en una máquina real. Al dejar de mover, se frenan poco a poco.
- **Conexión con el circuito:** cuando un engranaje acelera, salen pulsos de luz que viajan por las trazas hasta los nodos. La mecánica alimenta al circuito: esa es la imagen de "automatizar".
- **Profundidad:** las capas se desplazan a distinto ritmo con el cursor.
- **El centro queda despejado y algo más oscuro**, para que el logo siempre se lea.
- **Detalle opcional:** que el engranaje interior del propio emblema gire junto con los demás. Requiere el logo en vector por capas.

**Llamado a la acción sin tocar tu composición.** Casi todos los sitios analizados ponen un botón de contacto en la primera pantalla. Para tenerlo sin alterar el bloque central: un botón pequeño arriba a la derecha y, abajo, junto a la flecha que invita a bajar, una línea descriptiva. Aprobado con el boceto.

**En celular (sin cursor):** reaccionan al toque y al scroll; se reduce a unos 10 engranajes.
**Movimiento reducido:** si la persona tiene activada esa preferencia en su equipo, la escena queda fija.
**Paso al siguiente panel:** el borde inferior de la portada tiene forma de ola, que anticipa la ola de tarjetas.

### 4.2 Así te ayudamos: tarjetas en ola

**Contenido:** un encabezado y cuatro tarjetas azul Cúspida con sombra suave, sobre fondo blanco, con títulos en oro y cuerpo en marfil. Los textos están en el punto 5. Propongo cuatro tarjetas y no tres, para que la inteligencia artificial tenga la suya.

**Animación, ligada al scroll.** La sección se queda fija en pantalla mientras avanzas:

1. Las tarjetas entran flotando, repartidas sobre una ola: una sube mientras su vecina baja. Se inclinan levemente siguiendo la pendiente, y su sombra se agranda y se difumina cuando están arriba.
2. Conforme avanzas, la ola pierde fuerza y las tarjetas se van alineando.
3. Quedan centradas en fila y el texto de cada una aparece en cascada.
4. Ya quietas conservan un vaivén mínimo. Al pasar el cursor, la tarjeta se eleva.

**Distribución:** cuatro en fila en escritorio (o 2 × 2 si el texto queda apretado), 2 × 2 en tableta y una columna en celular, donde cada tarjeta llega con un vaivén corto sin fijar la pantalla.

**Detalle:** cada tarjeta lleva un icono dorado de línea fina, dibujado con el mismo trazo que el circuito del emblema.

### 4.3 Hosting y respaldos: servidores al atardecer

**Transición:** el blanco del panel anterior se va tiñendo hasta volverse atardecer.

**Escena:**

- **Cielo:** degradado de azul profundo arriba a ámbar y dorado en el horizonte, con un sol bajo y su resplandor.
- **Torres:** servidores azul Cúspida con detalles dorados (rejillas, luces, bordes iluminados por el sol) que emergen desde abajo, escalonados, en tres planos de profundidad. Las del fondo son más pequeñas y claras; las del frente, grandes y nítidas. El conjunto forma el perfil de una ciudad.
- **Vida:** luces doradas que parpadean y pulsos que suben por las torres.

**Texto:** aparece sobre el cielo cuando las torres llegan a su sitio: título, párrafo, tres datos concretos y un botón.

**Los tres datos concretos.** La investigación muestra que casi nadie da detalles de sus respaldos, y que el sitio que mejor lo hace dice que sus copias van cifradas y que prueba la restauración cada semana. Para que "nunca pierdas nada" sea creíble, el panel debe decir: cada cuánto se respalda, dónde están los servidores y cada cuánto se comprueba que una copia se puede restaurar.

**Condición para publicarlo.** El servidor aún no está montado. El panel se diseña y se construye completo, pero sus tres datos y su botón de contratar solo se publican cuando la infraestructura del Anexo A esté funcionando y se haya probado una restauración. Si la página sale antes, el panel muestra "Muy pronto" y un botón para avisar cuando esté disponible.

**Por qué es distinta a la anterior:** allá el movimiento es horizontal y ondulante; aquí es un crecimiento vertical con profundidad.

### 4.4 Tres caminos

Tus tres líneas, presentadas como caminos y ordenadas por lo que ya está disponible:

| Camino | Estado hoy | Para quién | Precio en la página | Botón |
|---|---|---|---|---|
| Sistemas a la medida | Disponible: ya hay dos POS hechos | Quien necesita algo propio | Presupuesto cerrado después del diagnóstico | Agenda tu diagnóstico |
| Integración de flujos de trabajo | Disponible | Quien ya tiene herramientas y quiere conectarlas | "Desde $…" | Cuéntanos tu proceso |
| Sistemas listos | Próximamente | Quien quiere empezar ya | Precio fijo, cuando existan | Avísame cuando estén |

**Precios:** en pesos colombianos y con precio de partida visible, desde $100.000. Solo 6 de las primeras 15 empresas analizadas muestran precios, y es una de las cosas que distingue a las mejores. Falta asignar esa cifra a un servicio concreto y definir las demás (punto 10).

**Sistemas listos, próximamente:** el camino aparece marcado como próximo, con una lista de espera que pide WhatsApp o correo. Idea: que el primer sistema listo salga de generalizar los dos POS ya hechos.

**Cuando existan:** cada sistema con una demostración o video, precio visible y, si es posible, un periodo de prueba.

**Dos modalidades por sistema (sugerencia de negocio):** "lo descargas y lo instalas tú" o "te lo alojamos nosotros", con hosting y respaldos. Motivo: uno de los vendedores de punto de venta analizados dejó de vender su versión descargable y hoy ofrece solo la versión en la nube, con respaldos incluidos. Ofrecer ambas une esta línea con el panel 3 y abre un ingreso mensual. Se decide cuando existan los sistemas.

**Automatizaciones listas (idea de la investigación):** además de sistemas completos, vender automatizaciones prediseñadas, más pequeñas y baratas, como primer paso para quien todavía no quiere un sistema entero. Una de las empresas analizadas ofrece más de 30.

Idea opcional: nombrar los caminos como tramos de una subida (base, ruta y cumbre).

### 4.5 Cómo trabajamos

Cuatro pasos dibujados como una ruta que sube una montaña mientras se hace scroll, hasta la cumbre del emblema. Cada paso dice qué recibe el cliente y cuánto suele durar:

| Paso | Qué recibe el cliente |
|---|---|
| 1. Primer contacto | Nos cuenta su caso por WhatsApp, en unos minutos y sin costo |
| 2. Diagnóstico | Sesión de trabajo con costo, que se descuenta completo del proyecto si contrata. Recibe el mapa de sus procesos, las prioridades y un presupuesto cerrado |
| 3. Construcción | Entregas parciales que puede probar |
| 4. Acompañamiento | Capacitación, soporte, hosting y respaldos |

**Por qué así:** el diagnóstico se cobra porque tu tiempo vale, y quien contrata no lo paga dos veces. El primer contacto breve y gratuito es recomendación mía: en las empresas latinoamericanas analizadas la conversación inicial sin costo es lo habitual, y unos minutos por WhatsApp filtran a los curiosos sin comprometer tu tiempo.

### 4.6 Nuestros compromisos

Cúspida empieza con dos sistemas POS hechos a la medida: uno para un resort (Las Heliconias) y otro para un supermercado. Con permiso de sus dueños, pueden mostrarse como demostración (capturas o video) y dar los primeros testimonios. Hasta tener un cliente que lo confirme, se presentan como "construidos a la medida", no como "en uso". Mientras llegan más casos, la sección se apoya en compromisos por escrito. Candidatos, tomados de lo que hacen los mejores sitios analizados; **solo se publican los que vayas a cumplir:**

- Lo que construimos es tuyo: el sistema y tus datos.
- Precio cerrado por escrito antes de empezar.
- Sin contratos mensuales obligatorios.
- Tu información respaldada, con restauración comprobada.
- Siempre te atiende una persona.
- Garantía por escrito después de la entrega (una de las empresas analizadas da 90 días).

Lo que no haremos: testimonios inventados, logos de plataformas presentados como si fueran clientes ni cifras sin fuente.

Idea para conseguir los primeros casos: un programa de primeros clientes con precio reducido a cambio de un testimonio y un caso documentado. Cuando existan, esta sección los incorpora.

### 4.7 Preguntas frecuentes

Candidatas:

1. ¿Cuánto cuesta y de qué depende el precio?
2. ¿Cuánto tarda un proyecto?
3. ¿Necesito saber de tecnología?
4. Ya uso Excel u otro sistema, ¿hay que empezar de cero?
5. ¿De quién es el sistema y de quién son los datos?
6. ¿Dónde se guarda mi información y cada cuánto se respalda?
7. ¿Puedo empezar con un sistema listo y personalizarlo después?
8. ¿Qué pasa después de la entrega?

### 4.8 Contacto y 4.9 Pie de página

- **Tres vías de contacto:** WhatsApp, agenda en línea para reservar el diagnóstico y formulario corto (nombre, empresa, WhatsApp o correo, y qué necesitas). Depender solo de un formulario es una de las debilidades que señala la investigación.
- **WhatsApp en primer plano:** en las empresas latinoamericanas analizadas es el canal principal. El botón abre el chat con un mensaje ya escrito, para que el cliente solo tenga que enviarlo.
- **Pie:** logo, enlaces, redes y aviso de privacidad, necesario porque el formulario recoge datos personales.

---

## 5. Textos propuestos

**Criterios de voz:** hablar de tú, frases cortas, sin tecnicismos sin explicar, verbos de acompañamiento ("contigo", "te ayudamos") y solo promesas que se puedan cumplir.

### Portada

- **Línea descriptiva, abajo:** Sistemas y automatización para que tu empresa llegue más alto.
- **Botón:** Agenda tu diagnóstico
- **Nota junto al botón, donde haya espacio:** Si trabajamos juntos, el diagnóstico te sale gratis: su valor se descuenta de tu proyecto.

### Tarjetas

**Encabezado del panel:** Así te ayudamos

| # | Tu idea | Título propuesto | Cuerpo propuesto |
|---|---|---|---|
| 1 | Consultorías especializadas en el análisis y diagnóstico de tu empresa | Primero, entender tu empresa | Antes de proponerte algo, escuchamos. Analizamos cómo trabaja hoy tu empresa y te entregamos un diagnóstico claro: qué funciona, qué te está frenando y por dónde conviene empezar. |
| 2 | Si ya identificaste una falla en tu proceso productivo, te ayudamos a solucionarla de la manera más óptima | ¿Ya sabes qué está fallando? | Si ya detectaste un problema en tu proceso, lo resolvemos contigo. Buscamos la solución más sencilla y eficiente, no la más cara ni la más complicada. |
| 3 | Te diseñamos todo tipo de herramientas tecnológicas: POS, CRM, ERP, páginas web, entre otros | Herramientas hechas a tu medida | Diseñamos la tecnología que tu negocio necesita: punto de venta (POS), CRM, ERP, páginas web y más. Se adaptan a tu forma de trabajar, y no al revés. |
| 4 | Integramos nuestras herramientas con inteligencias artificiales para potenciar tus trabajos, reuniones y todo tipo de automatización | Inteligencia artificial que trabaja contigo | Conectamos tus herramientas con inteligencia artificial para que lo repetitivo se haga solo: resúmenes de reuniones, reportes, seguimiento a clientes. La IA hace el trabajo pesado; las decisiones siguen siendo tuyas. |

Dos notas sobre la tarjeta 4: los ejemplos (resúmenes, reportes, seguimiento) son míos y hay que confirmar que correspondan a lo que ofrecerás; y la última frase recoge una idea de la investigación, la de presentar la IA siempre con una persona al mando.

### Servidores

- **Título:** Tu web y tus sistemas, en un lugar seguro
- **Cuerpo:** Alojamos tu página y tus sistemas completos en nuestros servidores, y respaldamos tu información de forma automática. Pase lo que pase, tu trabajo sigue ahí.
- **Tres datos:** frecuencia de respaldo · ubicación de los servidores · prueba de restauración (con tus datos reales)
- **Cierre:** Para que nunca pierdas nada.

"Nunca pierdas nada" habla de los datos, y se puede sostener con copias fuera de casa y restauraciones probadas. En cambio, conviene no prometer que el servicio estará "siempre" disponible: ningún servidor lo está, y menos uno solo. Mejor una cifra medida de disponibilidad cuando la haya.

### Tres caminos

- **Sistemas listos (próximamente):** Estamos preparando sistemas ya construidos para que empieces rápido, sin esperar un desarrollo. Déjanos tu WhatsApp y te avisamos cuando estén.
- **Integración de flujos de trabajo:** Conectamos las herramientas que ya usas para que la información pase sola de una a otra.
- **Sistemas a la medida:** Cuando tu empresa necesita algo que no existe, lo construimos contigo.

---

## 6. Lo que aprendimos de otras empresas

### Cómo se hizo

Un agente con el modelo Haiku buscó empresas similares y leyó sus sitios, en dos rondas:

- **Primera ronda:** abrió 19 páginas y analizó 15 empresas de Europa, Norteamérica y Oceanía. Otras 6 páginas no se pudieron abrir.
- **Segunda ronda:** 7 empresas más, todas con sitio propio: 4 de Latinoamérica (Argentina, Colombia, Chile y México) y 3 de Asia (Emiratos Árabes e India).

En total, 22 empresas. Una segunda lectura independiente de 6 sitios de la primera ronda confirmó los datos que más pesan en este plan. El resto es la lectura del agente, sin segunda comprobación.

### Empresas analizadas

| Empresa | País | Qué es | Idea aprovechable | 2.ª lectura |
|---|---|---|---|---|
| [SUNZINET](https://www.sunzinet.com/en/n8n-agency) | Alemania | Agencia de automatización para empresas medianas y grandes | IA con supervisión humana; logos de clientes y sellos de calidad | — |
| [STX Next](https://stxnext.com/services/n8n-implementation) | Polonia | Automatización para empresas grandes | Casos con cifras; servicio administrado con respaldos como complemento | — |
| [AutomateNexus](https://zapier.com/partnerdirectory/partner/automatenexus) | EE. UU. | Automatización para pymes | Precio de partida visible; auditoría de pago como puerta de entrada | — |
| [Bista Solutions](https://www.bistasolutions.com/odoo-erp/) | EE. UU. | Implementador de ERP | Mucha prueba social: testimonios escritos y en video | — |
| [Captivea](https://www.captivea.com/odoo-erp/odoo-implementation) | Varios países | Implementador de ERP | Metodología por pasos con duración orientativa | — |
| [Blck Alpaca](https://blckalpaca.at/es/servicios/agencia-n8n) | Austria, sitio en español | Automatización para pymes | Proceso claro: consulta gratuita, presupuesto cerrado, implementación y operación | — |
| [Duotach](https://duotach.com/servicios/automatizacion-ia-barcelona) | Orientada a España | Consultoría de automatización e IA | Consulta gratuita, agenda en línea y WhatsApp | Sí |
| [n8n Lab](https://n8nlab.io/es/n8n-workflow-automation-services) | No verificado | Automatización con IA | Casos con métricas; enlace a una calculadora de retorno | Sí |
| [13Labs](https://www.13labs.au/services/n8n-consultant-australia) | Australia | Consultor de automatización | Auditoría gratuita de 45 minutos; precio fijo; sin contrato mensual obligatorio; respaldos incluidos | Sí |
| [Peachcom](https://www.odoo.com/es/partners/peachcom-10417152) | México | ERP, CRM, software a medida e infraestructura | Une software con infraestructura y respaldos; referencias por sector | — |
| [Blendbyte](https://www.blendbyte.com/services) | Alemania | Desarrollo y hosting administrado | Precio mensual visible; respaldos cifrados con prueba de restauración semanal | Sí |
| [Workvolve](https://zapier.com/partnerdirectory/partner/workvolve) | Australia | Automatización e IA para equipos | El cliente es dueño de todo lo construido; la auditoría se descuenta del proyecto; precio fijo por escrito | Sí |
| [PHP Point of Sale](https://phppointofsale.com/downloads.php) | No verificado | Software de punto de venta | Dejó de vender la descarga; hoy es en la nube, con prueba gratis de 14 días y respaldos incluidos | Sí |
| [Zenatta](https://zenatta.com/) | EE. UU. | Implementador de CRM | Formulario en dos pasos en la portada; tiempos de entrega declarados | — |
| [STEL Order](https://www.stelorder.com/en/tpv/) | España | Punto de venta y ERP en la nube | Precio "desde" visible, prueba gratis y soporte por chat con horario amplio | — |
| [Develop Argentina](https://developargentina.com) | Argentina | Software a medida, automatizaciones y agentes de IA | Precios de partida visibles, en dólares; WhatsApp como canal principal, con mensaje ya escrito | — |
| [Ofima](https://www.ofima.com/) | Colombia | ERP modular con versión en la nube y hosting | Conversación inicial de 30 minutos sin compromiso; botón de demostración | — |
| [Yourdevs](https://www.yourdevs.cl/servicios/inteligencia-artificial) | Chile | Servicios administrados y ciberseguridad para pymes | Conversación inicial gratuita de 45 minutos; WhatsApp en encabezado, pie y botón flotante; respaldos incluidos | — |
| [Imagined Software](https://www.imaginedsoftware.com.mx/soluciones) | México | Software a medida y automatización de procesos | Sirve de contraste: sin precios ni oferta de entrada visibles | — |
| [OSForBiz](https://www.osforbiz.com/) | Emiratos Árabes | Implementador de ERP y CRM para pymes | Paquetes con precio visible; WhatsApp con respuesta rápida; más de 30 automatizaciones prediseñadas; garantía de 90 días; dice en qué país quedan los datos | — |
| [Magneto IT Solutions](https://magnetoitsolutions.com/dubai/erpnext-services) | Emiratos Árabes | ERP a medida, integración y soporte | Consulta gratuita como puerta de entrada | — |
| [WOW Momentum](https://www.wowmomentum.com/) | India y Emiratos | Marketing, automatización y herramientas a medida | Dos calculadoras de retorno gratuitas; el formulario pide el número de WhatsApp | — |

### Lo que se repite (primeras 15 empresas)

- **Casi todos abren la puerta con algo gratis:** 12 de 15 ofrecen una llamada, auditoría, demostración o prueba sin costo.
- **Orden habitual:** portada con botón de contacto, servicios, clientes o casos, testimonios, proceso por pasos, preguntas frecuentes y contacto.
- **Pocos muestran precios:** 6 de 15. El resto pide solicitar cotización.
- **Pocos hablan de hosting y respaldos:** 6 de 15, y casi ninguno da detalles.

### En Latinoamérica (4 empresas de la segunda ronda)

- **El contacto pasa por WhatsApp:** dos de las cuatro lo ponen en primer plano, una con un mensaje ya escrito y otra en encabezado, pie y botón flotante.
- **La conversación inicial también es la norma:** dos la ofrecen, de 30 y de 45 minutos, gratuita o sin compromiso.
- **Solo una muestra precios**, de partida y en dólares.

### Qué distingue a los mejores

- Dan cifras con contexto, un precio de partida y explican qué pasa después de la entrega: mantenimiento, respaldos y ausencia de contratos forzosos.
- Los más flojos usan jerga sin resultado, esconden el precio y dejan un formulario como única vía de contacto.

### Oportunidades para Cúspida

1. **Reunir todo en un sitio.** Pocas combinan sistemas listos, integración de flujos y hosting con respaldos.
2. **Precios de partida claros.** De las cuatro latinoamericanas, solo una los muestra, y en dólares. Ninguno de los sitios leídos da precios en moneda local latinoamericana.
3. **Explicar el hosting con claridad.** El hueco no es ofrecerlo, porque empresas grandes de la región también lo venden, sino decirle a una pyme, en palabras simples, dónde viven sus datos y cómo se respaldan. Una empresa de Emiratos usa el país donde quedan los datos como señal de confianza.
4. **Calculadora de ahorro en español.** Ninguna de las páginas en español leídas tiene una.

### Qué cambió en este plan

| Hallazgo | Cambio | Dónde |
|---|---|---|
| Botón de contacto en la primera pantalla | Botón pequeño arriba a la derecha y línea descriptiva abajo | 4.1 |
| Los mejores dan detalles de sus respaldos | Tres datos concretos en el panel de servidores | 4.3 |
| Los mejores muestran precio de partida | Tres caminos con precio visible | 4.4 |
| La descarga cede ante la nube | Sistemas listos en dos modalidades | 4.4 |
| Proceso por pasos con entregables | Cada paso dice qué recibe el cliente y cuánto dura | 4.5 |
| Confianza sin casos de éxito | Sección de compromisos por escrito | 4.6 |
| Preguntas frecuentes en casi todos | Sección nueva | 4.7 |
| Un solo formulario es una debilidad | Tres vías de contacto y WhatsApp flotante | 4.8 |
| IA con supervisión humana | Nueva frase final en la tarjeta 4 | 5 |
| En Latinoamérica el contacto pasa por WhatsApp | Botón de WhatsApp con mensaje ya escrito y campo de WhatsApp en el formulario | 4.8 |
| Automatizaciones prediseñadas como producto | Idea para ampliar los sistemas listos | 4.4 |
| Garantía por escrito tras la entrega | Nuevo compromiso candidato | 4.6 |

### Límites

- Es una muestra de 22 sitios, no un estudio de mercado.
- Tres empresas se leyeron desde su ficha en un directorio y no desde su sitio propio: AutomateNexus, Peachcom y Workvolve.
- La segunda ronda no tuvo segunda lectura.
- De Asia solo hay empresas de Emiratos Árabes e India. No se cubrió el este ni el sudeste asiático, ni África, y de Latinoamérica no se logró abrir ningún sitio peruano.

---

## 7. Enfoque técnico

Recomendación, a confirmar antes de programar.

- **Base del sitio: Astro.** Genera páginas estáticas muy rápidas, se posiciona bien en buscadores y se puede alojar en cualquier servidor. Que la página viva en los propios servidores de Cúspida es coherente con lo que vende el panel 3.
- **Animaciones con el scroll: GSAP con ScrollTrigger.** Es la librería estándar para este tipo de secuencias y es gratuita.
- **Portada: lienzo 2D propio.** Los engranajes se dibujan una vez y luego solo se rotan, lo que es barato para el equipo del visitante. Sin 3D en esta etapa; queda como mejora futura si se quieren reflejos metálicos reales.
- **Servidores y ruta a la cumbre: ilustración vectorial por capas**, nítida en cualquier pantalla.
- **Formulario y datos: Supabase**, que ya tienes conectado. Primero para guardar los contactos; después para el catálogo y las descargas.
- **Agenda y WhatsApp:** enlaces a un servicio de agenda en línea y al chat de WhatsApp. No requieren desarrollo propio.
- **Colombia:** precios con formato colombiano ($100.000), WhatsApp con indicativo +57, política de tratamiento de datos según la Ley 1581 de 2012 con autorización en el formulario, y posicionamiento local: perfil de empresa en Google, y Medellín y Colombia en títulos y descripciones.

**Compromisos de calidad**

- **Rendimiento:** contenido principal visible en menos de 2.5 s en celular; animaciones fluidas; la portada se pausa cuando no está en pantalla.
- **Celular primero:** cada panel tiene su versión para pantalla táctil, descrita en el punto 4.
- **Accesibilidad:** contraste suficiente, respeto a la preferencia de movimiento reducido, navegación con teclado y texto real en lugar de imágenes de texto.
- **Buscadores:** títulos y descripciones, datos estructurados de la empresa, imagen para compartir en redes y mapa del sitio.

---

## 8. Fases de trabajo

| Fase | Qué se hace | Cómo se revisa |
|---|---|---|
| 0 | Cerrar el plan: decisiones, materiales y un boceto visual de cada panel. Primer boceto de escritorio en `boceto/boceto.html` | Apruebas el boceto |
| 1 | Cimientos: proyecto, paleta y tipografías. El logo en vector ya está en `marca/` | Hecho el 15 de noviembre de 2026: proyecto en `sitio/` |
| 2 | Portada con engranajes y circuitos | La pruebas en el navegador |
| 3 | Tarjetas en ola | La pruebas en el navegador |
| 4 | Servidores al atardecer | La pruebas en el navegador |
| 5 | Tres caminos, cómo trabajamos, compromisos, preguntas y contacto | Hecho; formulario probado con respuestas simuladas, falta conectarlo a Supabase |
| 6 | Pulido: celular, accesibilidad, rendimiento y buscadores | Mediciones de rendimiento |
| 7 | Publicación: dominio y servidor | Sitio en línea |

**Para después:** tienda y descargas con pago mediante una pasarela colombiana (Wompi, ePayco, PayU o Mercado Pago, con PSE y Nequi), calculadora de ahorro, casos de éxito, blog y versión en inglés.

---

## 9. Material que necesito de ti

1. **Visto bueno del logo.** Ya está redibujado en vector a partir de la foto: `marca/emblema.svg` (solo el emblema) y `marca/logo-completo.svg` (con el nombre y el eslogan convertidos en trazos, sin depender de tipografías instaladas).
2. **Tipografías del logo**, si las conoces. Se usaron Cinzel 600 y Montserrat 500, las más parecidas; ambas son de licencia abierta.
3. **Sistemas listos:** nombre, qué resuelve cada uno, capturas o video, y precio.
4. **Precios de partida** de cada camino, y en qué moneda.
5. **Hosting:** cada cuánto se respalda, por cuánto tiempo se guardan las copias, dónde están los servidores, si se prueba la restauración y qué soporte se incluye.
6. **Contacto:** correo, número de WhatsApp, redes, país y ciudad.
7. **Dominio**, si ya lo tienes.

---

## 10. Decisiones

### Tomadas el 13 de noviembre de 2026

| Tema | Decisión |
|---|---|
| Texto de las tarjetas azules | Títulos en oro y cuerpo en marfil |
| Logo | Se redibuja en vector a partir de la foto, sin cambiar el diseño |
| Puerta de entrada | Diagnóstico con costo, que se descuenta del proyecto si el cliente contrata |
| Precios | Visibles, en pesos colombianos, desde $100.000 |
| Mercado | Colombia, con foco en Medellín |
| Sistemas listos | Aún no existen: aparecen como próximos, con lista de espera |
| Hosting | Servidor propio, aún por montar: el panel 3 se publica cuando esté probado |
| Alcance | Página única primero; la tienda llega cuando existan los sistemas listos. Se deduce de lo anterior |

### Aprobadas con el boceto el 14 de noviembre de 2026

Dijiste que el boceto va por buen camino. Estas tres decisiones de diseño están dibujadas en él, así que se dan por aceptadas; si alguna no te convence, se cambia.

| Decisión | Como quedó en el boceto |
|---|---|
| Tres o cuatro tarjetas | Cuatro |
| Botón y línea descriptiva en la portada | Ambos, fuera del bloque central |
| Proporción áurea de la portada | Secciones sucesivas: el emblema ocupa el 61.8 % del bloque |

La versión para celular está dibujada en `boceto/boceto-celular.html`: una sola columna, menú plegado y los pasos de "Cómo trabajamos" en orden de lectura. Aprobada como dirección el 14 de noviembre de 2026.

### Pendientes de negocio

| # | Decisión | Mi recomendación |
|---|---|---|
| 4 | A qué servicio corresponde "desde $100.000" y cuánto cuesta el diagnóstico | Mostrar el precio del diagnóstico junto a su botón, con la aclaración de que se descuenta del proyecto |
| 5 | Primer contacto breve y gratuito por WhatsApp antes del diagnóstico | Sí: filtra a los curiosos sin gastar tu tiempo |
| 6 | Mostrar los dos POS como demostración | Sí, con permiso de sus dueños; por ahora como "construidos a la medida" |
| 6b | Cuál será el primer sistema listo | El POS Supermercado, por ser el más genérico; la factura DIAN sería su siguiente fase |
| 7 | Qué compromisos publicar (4.6) | Solo los que vayas a cumplir siempre |
| 8 | Arquitectura del hosting (Anexo A) | Híbrida: servidor en casa, con copias y relevo en la nube |

### Pendiente técnica

| # | Decisión | Mi recomendación |
|---|---|---|
| 9 | Tecnología (punto 7) | Astro, GSAP y Supabase |

---

## Anexo A. Infraestructura de hosting (propuesta)

Sirve para sostener lo que promete el panel 3. Es una propuesta: se ajusta cuando elijas equipo y proveedor de internet.

**Punto de partida honesto:** un servidor en casa, solo, no puede prometer "siempre". Tiene cuatro puntos únicos de falla: la luz, el internet, el equipo y la casa misma. Cada uno tiene solución.

| Riesgo | Solución |
|---|---|
| Corte de luz | UPS para el servidor y el módem, con apagado ordenado automático |
| Caída del internet | Segunda conexión, de otro proveedor o por red celular, con cambio automático |
| IP residencial que cambia o es compartida, y puertos cerrados | Túnel de Cloudflare: publica los sitios sin abrir puertos y sin exponer la dirección de la casa |
| Falla de un disco | Dos discos en espejo |
| Robo, incendio o daño total | Copia cifrada diaria fuera de casa, en almacenamiento en la nube |
| Borrado o daño de datos | Copias con historial (diarias, semanales y mensuales) y una restauración de prueba cada mes |
| Ataques | Ningún puerto abierto; red del servidor separada de la red de la casa; administración solo por red privada; actualizaciones automáticas; cada cliente aislado en su propia máquina virtual; discos cifrados |
| No enterarse de una caída | Monitoreo desde fuera de la casa, con alerta al celular |
| Que la casa entera quede fuera de servicio | Servidor pequeño en la nube, listo para tomar el relevo |

**Herramientas sugeridas, todas gratuitas o de bajo costo:** Proxmox para las máquinas virtuales, Cloudflare Tunnel para publicar, Tailscale o WireGuard para administrar, Proxmox Backup Server o restic para las copias cifradas, Backblaze B2 o Cloudflare R2 como almacén fuera de casa, y Uptime Kuma o un monitor externo para las alertas.

**Por etapas**

1. **Ahora, sin clientes:** servidor en casa con túnel, UPS, discos en espejo, copias fuera de casa y monitoreo. Sirve para desarrollo, demostraciones y primeros clientes de bajo riesgo.
2. **Con clientes que dependen del sistema para vender:** la producción pasa a un servidor en la nube y la casa queda como respaldo y laboratorio; o la casa sigue como principal, con relevo automático a la nube.

**Tres cuidados más**

- **POS sin conexión:** que el punto de venta siga vendiendo aunque no haya internet y sincronice después. Para una tienda, eso vale más que cualquier promesa de disponibilidad.
- **Contrato de internet:** revisar que permita uso comercial, o pasar a un plan empresarial con IP fija.
- **Datos personales:** al alojar información de los clientes de tus clientes actúas como encargado del tratamiento según la Ley 1581 de 2012. Conviene revisar contratos y obligaciones con un abogado.

**Lo que la página podrá decir cuando esto funcione:** respaldo diario fuera de casa, restauración probada cada mes y monitoreo permanente.
