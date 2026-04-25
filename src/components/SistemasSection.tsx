import { ArrowUpRight } from "lucide-react";
import fixonScreenshot from "@/assets/fixon-screenshot.png";
import tattoosyScreenshot from "@/assets/tattoosy-screenshot.png";
import unirfitScreenshot from "@/assets/unirfit-screenshot.png";
import prumoScreenshot from "@/assets/prumo-screenshot.png";

const SistemasSection = () => {
  const sistemas = [
    {
      number: "Case 01",
      name: "Fix-On",
      tagline: "Soluções rápidas para o dia a dia",
      description:
        "Plataforma de soluções rápidas e simples para problemas do dia a dia. Resolva questões de celular, computador, internet e aplicativos de forma prática.",
      url: "https://fixon.lovable.app/",
      tags: ["Suporte", "SaaS", "Tecnologia"],
      image: fixonScreenshot,
    },
    {
      number: "Case 02",
      name: "Tattoosy",
      tagline: "Gestão completa para estúdios de tatuagem",
      description:
        "Plataforma com agendamento online, gestão de artistas e página personalizada para cada estúdio.",
      url: "https://tattoosy.site/",
      tags: ["Agendamento", "Gestão", "Marketplace"],
      image: tattoosyScreenshot,
    },
    {
      number: "Case 03",
      name: "Unir FIT",
      tagline: "Forje sua melhor versão",
      description:
        "Ecossistema fitness definitivo para transformar disciplina em resultados reais. Gamificação, nutrição de elite e treinos impiedosos em um só app.",
      url: "https://unirfit.site/",
      tags: ["Fitness", "Gamificação", "Mobile"],
      image: unirfitScreenshot,
    },
    {
      number: "Case 04",
      name: "Prumo",
      tagline: "Gestão completa para barbearias",
      description:
        "Plataforma de gestão que elimina a burocracia das barbearias. Organize agenda, comissões e caixa em um só lugar e foque no que importa: lucrar.",
      url: "https://prumo.live/",
      tags: ["Barbearia", "Gestão", "SaaS"],
      image: prumoScreenshot,
    },
  ];


  return (
    <section id="sistemas" className="py-32 bg-unir-soft">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="section-label mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-unir-vibrant-blue" />
              Cases
            </span>
            <h2 className="display-text text-5xl md:text-6xl lg:text-7xl font-bold text-unir-dark-blue mt-6 leading-none">
              Projetos que <span className="bg-gradient-to-r from-unir-vibrant-blue to-unir-electric bg-clip-text text-transparent">geram impacto</span>.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Conheça as plataformas desenvolvidas pela Unir que já estão transformando negócios.
          </p>
        </div>

        <div className="space-y-8">
          {sistemas.map((s, i) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-background rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <div className="aspect-video lg:aspect-auto overflow-hidden bg-unir-dark-blue [direction:ltr]">
                  <img
                    src={s.image}
                    alt={`Screenshot do ${s.name}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-smooth duration-700"
                  />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center [direction:ltr]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-unir-vibrant-blue">{s.number}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="display-text text-4xl md:text-5xl font-bold text-unir-dark-blue mb-4 group-hover:text-unir-vibrant-blue transition-smooth">
                    {s.name}
                  </h3>
                  <p className="text-lg text-unir-vibrant-blue font-medium mb-4">{s.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">{s.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {s.tags.map((t) => (
                      <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-unir-soft text-unir-dark-blue border border-border">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-unir-dark-blue group-hover:text-unir-vibrant-blue transition-smooth">
                    Acessar plataforma
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SistemasSection;
