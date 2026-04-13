"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Smartphone, Store, CreditCard, ChevronDown, ChevronUp } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Descarga la app de CrediViva",
    desc: "Regístrate con tu cédula panameña. Sin formularios largos, sin visitas al banco. Todo desde tu celular en minutos.",
    detail: "Solo necesitas tu cédula panameña y tu celular. El proceso toma menos de 5 minutos.",
    color: "#3A39FF",
  },
  {
    icon: Store,
    number: "02",
    title: "Ve a un comercio aliado",
    desc: "Elige la tienda donde quieres comprar. Muéstrale tu app al vendedor y dile que quieres pagar con CrediViva.",
    detail: "El vendedor genera la transacción desde su sistema. Tú apruebas desde tu app. Sin tarjeta física.",
    color: "#BA56EF",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Paga en cuotas fijas cada mes",
    desc: "Sabes exactamente cuánto pagas cada mes. El monto no cambia. Sin intereses sorpresa, sin letra pequeña.",
    detail: "Recibes recordatorios antes de cada pago. Puedes consultar tu estado en la app cuando quieras.",
    color: "#C3FD0C",
  },
];

const faqs = [
  {
    q: "¿Necesito historial crediticio?",
    a: "No necesariamente. CrediViva evalúa tu perfil de forma diferente a un banco tradicional.",
  },
  {
    q: "¿Cuánto tiempo tarda la aprobación?",
    a: "El proceso de registro y evaluación es rápido. Lo sabrás desde la app.",
  },
  {
    q: "¿Puedo usar CrediViva en cualquier tienda?",
    a: "Solo en comercios aliados de CrediViva en Panamá. Puedes ver el listado completo en 'Dónde comprar'.",
  },
  {
    q: "¿Qué pasa si no puedo pagar una cuota?",
    a: "Contáctanos antes de la fecha de pago. Trabajamos contigo para encontrar una solución.",
  },
];

