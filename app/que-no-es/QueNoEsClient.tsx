"use client";

import Link from "next/link";
import { ArrowRight, X, Check } from "lucide-react";

const comparisons = [
  {
    tema: "Deuda",
    noEs: "No acumulas deuda rotativa que crece si no pagas el mínimo.",
    siEs: "Cuotas fijas que no cambian. Sabes desde el día 1 cuánto pagas en total.",
    icono: "💳",
  },
  {
    tema: "Banco",
    noEs: "No necesitas cuenta bancaria, historial crediticio extenso ni papeleos.",
    siEs: "Un proceso simple desde tu celular con tu cédula panameña.",
    icono: "🏦",
  },
  {
    tema: "Tarjeta",
    noEs: "No es una tarjeta física ni virtual. No puedes usarla en cualquier lugar.",
    siEs: "Funciona solo en comercios aliados CrediViva. Eso lo hace claro y controlado.",
    icono: "💳",
  },
  {
    tema: "Intereses sorpresa",
    noEs: "No hay tasas que no entiendas ni cobros que aparecen después.",
    siEs: "El total lo ves antes de confirmar la compra. Sin letra pequeña.",
    icono: "📋",
  },
  {
    tema: "Préstamo en efectivo",
    noEs: "No te depositamos plata en tu cuenta ni te damos dinero en mano.",
    siEs: "El crédito se usa directamente en la tienda, en el momento de la compra.",
    icono: "💵",
  },
  {
    tema: "Centro de soporte",
    noEs: "El sitio web no gestiona tu cuenta, no muestra tu cupo ni tus pagos.",
    siEs: "Todo eso lo encuentras en la app. La app es tu centro de control.",
    icono: "📱",
  },
];

const mitos = [
  {
    mito: "\"Tengo que tener buen historial crediticio\"",
    realidad: "CrediViva evalúa tu perfil de forma diferente a un banco tradicional.",
  },
  {
    mito: "\"Si no pago una cuota me llegan intereses extra\"",
    realidad: "Las cuotas son fijas. Contáctanos antes de la fecha si tienes problemas.",
  },
  {
    mito: "\"Puedo usarlo en cualquier tienda\"",
    realidad: "Solo en comercios aliados. Eso garantiza que el proceso funcione bien.",
  },
  {
    mito: "\"Es como un crédito bancario, con mucho papeleo\"",
    realidad: "El registro es desde tu celular en minutos. Sin visitar ninguna oficina.",
  },
];

export default function QueNoEsClient() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 pb-14">
        <div
          aria-hidden
          className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #BA56EF, #3A39FF)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            Sin letra pequeña
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-2xl">
            Claridad total.<br />
            <span className="text-gradient-blue">Esto es lo que NO es CrediViva.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            Antes de usar CrediViva, queremos que entiendas exactamente qué es
            y qué no es. Sin sorpresas. Sin letra pequeña.
          </p>
        </div>
      </section>

      {/* COMPARACIONES */}
      <section className="bg-[#F5F5F7] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-2 text-center">Punto por punto</h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Lo que CrediViva no es — y lo que sí es en su lugar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comparisons.map((c) => (
              <div key={c.tema} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                {/* NO ES */}
                <div className="p-5 border-b border-gray-50">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={13} className="text-red-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-red-400 uppercase tracking-wider mb-1">
                        No es
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{c.noEs}</p>
                    </div>
                  </div>
                </div>
                {/* SÍ ES */}
                <div className="p-5 bg-[#3A39FF]/[0.03]">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#3A39FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={13} className="text-[#3A39FF]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-[#3A39FF] uppercase tracking-wider mb-1">
                        Sí es
                      </div>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{c.siEs}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MITOS */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-2 text-center">Mitos frecuentes</h2>
          <p className="text-gray-500 text-sm text-center mb-10">
            Cosas que la gente cree — y cómo es realmente.
          </p>
          <div className="flex flex-col gap-4">
            {mitos.map((m, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden">
                <div className="flex items-start gap-3 p-5 bg-[#F5F5F7]">
                  <X size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-500 italic">{m.mito}</p>
                </div>
                <div className="flex items-start gap-3 p-5 bg-white">
                  <Check size={16} className="text-[#3A39FF] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">{m.realidad}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESUMEN VISUAL */}
      <section className="bg-[#F5F5F7] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-8 text-center">En resumen</h2>
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* NO ES */}
              <div className="p-7">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <X size={14} className="text-red-400" />
                  </div>
                  <h3 className="font-black text-base text-red-400">CrediViva NO es</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Una tarjeta de crédito",
                    "Un banco",
                    "Un préstamo en efectivo",
                    "Deuda rotativa",
                    "Algo con letra pequeña",
                    "Para usar en cualquier tienda",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                      <X size={13} className="text-red-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* SÍ ES */}
              <div className="p-7">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full bg-[#3A39FF]/10 flex items-center justify-center">
                    <Check size={14} className="text-[#3A39FF]" />
                  </div>
                  <h3 className="font-black text-base text-[#3A39FF]">CrediViva SÍ es</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Crédito en cuotas fijas y claras",
                    "Simple de entender y usar",
                    "Para comprar en tiendas aliadas",
                    "Sin sorpresas ni cobros ocultos",
                    "Todo desde tu celular",
                    "Control total de tu gasto",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <Check size={13} className="text-[#3A39FF] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #3A39FF 0%, #00F4FF 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            ¿Ya tienes todo claro?
          </h2>
          <p className="text-white/80 text-sm mb-8 max-w-sm mx-auto">
            Descarga la app y empieza a comprar en cuotas fijas hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <a
              href="https://qr.kubbesa.net/production/commerce-qr?dataQR=web-pty"
              target="_blank"
              rel="noopener noreferrer"
              data-track="app_download_click"
              data-platform="ios"
              data-location="que_no_es_cta"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#3A39FF] font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-all text-sm"
            >
              App Store (iOS)
            </a>
            <a
              href="https://qr.kubbesa.net/production/commerce-qr?dataQR=web-pty"
              target="_blank"
              rel="noopener noreferrer"
              data-track="app_download_click"
              data-platform="android"
              data-location="que_no_es_cta"
              className="inline-flex items-center justify-center gap-2 bg-[#C3FD0C] text-black font-bold px-8 py-4 rounded-full hover:brightness-95 transition-all text-sm"
            >
              Google Play (Android)
            </a>
          </div>
          <Link
            href="/como-funciona"
            data-track="how_it_works_click"
            data-location="que_no_es_cta"
            className="inline-flex items-center gap-1 text-white/70 text-sm hover:text-white transition-colors"
          >
            Ver cómo funciona <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
