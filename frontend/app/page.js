import Link from "next/link";

export const metadata = {
  title:
    "Mallorca Tour | Alquiler de Coches, Barcos y Excursiones en Mallorca",
  description:
    "Organiza todo tu viaje a Mallorca en un solo lugar: alquiler de coches con entrega en el aeropuerto de Palma, excursiones en barco por calas cristalinas y las mejores actividades y tours oficiales por la isla.",
  keywords: [
    "mallorca",
    "que ver en mallorca",
    "alquiler de coches mallorca",
    "excursiones en barco mallorca",
    "excursiones mallorca",
    "tours mallorca",
    "actividades en mallorca",
    "guia de mallorca",
    "playas y calas de mallorca",
    "turismo mallorca",
  ],
  alternates: { canonical: "/" },
};

// Tarjetas de acceso a las secciones principales
const secciones = [
  {
    href: "/coches",
    icono: "🚗",
    titulo: "Alquiler de coches",
    texto:
      "Coches de alquiler con entrega directa en el aeropuerto de Palma, precios claros desde 40€/día y sin depósitos ocultos.",
    disponible: true,
  },
  {
    href: "/barcos",
    icono: "⛵",
    titulo: "Excursiones en barco",
    texto:
      "Navega por las calas y cuevas más bonitas de Mallorca en salidas de medio día o día completo.",
    disponible: true,
  },
  {
    href: "/excursiones",
    icono: "🎟️",
    titulo: "Tours y Excursiones",
    texto:
      "Reserva las mejores excursiones guiadas, entradas y actividades imprescindibles para descubrir toda la isla.",
    disponible: true,
  },
  {
    href: "/guia",
    icono: "🏖️",
    titulo: "Guía de Mallorca",
    texto:
      "Playas, calas secretas, rutas recomendadas, restaurantes y los mejores planes de la isla.",
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

        {/* Capa oscura para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />

        {/* Contenido del Hero */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-6xl">
            Tu viaje a{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Mallorca
            </span>
            , sin complicaciones.
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 drop-shadow md:text-xl">
            Organiza todo en un solo lugar al mejor precio: alquila tu coche con
            entrega directa en el aeropuerto, navega por calas cristalinas y
            reserva las mejores excursiones y actividades con total transparencia.
          </p>

          {/* Badges de Confianza / Puntos clave */}
          <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-200">
            <span>✈️ Entrega en el Aeropuerto</span>
            <span>🔒 Sin depósitos ocultos ni sorpresas</span>
            <span>🎟️ Tours y Excursiones Oficiales</span>
            <span>⭐ +500 Viajeros satisfechos</span>
          </div>

          {/* Botones de Acción (CTAs) */}
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/coches"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-cyan-500/30 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-400/50"
            >
              🚗 Alquilar coche
            </Link>
            <Link
              href="/barcos"
              className="rounded-lg border border-cyan-400/40 bg-white/10 px-6 py-3.5 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              ⛵ Excursión en barco
            </Link>
            <Link
              href="/excursiones"
              className="rounded-lg border border-cyan-400/40 bg-white/10 px-6 py-3.5 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              🎟️ Tours y Actividades
            </Link>
          </div>
        </div>
      </section>

      {/* Qué puedes encontrar */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Todo lo que necesitas para tu viaje a Mallorca
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
          Organiza tus vacaciones en un solo sitio: alquila tu coche, reserva tu
          salida en barco y descubre los mejores tours y experiencias en la isla.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {secciones.map((sec) =>
            sec.disponible ? (
              <Link
                key={sec.href}
                href={sec.href}
                className="group flex flex-col items-start rounded-2xl border border-cyan-500/15 bg-slate-900/60 p-6 shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
              >
                <span className="mb-4 text-4xl" aria-hidden="true">
                  {sec.icono}
                </span>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {sec.titulo}
                </h3>
                <p className="mb-4 text-sm text-slate-400">{sec.texto}</p>
                <span className="mt-auto font-medium text-cyan-400 transition-transform group-hover:translate-x-1">
                  Ver más →
                </span>
              </Link>
            ) : (
              <div
                key={sec.href}
                className="relative flex flex-col items-start rounded-2xl border border-slate-700/40 bg-slate-900/40 p-6 opacity-70"
              >
                <span className="absolute top-4 right-4 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-200">
                  Próximamente
                </span>
                <span className="mb-4 text-4xl" aria-hidden="true">
                  {sec.icono}
                </span>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {sec.titulo}
                </h3>
                <p className="text-sm text-slate-400">{sec.texto}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Contenido SEO optimizado */}
      <section className="mx-auto max-w-3xl space-y-4 px-4 pb-20 text-slate-300">
        <h2 className="mb-3 text-2xl font-bold text-white">
          Tu plataforma integral para tus vacaciones en Mallorca
        </h2>
        <p>
          En <strong className="text-cyan-300">Mallorca Tour</strong> reunimos
          todo lo que necesitas para disfrutar de tu escapada al máximo:{" "}
          <strong className="text-cyan-300">
            alquiler de coches en Mallorca
          </strong>{" "}
          con recogida sin esperas en el aeropuerto de Palma (PMI),{" "}
          <strong className="text-cyan-300">excursiones en barco</strong> por las
          calas y cuevas marinas más bellas del Mediterráneo, y una cuidada selección
          de <strong className="text-cyan-300">tours y actividades</strong> para
          descubrir la isla a tu ritmo.
        </p>
        <p>
          Tanto si buscas moverte con total libertad por la Serra de Tramuntana,
          navegar por aguas turquesas o reservar las mejores experiencias
          locales, en Mallorca Tour lo encuentras todo en un mismo lugar, con
          reserva inmediata, máxima transparencia y sin costes ocultos.
        </p>
      </section>
    </main>
  );
}