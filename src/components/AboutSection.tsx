import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "100%", label: "Foco no cliente" },
    { value: "2+", label: "Plataformas próprias" },
    { value: "∞", label: "Propósito em cada projeto" },
  ];

  return (
    <section id="sobre" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="section-label mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-unir-vibrant-blue" />
              Sobre nós
            </span>
            <h2 className="display-text text-5xl md:text-6xl lg:text-7xl font-bold text-unir-dark-blue mt-6 leading-none">
              Construímos o futuro com{" "}
              <span className="text-unir-vibrant-blue">tecnologia e fé</span>.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Na Unir, tecnologia e propósito caminham juntos para criar soluções que
              transformam o mercado. Nossa missão é impulsionar empresas para o futuro,
              trazendo uma abordagem personalizada que entende suas necessidades e adapta
              soluções para alcançar resultados reais.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Somos guiados por valores cristãos, ética profissional e excelência técnica
              em cada linha de código que escrevemos.
            </p>

            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full border-unir-dark-blue/20 text-unir-dark-blue hover:bg-unir-dark-blue hover:text-white group"
            >
              Começar a transformação
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="display-text text-4xl md:text-5xl font-bold text-unir-vibrant-blue mb-2">{s.value}</div>
                  <div className="text-sm text-muted-foreground leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
