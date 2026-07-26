export const metadata = {
  // Título: keyword principal al inicio + gancho de precio. ~55-60 caracteres.
  title: "Alquiler de Coches en Mallorca | Desde 40€/día con entrega en aeropuerto",
  // Descripción: ~150-160 caracteres, con keywords y llamada a la acción.
  description:
    "Alquiler de coches baratos en Mallorca con entrega en el aeropuerto de Palma (Son Sant Joan). Reserva online un Kia Sportage, Peugeot 2008 o Peugeot 208 desde 40€/día.",
  // Palabras clave por las que quieres posicionar (Google ya no las usa como
  // factor directo, pero no estorban y sirven de referencia).
  keywords: [
    "alquiler de coches mallorca",
    "alquiler coches palma de mallorca",
    "alquiler coches aeropuerto palma",
    "coches de alquiler baratos mallorca",
    "rent a car mallorca",
    "alquilar coche en mallorca",
  ],
  // URL canónica: le dice a Google cuál es la dirección "oficial" de esta página
  // y evita problemas de contenido duplicado.
  alternates: {
    canonical: "/coches",
  },
  // Open Graph: cómo se ve la página al compartirla en WhatsApp, Facebook, etc.
  openGraph: {
    title: "Alquiler de Coches en Mallorca | Desde 40€/día",
    description:
      "Coches de alquiler en Mallorca con entrega en el aeropuerto de Palma. Reserva online fácil y rápido.",
    type: "website",
    locale: "es_ES",
    images: ["/coches/kia.jpg"],
  },
};

// Lista de coches. Cada { ... } es un coche.
// Edita/añade coches aquí sin tocar el diseño de abajo.
const coches = [
  {
    id: "kia-sportage",
    nombre: "Kia Sportage",
    descripcion: "SUV 4x4 amplio y cómodo, ideal para viajes en familia por toda la isla.",
    anio: 2023,
    plazas: 5,
    cambio: "Manual",
    combustible: "Gasolina",
    precioDesde: 45,
    amovensUrl: "https://amovens.com/cars/2412025",
    imagen: "/coches/kia.jpg",
    caracteristicas: [
      { icono: "🛞", texto: "Neumáticos de verano" },
      { icono: "❄️", texto: "Aire acondicionado" },
      { icono: "👶", texto: "Fijaciones Isofix" },
      { icono: "🎵", texto: "Bluetooth, AUX/USB" },
      { icono: "🚙", texto: "Tracción 4x4" },
    ],
  },
  {
    id: "peugeot-2008",
    nombre: "Peugeot 2008 SUV",
    descripcion: "SUV compacto Allure Pack 1.5 BlueHDi 110. Eficiente y ágil para recorrer toda Mallorca.",
    anio: 2021,
    plazas: 5,
    cambio: "Manual",
    combustible: "Diésel",
    precioDesde: 40,
    amovensUrl: "https://amovens.com/cars/2455360",
    imagen: "/coches/2008.jpg",
    // Lista opcional de equipamiento. Cada { icono, texto } es una línea.
    caracteristicas: [
      { icono: "🛞", texto: "Neumáticos de verano" },
      { icono: "❄️", texto: "Aire acondicionado" },
      { icono: "🎵", texto: "Bluetooth, AUX/USB" },
      { icono: "📱", texto: "Apple CarPlay y Android Auto" },
      { icono: "⏱️", texto: "Control de velocidad" },
    ],
  },
  {
    id: "peugeot-208",
    nombre: "Peugeot 208 GT",
    descripcion: "Compacto GT PureTech 100 en blanco. Ideal para ciudad y fácil de aparcar.",
    anio: 2023,
    plazas: 5,
    cambio: "Manual",
    combustible: "Gasolina",
    precioDesde: 40,
    amovensUrl: "https://amovens.com/cars/2129545",
    imagen: "/coches/208gt.jpg",
    caracteristicas: [
      { icono: "❄️", texto: "Aire acondicionado" },
      { icono: "🎵", texto: "Bluetooth, AUX/USB" },
      { icono: "📱", texto: "Apple CarPlay y Android Auto" },
      { icono: "⏱️", texto: "Control de velocidad" },
      { icono: "🛞", texto: "Neumáticos de verano" },
    ],
  },
];

// Cambia esto por tu dominio real cuando publiques la web.
const SITE_URL = "https://www.mallorcarentals.com";

// Datos estructurados: lista de coches como "Productos" con su precio.
// Google lo lee para mostrar precio e imagen directamente en los resultados.
const listaProductosJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: coches.map((coche, indice) => ({
    "@type": "ListItem",
    position: indice + 1,
    item: {
      "@type": "Product",
      name: coche.nombre,
      description: coche.descripcion,
      image: `${SITE_URL}${coche.imagen}`,
      offers: {
        "@type": "Offer",
        price: coche.precioDesde,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: coche.amovensUrl,
      },
    },
  })),
};

