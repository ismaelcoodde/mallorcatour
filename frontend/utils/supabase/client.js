import { createBrowserClient } from "@supabase/ssr";

// Cliente de Supabase para el NAVEGADOR.
// Lo usarás dentro de componentes con "use client" (formularios, botones).
// Lee las variables NEXT_PUBLIC_* porque estas SÍ pueden viajar al navegador.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
