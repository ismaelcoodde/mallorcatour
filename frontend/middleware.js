import { updateSession } from "./utils/supabase/middleware";

// Next.js ejecuta esta función en CADA petición (según el matcher de abajo).
// Aquí solo delegamos en el ayudante que refresca la sesión.
export async function middleware(request) {
  return await updateSession(request);
}

export const config = {
  // El matcher decide en qué rutas corre el middleware.
  // Excluimos archivos estáticos (imágenes, _next, favicon...) para no
  // gastar recursos refrescando la sesión al cargar un .png o un .mp4.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)",
  ],
};
