import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import fixonScreenshot from "@/assets/fixon-screenshot.png";
import tattoosyScreenshot from "@/assets/tattoosy-screenshot.png";

const SistemasSection = () => {
  const sistemas = [
    {
      name: "Fix-On",
      description: "Plataforma de soluções rápidas e simples para problemas do dia a dia. Resolva questões de celular, computador, internet e aplicativos de forma prática.",
      url: "https://fixon.lovable.app/",
      tags: ["Suporte", "Soluções", "Tecnologia"],
      image: fixonScreenshot,
    },
    {
      name: "Tattoosy",
      description: "Plataforma completa para estúdios de tatuagem. Agendamento online, gestão de artistas e página personalizada para seu estúdio.",
      url: "https://tattoosy.site/",
      tags: ["Agendamento", "Gestão", "Estúdios"],
      image: tattoosyScreenshot,
    },
  ];

  return (
    <section id="sistemas" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-unir-dark-blue mb-6">
            Nossos <span className="text-unir-vibrant-blue">Sistemas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as plataformas desenvolvidas pela UNIR que já estão transformando negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sistemas.map((sistema, index) => (
            <a
              key={index}
              href={sistema.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth block"
            >
              <div className="w-full aspect-video overflow-hidden border-b border-border">
                <img src={sistema.image} alt={`Screenshot do ${sistema.name}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-smooth" />
              </div>
              <div className="p-8">
              <h3 className="text-2xl font-bold text-unir-dark-blue mb-4 group-hover:text-unir-vibrant-blue transition-smooth">
                {sistema.name}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {sistema.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {sistema.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-unir-vibrant-blue"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="outline" size="sm" className="border-unir-vibrant-blue text-unir-vibrant-blue group-hover:bg-unir-vibrant-blue group-hover:text-white transition-smooth pointer-events-none">
                <ExternalLink className="w-4 h-4 mr-2" />
                Acessar plataforma
              </Button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SistemasSection;
