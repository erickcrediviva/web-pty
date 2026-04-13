"use client";

import { useState, useEffect, useCallback } from "react";

function isValidUrl(str: string): boolean {
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
import { ArrowRight, MapPin, Globe, Search, SlidersHorizontal, Star, X } from "lucide-react";

type Sucursal = {
  id: number;
  sucursal: string;
  activa: boolean | null;
  ciudad: string | null;
  direccion: string | null;
};

type Comercio = {
  comercio: string;
  active: boolean;
  categoria: string | null;
  destacado: boolean | null;
  logo_url: string | null;
  ecommerce_active: boolean | null;
  ecommerce_url: string | null;
  is_zero_interest: boolean | null;
  legal_name: string | null;
  sucursales: Sucursal[];
};

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

function ComercioCard({ comercio }: { comercio: Comercio }) {
  const [expanded, setExpanded] = useState(false);
  const sucursalesActivas = comercio.sucursales?.filter((s) => s.activa) || [];
  const ciudades = [...new Set(sucursalesActivas.map((s) => s.ciudad).filter(Boolean))];

  return (
    <div
      className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
        comercio.destacado
          ? "border-[#3A39FF]/30 shadow-md"
          : "border-gray-100 hover:shadow-md"
      }`}
    >
      {/* Header */}
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="w-14 h-14 rounded-xl bg-[#F5F5F7] flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-100">
            {comercio.logo_url && isValidUrl(comercio.logo_url) ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={comercio.logo_url}
                alt={comercio.comercio}
                className="object-contain w-full h-full p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <span className="text-xl font-black text-[#3A39FF]">
                {comercio.comercio.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-black text-base leading-tight truncate">
                {comercio.comercio}
              </h3>
              {comercio.destacado && (
                <span className="inline-flex items-center gap-1 bg-[#C3FD0C] text-black text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                  <Star size={9} />
                  Destacado
                </span>
              )}
              {comercio.is_zero_interest && (
                <span className="bg-[#3A39FF]/10 text-[#3A39FF] text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                  0% interés
                </span>
              )}
            </div>

            {comercio.categoria && (
              <div className="text-xs text-gray-400 mb-2">
                {CATEGORIA_EMOJI[comercio.categoria]}{" "}
                {CATEGORIA_LABELS[comercio.categoria] || comercio.categoria}
              </div>
            )}

            {/* Cities */}
            {ciudades.length > 0 && (
              <div className="flex items-center gap-1 flex-wrap">
                <MapPin size={11} className="text-gray-400 flex-shrink-0" />
                {ciudades.slice(0, 3).map((ciudad) => (
                  <span
                    key={ciudad}
                    className="text-[11px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full"
                  >
                    {ciudad}
                  </span>
                ))}
                {ciudades.length > 3 && (
                  <span className="text-[11px] text-gray-400">
                    +{ciudades.length - 3} más
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Ecommerce badge */}
          {comercio.ecommerce_active && comercio.ecommerce_url && (
            <a
              href={comercio.ecommerce_url}
              target="_blank"
              rel="noopener noreferrer"
              data-track="ecommerce_click"
              data-comercio={comercio.comercio}
              className="flex-shrink-0 inline-flex items-center gap-1 bg-[#3A39FF] text-white text-[11px] font-bold px-3 py-1.5 rounded-full hover:bg-[#2928e0] transition-colors"
            >
              <Globe size={11} />
              Online
            </a>
          )}
        </div>
      </div>

      {/* Sucursales toggle */}
      {sucursalesActivas.length > 0 && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between px-5 py-3 border-t border-gray-50 text-xs font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
          >
            <span>
              {sucursalesActivas.length} sucursal
              {sucursalesActivas.length !== 1 ? "es" : ""}
            </span>
            <span className={`transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}>
              →
            </span>
          </button>

          {expanded && (
            <div className="border-t border-gray-50 bg-[#F9F9FB]">
              {sucursalesActivas.map((s) => (
                <div
                  key={s.id}
                  className="flex items-start gap-3 px-5 py-3 border-b border-gray-100 last:border-0"
                >
                  <MapPin size={13} className="text-[#3A39FF] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-gray-800">{s.sucursal}</div>
                    {s.ciudad && (
                      <div className="text-[11px] text-gray-400">{s.ciudad}</div>
                    )}
                    {s.direccion && (
                      <div className="text-[11px] text-gray-400 mt-0.5">{s.direccion}</div>
                    )}
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

export default function DondeComprarClient() {
  const [comercios, setComercio] = useState<Comercio[]>([]);
  const [ciudades, setCiudades] = useState<string[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("todos");
  const [selectedCiudad, setSelectedCiudad] = useState("todas");
  const [showFilters, setShowFilters] = useState(false);

  const fetchComercio = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (selectedCategoria !== "todos") params.set("categoria", selectedCategoria);
      if (selectedCiudad !== "todas") params.set("ciudad", selectedCiudad);

      // Fetch directly from Supabase client-side
      const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/comercios?select=comercio,active,categoria,destacado,logo_url,ecommerce_active,ecommerce_url,is_zero_interest,legal_name,sucursales(id,sucursal,activa,ciudad,direccion)&active=eq.true&order=destacado.desc.nullslast,comercio.asc`,
        {
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        const errText = await res.text();
        console.error("Supabase error:", errText);
        throw new Error(errText);
      }

      let data: Comercio[] = await res.json();

      // Filter by categoria
      if (selectedCategoria !== "todos") {
        data = data.filter((c) => c.categoria === selectedCategoria);
      }

      // Filter by ciudad
      if (selectedCiudad !== "todas") {
        data = data.filter((c) =>
          c.sucursales?.some((s) => s.activa && s.ciudad === selectedCiudad)
        );
      }

      // Derive filter options
      const allCiudades = Array.from(
        new Set(
          data
            .flatMap((c) => c.sucursales?.filter((s) => s.activa).map((s) => s.ciudad) || [])
            .filter(Boolean) as string[]
        )
      ).sort();

      const allCategorias = Array.from(
        new Set(data.map((c) => c.categoria).filter(Boolean) as string[])
      ).sort();

      setComercio(data);
      setCiudades(allCiudades);
      setCategorias(allCategorias);
    } catch (e) {
      console.error("Fetch error:", e);
      setError("No pudimos cargar los comercios. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }, [selectedCategoria, selectedCiudad]);

  useEffect(() => {
    fetchComercio();
  }, [fetchComercio]);

  const filtered = comercios.filter((c) =>
    c.comercio.toLowerCase().includes(search.toLowerCase()) ||
    (c.legal_name || "").toLowerCase().includes(search.toLowerCase())
  );

  const hasActiveFilters = selectedCategoria !== "todos" || selectedCiudad !== "todas" || search !== "";

  const clearFilters = () => {
    setSelectedCategoria("todos");
    setSelectedCiudad("todas");
    setSearch("");
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 pb-12">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #3A39FF, #C3FD0C)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-[#3A39FF]/10 text-[#3A39FF] text-xs font-bold px-4 py-1.5 rounded-full mb-5">
            <MapPin size={11} />
            Comercios aliados
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
            ¿Dónde puedo{" "}
            <span className="text-gradient-blue">usar CrediViva?</span>
          </h1>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Encuentra todas las tiendas donde puedes pagar con tu línea CrediViva.
            Filtra por categoría o ciudad.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar comercio..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2.5 text-sm rounded-xl border border-gray-200 bg-[#F5F5F7] focus:outline-none focus:border-[#3A39FF] focus:bg-white transition-colors"
              />
            </div>

            {/* Filter toggle mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                showFilters || hasActiveFilters
                  ? "bg-[#3A39FF] text-white border-[#3A39FF]"
                  : "bg-[#F5F5F7] text-gray-600 border-gray-200"
              }`}
            >
              <SlidersHorizontal size={14} />
              Filtros
              {hasActiveFilters && (
                <span className="bg-[#C3FD0C] text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </button>

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={12} /> Limpiar
              </button>
            )}
          </div>

          {/* Expanded filters */}
          {showFilters && (
            <div className="mt-3 flex flex-wrap gap-3 pb-1">
              {/* Categoria */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Categoría:
                </span>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setSelectedCategoria("todos")}
                    className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-colors ${
                      selectedCategoria === "todos"
                        ? "bg-[#3A39FF] text-white"
                        : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Todos
                  </button>
                  {categorias.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategoria(cat)}
                      className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-colors ${
                        selectedCategoria === cat
                          ? "bg-[#3A39FF] text-white"
                          : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {CATEGORIA_EMOJI[cat]} {CATEGORIA_LABELS[cat] || cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ciudad */}
              {ciudades.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Ciudad:
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => setSelectedCiudad("todas")}
                      className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-colors ${
                        selectedCiudad === "todas"
                          ? "bg-[#3A39FF] text-white"
                          : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Todas
                    </button>
                    {ciudades.map((ciudad) => (
                      <button
                        key={ciudad}
                        onClick={() => setSelectedCiudad(ciudad)}
                        className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-colors ${
                          selectedCiudad === ciudad
                            ? "bg-[#3A39FF] text-white"
                            : "bg-[#F5F5F7] text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {ciudad}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-[#F5F5F7] min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Count */}
          {!loading && !error && (
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-500">
                <span className="font-bold text-black">{filtered.length}</span>{" "}
                {filtered.length === 1 ? "comercio encontrado" : "comercios encontrados"}
              </p>
              {filtered.filter((c) => c.ecommerce_active).length > 0 && (
                <span className="text-xs text-gray-400">
                  {filtered.filter((c) => c.ecommerce_active).length} con compra online
                </span>
              )}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 p-5 animate-pulse"
                >
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-100 rounded mb-2 w-3/4" />
                      <div className="h-3 bg-gray-100 rounded w-1/2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">⚠️</div>
              <p className="text-gray-500 mb-4">{error}</p>
              <button
                onClick={fetchComercio}
                className="bg-[#3A39FF] text-white px-6 py-3 rounded-full text-sm font-bold"
              >
                Intentar de nuevo
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-black text-lg mb-2">Sin resultados</h3>
              <p className="text-gray-500 text-sm mb-4">
                No encontramos comercios con esos filtros.
              </p>
              <button
                onClick={clearFilters}
                className="bg-[#3A39FF] text-white px-6 py-3 rounded-full text-sm font-bold"
              >
                Ver todos los comercios
              </button>
            </div>
          )}

          {/* Grid */}
          {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((c) => (
                <ComercioCard key={c.comercio} comercio={c} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #3A39FF 0%, #00F4FF 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            ¿Ya encontraste tu tienda?
          </h2>
          <p className="text-white/80 text-sm mb-8 max-w-sm mx-auto">
            Descarga la app, regístrate y ve a comprar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://qr.kubbesa.net/production/commerce-qr?dataQR=web-pty"
              target="_blank"
              rel="noopener noreferrer"
              data-track="app_download_click"
              data-platform="ios"
              data-location="donde_comprar_cta"
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
              data-location="donde_comprar_cta"
              className="inline-flex items-center justify-center gap-2 bg-[#C3FD0C] text-black font-bold px-8 py-4 rounded-full hover:brightness-95 transition-all text-sm"
            >
              Google Play (Android) <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
