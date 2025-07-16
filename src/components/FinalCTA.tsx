import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap } from "lucide-react";

export const FinalCTA = () => {
  const handleCTA = () => {
    window.open('https://pay.hotmart.com/U98408341K', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-glow border-0">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                🔓 Desenvolva suas habilidades digitais 
                <span className="text-primary"> agora</span> e potencialize seu futuro! 🚀
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Não perca esta oportunidade única de transformar sua relação com a tecnologia 
                por apenas <strong className="text-accent">$4,00</strong>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Acesso Vitalício</span>
              </div>
            </div>

            <div className="space-y-6">
              <Button 
                size="lg" 
                variant="cta" 
                onClick={handleCTA}
                className="text-xl px-12 py-8 animate-pulse-glow shadow-glow"
              >
                ✨ CLIQUE E MATRICULE-SE JÁ! ✨
              </Button>

              <div className="text-center">
                <p className="text-4xl font-bold text-accent mb-2">APENAS $4,00</p>
                <p className="text-muted-foreground">
                  💳 Pagamento seguro • 🎯 Resultados garantidos • 🛡️ 7 dias de garantia
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-muted">
              <p className="text-sm text-muted-foreground italic">
                "O melhor momento para plantar uma árvore foi há 20 anos. 
                O segundo melhor momento é agora." - Provérbio Chinês
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Comece sua jornada digital hoje mesmo! 🌟
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};