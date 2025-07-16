import { Card, CardContent } from "@/components/ui/card";
import { Globe, Mail, FileText, Folder, Cloud, ShoppingCart } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Noções Básicas de Informática e Internet",
    description: "Aprenda os fundamentos essenciais para navegar com confiança no mundo digital."
  },
  {
    icon: Mail,
    title: "Uso de E-mail e Segurança Digital",
    description: "Domine o e-mail e proteja-se contra ameaças digitais com práticas de segurança."
  },
  {
    icon: FileText,
    title: "Pacote Office Completo",
    description: "Word, Excel e PowerPoint - ferramentas indispensáveis para trabalho e estudos."
  },
  {
    icon: Folder,
    title: "Gerenciamento de Arquivos",
    description: "Organize seus documentos e pastas de forma eficiente e profissional."
  },
  {
    icon: Cloud,
    title: "Armazenamento na Nuvem",
    description: "Utilize a nuvem para backup e colaboração online de forma segura."
  },
  {
    icon: ShoppingCart,
    title: "Compras Online e IA",
    description: "Compre com segurança online e utilize ferramentas de inteligência artificial."
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que você vai <span className="text-primary">aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conteúdo prático e atualizado, desenvolvido especialmente para quem está começando
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};