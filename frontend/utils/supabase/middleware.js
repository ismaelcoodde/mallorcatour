import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

// Este ayudante refresca la sesión en cada petición.
// Lo llama el middleware.js de la raíz (ver ese archivo).
export async function updateSession(request) {
  // Respuesta base: dejamos pasar la petición tal cual.
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        // Leemos las cookies que trae la petición del usuario.
        getAll() {
          return request.cookies.getAll();
        },
        // Si Supabase renueva el token, escribimos las cookies nuevas
        // tanto en la petición como en la respuesta que devolvemos.
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANTE: getUser() es lo que dispara el refresco del token si hace falta.
  // No metas código entre createServerClient y esta línea.
  await supabase.auth.getUser();

  return supabaseResponse;
}