// Preguntas frecuentes: Google puede mostrarlas desplegables bajo tu resultado.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo recoger el coche de alquiler en el aeropuerto de Palma de Mallorca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Ofrecemos la opción de entrega del coche en el Aeropuerto de Son Sant Joan (Palma de Mallorca).",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta alquilar un coche en Mallorca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestros coches de alquiler en Mallorca están disponibles desde 40€ al día, según el modelo y la temporada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se reserva el coche?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pulsa en «Reservar en Amovens» en el coche que quieras y completa la reserva de forma segura a través de Amovens.",
      },
    },
  ],
};

export default function CochesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Datos estructurados para Google (no se ven en la página) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listaProductosJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Cabecera / hero */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
          Alquiler de coches en Mallorca
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Explora la isla a tu ritmo. Reserva tu coche a través de Amovens de forma
          fácil, rápida y al mejor precio.
        </p>

        {/* Aviso de entrega en el aeropuerto */}
        <div className="mt-6 max-w-2xl mx-auto flex items-start gap-3 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-left backdrop-blur-sm">
          <span className="text-xl" aria-hidden="true">✈️</span>
          <p className="text-sm text-cyan-100">
            <span className="font-semibold text-cyan-300">Entrega en el aeropuerto:</span> con opción de entrega en el
            Aeropuerto de Son Sant Joan (Palma de Mallorca).
          </p>
        </div>
      </header>

      {/* Rejilla de coches */}
      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {coches.map((coche) => (
          <article
            key={coche.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-cyan-500/15 bg-slate-900/60 shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-cyan-500/20"
          >
            {/* Foto principal del coche */}
            <img
              src={coche.imagen}
              alt={`${coche.nombre} de alquiler en Mallorca con entrega en el aeropuerto de Palma`}
              className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Contenido de la tarjeta */}
            <div className="flex flex-col flex-1 p-5">
              <h2 className="text-xl font-semibold text-white mb-1">{coche.nombre}</h2>
              <p className="text-slate-400 text-sm mb-4">{coche.descripcion}</p>

              {/* Características como etiquetas */}
              <ul className="flex flex-wrap gap-2 text-sm mb-5">
                <li className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-200">{coche.plazas} plazas</li>
                <li className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-200">{coche.cambio}</li>
                <li className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-200">{coche.combustible}</li>
                <li className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-cyan-200">{coche.anio}</li>
              </ul>

              {/* Equipamiento con iconos (solo si el coche lo tiene) */}
              {coche.caracteristicas && (
                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-slate-200 mb-2">Características</h3>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {coche.caracteristicas.map((item) => (
                      <li key={item.texto} className="flex items-center gap-2">
                        <span aria-hidden="true">{item.icono}</span>
                        <span>{item.texto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Precio + botón, empujados al fondo */}
              <div className="mt-auto">
                <p className="mb-3">
                  <span className="text-sm text-slate-400">Desde </span>
                  <span className="text-2xl font-bold text-white">{coche.precioDesde}€</span>
                  <span className="text-sm text-slate-400"> / día</span>
                </p>
                <a
                  href={coche.amovensUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-400/40"
                >
                  Reservar en Amovens
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Contenido SEO: texto con palabras clave que Google lee */}
      <section className="mt-16 max-w-3xl mx-auto text-slate-300 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Alquiler de coches barato en Palma de Mallorca
          </h2>
          <p>
            ¿Buscas <strong className="text-cyan-300">alquiler de coches en Mallorca</strong>? Ofrecemos coches de
            alquiler económicos en <strong className="text-cyan-300">Palma de Mallorca</strong> con opción de{" "}
            <strong className="text-cyan-300">entrega en el aeropuerto de Son Sant Joan</strong>. Elige entre un SUV
            Kia Sportage 4x4, un Peugeot 2008 diésel o un Peugeot 208, todos con seguro y
            una reserva sencilla y segura a través de Amovens. Precios desde 40€ al día,
            sin sorpresas ni cargos ocultos.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Preguntas frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-100">
                ¿Puedo recoger el coche en el aeropuerto de Palma de Mallorca?
              </h3>
              <p>
                Sí. Ofrecemos la opción de entrega del coche en el Aeropuerto de Son Sant
                Joan (Palma de Mallorca).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">
                ¿Cuánto cuesta alquilar un coche en Mallorca?
              </h3>
              <p>
                Nuestros coches de alquiler en Mallorca están disponibles desde 40€ al día,
                según el modelo y la temporada.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">¿Cómo se reserva el coche?</h3>
              <p>
                Pulsa en «Reservar en Amovens» en el coche que quieras y completa la reserva
                de forma segura a través de Amovens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}