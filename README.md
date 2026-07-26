# Mallorca Rentals

Pagina web de **alquiler de coches de Amovens**, **alquiler de barcos** y **guia de Mallorca para viajeros**.

## Que es este proyecto

- **Alquiler de coches Amovens**: Pagina donde los usuarios pueden explorar y reservar coches a traves de Amovens en Mallorca.
- **Alquiler de barcos**: Seccion dedicada al alquiler de embarcaciones en la isla.
- **Guia de Mallorca**: Contenido orientado a viajeros con recomendaciones, rutas, playas, restaurantes y consejos practicos para visitar Mallorca.
- **SEO first**: La web esta disenada para posicionar bien en Google en busquedas como "alquiler coches mallorca", "alquiler barcos mallorca", "guia mallorca viajeros".
- **Cuentas de usuario**: Registro e inicio de sesion con email/contrasena mediante Supabase (Google OAuth pendiente).

## Tech Stack

### Frontend
- **Next.js 15** (App Router) - renderizado en servidor para SEO
- **React 19** - libreria de componentes UI
- **Tailwind CSS 4** - estilos utility-first
- **PostCSS** - procesador de CSS

### Backend
- **FastAPI** (Python) - API REST
- **Uvicorn** - servidor ASGI

### Autenticacion
- **Supabase Auth** - registro, login y gestion de sesiones
- **@supabase/ssr** - integracion de sesiones con el App Router (cookies)

## Estructura del proyecto

```
├── backend/
│   ├── app/
│   │   └── main.py              # Aplicacion FastAPI con endpoints API
│   └── requirements.txt         # Dependencias Python (fastapi, uvicorn)
├── frontend/
│   ├── app/
│   │   ├── layout.js            # Layout global + metadatos SEO. Lee el usuario y lo pasa al Navbar
│   │   ├── page.js              # Pagina principal (ruta /)
│   │   ├── globals.css          # Importacion de Tailwind CSS
│   │   ├── registro/page.js     # Formulario de registro (supabase.auth.signUp)
│   │   └── login/page.js        # Formulario de login (signInWithPassword)
│   ├── components/
│   │   └── Navbar.js            # Navegacion responsive + estado de sesion (login/logout)
│   ├── utils/supabase/
│   │   ├── client.js            # Cliente Supabase para el NAVEGADOR (client components)
│   │   ├── server.js            # Cliente Supabase para el SERVIDOR (server components, layouts)
│   │   └── middleware.js        # Ayudante que refresca la sesion en cada peticion
│   ├── middleware.js            # Middleware de Next.js (llama al ayudante de refresco)
│   ├── .env.example             # Plantilla de variables de entorno (copiar a .env.local)
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
| `app/guia/page.js` | `/guia` |
| `app/registro/page.js` | `/registro` |
| `app/login/page.js` | `/login` |

Solo hay que crear la carpeta y el archivo `page.js` dentro. No hay que configurar rutas en ningun lado.

## Autenticacion (Supabase)

El proyecto usa **Supabase Auth** para registro, login y gestion de sesiones. La sesion se guarda en **cookies** para que funcione tanto en el navegador como en el servidor de Next.js (App Router).

### Variables de entorno

Copia `frontend/.env.example` a `frontend/.env.local` y rellena los valores del panel de Supabase (Project Settings -> API Keys):

```
NEXT_PUBLIC_SUPABASE_URL=https://TU-PROYECTO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-o-publishable-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key-secreta   # solo servidor, aun sin uso
```

- Las variables `NEXT_PUBLIC_*` se envian al navegador (son publicas). La `anon`/`publishable` key es segura de exponer **siempre que RLS este bien configurado**.
- La `SUPABASE_SERVICE_ROLE_KEY` es la llave maestra (se salta RLS): **nunca** debe llevar el prefijo `NEXT_PUBLIC_` ni acabar en el navegador.
- `.env.local` esta en `.gitignore`, asi que las claves no se suben a GitHub.

### Piezas y responsabilidades

| Archivo | Corre en | Responsabilidad |
|---------|----------|-----------------|
| `utils/supabase/client.js` | Navegador | Cliente para formularios y botones (login, registro, logout) |
| `utils/supabase/server.js` | Servidor | Leer la sesion en server components y layouts |
| `utils/supabase/middleware.js` | Servidor | Refrescar el token en cada peticion |
| `middleware.js` | Servidor | Punto de entrada que Next.js ejecuta por peticion |

### Flujo

1. **Registro** (`/registro`): `supabase.auth.signUp({ email, password })` crea el usuario.
2. **Login** (`/login`): `supabase.auth.signInWithPassword({ email, password })` autentica.
3. **Sesion**: el `middleware.js` refresca el access token (caduca ~1h) usando el refresh token, de forma transparente.
4. **Navbar**: el `layout.js` (servidor) lee el usuario con `supabase.auth.getUser()` y se lo pasa al `Navbar`, que ademas escucha cambios en vivo con `onAuthStateChange`.
5. **Logout**: `supabase.auth.signOut()` desde el Navbar.

### Configuracion en el panel de Supabase

- **Authentication -> Providers -> Email**: durante el desarrollo se desactivo **"Confirm email"** para entrar directo al registrarse. **Reactivar antes de produccion.**
- Los usuarios registrados aparecen en **Authentication -> Users**.

### Pendiente

- **Google OAuth**: requiere credenciales en Google Cloud Console, configurarlas en Supabase y anadir una ruta de callback (`app/auth/callback/route.js`).
- **Proteccion de rutas**: restringir paginas a usuarios logueados.
- **Backend**: que FastAPI verifique el JWT de Supabase en endpoints protegidos.

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
cp .env.example .env.local   # luego rellena tus claves de Supabase
npm run dev
```

El frontend corre en `http://localhost:3000`

> Nota (Windows CMD): usa `copy .env.example .env.local` en vez de `cp`.

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
- **Auth**: en client components importa el cliente desde `utils/supabase/client.js`; en server components/layouts, desde `utils/supabase/server.js`. No los mezcles
- Nunca pongas secretos detras del prefijo `NEXT_PUBLIC_` (se envia al navegador)
