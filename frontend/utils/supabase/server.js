import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Cliente de Supabase para el SERVIDOR (server components, layouts, route handlers).
// Aquí las cookies NO están en document.cookie: llegan en la petición HTTP,
// así que le enseñamos a Supabase cómo leerlas y escribirlas con next/headers.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        // Leer todas las cookies de la petición actual.
        getAll() {
          return cookieStore.getAll();
        },
        // Escribir cookies (p. ej. cuando Supabase refresca el token).
        // El try/catch evita un error si se llama desde un server component
        // donde no se pueden escribir cookies: en ese caso el middleware
        // ya se encarga de refrescarlas.
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Ignorado a propósito (ver comentario de arriba).
          }
        },
      },
    }
  );
}
