"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "../utils/supabase/client";

export default function Navbar({ user: initialUser }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  // Empezamos con el usuario que nos pasó el servidor (layout.js), y nos
  // suscribimos a los cambios de sesión para reaccionar al instante cuando
  // alguien entra o sale sin recargar la página entera.
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    // Limpieza: cancelamos la suscripción cuando el componente se desmonta.
    return () => subscription.unsubscribe();
  }, [supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Coches", href: "/coches" },
    { label: "Barcos", href: "/barcos" },
    { label: "Guía Mallorca", href: "/guia" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
        >
          MallorcaTour.es
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Zona de sesión (escritorio) */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400">{user.email}</span>
              <button
                onClick={handleLogout}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Salir
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Iniciar sesión
              </Link>
              <Link
                href="/registro"
                className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1.5 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Registrarse
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-200 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-200 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-200 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-cyan-500/20 bg-slate-950/95 backdrop-blur-md">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Zona de sesión (móvil) */}
          <div className="border-t border-cyan-500/20">
            {user ? (
              <>
                <span className="block px-4 py-3 text-sm text-slate-400">
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                >
                  Salir
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/registro"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
