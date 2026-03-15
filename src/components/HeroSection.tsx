import { motion } from "framer-motion";
import { MessageCircle, Check, Wrench, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siteConfig";

const HeroSection = () => (
  <section id="home" className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center scroll-mt-28">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDuration: "3s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white/10 blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
    </div>

    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-[10%] w-1 h-20 bg-gradient-to-b from-accent/20 to-transparent" />
      <div className="absolute top-32 right-[15%] w-1 h-16 bg-gradient-to-b from-accent/15 to-transparent" />
      <div className="absolute bottom-40 left-[20%] w-1 h-24 bg-gradient-to-b from-accent/10 to-transparent" />
      <div className="absolute bottom-20 right-[25%] w-1 h-20 bg-gradient-to-b from-accent/15 to-transparent" />
    </div>
    
    <div className="container relative z-10 py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-5 rounded-full bg-white/10 border border-white/20 px-3 py-2">
            <img
              src="/images/aureocosta/AUREOCOSTA01.jpeg"
              alt="Áureo Costa em atendimento"
              className="w-9 h-9 rounded-full object-cover border border-white/40"
            />
            <span className="text-xs md:text-sm text-primary-foreground/90 font-medium">
              Áureo Costa | Serviços Residenciais
            </span>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Wrench className="w-10 h-10 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
            Áureo Costa | Soluções Completas para sua Casa ou Comércio
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl">
            Marido de Aluguel em Embu das Artes e região. O Sr. Áureo resolve desde pequenos reparos até instalações complexas com rapidez, limpeza e a confiança que você precisa.
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
                  event_label: 'botao_whatsapp_hero'
                });
              }
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento via WhatsApp
          </a>
          <div className="mt-8 flex flex-col gap-3">
            <span className="flex items-center gap-2 text-primary-foreground/80 text-sm md:text-base font-semibold">
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              Atendimento residencial e comercial em Embu das Artes e região
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Reparos elétricos, hidráulicos, montagem e acabamentos
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Orçamento transparente e atendimento com hora marcada
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/60 text-sm ml-7">
              <Check className="w-4 h-4 text-accent/70 flex-shrink-0" />
              Limpeza pós-serviço e foco total em resolver o problema
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-6 mt-12 lg:mt-0"
        >
          <div className="bg-gradient-to-br from-[#f6fbff] to-[#dff1ff] rounded-3xl shadow-2xl p-6 max-w-md border border-white/40">
            <div className="relative overflow-hidden rounded-2xl bg-[#f8fcff]">
              <img
                src="/images/aureocosta/AUREOCOSTA04.jpeg"
                alt="Serviço residencial executado pelo Sr. Áureo"
                className="w-full h-auto"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-[#f8fcff] mt-4">
              <img
                src="/images/aureocosta/AUREOCOSTA07.jpeg"
                alt="Acabamento residencial realizado com capricho"
                className="w-full h-auto"
              />
            </div>

            <div className="mt-6 text-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-[#1f4f73] font-semibold text-base mb-2">
                "Pontual, organizado e com serviço limpo."
              </p>
              <p className="text-[#4f7b97] text-sm">
                Clientes reais recomendam o Sr. Áureo
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-card/90 border border-accent/20 px-5 py-2 text-sm text-foreground shadow">
            <ShieldCheck className="w-4 h-4 text-accent" />
            Soluções completas para sua casa sem dor de cabeça
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
