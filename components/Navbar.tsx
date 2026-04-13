"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/donde-comprar", label: "Dónde comprar" },
  { href: "/para-comercios", label: "Para comercios" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="CrediViva"
              width={140}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#3A39FF] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#descargar"
              data-track="app_download_click"
              data-location="navbar"
              className="bg-[#3A39FF] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#2928e0] transition-colors"
            >
              Descarga la app
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 py-3 border-b border-gray-50 hover:text-[#3A39FF] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href="#descargar"
            data-track="app_download_click"
            data-location="navbar_mobile"
            onClick={() => setOpen(false)}
            className="mt-4 flex justify-center bg-[#3A39FF] text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#2928e0] transition-colors"
          >
            Descarga la app
          </a>
        </div>
      )}
    </header>
  );
}
