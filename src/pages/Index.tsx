import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { WhyChoose } from "@/components/WhyChoose";
import { PriceSection } from "@/components/PriceSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <WhyChoose />
      <PriceSection />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
