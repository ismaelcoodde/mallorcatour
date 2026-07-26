import Link from "next/link";

export const metadata = {
  title: "Guía de Mallorca | Calas, Miradores, Pueblos y Qué Ver",
  description:
    "Guía de Mallorca para viajeros: las mejores calas y playas, miradores, pueblos con encanto, excursiones y los lugares imprescindibles que ver en la isla.",
  keywords: [
    "guia de mallorca",
    "que ver en mallorca",
    "que hacer en mallorca",
    "mejores calas de mallorca",
    "mejores miradores de mallorca",
    "pueblos de mallorca",
  ],
  alternates: { canonical: "/guia" },
};

// Sub-secciones de la guía (cada una es una página propia).
const guias = [
  {
    href: "/guia/calas",
    icono: "🏖️",
    titulo: "Mejores calas y playas",
    texto: "Las calas de aguas turquesas y playas imprescindibles de Mallorca.",
  },
  {
    href: "/guia/miradores",
    icono: "🌄",
    titulo: "Mejores miradores",
    texto: "Las vistas más espectaculares de la Serra de Tramuntana y la costa.",
  },
  {
    href: "/guia/excursiones",
    icono: "🧭",
    titulo: "Excursiones y actividades",
    texto: "Las mejores excursiones, tours y actividades para vivir la isla.",
  },
  {
    href: "/guia/pueblos",
    icono: "🏘️",
    titulo: "Pueblos con encanto",
    texto: "Valldemossa, Sóller, Deià y los pueblos más bonitos de Mallorca.",
  },
  {
    href: "/guia/que-ver",
    icono: "📸",
    titulo: "Qué ver: imprescindibles",
    texto: "Los monumentos y lugares que no te puedes perder en Mallorca.",
  },
];

export default function GuiaPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Cabecera */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
          Guía de Mallorca
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Todo lo que necesitas para descubrir la isla: las mejores calas, miradores,
          pueblos con encanto, excursiones y los lugares imprescindibles que ver en Mallorca.
        </p>
      </header>

      {/* Tarjetas de sub-secciones */}
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {guias.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group flex flex-col items-start rounded-2xl border border-cyan-500/15 bg-slate-900/60 p-8 shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
          >
            <span className="text-4xl mb-4" aria-hidden="true">{g.icono}</span>
            <h2 className="text-xl font-semibold text-white mb-2">{g.titulo}</h2>
            <p className="text-slate-400 mb-4">{g.texto}</p>
            <span className="mt-auto font-medium text-cyan-400 transition-transform group-hover:translate-x-1">
              Ver más →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
