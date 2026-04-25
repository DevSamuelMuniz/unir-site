import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581984639299", "_blank");
  };

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden hero-gradient pt-8 pb-20">
      {/* Decorative floating orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-unir-vibrant-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-unir-electric/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Top bar with logo + availability */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <img
            src="/images/bc3c4eeb-529c-438d-bf3c-f0b7502e93e0.png"
            alt="UNIR"
            className="h-14 md:h-16 w-auto"
          />
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur text-xs font-semibold uppercase tracking-widest text-unir-dark-blue">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Disponível para novos projetos
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-6xl">
          <h1 className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-unir-dark-blue mb-10">
            Transformamos<br />
            negócios com{" "}
            <span className="bg-gradient-to-r from-unir-vibrant-blue to-unir-electric bg-clip-text text-transparent">
              tecnologia
            </span><br />
            e propósito.
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Unimos inovação, design e valores cristãos para criar soluções digitais
            que geram impacto real para empresas e pessoas.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-unir-dark-blue to-unir-vibrant-blue hover:from-unir-vibrant-blue hover:to-unir-electric text-white rounded-full h-14 px-8 text-base font-semibold group transition-smooth"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Vamos conversar
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#sistemas")}
              className="border-unir-dark-blue/20 text-unir-dark-blue hover:bg-unir-dark-blue hover:text-white rounded-full h-14 px-8 text-base font-semibold"
            >
              Ver nossos projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
