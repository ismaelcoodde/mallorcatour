import Link from "next/link";

export const metadata = {
  title: "Mallorca Tour | Alquiler de Coches, Excursiones en Barco y Guía de Mallorca",
  description:
    "Todo para tu viaje a Mallorca: alquiler de coches con entrega en el aeropuerto de Palma, excursiones en barco por las mejores calas y cuevas, y guía con playas, rutas y planes.",
  keywords: [
    "mallorca",
    "que ver en mallorca",
    "alquiler de coches mallorca",
    "excursiones en barco mallorca",
    "guia de mallorca",
    "playas y calas de mallorca",
    "turismo mallorca",
  ],
  alternates: { canonical: "/" },
};

// Tarjetas de acceso a las secciones principales.
const secciones = [
  {
    href: "/coches",
    icono: "🚗",
    titulo: "Alquiler de coches",
    texto: "Coches de alquiler en Mallorca con entrega en el aeropuerto de Palma, desde 40€/día.",
    disponible: true,
  },
  {
    href: "/barcos",
    icono: "⛵",
    titulo: "Excursiones en barco",
    texto: "Descubre las mejores calas y cuevas de Mallorca navegando, medio día o día completo.",
    disponible: true,
  },
  {
    href: "/guia",
    icono: "🏖️",
    titulo: "Guía de Mallorca",
    texto: "Playas, calas, rutas, restaurantes y los planes imprescindibles de la isla.",
    disponible: false,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero con vídeo de fondo */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-slate-900">
        {/* Vídeo de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Capa oscura para que resalte el texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950" />

        {/* Contenido del hero */}
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Alquiler de coches, excursiones en barco y guía de{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Mallorca
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 drop-shadow">
            Todo lo que necesitas para tu viaje a Mallorca: coches de alquiler con entrega en
            el aeropuerto de Palma, excursiones en barco por las mejores calas y cuevas, y una
            guía con las playas, rutas y planes imprescindibles de la isla.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="/coches"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/30 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-400/50"
            >
              🚗 Alquilar coche
            </Link>
            <Link
              href="/barcos"
              className="rounded-lg border border-cyan-400/40 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              ⛵ Excursión en barco
            </Link>
          </div>

          {/* Barra de confianza */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <span>✈️ Entrega en el aeropuerto</span>
            <span>💶 Precios sin sorpresas</span>
            <span>🏝️ Las mejores calas y cuevas</span>
          </div>
        </div>
      </section>

      {/* Qué puedes encontrar */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Qué puedes encontrar en Mallorca
        </h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          Organiza tu viaje a Mallorca en un solo sitio: alquila tu coche, reserva una
          excursión en barco y descubre los mejores rincones de la isla.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {secciones.map((sec) =>
            sec.disponible ? (
              <Link
                key={sec.href}
                href={sec.href}
                className="group flex flex-col items-start rounded-2xl border border-cyan-500/15 bg-slate-900/60 p-8 shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
              >
                <span className="text-4xl mb-4" aria-hidden="true">{sec.icono}</span>
                <h3 className="text-2xl font-semibold text-white mb-2">{sec.titulo}</h3>
                <p className="text-slate-400 mb-4">{sec.texto}</p>
                <span className="mt-auto font-medium text-cyan-400 transition-transform group-hover:translate-x-1">
                  Ver más →
                </span>
              </Link>
            ) : (
              <div
                key={sec.href}
                className="relative flex flex-col items-start rounded-2xl border border-slate-700/40 bg-slate-900/40 p-8 opacity-70"
              >
                <span className="absolute top-4 right-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
                  Próximamente
                </span>
                <span className="text-4xl mb-4" aria-hidden="true">{sec.icono}</span>
                <h3 className="text-2xl font-semibold text-white mb-2">{sec.titulo}</h3>
                <p className="text-slate-400">{sec.texto}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Contenido SEO: texto con palabras clave */}
      <section className="max-w-3xl mx-auto px-4 pb-20 text-slate-300 space-y-4">
        <h2 className="text-2xl font-bold text-white mb-3">
          Tu viaje a Mallorca empieza aquí
        </h2>
        <p>
          En <strong className="text-cyan-300">Mallorca Tour</strong> reunimos todo lo que
          necesitas para disfrutar de la isla: <strong className="text-cyan-300">alquiler de
          coches en Mallorca</strong> con entrega en el aeropuerto de Palma,{" "}
          <strong className="text-cyan-300">excursiones en barco</strong> por las calas y
          cuevas más bonitas del Mediterráneo, y una <strong className="text-cyan-300">guía de
          Mallorca</strong> con las mejores playas, rutas y planes.
        </p>
        <p>
          Ya sea que busques un coche para recorrer la isla a tu aire, un día de mar
          descubriendo aguas cristalinas o ideas de qué ver y hacer en Mallorca, aquí lo
          tienes todo en un mismo lugar, fácil de reservar y sin sorpresas.
        </p>
      </section>
    </main>
  );
}
