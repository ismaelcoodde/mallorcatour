import "./globals.css";
import Navbar from "../components/Navbar";
import { createClient } from "../utils/supabase/server";

export const metadata = {
  title: "Alquiler de Coches y Barcos en Mallorca",
  description: "Alquiler de coches y barcos al mejor precio en Mallorca. Reserva ahora desde 30€/dia.",
};

// El layout corre en el SERVIDOR, así que usamos el cliente de servidor
// para saber quién está logueado y pasárselo al Navbar como prop inicial.
export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="es">
      <body>
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}
