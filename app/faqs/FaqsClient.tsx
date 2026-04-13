"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

type FAQ = {
  q: string;
  a: string;
  cta?: { label: string; href: string };
};

type Grupo = {
  grupo: string;
  faqs: FAQ[];
};

const faqsB2C: Grupo[] = [
  {
    grupo: "Cómo funciona",
    faqs: [
      {
        q: "¿Qué es CrediViva?",
        a: "CrediViva es una línea de crédito en cuotas fijas que puedes usar en tiendas físicas aliadas en Panamá. No es tarjeta de crédito, no es banco. Descargas la app, te aprueban y vas a comprar a la tienda que quieras de nuestra red.",
      },
      {
        q: "¿Cómo se usa en la tienda?",
        a: "Llega a la tienda, elige lo que quieres y dile al vendedor que pagas con CrediViva. Él genera la transacción y tú la confirmas desde tu app. En menos de 5 minutos ya te llevas tu compra.",
        cta: { label: "Ver el proceso completo", href: "/como-funciona" },
      },
      {
        q: "¿Las cuotas cambian con el tiempo?",
        a: "No. Las cuotas son fijas desde el inicio. Antes de confirmar la compra ya sabes exactamente cuánto pagas cada mes y cuántas cuotas son. Eso no cambia.",
      },
      {
        q: "¿Tiene costos ocultos o anualidades?",
        a: "No tiene anualidades ni cargos ocultos. El costo total lo ves en la app antes de confirmar. Si el comercio ofrece 0% de interés, pagas exactamente el precio del producto dividido en cuotas.",
      },
      {
        q: "¿Puedo pagar solo la primera cuota y llevarme el producto?",
        a: "Sí. Solo pagas la primera cuota al momento de la compra y te llevas tu producto ese mismo día.",
      },
    ],
  },
  {
    grupo: "¿Puedo aplicar?",
    faqs: [
      {
        q: "¿Quién puede aplicar?",
        a: "Puedes aplicar si eres asalariado (sector privado o gobierno) o independiente con ingresos demostrables. Debes tener entre 19 y 65 años si eres asalariado, o entre 23 y 65 si eres independiente.",
      },
      {
        q: "¿Necesito historial crediticio?",
        a: "No necesariamente. Si es tu primer crédito y eres asalariado con estabilidad laboral, puedes aplicar. CrediViva evalúa tu capacidad de pago real, no solo tu historial.",
      },
      {
        q: "¿Qué documentos necesito?",
        a: "Si eres asalariado: cédula panameña y al menos 4 meses en tu trabajo actual reflejados en el seguro social. Si eres independiente: cédula y movimientos bancarios de los últimos 3 meses.",
      },
      {
        q: "¿Por qué me rechazaron?",
        a: "El rechazo puede deberse a capacidad de pago insuficiente, nivel de endeudamiento actual o verificación de referencias crediticias. Si tienes dudas, contáctanos directamente.",
        cta: { label: "Contactar soporte", href: "/contacto" },
      },
      {
        q: "¿Mi aprobación vence?",
        a: "Sí. La aprobación se revisa periódicamente según tu comportamiento crediticio. Te recomendamos usar tu crédito pronto para aprovecharla.",
      },
    ],
  },
  {
    grupo: "Cómo pagar",
    faqs: [
      {
        q: "¿Cuándo son las fechas de pago?",
        a: "Todos los días 15 y 30 de cada mes. Recibirás recordatorios antes de cada fecha.",
      },
      {
        q: "¿Dónde pago mis cuotas?",
        a: "Puedes pagar en los centros de pago autorizados (ACE, Farmacias Arrocha, bancos y otros puntos). También puedes ver tus opciones de pago directamente en la app.",
      },
      {
        q: "¿Puedo adelantar pagos o pagar de más?",
        a: "Sí. Puedes pagar cuotas adicionales cuando quieras. El excedente se aplica a tus próximas cuotas automáticamente.",
      },
      {
        q: "¿Puedo cancelar mi crédito antes de tiempo?",
        a: "Sí, puedes pre-cancelar en cualquier momento sin penalización. En la app encuentras el monto exacto para cancelar. Solo avísale a nuestro equipo de cobros por WhatsApp o correo.",
      },
      {
        q: "¿Qué pasa si no pago a tiempo?",
        a: "Si no pagas en la fecha acordada se genera una mora y puede afectar tus referencias crediticias. Si tienes un problema, contáctanos antes de la fecha de pago — buscamos soluciones contigo.",
        cta: { label: "Contactar cobros", href: "/contacto" },
      },
    ],
  },
  {
    grupo: "Compras y crédito",
    faqs: [
      {
        q: "¿Puedo tener más de un crédito activo?",
        a: "Sí. Puedes solicitar un nuevo crédito cuando hayas pagado la mitad del primero y estés al día con tus cuotas.",
      },
      {
        q: "¿Puedo elegir en cuántas cuotas pago?",
        a: "Sí. Tú eliges el plazo que más se ajusta a tu presupuesto desde la app, antes de confirmar la compra.",
      },
      {
        q: "¿Tienen préstamos en efectivo?",
        a: "Sí, existe esa opción por separado mediante descuento directo de nómina. Es un producto diferente al crédito en tiendas. Consúltanos para más información.",
      },
      {
        q: "¿Dónde puedo comprar?",
        a: "En cualquier comercio de la red CrediViva en Panamá. Puedes ver el listado completo en 'Dónde comprar'.",
        cta: { label: "Ver comercios", href: "/donde-comprar" },
      },
    ],
  },
];

