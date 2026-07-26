import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Alquiler de Coches y Barcos en Mallorca",
  description: "Alquiler de coches y barcos al mejor precio en Mallorca. Reserva ahora desde 30€/dia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
