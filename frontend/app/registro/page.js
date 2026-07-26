"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../utils/supabase/client";

export default function RegistroPage() {
  const router = useRouter();
  const supabase = createClient();

  // Estado: lo que el usuario va escribiendo + mensajes de error/carga.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleRegister(e) {
    e.preventDefault(); // evita que el formulario recargue la página
    setError(null);
    setLoading(true);

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      // Algo falló: email ya registrado, contraseña débil, etc.
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // Registro correcto. Con "Confirm email" desactivado, el usuario ya
    // tiene sesión. refresh() actualiza los server components (p.ej. el
    // Navbar) para que reflejen que ya está logueado, y luego redirigimos.
    router.push("/");
    router.refresh();
  }

  async function handleGoogleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-sm bg-slate-900/60 border border-cyan-500/20 rounded-2xl p-8 space-y-5"
      >
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Crear cuenta
        </h1>

        <div className="space-y-1">
          <label className="text-sm text-slate-300">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 focus:outline-none focus:border-cyan-400"
            placeholder="tu@email.com"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-slate-300">Contraseña</label>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-slate-100 focus:outline-none focus:border-cyan-400"
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 py-2 font-semibold text-white hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Creando..." : "Registrarse"}
        </button>

        {/* Separador */}
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-700" />
          <span className="text-xs text-slate-500">o</span>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        {/* Botón de Google. type="button" es imprescindible: evita que,
            al estar dentro del <form>, dispare el submit de registro. */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 rounded-lg bg-slate-800 border border-slate-700 py-2 font-medium text-slate-100 hover:bg-slate-700 transition"
        >
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.5 0-13.9 4.3-17.1 10.7z"/>
            <path fill="#4CAF50" d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.6C29.6 35 26.9 36 24 36c-5.3 0-9.7-3.1-11.3-7.5l-6.6 5.1C9.9 39.6 16.4 44 24 44z"/>
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.6 5.6C39.5 37.5 44 31.5 44 24c0-1.3-.1-2.7-.4-3.5z"/>
          </svg>
          Continuar con Google
        </button>

        <p className="text-center text-sm text-slate-400">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Inicia sesión
          </a>
        </p>
      </form>
    </main>
  );
}