export default function ComoFuncionaClient() {
  const [amount, setAmount] = useState(300);
  const [months, setMonths] = useState(3);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Simple fee display (not interest, just fixed fee example)
  const feeRate = months === 3 ? 0.05 : months === 6 ? 0.09 : 0.14;
  const total = amount * (1 + feeRate);
  const monthly = total / months;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16">
        <div aria-hidden className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #BA56EF, #3A39FF)" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-[#3A39FF]/10 text-[#3A39FF] text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            Cómo funciona
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4 max-w-2xl">
            Simple de entender.{" "}
            <span className="text-gradient-blue">Simple de usar.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            No es tarjeta. No es banco. Es una línea de crédito que funciona
            donde tú compras, con cuotas que siempre sabes cuánto son.
          </p>
        </div>
      </section>

      {/* PASOS DETALLADOS */}
      <section className="bg-[#F5F5F7] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:items-start">
                    {/* Number + icon */}
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{
                          background:
                            step.color === "#C3FD0C"
                              ? "#C3FD0C"
                              : `${step.color}15`,
                        }}
                      >
                        <Icon
                          size={24}
                          style={{
                            color:
                              step.color === "#C3FD0C" ? "#000" : step.color,
                          }}
                        />
                      </div>
                      <span
                        className="text-5xl font-black"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}, ${
                            i === 0 ? "#00F4FF" : i === 1 ? "#3A39FF" : "#3A39FF"
                          })`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-black mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">{step.desc}</p>
                      <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-[#3A39FF]/20 pl-3">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIMULADOR */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#C3FD0C] text-black text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                Simulador de cuotas
              </div>
              <h2 className="text-3xl font-black mb-2">
                ¿Cuánto pagarías cada mes?
              </h2>
              <p className="text-gray-500 text-sm">
                Es un estimado. El monto real lo ves en la app.
              </p>
            </div>

            <div
              className="rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm"
              data-track="simulator_interaction"
            >
              {/* Monto */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Monto de compra
                  </label>
                  <span className="text-lg font-black text-[#3A39FF]">
                    ${amount}
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={2000}
                  step={50}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3A39FF ${((amount - 100) / 1900) * 100}%, #E8E8ED ${((amount - 100) / 1900) * 100}%)`,
                  }}
                  data-track="simulator_interaction"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$100</span>
                  <span>$2,000</span>
                </div>
              </div>

              {/* Plazo */}
              <div className="mb-8">
                <label className="text-sm font-semibold text-gray-700 block mb-3">
                  Número de cuotas
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[3, 6, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      data-track="simulator_interaction"
                      className={`py-3 rounded-2xl text-sm font-bold transition-all ${
                        months === m
                          ? "bg-[#3A39FF] text-white shadow-md scale-[1.02]"
                          : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {m} cuotas
                    </button>
                  ))}
                </div>
              </div>

              {/* Resultado */}
              <div
                className="rounded-2xl p-6 text-center"
                style={{ background: "linear-gradient(135deg, #3A39FF08, #00F4FF08)" }}
              >
                <p className="text-sm text-gray-500 mb-1">Pagarías aproximadamente</p>
                <div className="text-5xl font-black text-[#3A39FF] mb-1">
                  ${monthly.toFixed(2)}
                </div>
                <p className="text-sm text-gray-400">
                  por mes · {months} cuotas · total ${total.toFixed(2)}
                </p>
                <p className="text-xs text-gray-400 mt-3">
                  * Estimado orientativo. El monto exacto lo muestra la app.
                </p>
              </div>

              {/* CTA del simulador */}
              <a
                href="#descargar"
                data-track="app_download_click"
                data-location="simulator"
                className="mt-5 w-full flex items-center justify-center gap-2 bg-[#3A39FF] text-white font-bold py-4 rounded-2xl hover:bg-[#2928e0] transition-all"
              >
                Quiero usar CrediViva <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ NO ES */}
      <section className="bg-[#F5F5F7] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-2 text-center">Importante que sepas</h2>
          <p className="text-gray-500 text-sm text-center mb-8">
            Queremos que entiendas exactamente qué es y qué no es CrediViva.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { si: true, text: "Cuotas fijas que no cambian" },
              { si: false, text: "No es tarjeta de crédito" },
              { si: true, text: "Sabes el total antes de comprar" },
              { si: false, text: "No tiene deuda rotativa" },
              { si: true, text: "Solo para tiendas aliadas" },
              { si: false, text: "No es un banco" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-2xl p-4 border ${
                  item.si
                    ? "bg-white border-gray-100"
                    : "bg-white border-gray-100"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 ${
                    item.si
                      ? "bg-[#3A39FF] text-white"
                      : "bg-black text-white"
                  }`}
                >
                  {item.si ? "✓" : "✕"}
                </div>
                <span className="text-sm font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/que-no-es"
              className="text-[#3A39FF] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Ver más sobre qué no es CrediViva <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-8 text-center">Preguntas frecuentes</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-sm text-gray-800">{faq.q}</span>
                  {expandedFaq === i ? (
                    <ChevronUp size={16} className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/faqs" className="text-[#3A39FF] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              Ver todas las preguntas <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="descargar" className="py-16" style={{ background: "linear-gradient(135deg, #3A39FF 0%, #00F4FF 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-3">¿Listo para comprar?</h2>
          <p className="text-white/80 mb-8 text-sm">
            Descarga la app y empieza hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://qr.kubbesa.net/production/commerce-qr?dataQR=web-pty" target="_blank" rel="noopener noreferrer"
              data-track="app_download_click" data-platform="ios" data-location="como_funciona_cta"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#3A39FF] font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-all text-sm">
              App Store (iOS)
            </a>
            <a href="https://qr.kubbesa.net/production/commerce-qr?dataQR=web-pty" target="_blank" rel="noopener noreferrer"
              data-track="app_download_click" data-platform="android" data-location="como_funciona_cta"
              className="inline-flex items-center justify-center gap-2 bg-[#C3FD0C] text-black font-bold px-8 py-4 rounded-full hover:brightness-95 transition-all text-sm">
              Google Play (Android)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
