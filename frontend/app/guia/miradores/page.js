import Link from "next/link";

export const metadata = {
  title: "Mejores Miradores de Mallorca | Vistas de la Serra de Tramuntana",
  description:
    "Los mejores miradores de Mallorca: vistas espectaculares de la Serra de Tramuntana y la costa. Cómo llegar y consejos para disfrutar de cada mirador.",
  keywords: [
    "mejores miradores de mallorca",
    "miradores serra de tramuntana",
    "mirador sa foradada",
    "mirador es colomer formentor",
    "que ver en mallorca",
  ],
  alternates: { canonical: "/guia/miradores" },
};

// Contenido de ejemplo: verifica y amplía la información de cada mirador.
// Cada { id } servirá más adelante para enganchar valoraciones y comentarios.
const miradores = [
  {
    id: "sa-foradada",
    nombre: "Mirador de Sa Foradada",
    zona: "Deià (Serra de Tramuntana)",
    descripcion:
      "Uno de los miradores más famosos de Mallorca, con vistas a la península de Sa Foradada y su característica roca con un agujero natural. Un lugar perfecto para ver el atardecer sobre el mar.",
    consejo: "Ve al atardecer y aparca en el mirador de la carretera Ma-10; la bajada hasta la punta es a pie.",
  },
  {
    id: "es-colomer",
    nombre: "Mirador Es Colomer",
    zona: "Cap de Formentor",
    descripcion:
      "Situado en la carretera hacia el Cap de Formentor, ofrece una de las panorámicas más impresionantes del norte de la isla, con acantilados que caen al mar y el islote Es Colomer al fondo.",
    consejo: "En verano la carretera de Formentor tiene restricciones de tráfico; consulta los horarios antes de ir.",
  },
];

export default function MiradoresPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb (bueno para SEO y navegación) */}
      <nav aria-label="Ruta" className="text-sm text-slate-400 mb-6">
        <Link href="/guia" className="hover:text-cyan-400">
          Guía Mallorca
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">Miradores</span>
      </nav>

      {/* Cabecera */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Los mejores miradores de Mallorca
        </h1>
        <p className="text-lg text-slate-400">
          La Serra de Tramuntana y la costa de Mallorca esconden algunos de los miradores
          más espectaculares del Mediterráneo. Estos son los que no te puedes perder, con
          consejos para disfrutar de cada uno.
        </p>
      </header>

      {/* Artículos: un bloque por mirador */}
      <div className="space-y-12">
        {miradores.map((m) => (
          <article key={m.id} className="scroll-mt-20" id={m.id}>
            {/* Imagen provisional (cámbiala por una foto real en public/) */}
            <div className="h-56 w-full rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center mb-4">
              <span className="text-white text-lg font-semibold px-4 text-center">{m.nombre}</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-1">{m.nombre}</h2>
            <p className="text-sm text-cyan-300 mb-3">{m.zona}</p>
            <p className="text-slate-300 mb-4">{m.descripcion}</p>

            {/* Consejo destacado */}
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
              <span className="font-semibold text-cyan-300">Consejo: </span>
              {m.consejo}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
