import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Shield, Zap } from "lucide-react";

export const PriceSection = () => {
  const handleCTA = () => {
    window.open('https://pay.hotmart.com/U98408341K', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-accent font-semibold">
            🔥 OFERTA LIMITADA
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme sua vida digital por <span className="text-primary">apenas</span>
          </h2>
          <div className="text-6xl md:text-8xl font-bold text-accent mb-4">
            $4,00
          </div>
          <p className="text-muted-foreground">
            Investimento único • Acesso vitalício
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-glow border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Curso Completo de Informática Básica</h3>
                <p className="text-muted-foreground">Tudo que você precisa para dominar a informática</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Acesso imediato a todo o conteúdo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Aprenda Word, Excel e PowerPoint</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Segurança digital e uso de e-mail</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Gerenciamento de arquivos e nuvem</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Compras online e ferramentas de IA</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                  <Shield className="w-4 h-4 text-success" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Acesso vitalício</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Resultados rápidos</span>
                </div>
              </div>

              <Button 
                size="lg" 
                variant="cta" 
                onClick={handleCTA}
                className="w-full text-lg py-6 animate-pulse-glow"
              >
                🚀 QUERO COMEÇAR AGORA - APENAS $4,00
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Pagamento 100% seguro • Acesso imediato após a compra
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};