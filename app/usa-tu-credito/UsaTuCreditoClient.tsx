"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, ArrowRight, Globe, Star, ChevronDown, ChevronUp } from "lucide-react";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const CATEGORIA_LABELS: Record<string, string> = {
  tecnologia: "Tecnología",
  linea_blanca: "Línea blanca",
  moda: "Moda",
  hogar: "Hogar",
  salud: "Salud",
  deportes: "Deportes",
  otros: "Otros",
};

const CATEGORIA_EMOJI: Record<string, string> = {
  tecnologia: "📱",
  linea_blanca: "🫧",
  moda: "👗",
  hogar: "🏠",
  salud: "💊",
  deportes: "⚽",
  otros: "🏪",
};

type Sucursal = {
  id: number;
  sucursal: string;
  activa: boolean | null;
  ciudad: string | null;
  direccion: string | null;
};

type Comercio = {
  comercio: string;
  categoria: string | null;
  destacado: boolean | null;
  logo_url: string | null;
  ecommerce_active: boolean | null;
  ecommerce_url: string | null;
  is_zero_interest: boolean | null;
  sucursales: Sucursal[];
};

function isValidUrl(str: string): boolean {
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function ComercioCard({ comercio, utm }: { comercio: Comercio; utm: string }) {
  const [expanded, setExpanded] = useState(false);
  const sucursalesActivas = comercio.sucursales?.filter((s) => s.activa) || [];
  const ciudades = [...new Set(sucursalesActivas.map((s) => s.ciudad).filter(Boolean))];

  return (
    <div className={`bg-white rounded-2xl border overflow-hidden transition-all ${
      comercio.destacado ? "border-[#3A39FF]/40 shadow-md" : "border-gray-100 hover:shadow-sm"
    }`}>
      <div className="p-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-12 h-12 rounded-xl bg-[#F5F5F7] flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-100">
            {comercio.logo_url && isValidUrl(comercio.logo_url) ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={comercio.logo_url}
                alt={comercio.comercio}
                className="object-contain w-full h-full p-1"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            ) : (
              <span className="text-lg font-black text-[#3A39FF]">
                {comercio.comercio.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="font-black text-sm leading-tight">{comercio.comercio}</h3>
              {comercio.destacado && (
                <span className="inline-flex items-center gap-0.5 bg-[#C3FD0C] text-black text-[9px] font-black px-1.5 py-0.5 rounded-full">
                  <Star size={8} /> Destacado
                </span>
              )}
              {comercio.is_zero_interest && (
                <span className="bg-[#3A39FF]/10 text-[#3A39FF] text-[9px] font-black px-1.5 py-0.5 rounded-full">
                  0% interés
                </span>
              )}
            </div>
            {comercio.categoria && (
              <div className="text-[11px] text-gray-400 mt-0.5">
                {CATEGORIA_EMOJI[comercio.categoria]} {CATEGORIA_LABELS[comercio.categoria] || comercio.categoria}
              </div>
            )}
            {ciudades.length > 0 && (
              <div className="flex items-center gap-1 mt-1 flex-wrap">
                <MapPin size={10} className="text-gray-300" />
                {ciudades.slice(0, 2).map((c) => (
                  <span key={c} className="text-[10px] text-gray-400">{c}</span>
                ))}
                {ciudades.length > 2 && <span className="text-[10px] text-gray-400">+{ciudades.length - 2}</span>}
              </div>
            )}
          </div>

          {/* Online CTA */}
          {comercio.ecommerce_active && comercio.ecommerce_url && (
            <a
              href={`${comercio.ecommerce_url}${utm ? `?${utm}` : ""}`}
              target="_blank"
              rel="noopener noreferrer"
              data-track="ecommerce_click"
              data-comercio={comercio.comercio}
              data-location="lp_activacion"
              className="flex-shrink-0 inline-flex items-center gap-1 bg-[#3A39FF] text-white text-[10px] font-bold px-2.5 py-1.5 rounded-full"
            >
              <Globe size={10} /> Online
            </a>
          )}
        </div>
      </div>

      {/* Sucursales */}
      {sucursalesActivas.length > 0 && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            data-track="store_locator_click"
            data-comercio={comercio.comercio}
            data-location="lp_activacion"
            className="w-full flex items-center justify-between px-4 py-2.5 border-t border-gray-50 text-[11px] font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
          >
            <span className="flex items-center gap-1">
              <MapPin size={11} className="text-[#3A39FF]" />
              {sucursalesActivas.length} sucursal{sucursalesActivas.length !== 1 ? "es" : ""}
            </span>
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
          {expanded && (
            <div className="bg-[#F9F9FB] border-t border-gray-50">
              {sucursalesActivas.map((s) => (
                <div key={s.id} className="flex items-start gap-2 px-4 py-2.5 border-b border-gray-100 last:border-0">
                  <MapPin size={11} className="text-[#3A39FF] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[11px] font-semibold text-gray-700">{s.sucursal}</div>
                    {s.ciudad && <div className="text-[10px] text-gray-400">{s.ciudad}</div>}
                    {s.direccion && <div className="text-[10px] text-gray-400">{s.direccion}</div>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function UsaTuCreditoClient() {
  const [comercios, setComercio] = useState<Comercio[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategoria, setSelectedCategoria] = useState("todos");
  const [utm, setUtm] = useState("");

  // Capture UTM params from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
    const utmString = utmParams
      .filter((k) => params.get(k))
      .map((k) => `${k}=${params.get(k)}`)
      .join("&");
    setUtm(utmString);

    // Track LP view with utm data
    if (typeof window !== "undefined") {
      console.log("[track] lp_activacion_view", Object.fromEntries(params.entries()));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${SUPABASE_URL}/rest/v1/comercios?select=comercio,categoria,destacado,logo_url,ecommerce_active,ecommerce_url,is_zero_interest,sucursales(id,sucursal,activa,ciudad,direccion)&active=eq.true&order=destacado.desc.nullslast,comercio.asc`,
          {
            headers: {
              apikey: SUPABASE_KEY,
              Authorization: `Bearer ${SUPABASE_KEY}`,
            },
          }
        );
        const data: Comercio[] = await res.json();
        setComercio(data);

        const cats = Array.from(
          new Set(data.map((c) => c.categoria).filter(Boolean) as string[])
        ).sort();
        setCategorias(cats);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filtered = selectedCategoria === "todos"
    ? comercios
    : comercios.filter((c) => c.categoria === selectedCategoria);

  return (
    <div className="min-h-screen bg-white">

      {/* STICKY HEADER MINIMAL */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <Image src="/logo.png" alt="CrediViva" width={110} height={28} className="h-7 w-auto" priority />
          <a
            href="https://app.crediviva.com"
            data-track="app_open_click"
            data-location="lp_activacion_header"
            className="text-xs font-bold text-[#3A39FF] hover:underline"
          >
            Abrir app →
          </a>
        </div>
      </header>

      {/* HERO — urgencia, no explicación */}
      <section className="relative overflow-hidden bg-white pt-10 pb-8 px-4">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #C3FD0C, #3A39FF)" }}
        />
        <div className="relative max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#C3FD0C] text-black text-[11px] font-black px-3 py-1 rounded-full mb-4">
            ✅ Tu crédito está listo
          </div>
          <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-3">
            Solo falta que vayas<br />
            <span className="text-gradient-blue">a la tienda.</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-6 max-w-sm">
            Tienes una línea de crédito aprobada en cuotas fijas.
            Úsala hoy en cualquiera de estos comercios.
          </p>

          {/* 3 pasos compactos */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { n: "1", text: "Elige la tienda aquí abajo" },
              { n: "2", text: "Dile al vendedor que pagas con CrediViva" },
              { n: "3", text: "Confirma desde tu app" },
            ].map((step, i) => (
              <div key={step.n} className="rounded-2xl p-3 text-center border border-gray-100"
                style={{ background: i === 0 ? "#3A39FF08" : i === 1 ? "#BA56EF08" : "#C3FD0C18" }}>
                <div className="text-2xl font-black mb-1"
                  style={{
                    background: i === 0 ? "linear-gradient(135deg,#3A39FF,#00F4FF)" : i === 1 ? "linear-gradient(135deg,#BA56EF,#3A39FF)" : "linear-gradient(135deg,#C3FD0C,#3A39FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  {step.n}
                </div>
                <p className="text-[11px] text-gray-500 leading-tight">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTRO CATEGORÍAS */}
      <section className="sticky top-14 z-40 bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-none" style={{ scrollbarWidth: "none" }}>
            <button
              onClick={() => setSelectedCategoria("todos")}
              className={`flex-shrink-0 text-xs px-4 py-2 rounded-full font-semibold transition-colors ${
                selectedCategoria === "todos"
                  ? "bg-[#3A39FF] text-white"
                  : "bg-[#F5F5F7] text-gray-600"
              }`}
            >
              Todos
            </button>
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategoria(cat);
                  if (typeof window !== "undefined") {
                    console.log("[track] categoria_click", { categoria: cat, location: "lp_activacion" });
                  }
                }}
                data-track="categoria_click"
                data-categoria={cat}
                data-location="lp_activacion"
                className={`flex-shrink-0 text-xs px-4 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategoria === cat
                    ? "bg-[#3A39FF] text-white"
                    : "bg-[#F5F5F7] text-gray-600"
                }`}
              >
                {CATEGORIA_EMOJI[cat]} {CATEGORIA_LABELS[cat] || cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COMERCIOS */}
      <section className="bg-[#F5F5F7] min-h-[60vh] py-5 px-4">
        <div className="max-w-2xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 animate-pulse">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-3.5 bg-gray-100 rounded mb-2 w-2/3" />
                      <div className="h-3 bg-gray-100 rounded w-1/3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <p className="text-xs text-gray-400 mb-3 font-medium">
                {filtered.length} comercio{filtered.length !== 1 ? "s" : ""} disponible{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {filtered.map((c) => (
                  <ComercioCard key={c.comercio} comercio={c} utm={utm} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* FOOTER MINIMAL */}
      <footer className="bg-white border-t border-gray-100 py-6 px-4 text-center">
        <Image src="/logo.png" alt="CrediViva" width={90} height={24} className="h-5 w-auto mx-auto mb-3" />
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} CrediViva Panamá · Crédito en cuotas fijas y claras.
        </p>
      </footer>
    </div>
  );
}
