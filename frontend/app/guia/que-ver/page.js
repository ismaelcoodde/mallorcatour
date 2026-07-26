import Link from "next/link";

export const metadata = {
  title: "Qué Ver en Mallorca | Lugares Imprescindibles de la Isla",
  description:
    "Qué ver en Mallorca: la Catedral de Palma, las Cuevas del Drach, el Cap de Formentor y los lugares imprescindibles que no te puedes perder en la isla.",
  keywords: [
    "que ver en mallorca",
    "que hacer en mallorca",
    "catedral de palma",
    "cuevas del drach",
    "cap de formentor",
  ],
  alternates: { canonical: "/guia/que-ver" },
};

// Contenido de ejemplo: verifica y amplía la información de cada lugar.
const lugares = [
  {
    id: "catedral-palma",
    nombre: "Catedral de Palma (La Seu)",
    zona: "Palma de Mallorca",
    descripcion:
      "La joya gótica de la isla, a pie de mar, con la mayor rosetón gótico de Europa e intervenciones de Gaudí en su interior. Un imprescindible en cualquier visita a Palma.",
    consejo: "En ciertos días de febrero y noviembre se produce el 'espectáculo del ocho' con la luz de los rosetones.",
  },
  {
    id: "cuevas-drach",
    nombre: "Cuevas del Drach",
    zona: "Porto Cristo (este)",
    descripcion:
      "Uno de los conjuntos de cuevas más famosos del mundo, con uno de los mayores lagos subterráneos de Europa y un concierto de música clásica en directo sobre el agua.",
    consejo: "Compra las entradas online con antelación; las visitas son por turnos y se agotan.",
  },
];

export default function QueVerPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="Ruta" className="text-sm text-slate-400 mb-6">
        <Link href="/guia" className="hover:text-cyan-400">
          Guía Mallorca
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">Qué ver</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Qué ver en Mallorca: lugares imprescindibles
        </h1>
        <p className="text-lg text-slate-400">
          Monumentos, cuevas y rincones únicos que no te puedes perder en tu viaje a
          Mallorca. Estos son los lugares imprescindibles de la isla.
        </p>
      </header>

      <div className="space-y-12">
        {lugares.map((l) => (
          <article key={l.id} className="scroll-mt-20" id={l.id}>
            <div className="h-56 w-full rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center mb-4">
              <span className="text-white text-lg font-semibold px-4 text-center">{l.nombre}</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-1">{l.nombre}</h2>
            <p className="text-sm text-cyan-300 mb-3">{l.zona}</p>
            <p className="text-slate-300 mb-4">{l.descripcion}</p>

            <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
              <span className="font-semibold text-cyan-300">Consejo: </span>
              {l.consejo}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
