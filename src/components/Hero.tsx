
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 更新背景设计，添加动态元素 */}
      <div className="absolute inset-0 bg-gradient-to-br from-mountain-dark via-mountain-blue to-indigo-400 z-0">
        {/* 装饰元素 - 浮动圆圈 */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-56 h-56 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-300/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        {/* 网格装饰 */}
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', 
            backgroundSize: '40px 40px' 
          }}>
        </div>
      </div>
      
      {/* 添加覆盖层，增加深度感 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-0"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
          Jingcheng Su
        </h1>
        <h2 className="text-xl md:text-3xl font-heading text-white/90 mb-8 animate-fade-in drop-shadow-md" style={{ animationDelay: "200ms" }}>
          Software Engineer, Investor & Life-long Learner
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "400ms" }}>
          From Shenzhen to Silicon Valley, bringing technical expertise and business vision together
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button asChild size="lg" className="bg-white/90 text-mountain-dark hover:bg-white backdrop-blur-sm border border-white/20">
            <a href="#about">Learn More</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white/10 backdrop-blur-sm">
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
