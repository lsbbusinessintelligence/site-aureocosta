import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY, WHATSAPP_URL } from "@/lib/siteConfig";

const CtaSection = () => (
  <section id="contato" className="hero-gradient py-20 md:py-28 scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Resolva seus reparos com quem entrega resultado
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10">
          Fale direto com o {COMPANY.owner} e receba um orçamento claro para serviços residenciais em Embu das Artes e região.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:brightness-110 transition-all duration-200 shadow-[0_0_30px_-10px_rgba(39,174,96,0.9)]"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'click_whatsapp', {
                event_category: 'lead',
                event_label: 'botao_whatsapp_cta'
              });
            }
          }}
        >
          <MessageCircle className="w-5 h-5" />
          Solicitar Orçamento via WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
