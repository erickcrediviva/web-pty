import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contacto — CrediViva",
};

export default function ContactoPage() {
  return (
    <LegalPage
      title="Contacto"
      subtitle="Estamos aquí para ayudarte. Escríbenos o llámanos."
      sections={[
        {
          title: "Atención al cliente",
          content: [
            "WhatsApp / Teléfono: +507 6796-7333",
            "Correo: atencionalcliente@crediviva.com.pa",
          ],
        },
        {
          title: "Departamento de cobros",
          content: [
            "WhatsApp / Teléfono: +507 6631-6449",
            "Correo: atencionalcliente@crediviva.com.pa",
          ],
        },
        {
          title: "Información general",
          content: [
            "Teléfono: +507 201-8388",
            "Correo: info@crediviva.com.pa",
          ],
        },
        {
          title: "Dirección",
          content: "Fundación Ciudad del Saber, Edificio (Casa) 153, Planta Baja, Local B, Clayton, Panamá.",
        },
      ]}
    />
  );
}
