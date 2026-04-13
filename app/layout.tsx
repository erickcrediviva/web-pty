import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CrediViva — Compra hoy, paga en cuotas fijas",
  description:
    "CrediViva es tu línea de crédito en cuotas fijas y claras. No es tarjeta, no es banco. Compra en tus tiendas favoritas de Panamá y paga cómodo, sin sorpresas.",
  keywords: "crédito, cuotas, BNPL, Panamá, compras, fintech",
  openGraph: {
    title: "CrediViva — Compra hoy, paga en cuotas fijas",
    description: "Crédito en cuotas fijas. Claro, simple y sin sorpresas.",
    locale: "es_PA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