const faqsB2B: Grupo[] = [
  {
    grupo: "¿Qué gano como comercio?",
    faqs: [
      {
        q: "¿Cómo CrediViva me ayuda a vender más?",
        a: "Tus clientes compran más cuando pueden pagar en cuotas fijas. CrediViva te da acceso a clientes que hoy no te compran porque no pueden pagar de contado. Tú recibes el pago completo, nosotros gestionamos el crédito.",
      },
      {
        q: "¿Asumo el riesgo si el cliente no paga?",
        a: "No. CrediViva asume el riesgo crediticio. Una vez aprobada y procesada la compra, el pago al comercio está garantizado.",
      },
      {
        q: "¿Tiene costo afiliarse?",
        a: "Contáctanos para conocer las condiciones actuales de afiliación según el tipo y tamaño de tu negocio.",
        cta: { label: "Contactar equipo comercial", href: "/para-comercios" },
      },
    ],
  },
  {
    grupo: "Afiliación",
    faqs: [
      {
        q: "¿Qué necesito para afiliar mi comercio?",
        a: "Registro en el Registro Público, inscripción en la DGI, aviso de operación vigente y al menos una sucursal física en Panamá.",
      },
      {
        q: "¿Puedo afiliar varias sucursales o empresas?",
        a: "Sí. Puedes afiliar múltiples sucursales y empresas bajo el mismo proceso.",
      },
      {
        q: "¿Están disponibles en todo el país?",
        a: "Sí. CrediViva opera en todo Panamá, desde Ciudad de Panamá hasta el interior del país.",
      },
      {
        q: "¿Cómo inicio el proceso?",
        a: "Completa el formulario en nuestra página 'Para comercios' y nuestro equipo te contacta en menos de 48 horas.",
        cta: { label: "Quiero ser comercio aliado", href: "/para-comercios#contacto" },
      },
    ],
  },
  {
    grupo: "Proceso de venta",
    faqs: [
      {
        q: "¿Cuánto tarda procesar una venta con CrediViva?",
        a: "Menos de 5 minutos. El vendedor genera la transacción, el cliente la confirma desde su app y listo. No hay papeleo ni esperas.",
      },
      {
        q: "¿Necesito equipos especiales?",
        a: "No. El proceso es 100% digital desde el celular del cliente y el sistema del comercio. Sin terminales adicionales.",
      },
      {
        q: "¿Qué clientes pueden comprar en mi tienda con CrediViva?",
        a: "Asalariados de empresas privadas, empleados de gobierno, jubilados e independientes con ingresos verificables.",
      },
      {
        q: "¿Mi equipo necesita capacitación?",
        a: "Sí, pero es rápida. Nuestro equipo capacita a tus vendedores antes de activar el servicio en tu tienda.",
      },
    ],
  },
];

function FaqItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors gap-4"
      >
        <span className="font-semibold text-sm text-gray-800 leading-snug">{faq.q}</span>
        {open
          ? <ChevronUp size={16} className="text-[#3A39FF] flex-shrink-0" />
          : <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed mt-4">{faq.a}</p>
          {faq.cta && (
            <Link
              href={faq.cta.href}
              className="inline-flex items-center gap-1 text-[#3A39FF] font-semibold text-xs mt-3 hover:gap-2 transition-all"
            >
              {faq.cta.label} <ArrowRight size={12} />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function FaqGrupo({ grupo }: { grupo: Grupo }) {
  return (
    <div className="mb-8">
      <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-3 px-1">
        {grupo.grupo}
      </h3>
      <div className="flex flex-col gap-2">
        {grupo.faqs.map((faq, i) => (
          <FaqItem key={i} faq={faq} />
        ))}
      </div>
    </div>
  );
}

export default function FaqsClient() {
  const [tab, setTab] = useState<"b2c" | "b2b">("b2c");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-28 pb-12">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #00F4FF, #3A39FF)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-4">
            Resuelve tus dudas.{" "}
            <span className="text-gradient-blue">Sin vueltas.</span>
          </h1>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            Todo lo que necesitas saber sobre CrediViva, claro y directo.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex gap-2 bg-[#F5F5F7] rounded-2xl p-1 max-w-xs">
            <button
              onClick={() => setTab("b2c")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                tab === "b2c"
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Soy cliente
            </button>
            <button
              onClick={() => setTab("b2b")}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
                tab === "b2b"
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Soy comercio
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F5F5F7] py-12 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {tab === "b2c" ? (
            <>
              {faqsB2C.map((grupo, i) => (
                <FaqGrupo key={i} grupo={grupo} />
              ))}
              {/* CTA B2C */}
              <div className="mt-4 bg-[#3A39FF] rounded-3xl p-7 text-center">
                <h3 className="font-black text-white text-lg mb-2">
                  ¿No encontraste tu respuesta?
                </h3>
                <p className="text-white/70 text-sm mb-5">
                  Escríbenos y te respondemos rápido.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#3A39FF] font-bold px-6 py-3 rounded-full text-sm hover:bg-gray-50 transition-all"
                  >
                    Contactar soporte
                  </Link>
                  <a
                    href="https://qr.kubbesa.net/production/commerce-qr?dataQR=web-pty"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="app_download_click"
                    data-location="faqs_b2c_cta"
                    className="inline-flex items-center justify-center gap-2 bg-[#C3FD0C] text-black font-bold px-6 py-3 rounded-full text-sm hover:brightness-95 transition-all"
                  >
                    Descarga la app <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              {faqsB2B.map((grupo, i) => (
                <FaqGrupo key={i} grupo={grupo} />
              ))}
              {/* CTA B2B */}
              <div className="mt-4 rounded-3xl p-7 text-center" style={{ background: "linear-gradient(135deg, #C3FD0C, #00F4FF)" }}>
                <h3 className="font-black text-black text-lg mb-2">
                  ¿Quieres ser comercio aliado?
                </h3>
                <p className="text-black/60 text-sm mb-5">
                  Déjanos tus datos y te contactamos en 48 horas.
                </p>
                <Link
                  href="/para-comercios#contacto"
                  data-track="form_submit"
                  data-location="faqs_b2b_cta"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-gray-900 transition-all"
                >
                  Quiero afiliarme <ArrowRight size={14} />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
