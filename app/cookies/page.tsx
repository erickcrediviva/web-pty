import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de cookies — CrediViva",
  description: "Política de uso de cookies y tecnologías similares en la plataforma CrediViva.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      subtitle="En CrediViva utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico y brindar funcionalidades que faciliten el uso de la plataforma."
      lastUpdated="2025"
      sections={[
        {
          title: "¿Qué son las cookies?",
          content: "Las cookies son archivos de texto pequeños que se almacenan en tu navegador o dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde tus acciones y preferencias durante un período de tiempo para que no tengas que reconfigurarlas en cada visita.",
        },
        {
          title: "¿Por qué usamos cookies?",
          content: [
            "Funcionalidad y rendimiento: mantienen el correcto funcionamiento del sitio y recuerdan tus preferencias.",
            "Analítica y estadísticas: recopilan datos de tráfico y comportamiento para mejorar la plataforma.",
            "Personalización: permiten ofrecerte contenido relevante según tu actividad previa.",
            "Seguridad: ayudan a detectar actividades maliciosas o no autorizadas.",
          ],
        },
        {
          title: "Cookies de terceros",
          content: "Podemos usar servicios de terceros (herramientas de analítica, redes sociales) que también instalen cookies en tu dispositivo. Estas cookies se gestionan según las políticas de privacidad de esos terceros. Te recomendamos revisarlas.",
        },
        {
          title: "Gestión y desactivación",
          content: "Puedes configurar tu navegador para bloquear, eliminar o desactivar las cookies en cualquier momento. Ten en cuenta que rechazar ciertas cookies puede afectar la disponibilidad o el correcto funcionamiento de algunas secciones del sitio.\n\nSi rechazas las cookies, se colocará una sola cookie en tu navegador para recordar tu preferencia.",
        },
        {
          title: "Cambios a esta política",
          content: "Podemos modificar esta política para reflejar cambios en la ley, nuestras prácticas o avances tecnológicos. Los cambios sustanciales se notificarán de forma destacada en la plataforma.",
        },
      ]}
    />
  );
}
