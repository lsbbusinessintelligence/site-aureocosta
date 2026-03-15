import { motion } from "framer-motion";

const photos = [
  { src: "/images/aureocosta/AUREOCOSTA01.jpeg", alt: "Serviço residencial do Sr. Áureo" },
  { src: "/images/aureocosta/AUREOCOSTA02.jpeg", alt: "Instalação e reparo residencial" },
  { src: "/images/aureocosta/AUREOCOSTA03.jpeg", alt: "Manutenção em ambiente interno" },
  { src: "/images/aureocosta/AUREOCOSTA04.jpeg", alt: "Acabamento com capricho" },
  { src: "/images/aureocosta/AUREOCOSTA05.jpeg", alt: "Montagem e ajustes residenciais" },
  { src: "/images/aureocosta/AUREOCOSTA06.jpeg", alt: "Atendimento profissional em domicílio" },
];

const GaleriaSection = () => (
  <section id="obras" className="py-20 md:py-28 bg-secondary/40 scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trabalhos e Resultados <span className="text-gradient">do Sr. Áureo</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Fotos reais de reparos, instalações e acabamentos executados em casas e comércios da região.
        </p>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
            className="mb-4 overflow-hidden rounded-2xl bg-card border border-border shadow-sm break-inside-avoid"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default GaleriaSection;
