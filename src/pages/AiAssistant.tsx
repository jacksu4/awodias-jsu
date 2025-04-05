
import { AiChat } from "@/components/AiChat";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Network, CircuitBoard, Sparkles } from "lucide-react";

export default function AiAssistant() {
  return (
    <div className="bg-gradient-to-b from-[#0a192f] to-[#0d1d39] min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[40%] right-[15%] w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Network lines */}
        <div className="hidden md:block absolute inset-0">
          <svg width="100%" height="100%" className="opacity-10">
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      {/* Back button */}
      <div className="absolute top-8 left-8 z-10">
        <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors gap-2 group">
          <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-all">
            <ArrowLeft size={18} className="text-gray-200" />
          </div>
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
      
      {/* Main content */}
      <div className="w-full max-w-4xl mx-auto text-center mb-8 relative z-10">
        <div className="flex items-center justify-center mb-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-full blur-md opacity-70"></div>
            <div className="bg-[#0f1729]/80 backdrop-blur-sm p-3 rounded-full relative">
              <Brain size={32} className="text-purple-300" />
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white to-blue-300 mb-4 inline-block">
          JS.AI
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles size={16} className="text-yellow-300 animate-pulse" />
          <p className="text-gray-300 text-lg">Advanced Personal Assistant</p>
          <Sparkles size={16} className="text-yellow-300 animate-pulse" />
        </div>
        
        <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Ask me whatever you want! I’m still in development and going through a bit of fine-tuning magic ✨
        </p>
      </div>
      
      {/* Chat container with glass morphism effect */}
      <div className="w-full max-w-4xl bg-[#0f1729]/70 backdrop-blur-lg rounded-xl border border-gray-700/50 shadow-2xl p-8 mx-auto relative z-10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="flex items-center mb-6 gap-2">
          <CircuitBoard size={20} className="text-purple-400" />
          <h2 className="text-2xl font-semibold text-white/90">Neural Interface</h2>
        </div>
        
        <AiChat />
        
        <div className="mt-8 flex items-center justify-center text-gray-400 gap-2">
          <Network size={14} className="text-gray-500" />
          <span>powered by <span className="font-semibold text-gray-200">together.ai</span></span>
        </div>
      </div>
    </div>
  );
}
