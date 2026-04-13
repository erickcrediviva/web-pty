import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Autorización de tratamiento de datos — CrediViva",
  description: "Autorización expresa para el tratamiento de datos personales conforme a la Ley 81 de 2019 de Panamá.",
};

export default function AutorizacionDatosPage() {
  return (
    <LegalPage
      title="Autorización de Tratamiento de Datos"
      subtitle="Conforme a la Ley 81 de 2019 y normas concordantes de la República de Panamá."
      lastUpdated="2025"
      sections={[
        {
          title: "¿Qué información captamos?",
          content: "Al solicitar crédito en nuestra plataforma, recopilamos: nombre, historial de crédito, ingresos, dirección, correo electrónico y dirección IP de tu dispositivo.\n\nSegún el sistema operativo de tu dispositivo, y con tu autorización expresa, podemos acceder a metadatos de:",
        },
        {
          title: "Dispositivos Android",
          content: [
            "Información y características del dispositivo",
            "Calendario",
            "Contactos",
            "Cuentas registradas",
            "Imágenes",
            "Aplicaciones instaladas",
          ],
        },
        {
          title: "Dispositivos iOS",
          content: [
            "Información y características del dispositivo",
            "Calendario",
            "Contactos",
            "Música",
            "Imágenes y videos",
            "Aplicaciones instaladas",
          ],
        },
        {
          title: "Con tu aprobación, también podemos acceder a",
          content: ["Información de contactos", "Ubicación a través de GPS"],
        },
        {
          title: "¿Para qué usamos tu información?",
          content: [
            "Evaluar tu capacidad de crédito",
            "Preparar la documentación del crédito",
            "Cumplir obligaciones contractuales durante la vigencia del crédito",
            "Ejercer derechos contractuales",
            "Realizarte notificaciones de la relación contractual",
            "Optimizar nuestros procesos y modelos crediticios",
            "Gestionar cobros y recuperación de créditos",
          ],
        },
        {
          title: "Uso adicional de datos",
          content: "Incluso si no se te otorga crédito o la relación contractual termina, autorizas a CrediViva a usar tus datos para: envío de material publicitario y de mercadeo, actualización de datos, e investigaciones y estudios internos.",
        },
        {
          title: "Consentimiento y decisiones automatizadas",
          content: "Al usar nuestra plataforma, autorizas expresamente a CrediViva a crear perfiles, evaluaciones y a tomar decisiones automatizadas sobre dichos perfiles para la aprobación de productos crediticios, tasas de interés y términos.",
        },
        {
          title: "Tus derechos (ARCO)",
          content: "Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación y Oposición en cualquier momento escribiéndonos a info@crediviva.com.pa. La revocatoria de consentimiento no tendrá efectos retroactivos sobre tratamientos ya realizados.",
        },
      ]}
    />
  );
}
