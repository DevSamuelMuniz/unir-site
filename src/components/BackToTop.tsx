import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Button
      onClick={scrollTop}
      aria-label="Voltar ao topo"
      size="icon"
      className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-gradient-to-r from-unir-dark-blue to-unir-vibrant-blue hover:from-unir-vibrant-blue hover:to-unir-electric text-white shadow-elegant transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default BackToTop;
