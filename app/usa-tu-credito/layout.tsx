import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Usa tu crédito CrediViva — Compra hoy en tu tienda favorita",
  description: "Tu línea de crédito CrediViva está lista. Visita una tienda aliada y compra hoy en cuotas fijas.",
  robots: "noindex", // LP de campaña, no indexar
};

export default function LPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
