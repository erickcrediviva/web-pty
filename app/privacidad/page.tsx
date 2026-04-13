import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad — CrediViva",
  description: "Política de uso, tratamiento y protección de datos de CrediViva conforme a la Ley 81 de 2019 de la República de Panamá.",
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de Privacidad"
      subtitle="CrediViva cumple con la Ley 81 de 2019 y normas concordantes de la República de Panamá sobre protección de datos personales."
      lastUpdated="2025"
      sections={[
        {
          title: "¿Qué hacemos con tu información?",
          content: "Cuando realizas una solicitud de crédito, recopilamos la información personal que nos proporcionas: nombre, historial de crédito, ingresos, dirección y correo electrónico. Al navegar en nuestra plataforma, también recibimos automáticamente tu dirección IP para mejorar tu experiencia.\n\nEsta información se utiliza exclusivamente para:\n\n• Evaluar tu capacidad de crédito\n• Preparar la documentación del crédito\n• Cumplir nuestras obligaciones contractuales\n• Ejercer nuestros derechos contractuales\n• Realizarte notificaciones relacionadas con tu crédito\n\nIncluso si no se te otorga crédito o la relación contractual termina, podremos usar tus datos para enviarte material de mercadeo, actualizar tu información o realizar estudios internos.",
        },
        {
          title: "Consentimiento",
          content: "Al proporcionarnos tu información personal para completar una transacción o solicitud, aceptas que la recopilemos y usemos para ese propósito específico.\n\nCrediViva se compromete a solicitar únicamente la información autorizada en esta política y la normativa panameña vigente.",
        },
        {
          title: "¿Cómo retirar tu consentimiento?",
          content: "Puedes ejercer tus derechos de acceso, rectificación, cancelación, oposición y portabilidad escribiéndonos a info@crediviva.com.pa.\n\nEn un plazo máximo de 10 días hábiles te informaremos sobre tus datos. Para rectificaciones, el plazo es de 5 días hábiles.",
        },
        {
          title: "Divulgación",
          content: "Solo divulgaremos tu información en los casos previstos por la ley panameña. Podemos compartir tus datos con empresas de nuestro mismo grupo económico o proveedores necesarios para evaluar, gestionar y otorgar tu crédito, así como con comercios donde hayas realizado o mostrado interés en realizar una compra.",
        },
        {
          title: "Seguridad",
          content: "Almacenamos y procesamos tu información aplicando medidas de seguridad para evitar pérdida, uso indebido, acceso no autorizado o divulgación. Ciframos canales de comunicación, realizamos respaldos electrónicos y almacenamos la información en lugares seguros con acceso restringido.",
        },
        {
          title: "Edad de consentimiento",
          content: "Al usar este sitio, declaras tener al menos la mayoría de edad en la República de Panamá y que los datos proporcionados son verídicos. Datos falsos pueden resultar en la negación o cancelación anticipada del crédito.",
        },
        {
          title: "Cambios a esta política",
          content: "Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios tienen efecto inmediato tras su publicación. Te notificaremos sobre cambios sustanciales en este sitio.",
        },
      ]}
    />
  );
}
