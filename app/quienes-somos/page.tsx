import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Quiénes somos — CrediViva Panamá",
  description: "CrediViva es una fintech panameña fundada en 2023. Más de $30M desembolsados, +50,000 créditos y +200 comercios aliados.",
};

const stats = [
  { num: "$30M+", label: "desembolsados" },
  { num: "50K+", label: "créditos otorgados" },
  { num: "200+", label: "comercios aliados" },
  { num: "50+", label: "colaboradores" },
];

const valores = [
  { titulo: "Claridad", desc: "Sin letra pequeña. Sin sorpresas. Siempre sabes exactamente qué pagas." },
  { titulo: "Control", desc: "El cliente decide cuánto, cuándo y cómo. Siempre." },
  { titulo: "Acceso", desc: "Crédito para panameños que el sistema financiero tradicional dejó fuera." },
  { titulo: "Tecnología", desc: "100% digital, rápido y desde tu celular. Sin filas ni oficinas." },
];

export default function QuienesSomosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #3A39FF, #BA56EF)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-[#C3FD0C] text-black text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            🇵🇦 Somos panameños
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-2xl">
            Una fintech hecha en Panamá,{" "}
            <span className="text-gradient-blue">para los panameños.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            Nacimos en 2023 con una misión clara: darle acceso a crédito a
            personas que el sistema financiero tradicional dejó fuera.
            Sin bancos, sin tarjetas, sin papeleos.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#3A39FF] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-white mb-1">{stat.num}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISIÓN */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-4 leading-tight">
                Nuestra misión es simple:<br />
                <span className="text-gradient-blue">democratizar el crédito.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                En Panamá, millones de personas trabajan, producen y consumen —
                pero no tienen acceso a crédito porque no cumplen con los
                requisitos de la banca tradicional.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                CrediViva llegó para cambiar eso. Con tecnología, procesos
                simples y cuotas fijas, llevamos crédito a donde antes no llegaba.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Hoy operamos en Panamá y República Dominicana, con más de
                $30 millones desembolsados y más de 50,000 créditos otorgados.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {valores.map((v) => (
                <div key={v.titulo} className="bg-[#F5F5F7] rounded-2xl p-5 border border-gray-100">
                  <h3 className="font-black text-base mb-1">{v.titulo}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DÓNDE ESTAMOS */}
      <section className="bg-[#F5F5F7] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-8 text-center">Dónde estamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              {
                pais: "🇵🇦 Panamá",
                desc: "Sede principal. Fundación Ciudad del Saber, Clayton, Ciudad de Panamá.",
                desde: "Desde 2023",
              },
              {
                pais: "🇩🇴 República Dominicana",
                desc: "Operaciones activas con comercios y usuarios en expansión.",
                desde: "En operación",
              },
            ].map((loc) => (
              <div key={loc.pais} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#3A39FF] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-black text-base mb-1">{loc.pais}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-2">{loc.desc}</p>
                    <span className="inline-flex bg-[#3A39FF]/10 text-[#3A39FF] text-xs font-bold px-3 py-1 rounded-full">
                      {loc.desde}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALADOS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-black mb-2">Regulados y avalados</h2>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
            Operamos con total transparencia bajo la supervisión de las autoridades panameñas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
            {[
              {
                nombre: "Superintendencia del Mercado de Valores",
                desc: "República de Panamá — regulación y supervisión financiera.",
              },
              {
                nombre: "Fundación Ciudad del Saber",
                desc: "Clayton, Panamá — sede de operaciones e innovación.",
              },
            ].map((ent) => (
              <div key={ent.nombre} className="bg-[#F5F5F7] rounded-2xl p-5 border border-gray-100 text-left">
                <div className="w-8 h-8 rounded-full bg-[#3A39FF]/10 flex items-center justify-center mb-3">
                  <span className="text-[#3A39FF] text-xs font-black">✓</span>
                </div>
                <h3 className="font-black text-sm mb-1">{ent.nombre}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{ent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #C3FD0C 0%, #00F4FF 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-3">
            ¿Quieres ser parte de CrediViva?
          </h2>
          <p className="text-black/60 text-sm mb-8 max-w-sm mx-auto">
            Como cliente o como comercio aliado.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://qr.kubbesa.net/production/commerce-qr?dataQR=web-pty"
              target="_blank"
              rel="noopener noreferrer"
              data-track="app_download_click"
              data-location="quienes_somos_cta"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full text-sm hover:bg-gray-900 transition-all"
            >
              Descarga la app
            </a>
            <Link
              href="/para-comercios"
              data-track="comercios_click"
              data-location="quienes_somos_cta"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full text-sm hover:bg-gray-50 transition-all"
            >
              Soy comercio <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
