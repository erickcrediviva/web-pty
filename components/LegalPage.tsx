import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Section = {
  title?: string;
  content: string | string[];
};

type LegalPageProps = {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  sections: Section[];
};

export default function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#3A39FF] transition-colors mb-8"
        >
          <ArrowLeft size={13} /> Volver al inicio
        </Link>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-gray-100">
          <div className="inline-flex items-center gap-2 bg-[#F5F5F7] text-gray-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Legal
          </div>
          <h1 className="text-3xl font-black mb-3">{title}</h1>
          {subtitle && <p className="text-gray-500 text-sm leading-relaxed">{subtitle}</p>}
          {lastUpdated && (
            <p className="text-xs text-gray-400 mt-3">Última actualización: {lastUpdated}</p>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          {sections.map((section, i) => (
            <div key={i}>
              {section.title && (
                <h2 className="text-base font-black text-gray-800 mb-3">{section.title}</h2>
              )}
              {Array.isArray(section.content) ? (
                <ul className="flex flex-col gap-2">
                  {section.content.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                      <span className="text-[#3A39FF] mt-1 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Contact footer */}
        <div className="mt-12 pt-8 border-t border-gray-100 bg-[#F5F5F7] rounded-2xl p-6">
          <h3 className="font-black text-sm mb-2">¿Tienes preguntas?</h3>
          <p className="text-xs text-gray-500 mb-3">
            Contáctanos a través de nuestros canales oficiales.
          </p>
          <div className="flex flex-col gap-1">
            <a href="mailto:info@crediviva.com.pa" className="text-xs text-[#3A39FF] hover:underline">
              info@crediviva.com.pa
            </a>
            <a href="tel:50722018388" className="text-xs text-[#3A39FF] hover:underline">
              +507 201-8388
            </a>
          </div>
          <p className="text-[11px] text-gray-400 mt-3">
            CREDIVIVA, S.A. — Fundación Ciudad del Saber, Edificio 153, Clayton, Panamá.
          </p>
        </div>
      </div>
    </div>
  );
}
