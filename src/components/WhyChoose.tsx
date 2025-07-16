import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Prático e Atualizado",
    description: "Conteúdo 100% prático com as ferramentas mais atuais do mercado.",
    color: "text-success"
  },
  {
    icon: Users,
    title: "Ideal para Iniciantes",
    description: "Desenvolvido especialmente para quem nunca teve contato com informática.",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Aprenda no Seu Ritmo",
    description: "Acesso vitalício! Estude quando e onde quiser, no seu próprio tempo.",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Veja resultados desde a primeira aula e transforme sua vida digital.",
    color: "text-warning"
  }
];

export const WhyChoose = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher <span className="text-primary">este curso?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvido com foco total na sua experiência de aprendizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-card shadow-sm"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-background flex items-center justify-center shadow-sm">
                    <reason.icon className={`w-8 h-8 ${reason.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};