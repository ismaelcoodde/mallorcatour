import Link from "next/link";

export const metadata = {
  title: "Pueblos con Encanto de Mallorca | Valldemossa, Sóller y Deià",
  description:
    "Los pueblos más bonitos de Mallorca: Valldemossa, Sóller, Deià y más. Qué ver en cada uno y consejos para tu visita por la Serra de Tramuntana.",
  keywords: [
    "pueblos con encanto mallorca",
    "pueblos mas bonitos de mallorca",
    "valldemossa",
    "soller",
    "deia mallorca",
  ],
  alternates: { canonical: "/guia/pueblos" },
};

// Contenido de ejemplo: verifica y amplía la información de cada pueblo.
const pueblos = [
  {
    id: "valldemossa",
    nombre: "Valldemossa",
    zona: "Serra de Tramuntana",
    descripcion:
      "Uno de los pueblos más bonitos de Mallorca, de calles empedradas y casas de piedra con flores. Famoso por la Real Cartuja donde se alojaron Chopin y George Sand.",
    consejo: "Prueba la 'coca de patata' típica del pueblo con un chocolate caliente.",
  },
  {
    id: "soller",
    nombre: "Sóller",
    zona: "Serra de Tramuntana",
    descripcion:
      "Un valle de naranjos rodeado de montañas, con un centro modernista precioso. Puedes llegar en el histórico tren de madera desde Palma y bajar al Port de Sóller en tranvía.",
    consejo: "Reserva el tren de Sóller con antelación en temporada alta; es una experiencia en sí misma.",
  },
];

export default function PueblosPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="Ruta" className="text-sm text-slate-400 mb-6">
        <Link href="/guia" className="hover:text-cyan-400">
          Guía Mallorca
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">Pueblos con encanto</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Pueblos con encanto de Mallorca
        </h1>
        <p className="text-lg text-slate-400">
          Más allá de sus playas, Mallorca tiene pueblos preciosos de piedra y montaña. Estos
          son los que merece la pena visitar, con ideas de qué ver en cada uno.
        </p>
      </header>

      <div className="space-y-12">
        {pueblos.map((p) => (
          <article key={p.id} className="scroll-mt-20" id={p.id}>
            <div className="h-56 w-full rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center mb-4">
              <span className="text-white text-lg font-semibold px-4 text-center">{p.nombre}</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-1">{p.nombre}</h2>
            <p className="text-sm text-cyan-300 mb-3">{p.zona}</p>
            <p className="text-slate-300 mb-4">{p.descripcion}</p>

            <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
              <span className="font-semibold text-cyan-300">Consejo: </span>
              {p.consejo}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
