import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-informatica.jpg";

export const Hero = () => {
  const handleCTA = () => {
    window.open('https://pay.hotmart.com/U98408341K', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary font-semibold">
                🔥 OFERTA ESPECIAL - APENAS $4,00
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                🎓 <span className="text-primary">Curso Completo</span> de
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Informática Básica
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                <strong>Transforme sua Vida Digital!</strong> Aprenda, de maneira prática 
                e envolvente, tudo que você precisa saber sobre informática e ferramentas 
                essenciais para o sucesso no mundo digital.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-warning fill-warning" />
                <span className="font-medium">Curso Completo</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Aprenda no seu ritmo</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-success" />
                <span>Ideal para iniciantes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                variant="cta" 
                onClick={handleCTA}
                className="w-full md:w-auto text-lg px-8 py-6 animate-pulse-glow"
              >
                🚀 MATRICULE-SE AGORA POR APENAS $4,00
              </Button>
              
              <p className="text-sm text-muted-foreground">
                ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte completo
              </p>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Pessoas aprendendo informática"
                className="rounded-2xl shadow-card w-full h-auto"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-4 rounded-full shadow-glow">
                <div className="text-center">
                  <div className="text-2xl font-bold">$4</div>
                  <div className="text-xs">APENAS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};