import Image from "next/image";
import Link from "next/link";

const coreLinks = [
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/donde-comprar", label: "Dónde comprar" },
  { href: "/que-no-es", label: "Qué no es CrediViva" },
  { href: "/para-comercios", label: "Para comercios" },
  { href: "/faqs", label: "FAQs" },
];

const legalLinks = [
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/autorizacion-datos", label: "Autorización de datos" },
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/cookies", label: "Política de cookies" },
  { href: "/contacto", label: "Contacto" },
];

const socialLinks = [
  { href: "https://www.facebook.com/Crediviva/", label: "Facebook", icon: "f" },
  { href: "https://www.instagram.com/crediviva/", label: "Instagram", icon: "ig" },
  { href: "https://www.linkedin.com/company/crediviva", label: "LinkedIn", icon: "in" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F7] border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <Image src="/logo.png" alt="CrediViva" width={120} height={32} className="h-7 w-auto mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Crédito en cuotas fijas y claras.<br />
              No es tarjeta. No es banco.<br />
              Es CrediViva.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-[#3A39FF] hover:text-white transition-colors flex items-center justify-center text-xs font-bold text-gray-500"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Core pages */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Aprende</h4>
            <ul className="flex flex-col gap-2">
              {coreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-[#3A39FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-[#3A39FF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Avalados por */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Avalados por</h4>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-xl p-3 border border-gray-100">
                <div className="text-xs font-bold text-gray-700 mb-0.5">Superintendencia del</div>
                <div className="text-xs font-bold text-gray-700">Mercado de Valores</div>
                <div className="text-[11px] text-gray-400 mt-0.5">República de Panamá</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-gray-100">
                <div className="text-xs font-bold text-gray-700 mb-0.5">Fundación</div>
                <div className="text-xs font-bold text-gray-700">Ciudad del Saber</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Clayton, Panamá</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} CrediViva S.A. — CREDIVIVA, S.A. inscrita en el Registro Público, Rollo 155662090. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-400">Hecho en Panamá 🇵🇦</p>
        </div>
      </div>
    </footer>
  );
}
