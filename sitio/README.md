# Sitio web de Cúspida

Página de una sola pantalla larga hecha con [Astro](https://astro.build) y [GSAP](https://gsap.com). Es un sitio estático: al compilarlo queda una carpeta `dist/` que se puede alojar en cualquier servidor.

## Comandos

```bash
npm install      # una sola vez
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera la carpeta dist/
npm run preview  # prueba la versión compilada
```

## Qué falta llenar antes de publicar

Copia `.env.example` como `.env` y completa los valores. Mientras estén vacíos, los botones llevan al formulario de contacto y el botón flotante de WhatsApp no aparece.

| Variable | Para qué |
|---|---|
| `PUBLIC_WHATSAPP` | Número con indicativo y sin signos, por ejemplo `573001234567`. Activa los botones de WhatsApp y el botón flotante |
| `PUBLIC_CORREO` | Correo de contacto (respaldo del formulario y política de datos) |
| `PUBLIC_AGENDA_URL` | Enlace de la agenda en línea (Calendly, Cal.com…) para "Agenda tu diagnóstico" |
| `PUBLIC_SUPABASE_URL` y `PUBLIC_SUPABASE_ANON_KEY` | Guardan los mensajes del formulario. Ver abajo |
| `PUBLIC_SITE_URL` | Dirección del sitio cuando exista el dominio (activa la dirección canónica y datos para buscadores) |
| `PUBLIC_RESPONSABLE` y `PUBLIC_NIT` | Aparecen en la política de tratamiento de datos |

### Formulario con Supabase

1. Crea un proyecto en Supabase y ejecuta `supabase/contactos.sql` en su editor SQL. Crea la tabla `contactos` y una regla que solo deja **insertar** desde la página; nadie con la clave pública puede leer, modificar ni borrar mensajes.
2. Copia la URL del proyecto y la clave pública (`anon`) en `.env`.
3. Los mensajes los lees desde el panel de Supabase.

Sin Supabase, el formulario abre WhatsApp (o el correo) con el mensaje ya escrito.

## Google Tag Manager y Google Analytics

El contenedor `GTM-KJP68XNV` está en `sitio/.env.production` (`PUBLIC_GTM_ID`). El sitio carga Tag Manager con **Consent Mode**: la analítica solo se concede si la persona pulsa «Aceptar» en el aviso de cookies (`src/components/Cookies.astro`). Google Analytics 4 se configura dentro de Tag Manager (etiqueta de configuración de GA4 con tu ID de medición `G-…`, disparada en todas las páginas).

Cada evento del sitio (secciones vistas, scroll, clics, formulario) también se envía a la capa de datos de Tag Manager como `cuspida_evento`, con estas variables: `evento_nombre`, `seccion`, `boton`, `profundidad`, `pregunta`, `destino` y `via`. En Tag Manager se usan creando variables de capa de datos y un activador de evento personalizado `cuspida_evento`.

## Analítica (Umami)

El sitio mide visitas y comportamiento con [Umami](https://umami.is), que no usa cookies. Sin `PUBLIC_UMAMI_ID` no se carga nada. Para activarlo:

1. Crea una cuenta en umami.is, añade el sitio `cuspida.com.co` y copia el **ID del sitio** (Website ID).
2. Pégalo en `.env` como `PUBLIC_UMAMI_ID` y, en Cloudflare, agrégalo en las variables de entorno del proyecto. Vuelve a desplegar.

Solo se mide el sitio publicado (el script ignora `localhost`). Respeta la opción «No rastrear» del navegador.

Eventos que envía (`src/scripts/analitica.ts`): `vista_seccion` (qué secciones llegan a verse), `scroll` (25, 50, 75 y 90 %), `click_whatsapp`, `click_boton` (con el texto del botón y la sección), `click_menu`, `faq_abierta`, `formulario_iniciado` y `formulario_enviado`/`formulario_error`. No se envía ningún dato personal.

**Para saber cómo te encontraron:** Umami muestra de dónde viene cada visita (Google, Instagram, WhatsApp, enlace directo…). Para distinguir campañas, añade `?utm_source=...` a los enlaces que compartas, por ejemplo `https://cuspida.com.co/?utm_source=instagram&utm_medium=bio` o `?utm_source=whatsapp&utm_medium=estado`.

## Contenido

Los textos están en `src/content.ts`; los precios, en `src/content.ts` (caminos y preguntas). Las secciones son componentes en `src/components/`. Las animaciones están en `src/scripts/` (`hero.ts` para la portada, `animaciones.ts` para el resto).

## Pendiente de revisar

- `src/pages/privacidad.astro` es un borrador de la política de datos (Ley 1581 de 2012): conviene que la revise un abogado.
- El panel de hosting dice "Muy pronto". Cuando el servidor esté montado y las restauraciones probadas, se reemplaza por los datos reales (frecuencia de respaldo, ubicación y prueba de restauración).
- Las preguntas frecuentes y los compromisos son propuestas: publica solo lo que vayas a cumplir.
- El dominio es `cuspida.com.co` (ya en `.env`). La imagen para compartir en redes está en `public/og.png`; el mapa del sitio y `robots.txt` se generan solos.

## Publicar en Cloudflare Pages

1. `npm run build` (vuelve a compilar cada vez que cambies algo o llenes el `.env`).
2. En el panel de Cloudflare: Workers y Pages → Crear → Pages → subir archivos directamente → arrastra la carpeta `dist/`.
3. Cuando termine, en el proyecto: Dominios personalizados → añade `cuspida.com.co` (y `www.cuspida.com.co`, con redirección al principal).
