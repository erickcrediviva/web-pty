import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Términos y condiciones — CrediViva",
  description: "Términos y condiciones de uso de la plataforma digital CrediViva.",
};

export default function TerminosPage() {
  return (
    <LegalPage
      title="Términos y Condiciones"
      subtitle="Estos Términos regulan el uso de la plataforma digital de CREDIVIVA, S.A., incluyendo el sitio web, la app móvil y todos los servicios financieros asociados."
      lastUpdated="2025"
      sections={[
        {
          title: "1. Aceptación",
          content: "Al navegar, registrarte o usar los servicios de CrediViva, aceptas estos Términos en su totalidad. Si no estás de acuerdo con alguna disposición, deberás abstenerte de usar los servicios.\n\nCrediViva se reserva el derecho de modificar estos Términos en cualquier momento. El uso continuo de los servicios tras publicar cambios implica su aceptación.",
        },
        {
          title: "2. Servicios financieros",
          content: "CrediViva es una entidad fintech autorizada a operar en la República de Panamá, ofreciendo principalmente:\n\n• Recepción y evaluación de solicitudes de crédito\n• Desembolso y gestión de préstamos\n• Financiamiento de compras en comercios aliados\n\nCrediViva no garantiza la aprobación de ninguna solicitud. Cada solicitud se evalúa según políticas crediticias internas.",
        },
        {
          title: "3. Creación de cuenta y seguridad",
          content: "Para usar los servicios debes:\n\n• Ser mayor de 18 años con capacidad legal para contratar\n• Proporcionar datos verídicos, exactos y completos\n• Mantener tu información siempre actualizada\n• Mantener la confidencialidad de tus credenciales de acceso\n\nEres responsable de todas las operaciones realizadas con tus credenciales. Notifica de inmediato a CrediViva en caso de acceso no autorizado.",
        },
        {
          title: "4. Tratamiento de datos personales",
          content: "Al usar los servicios, autorizas a CrediViva a consultar tu historial crediticio en burós de crédito, reportar tu comportamiento de pago, y tratar tus datos conforme a la Ley 81 de 2019 y el Decreto Ejecutivo 285 de 2021.\n\nPuedes ejercer tus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) escribiendo a info@crediviva.com.pa.",
        },
        {
          title: "5. Restricciones de uso",
          content: [
            "No usar la plataforma para actividades ilegales o fraudulentas",
            "No suplantar la identidad de terceros",
            "No transmitir virus, malware o software malicioso",
            "No enviar spam o comunicaciones no solicitadas",
            "No recolectar datos de otros usuarios de forma ilícita",
          ],
        },
        {
          title: "6. Limitación de responsabilidad",
          content: "CrediViva no será responsable por pérdidas o daños derivados de caídas del sistema, interrupciones de internet, caso fortuito o fuerza mayor. Todas las operaciones realizadas con las credenciales del usuario se consideran válidamente realizadas por este.",
        },
        {
          title: "7. Ley aplicable",
          content: "Estos Términos se rigen por las leyes de la República de Panamá. Cualquier controversia se someterá a los tribunales competentes de la Ciudad de Panamá.",
        },
        {
          title: "Contacto",
          content: "Para consultas sobre estos Términos: info@crediviva.com.pa | +507 201-8388\n\nCREDIVIVA, S.A. — Fundación Ciudad del Saber, Edificio 153, Clayton, Panamá.",
        },
      ]}
    />
  );
}
