import Link from "next/link";
import { ArrowRight, CheckCircle2, Store, Shield, Zap } from "lucide-react";

const stores = ["Farmacias","Electrónica","Ropa y moda","Hogar","Deportes","Ferretería","Ópticas","Calzado"];

const truths = [
  { label: "Cuotas fijas", desc: "Sabes exactamente cuánto pagas cada mes." },
  { label: "Sin sorpresas", desc: "El monto no cambia. No hay letra pequeña." },
  { label: "No es tarjeta", desc: "No acumulas deudas rotativas." },
  { label: "No es banco", desc: "Sin papeleos interminables." },
];

const steps = [
  { n: "01", title: "Descarga la app", desc: "Regístrate en minutos desde tu celular.", color: "linear-gradient(135deg, #3A39FF, #00F4FF)" },
  { n: "02", title: "Ve a la tienda", desc: "Elige lo que quieres en un comercio aliado.", color: "linear-gradient(135deg, #BA56EF, #3A39FF)" },
  { n: "03", title: "Paga en cuotas", desc: "Cuotas fijas, claras y sin sorpresas.", color: "linear-gradient(135deg, #C3FD0C, #3A39FF)" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 md:pt-36 md:pb-28">
        <div aria-hidden className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{background:"radial-gradient(circle, #3A39FF, #00F4FF)"}} />
        <div aria-hidden className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{background:"radial-gradient(circle, #C3FD0C, #BA56EF)"}} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C3FD0C] text-black text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              <Zap size={12} />
              Disponible en tiendas de Panamá
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight mb-6">
              Compra hoy.<br />
              <span className="text-gradient-blue">Paga en cuotas fijas.</span><br />
              Sin sorpresas.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              CrediViva te da una línea de crédito para usar en tus tiendas favoritas. Cuotas fijas, claras y sin letra pequeña.{" "}
              <strong className="text-black">No es tarjeta. No es banco.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/como-funciona" data-track="how_it_works_click" data-location="hero"
                className="inline-flex items-center justify-center gap-2 bg-[#3A39FF] text-white font-bold px-7 py-4 rounded-full hover:bg-[#2928e0] transition-all hover:scale-[1.02] text-base">
                Cómo funciona <ArrowRight size={18} />
              </Link>
              <a href="#descargar" data-track="app_download_click" data-location="hero"
                className="inline-flex items-center justify-center gap-2 bg-[#C3FD0C] text-black font-bold px-7 py-4 rounded-full hover:brightness-95 transition-all hover:scale-[1.02] text-base">
                Descarga la app
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VERDADES */}
      <section className="bg-[#F5F5F7] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black mb-1">Crédito que entiende tu vida</h2>
          <p className="text-gray-500 mb-8 text-sm">Simple. Claro. Predecible.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {truths.map((t) => (
              <div key={t.label} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                <CheckCircle2 size={20} className="text-[#3A39FF] mb-3" />
                <h3 className="font-bold text-base mb-1">{t.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASOS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <h2 className="text-3xl font-black leading-tight">
              Tres pasos.<br /><span className="text-gradient-blue">Y ya estás comprando.</span>
            </h2>
            <Link href="/como-funciona" data-track="how_it_works_click" data-location="steps_section"
              className="text-[#3A39FF] font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              Ver todo el proceso <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.n} className="rounded-3xl p-7 border border-gray-100 hover:border-[#3A39FF]/30 hover:shadow-lg transition-all"
                style={{background: i===0?"linear-gradient(135deg,#3A39FF08,#00F4FF08)":i===1?"linear-gradient(135deg,#BA56EF08,#3A39FF08)":"linear-gradient(135deg,#C3FD0C18,#00F4FF08)"}}>
                <span className="text-6xl font-black leading-none block mb-4"
                  style={{background:step.color,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  {step.n}
                </span>
                <h3 className="font-black text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIENDAS */}
      <section className="bg-[#3A39FF] py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <Store size={28} className="text-[#C3FD0C] mb-3" />
              <h2 className="text-3xl font-black text-white leading-tight">
                Úsalo en las tiendas<br />que ya conoces.
              </h2>
            </div>
            <Link href="/donde-comprar" data-track="store_locator_click" data-location="home_stores_section"
              className="inline-flex items-center gap-2 bg-[#C3FD0C] text-black font-bold px-6 py-3 rounded-full hover:brightness-95 transition-all text-sm whitespace-nowrap">
              Ver comercios aliados <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {stores.map((s) => (
              <span key={s} className="bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F5F5F7] text-gray-500 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <Shield size={12} className="text-[#3A39FF]" />
            Operamos bajo regulación panameña
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Miles de panameños ya<br /><span className="text-gradient-blue">compran con CrediViva.</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-base mb-10">
            Cada mes más comercios y usuarios confían en un crédito claro, controlado y predecible.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto mb-10">
            {[{num:"100+",label:"Comercios aliados"},{num:"3",label:"Pasos para comprar"},{num:"$0",label:"Cargos ocultos"}].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-[#3A39FF]">{stat.num}</div>
                <div className="text-xs text-gray-400 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DESCARGA */}
      <section id="descargar" className="py-20 overflow-hidden" style={{background:"linear-gradient(135deg, #C3FD0C 0%, #00F4FF 100%)"}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-3">Empieza hoy.</h2>
          <p className="text-black/70 mb-8 text-base max-w-sm mx-auto">
            Descarga la app, regístrate y ve a la tienda. Así de simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://qr.kubbesa.net/production/commerce-qr?dataQR=web-pty" target="_blank" rel="noopener noreferrer"
              data-track="app_download_click" data-platform="ios" data-location="cta_section"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-gray-900 transition-all text-sm">
              App Store (iOS)
            </a>
            <a href="https://qr.kubbesa.net/production/commerce-qr?dataQR=web-pty" target="_blank" rel="noopener noreferrer"
              data-track="app_download_click" data-platform="android" data-location="cta_section"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-gray-900 transition-all text-sm">
              Google Play (Android)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
