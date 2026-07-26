import Link from "next/link";

export const metadata = {
  title: "Mejores Calas y Playas de Mallorca | Aguas Turquesas",
  description:
    "Las mejores calas y playas de Mallorca: aguas turquesas y cristalinas, calas vírgenes y arenales. Cómo llegar y consejos para disfrutar de cada una.",
  keywords: [
    "mejores calas de mallorca",
    "mejores playas de mallorca",
    "calas turquesas mallorca",
    "cala mondrago",
    "calo des moro",
  ],
  alternates: { canonical: "/guia/calas" },
};

// Contenido de ejemplo: verifica y amplía la información de cada cala.
const calas = [
  {
    id: "cala-mondrago",
    nombre: "Cala Mondragó",
    zona: "Santanyí (sureste)",
    descripcion:
      "Una cala de arena fina y aguas turquesas dentro de un parque natural protegido. Ideal para familias por su entrada suave al agua y su entorno de pinares.",
    consejo: "Llega temprano en verano: el aparcamiento del parque natural se llena pronto.",
  },
  {
    id: "calo-des-moro",
    nombre: "Caló des Moro",
    zona: "Santanyí (sureste)",
    descripcion:
      "Probablemente la cala más fotografiada de Mallorca, pequeña y rodeada de acantilados, con un agua de color increíble. Se accede por un sendero y unas escaleras naturales.",
    consejo: "Es pequeña y muy popular; ve a primera hora y lleva calzado cómodo para la bajada.",
  },
];

export default function CalasPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <nav aria-label="Ruta" className="text-sm text-slate-400 mb-6">
        <Link href="/guia" className="hover:text-cyan-400">
          Guía Mallorca
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-300">Calas y playas</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Las mejores calas y playas de Mallorca
        </h1>
        <p className="text-lg text-slate-400">
          Mallorca tiene algunas de las calas más bonitas del Mediterráneo, de aguas
          turquesas y cristalinas. Estas son nuestras favoritas, con consejos para
          disfrutarlas al máximo.
        </p>
      </header>

      <div className="space-y-12">
        {calas.map((c) => (
          <article key={c.id} className="scroll-mt-20" id={c.id}>
            <div className="h-56 w-full rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-800 flex items-center justify-center mb-4">
              <span className="text-white text-lg font-semibold px-4 text-center">{c.nombre}</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-1">{c.nombre}</h2>
            <p className="text-sm text-cyan-300 mb-3">{c.zona}</p>
            <p className="text-slate-300 mb-4">{c.descripcion}</p>

            <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
              <span className="font-semibold text-cyan-300">Consejo: </span>
              {c.consejo}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
