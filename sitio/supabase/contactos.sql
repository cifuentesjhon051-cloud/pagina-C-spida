-- Tabla para los mensajes del formulario de contacto de la página.
-- Ejecútalo en el editor SQL de tu proyecto de Supabase. No se ha ejecutado todavía.
create table if not exists public.contactos (
  id uuid primary key default gen_random_uuid(),
  creado timestamptz not null default now(),
  nombre text not null check (char_length(nombre) between 1 and 120),
  empresa text check (char_length(empresa) <= 160),
  contacto text not null check (char_length(contacto) between 3 and 160),
  mensaje text check (char_length(mensaje) <= 2000),
  acepto_datos boolean not null,
  origen text default 'web'
);

alter table public.contactos enable row level security;

-- La página (clave pública "anon") solo puede insertar, y únicamente si aceptó el tratamiento de datos.
-- Nadie con esa clave puede leer, modificar ni borrar los mensajes.
create policy "insertar contacto desde la web"
  on public.contactos for insert
  to anon
  with check (acepto_datos = true);
