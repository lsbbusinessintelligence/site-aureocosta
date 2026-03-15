import { MapPin } from "lucide-react";
import { COMPANY } from "@/lib/siteConfig";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">{COMPANY.name}</h3>
          <p className="text-primary-foreground/70 mb-4">
            Marido de aluguel para serviços residenciais e comerciais com foco em confiança, capricho e solução rápida.
          </p>
          <p className="text-primary-foreground/80">Responsável: {COMPANY.owner}</p>
          <p className="text-primary-foreground/80">WhatsApp: {COMPANY.phone}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Localização e Atendimento
          </h3>
          <ul className="text-primary-foreground/70 space-y-2">
            <li>• {COMPANY.location}</li>
            <li>• Embu das Artes</li>
            <li>• Taboão da Serra</li>
            <li>• Cotia</li>
            <li>• Grande São Paulo</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
        <p>&copy; {new Date().getFullYear()} {COMPANY.shortName}. Todos os direitos reservados.</p>
        <p className="mt-2">Site desenvolvido por LSB Business Intelligence</p>
      </div>
    </div>
  </footer>
);

export default Footer;
