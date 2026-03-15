import { motion } from "framer-motion";
import { Wrench, Drill, PaintRoller, Settings } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Reparos Elétricos e Hidráulicos",
    desc: "Instalação de chuveiros, torneiras, ventiladores de teto, suportes de TV, quadros e conserto de vazamentos.",
  },
  {
    icon: Drill,
    title: "Montagem e Marcenaria",
    desc: "Montagem e desmontagem de móveis, reparos em armários e serviços de carpinteiro ou marceneiro.",
  },
  {
    icon: PaintRoller,
    title: "Reformas e Acabamentos",
    desc: "Instalação de pisos e azulejos, drywall, pintura residencial e serviços de pedreiro em geral.",
  },
  {
    icon: Settings,
    title: "Manutenção Especializada",
    desc: "Desentupimento, instalação de varais, prateleiras e construção geral com atenção aos detalhes.",
  },
];

const ServicosSection = () => (
  <section id="servicos" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Versatilidade para resolver os reparos e instalações da sua casa ou comércio em uma única visita.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover work-accent relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative">
              <service.icon className="w-6 h-6 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
