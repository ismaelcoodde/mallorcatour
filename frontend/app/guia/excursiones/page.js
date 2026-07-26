import Link from "next/link";

export const metadata = {
  title: "Mejores Excursiones y Actividades en Mallorca | Tours y Planes",
  description:
    "Las mejores excursiones y actividades en Mallorca: paseos en barco, tours a cuevas, rutas por la Serra de Tramuntana y planes imprescindibles para tu viaje.",
  keywords: [
    "excursiones en mallorca",
    "actividades en mallorca",
    "tours mallorca",
    "que hacer en mallorca",
    "excursiones en barco mallorca",
  ],
  alternates: { canonical: "/guia/excursiones" },
};

// Contenido de ejemplo.
// - urlInterna: enlace a una página propia (p. ej. /barcos).
// - urlExterna: aquí pondrás tus enlaces de afiliado de GetYourGuide.
const excursiones = [
  {
    id: "barco-calas",
    nombre: "Excursión en barco por las calas y cuevas",
    descripcion:
      "Navega por las calas y cuevas más bonitas de Mallorca, con paradas para bañarte en aguas cristalinas y picoteo mallorquín incluido.",
    cta: "Ver excursión en barco",
    urlInterna: "/barcos",
    urlExterna: null,
  },
  {
    id: "tramuntana",
    nombre: "Ruta por la Serra de Tramuntana",
    descripcion:
      "Descubre la sierra Patrimonio de la Humanidad: pueblos de piedra, miradores y paisajes de montaña y mar. (Añade aquí tu tour de GetYourGuide.)",
    cta: "Reservar actividad",
    urlInterna: null,
    urlExterna: "https://www.getyourguide.com/", // 👈 sustituye por tu enlace de afiliado
  },
];

export default function ExcursionesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="Ruta" className="text-sm text-slate-400 mb-6">
        <Link href="/guia" className="hover:text-cyan-400">
          Guía Mallorca
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">Excursiones y actividades</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Mejores excursiones y actividades en Mallorca
        </h1>
        <p className="text-lg text-slate-400">
          Las mejores formas de vivir la isla: paseos en barco, rutas por la montaña y planes
          imprescindibles para aprovechar tu viaje a Mallorca al máximo.
        </p>
      </header>

      <div className="space-y-12">
        {excursiones.map((e) => (
          <article key={e.id} className="scroll-mt-20" id={e.id}>
            <div className="h-56 w-full rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center mb-4">
              <span className="text-white text-lg font-semibold px-4 text-center">{e.nombre}</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">{e.nombre}</h2>
            <p className="text-slate-300 mb-4">{e.descripcion}</p>

            {/* Botón: enlace interno (Link) o externo (afiliado GetYourGuide) */}
            {e.urlInterna ? (
              <Link
                href={e.urlInterna}
                className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-400/40"
              >
                {e.cta}
              </Link>
            ) : (
              <a
                href={e.urlExterna}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-400/40"
              >
                {e.cta}
              </a>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
