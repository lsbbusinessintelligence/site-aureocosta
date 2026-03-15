import HeroSection from "@/components/HeroSection";
import ServicosSection from "@/components/ServicosSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GaleriaSection from "@/components/GaleriaSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="pt-20 md:pt-24">
    <HeroSection />
    <ServicosSection />
    <BeneficiosSection />
    <GaleriaSection />
    <TestimonialsSection />
    <CtaSection />
    <Footer />
  </main>
);

export default Index;
