import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siteConfig";

const reviewImages = [
  { src: "/images/aureocosta/AUREOCOSTA07.jpeg", alt: "Avaliação real no Google - cliente 1" },
  { src: "/images/aureocosta/AUREOCOSTA08.jpeg", alt: "Avaliação real no Google - cliente 2" },
  { src: "/images/aureocosta/AUREOCOSTA09.jpeg", alt: "Avaliação real no Google - cliente 3" },
  { src: "/images/aureocosta/AUREOCOSTA10.jpeg", alt: "Avaliação real no Google - cliente 4" },
  { src: "/images/aureocosta/AUREOCOSTA11.jpeg", alt: "Avaliação real no Google - cliente 5" },
];

const testimonials = [
  {
    name: "Jéssica Teles",
    text: "Venho registrar minha satisfação com o excelente serviço prestado pelo Áureo. A instalação do lustre, da luminária e o reparo do batente da porta foram executados com muito profissionalismo e cuidado. A qualidade do trabalho, aliada à pontualidade e à atenção aos detalhes, demonstram verdadeira excelência técnica. Parabenizo pelo comprometimento e pela competência demonstrados. Recomendo seus serviços com plena confiança. Ganhou uma cliente.",
  },
  {
    name: "João Gonçalves",
    text: "Conheci o Áureo, porque precisei consertar o meu fogão. Agora sou cliente dele. Ele é um profissional excelente, muito educado e de extrema confiança. O valor pelo seu trabalho é normal, nada abusivo. Muito difícil encontrar alguém como ele. Merece todo o nosso apoio. Muito obrigado, Áureo.",
  },
  {
    name: "Magda Silva",
    text: "Excelente trabalho, excelente profissional. Não enrola. Nota 10. Meu armário de banheiro ficou maravilhoso!! Gratidão.",
  },
  {
    name: "Wérlen Santos",
    text: "Excelente trabalho. Instalou minha lava louças e uma torneira gourmet, ainda trocou um spot de luz do banheiro. Trabalho rápido e bem feito.",
  },
];

const TestimonialsSection = () => (
  <section id="avaliacoes" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Depoimentos de <span className="text-gradient">Clientes Reais</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Quem contrata o Sr. Áureo destaca confiança, rapidez e excelência técnica nos serviços residenciais.
        </p>
        <div className="mt-5 flex flex-wrap justify-center items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-2 font-semibold text-foreground">
            <span className="text-yellow-500">★★★★★</span>
            Atendimento 5 estrelas
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-muted-foreground">
            Feedbacks de confiança em Embu das Artes e região
          </span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 card-hover"
          >
            <div className="mb-3 text-lg tracking-wide text-yellow-500">{"★★★★★"}</div>
            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
            <p className="text-muted-foreground leading-relaxed">"{item.text}"</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium">Avaliações reais capturadas do Google</p>
        <div className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {reviewImages.slice(0, 3).map((img, index) => (
              <motion.figure
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover" />
              </motion.figure>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto w-full">
            {reviewImages.slice(3).map((img, index) => (
              <motion.figure
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.08 }}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover" />
              </motion.figure>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 text-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "click_whatsapp", {
                event_category: "lead",
                event_label: "botao_whatsapp_depoimentos",
              });
            }
          }}
        >
          <MessageCircle className="w-5 h-5" />
          Quero solicitar meu orçamento agora
        </a>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
