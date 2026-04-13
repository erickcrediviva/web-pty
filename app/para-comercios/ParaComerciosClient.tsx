"use client";

import { useState } from "react";
import { ArrowRight, TrendingUp, Users, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const CIUDADES = ["Ciudad de Panamá", "Colón", "David", "Santiago", "Chitré", "La Chorrera", "Penonomé", "Otra"];

const CATEGORIAS = [
  { value: "tecnologia", label: "Tecnología" },
  { value: "linea_blanca", label: "Línea blanca" },
  { value: "moda", label: "Moda" },
  { value: "hogar", label: "Hogar" },
  { value: "salud", label: "Salud" },
  { value: "deportes", label: "Deportes" },
  { value: "otros", label: "Otros" },
];

const NUM_SUCURSALES = ["1", "2-5", "6-10", "+10"];

const beneficios = [
  {
    icon: TrendingUp,
    title: "Más ventas",
    desc: "Tus clientes compran más cuando pueden pagar en cuotas fijas.",
  },
  {
    icon: Users,
    title: "Nuevos clientes",
    desc: "Llegas a personas que hoy no pueden pagarte de contado.",
  },
  {
    icon: ShieldCheck,
    title: "Sin riesgo para ti",
    desc: "CrediViva asume el riesgo de crédito. Tú recibes tu pago.",
  },
];

type FormData = {
  nombre_contacto: string;
  nombre_comercio: string;
  telefono: string;
  email: string;
  ciudad: string;
  categoria: string;
  num_sucursales: string;
  mensaje: string;
};

const EMPTY_FORM: FormData = {
  nombre_contacto: "",
  nombre_comercio: "",
  telefono: "",
  email: "",
  ciudad: "",
  categoria: "",
  num_sucursales: "",
  mensaje: "",
};

export default function ParaComerciosClient() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads_comercios`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          nombre_contacto: form.nombre_contacto,
          nombre_comercio: form.nombre_comercio,
          telefono: form.telefono,
          email: form.email || null,
          ciudad: form.ciudad || null,
          categoria: form.categoria || null,
          num_sucursales: form.num_sucursales || null,
          mensaje: form.mensaje || null,
          status: "lead",
          fuente: "web_para_comercios",
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("Supabase error:", errText);
        throw new Error("Error al enviar. Intenta de nuevo.");
      }

      setSuccess(true);
      setForm(EMPTY_FORM);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#3A39FF] focus:ring-2 focus:ring-[#3A39FF]/10 transition-all placeholder:text-gray-400";

  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #C3FD0C, #3A39FF)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-[#C3FD0C] text-black text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            Para comercios
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-2xl">
            Vende más.{" "}
            <span className="text-gradient-blue">Sin asumir el riesgo.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            Únete a la red de comercios aliados de CrediViva y ofrece crédito en
            cuotas fijas a tus clientes. Tú vendes, nosotros gestionamos el crédito.
          </p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-[#F5F5F7] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {beneficios.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3A39FF]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#3A39FF]" />
                  </div>
                  <h3 className="font-black text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA PARA EL COMERCIO */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-8 text-center">
            ¿Cómo funciona para tu negocio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { n: "01", text: "Te registras como comercio aliado" },
              { n: "02", text: "Tu equipo recibe capacitación" },
              { n: "03", text: "El cliente paga con CrediViva en tu tienda" },
              { n: "04", text: "Tú recibes el pago. CrediViva cobra las cuotas." },
            ].map((step, i) => (
              <div key={step.n} className="flex flex-col items-center text-center">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black mb-3 text-white"
                  style={{
                    background:
                      i === 0
                        ? "#3A39FF"
                        : i === 1
                        ? "#BA56EF"
                        : i === 2
                        ? "#00F4FF"
                        : "#C3FD0C",
                    color: i === 3 ? "#000" : "#fff",
                  }}
                >
                  {step.n}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
                {i < 3 && (
                  <ArrowRight
                    size={16}
                    className="text-gray-300 mt-3 hidden md:block rotate-0"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[#F5F5F7] py-16" id="contacto">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-2">¿Quieres ser comercio aliado?</h2>
            <p className="text-gray-500 text-sm">
              Déjanos tus datos y te contactamos en menos de 48 horas.
            </p>
          </div>

          {success ? (
            <div className="bg-white rounded-3xl p-10 border border-gray-100 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#C3FD0C] rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-black" />
              </div>
              <h3 className="font-black text-xl mb-2">¡Recibimos tu solicitud!</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">
                Un asesor de CrediViva te contactará en menos de 48 horas.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="text-[#3A39FF] font-semibold text-sm hover:underline"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              data-track="form_submit"
              data-form="para_comercios"
              className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col gap-5"
            >
              {/* Requeridos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Nombre de contacto <span className="text-[#3A39FF]">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre_contacto"
                    value={form.nombre_contacto}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Nombre del comercio <span className="text-[#3A39FF]">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre_comercio"
                    value={form.nombre_comercio}
                    onChange={handleChange}
                    required
                    placeholder="Nombre de tu negocio"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Teléfono <span className="text-[#3A39FF]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                    placeholder="+507 6000-0000"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className={labelClass}>Ciudad</label>
                  <select
                    name="ciudad"
                    value={form.ciudad}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Selecciona</option>
                    {CIUDADES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Categoría</label>
                  <select
                    name="categoria"
                    value={form.categoria}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Selecciona</option>
                    {CATEGORIAS.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Sucursales</label>
                  <select
                    name="num_sucursales"
                    value={form.num_sucursales}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Selecciona</option>
                    {NUM_SUCURSALES.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Mensaje (opcional)</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Cuéntanos sobre tu negocio o cualquier pregunta..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl px-4 py-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                data-track="form_submit"
                data-location="para_comercios"
                className="flex items-center justify-center gap-2 bg-[#3A39FF] text-white font-bold py-4 rounded-2xl hover:bg-[#2928e0] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quiero ser comercio aliado
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Al enviar, aceptas que CrediViva te contacte sobre esta solicitud.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="bg-[#3A39FF] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-black text-white mb-2">
            Más de 100 comercios ya confían en CrediViva.
          </h2>
          <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
            Desde tiendas de tecnología hasta farmacias. Si vendes, CrediViva te ayuda a vender más.
          </p>
          <a
            href="/donde-comprar"
            data-track="store_locator_click"
            data-location="para_comercios_bottom"
            className="inline-flex items-center gap-2 bg-[#C3FD0C] text-black font-bold px-6 py-3 rounded-full hover:brightness-95 transition-all text-sm"
          >
            Ver comercios aliados <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
