import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Para quem é indicado este curso?",
    answer: "Este curso é ideal para iniciantes que nunca tiveram contato com informática ou que têm conhecimento básico e querem se aprofundar. É perfeito para pessoas de todas as idades que desejam se inserir no mundo digital."
  },
  {
    question: "Preciso ter conhecimento prévio em informática?",
    answer: "Não! O curso foi desenvolvido especialmente para iniciantes. Começamos do zero, explicando desde os conceitos mais básicos até as ferramentas mais avançadas de forma didática e fácil de entender."
  },
  {
    question: "Como funciona o acesso ao curso?",
    answer: "Após a compra, você recebe acesso imediato a todos os módulos do curso. Pode estudar no seu próprio ritmo, quando e onde quiser. O acesso é vitalício, então você nunca perde o conteúdo."
  },
  {
    question: "Qual a garantia oferecida?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o curso, devolvemos 100% do seu dinheiro, sem perguntas."
  },
  {
    question: "O curso inclui certificado?",
    answer: "Sim! Ao concluir o curso, você recebe um certificado de conclusão que pode ser usado para comprovar seus conhecimentos em informática básica."
  },
  {
    question: "Como é o suporte aos alunos?",
    answer: "Você terá acesso a suporte completo durante todo o curso. Pode tirar dúvidas e receber orientações sempre que precisar através da nossa plataforma de ensino."
  },
  {
    question: "Posso acessar o curso pelo celular?",
    answer: "Sim! O curso é totalmente responsivo e pode ser acessado de qualquer dispositivo: computador, tablet ou smartphone. Você pode estudar onde estiver."
  },
  {
    question: "Quanto tempo tenho para concluir o curso?",
    answer: "Não há prazo! Com o acesso vitalício, você pode estudar no seu próprio ritmo e rever o conteúdo quantas vezes quiser. O importante é aprender de forma consistente."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire todas as suas dúvidas sobre o curso
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};