// Server Component: HTML renderizado en el servidor -> mejor SEO.

export const metadata = {
  // Título con la keyword principal + gancho.
  title: "Excursiones en Barco por Mallorca | Calas y Cuevas desde 70€",
  // Descripción ~150-160 caracteres con keywords y llamada a la acción.
  description:
    "Excursiones y alquiler de barco en Mallorca a las mejores calas y cuevas. Salidas de medio día y día completo en una Beneteau Flyer 7 con picoteo mallorquín incluido.",
  keywords: [
    "excursiones en barco mallorca",
    "alquiler de barcos mallorca",
    "excursion barco calas mallorca",
    "excursion barco cuevas mallorca",
    "alquiler lancha mallorca",
    "paseo en barco mallorca",
  ],
  alternates: {
    canonical: "/barcos",
  },
  openGraph: {
    title: "Excursiones en Barco por Mallorca | Calas y Cuevas",
    description:
      "Descubre las calas y cuevas más bonitas de Mallorca en barco. Salidas de medio día y día completo con picoteo mallorquín incluido.",
    type: "website",
    locale: "es_ES",
    images: ["/barca/barca.png"],
  },
};

// Cambia esto por tu dominio real cuando publiques la web.
const SITE_URL = "https://www.mallorcarentals.com";

// Datos de la barca (separados del diseño, igual que en coches).
const barca = {
  nombre: "Beneteau Flyer 7 SUNdeck",
  descripcion:
    "Lancha ágil y cómoda con motor Suzuki de 150 CV, gran solárium de proa y casco Air Step® para navegar con máxima estabilidad. Perfecta para descubrir calas, cuevas y deportes acuáticos.",
  imagen: "/barca/barca.png",
  reservaUrl: "https://www.mallorcamarexcursiones.com",
  // Especificaciones técnicas (píldoras).
  specs: ["8 pasajeros", "Motor Suzuki 150 CV", "Eslora 7,20 m", "Manga 2,53 m"],
  // Equipamiento con iconos.
  caracteristicas: [
    { icono: "☀️", texto: "Solárium de proa acolchado" },
    { icono: "⛱️", texto: "Toldo Bimini de acero inoxidable" },
    { icono: "🍽️", texto: "Bañera con mesa desmontable y sillones abatibles" },
    { icono: "🧭", texto: "Puesto de gobierno con asientos deportivos giratorios" },
    { icono: "🛏️", texto: "Cabina interior para almacenaje o descanso" },
    { icono: "🚿", texto: "Zona de baño con escalera y ducha de agua dulce" },
    { icono: "🎿", texto: "Mástil para esquí náutico, wakeboard o donut" },
    { icono: "🌊", texto: "Casco Air Step® (más estabilidad y menor consumo)" },
  ],
};

// Calas y cuevas que se visitan (long-tail keywords para el SEO).
const lugares = [
  "Caló d'en Monjo",
  "Cala Figuera",
  "Cala Fornell",
  "Cueva Portal del Mar",
  "Cueva del Pirata",
  "Cueva Azul",
];

// Datos estructurados: la excursión como producto con rango de precio.
const barcoJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: barca.nombre,
  description: barca.descripcion,
  image: `${SITE_URL}${barca.imagen}`,
  offers: {
    "@type": "AggregateOffer",
    lowPrice: 70,
    highPrice: 140,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: barca.reservaUrl,
  },
};

// Preguntas frecuentes (pueden salir desplegables en Google).
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye la excursión en barco por Mallorca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La excursión incluye guía, un picoteo con productos típicos mallorquines (embutidos, aceitunas, patatas y refrescos) y paradas para bañarte en calas de aguas cristalinas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto dura la excursión en barco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes elegir entre una salida de medio día (4 horas) o de día completo (8 horas).",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué calas y cuevas se visitan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visitamos calas y cuevas fuera de las rutas turísticas como Caló d'en Monjo, Cala Figuera, Cala Fornell, la Cueva Portal del Mar, la Cueva del Pirata y la Cueva Azul.",
      },
    },
  ],
};

export default function BarcosPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Datos estructurados para Google (no se ven en la página) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(barcoJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Cabecera / hero */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
          Excursiones en barco por Mallorca
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          Descubre las calas y cuevas más bonitas de Mallorca a bordo de nuestra lancha,
          lejos de las rutas turísticas. Salidas de medio día y día completo con picoteo
          mallorquín incluido.
        </p>
      </header>

      {/* Tarjeta de la barca (mismo estilo que las de coches) */}
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-cyan-500/15 bg-slate-900/60 shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-cyan-500/20 max-w-md mb-16">
        {/* Foto de la barca */}
        <img
          src={barca.imagen}
          alt={`${barca.nombre} para excursiones en barco por Mallorca`}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Contenido de la tarjeta */}
        <div className="flex flex-col flex-1 p-5">
          <h2 className="text-xl font-semibold text-white mb-1">{barca.nombre}</h2>
          <p className="text-slate-400 text-sm mb-4">{barca.descripcion}</p>

          {/* Especificaciones como etiquetas */}
          <ul className="flex flex-wrap gap-2 text-sm mb-5">
            {barca.specs.map((spec) => (
              <li
                key={spec}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-200"
              >
                {spec}
              </li>
            ))}
          </ul>

          {/* Equipamiento con iconos */}
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-slate-200 mb-2">Características</h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {barca.caracteristicas.map((item) => (
                <li key={item.texto} className="flex items-center gap-2">
                  <span aria-hidden="true">{item.icono}</span>
                  <span>{item.texto}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón de reserva -> web de mi hermano */}
          <div className="mt-auto">
            <a
              href={barca.reservaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-400/40"
            >
              Reservar
            </a>
          </div>
        </div>
      </article>

      {/* Contenido SEO: texto con palabras clave que Google lee */}
      <section className="max-w-3xl text-slate-300 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Alquiler de barco y excursiones en Mallorca
          </h2>
          <p>
            ¿Buscas <strong className="text-cyan-300">excursiones en barco por Mallorca</strong>? Navega por las
            calas y cuevas más bonitas de la isla a bordo de una{" "}
            <strong className="text-cyan-300">Beneteau Flyer 7 SUNdeck</strong> con motor Suzuki de 150 CV. Ofrecemos{" "}
            <strong className="text-cyan-300">salidas de medio día y día completo</strong>, con picoteo mallorquín
            incluido y paradas para bañarte en aguas cristalinas. Una experiencia única
            para descubrir la costa de Mallorca lejos de las rutas turísticas masificadas.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Calas y cuevas que visitamos
          </h2>
          <p className="mb-3">
            Nuestras rutas en barco recorren algunos de los rincones más espectaculares de
            la costa mallorquina:
          </p>
          <ul className="flex flex-wrap gap-2">
            {lugares.map((lugar) => (
              <li
                key={lugar}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-200"
              >
                {lugar}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Preguntas frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-100">
                ¿Qué incluye la excursión en barco por Mallorca?
              </h3>
              <p>
                Incluye guía, un picoteo con productos típicos mallorquines (embutidos,
                aceitunas, patatas y refrescos) y paradas para bañarte en calas de aguas
                cristalinas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">
                ¿Cuánto dura la excursión en barco?
              </h3>
              <p>
                Puedes elegir entre una salida de medio día (4 horas) o de día completo
                (8 horas).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">¿Cómo reservo la excursión?</h3>
              <p>
                Pulsa en «Reservar» y completa tu reserva en la web de las excursiones, o
                contáctanos para consultar disponibilidad y precios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
