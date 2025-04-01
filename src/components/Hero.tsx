
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-mountain-dark via-mountain-blue to-mountain-light">
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in">
          Jingcheng Su
        </h1>
        <h2 className="text-xl md:text-3xl font-heading text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Software Engineer, Investor & Life-long Learner
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
          From Shenzhen to Silicon Valley, bringing technical expertise and business vision together
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button asChild size="lg" className="bg-white text-mountain-dark hover:bg-white/90">
            <a href="#about">Learn More</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white text-mountain-dark hover:bg-white/90">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
