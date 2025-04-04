
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 更新背景设计，添加更多生动元素 */}
      <div className="absolute inset-0 bg-gradient-to-br from-mountain-dark via-mountain-blue to-purple-400 z-0">
        {/* 彩色漂浮元素 */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-40 right-20 w-56 h-56 bg-yellow-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-300/20 rounded-full blur-lg animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-blue-300/20 rounded-full blur-lg animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-purple-300/20 rounded-full blur-lg animate-float" style={{ animationDelay: "2.5s" }}></div>
        
        {/* 动态波浪效果 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent animate-wave"></div>
        
        {/* 网格装饰 - 使用小星星点 */}
        <div className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', 
            backgroundSize: '30px 30px' 
          }}>
        </div>
        
        {/* 飘动的粒子 */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 7}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
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
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
          From Shenzhen to Silicon Valley, and now to Hong Kong — bringing together technical expertise and business vision.
        </p>
        <div className="flex justify-center mb-12">
          <blockquote className="italic text-xl md:text-2xl text-white/90 animate-fade-in font-heading" style={{ animationDelay: "500ms" }}>
            Curious. Grateful. Never done.
          </blockquote>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <Button asChild size="lg" className="bg-white/90 text-mountain-dark hover:bg-white backdrop-blur-sm border border-white/20 transform transition-transform hover:scale-105">
            <a href="#about">Learn More</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white/10 backdrop-blur-sm transform transition-transform hover:scale-105">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
