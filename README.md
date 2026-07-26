# Mallorca Rentals

Pagina web de **alquiler de coches de Amovens**, **alquiler de barcos** y **guia de Mallorca para viajeros**.

## Que es este proyecto

- **Alquiler de coches Amovens**: Pagina donde los usuarios pueden explorar y reservar coches a traves de Amovens en Mallorca.
- **Alquiler de barcos**: Seccion dedicada al alquiler de embarcaciones en la isla.
- **Guia de Mallorca**: Contenido orientado a viajeros con recomendaciones, rutas, playas, restaurantes y consejos practicos para visitar Mallorca.
- **SEO first**: La web esta disenada para posicionar bien en Google en busquedas como "alquiler coches mallorca", "alquiler barcos mallorca", "guia mallorca viajeros".

## Tech Stack

### Frontend
- **Next.js 15** (App Router) - renderizado en servidor para SEO
- **React 19** - libreria de componentes UI
- **Tailwind CSS 4** - estilos utility-first
- **PostCSS** - procesador de CSS

### Backend
- **FastAPI** (Python) - API REST
- **Uvicorn** - servidor ASGI

## Estructura del proyecto

```
├── backend/
│   ├── app/
│   │   └── main.py              # Aplicacion FastAPI con endpoints API
│   └── requirements.txt         # Dependencias Python (fastapi, uvicorn)
├── frontend/
│   ├── app/
│   │   ├── layout.js            # Layout global + metadatos SEO (title, description)
│   │   ├── page.js              # Pagina principal (ruta /)
│   │   └── globals.css          # Importacion de Tailwind CSS
│   ├── components/
│   │   └── Navbar.js            # Barra de navegacion responsive (desktop + mobile)
│   ├── postcss.config.mjs       # Configuracion de PostCSS para Tailwind
│   └── package.json
├── run_backend.py               # Script para arrancar el servidor backend
├── .gitignore
└── README.md
```

## Como funciona el enrutado

Next.js usa **enrutado basado en archivos**. Cada carpeta dentro de `app/` con un `page.js` se convierte en una ruta:

| Archivo | URL |
|---------|-----|
| `app/page.js` | `/` (pagina principal) |
| `app/coches/page.js` | `/coches` |
| `app/barcos/page.js` | `/barcos` |
| `app/contacto/page.js` | `/contacto` |

Solo hay que crear la carpeta y el archivo `page.js` dentro. No hay que configurar rutas en ningun lado.

## Como funciona la comunicacion Frontend <-> Backend

El frontend (puerto 3000) llama al backend (puerto 8000) con `fetch`:

```js
const res = await fetch("http://localhost:8000/api/hola");
const data = await res.json();
```

El backend tiene endpoints que devuelven JSON:

```python
@app.get("/api/hola")
def hola():
    return {"mensaje": "Hola desde el backend"}
```

Para produccion, cambiar `http://localhost:8000` por la URL real del backend.

## Como arrancar el proyecto

### Backend

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

El backend corre en `http://localhost:8000`

Documentacion automatica de la API en `http://localhost:8000/docs`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend corre en `http://localhost:3000`

## Comandos utiles

| Comando | Que hace |
|---------|----------|
| `npm run dev` | Arranca Next.js en modo desarrollo (puerto 3000) |
| `npm run build` | Construye la version de produccion |
| `npm start` | Arranca la version de produccion construida |
| `python -m uvicorn app.main:app --reload` | Arranca FastAPI con auto-reload |

## SEO

Next.js genera HTML en el servidor, lo que significa que Google ve todo el contenido directamente (a diferencia de React puro donde el contenido se genera con JavaScript en el cliente).

- **Metadatos**: definidos en `app/layout.js` con `export const metadata` (title, description)
- **Semantic HTML**: usar etiquetas semanticas (`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`) en cada pagina
- **Proximos pasos para SEO**: sitemap.xml, robots.txt, Schema.org (datos estructurados), Open Graph tags, imagenes con alt, URLs amigables, contenido optimizado con keywords relevantes

## Notas para desarrolladores / IA

- Los componentes que usan `useState`, `useEffect` o cualquier hook de React necesitan `"use client";` en la primera linea
- Los componentes sin hooks son **Server Components** por defecto (mejor para SEO y rendimiento)
- Tailwind CSS se usa con clases directamente en el JSX (`className="text-xl font-bold text-gray-900"`)
- El Navbar ya esta integrado en `layout.js`, asi que aparece en todas las paginas
- Para anadir una nueva pagina: crear carpeta en `app/` con `page.js` dentro
