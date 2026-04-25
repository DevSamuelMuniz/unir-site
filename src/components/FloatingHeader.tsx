import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingHeader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Soluções", href: "#servicos" },
    { label: "Cases", href: "#sistemas" },
    { label: "Equipe", href: "#equipe" },
    { label: "Contato", href: "#contato" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhats = () => window.open("https://wa.me/5581984639299", "_blank");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto mt-4 w-fit max-w-[95vw] rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-elegant pl-5 pr-2 py-2 flex items-center gap-8">
        <img
          src="/images/bc3c4eeb-529c-438d-bf3c-f0b7502e93e0.png"
          alt="UNIR"
          className="h-8 w-auto"
        />
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-medium text-foreground/70 hover:text-unir-vibrant-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button
          size="sm"
          onClick={handleWhats}
          className="bg-gradient-to-r from-unir-dark-blue to-unir-vibrant-blue hover:from-unir-vibrant-blue hover:to-unir-electric text-white rounded-full h-9 px-4 text-xs font-semibold"
        >
          <MessageCircle className="w-4 h-4 mr-1.5" />
          Vamos conversar
        </Button>
      </div>
    </header>
  );
};

export default FloatingHeader;
