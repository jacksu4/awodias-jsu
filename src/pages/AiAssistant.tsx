
import { AiChat } from "@/components/AiChat";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AiAssistant() {
  return (
    <div className="bg-[#0a192f] min-h-screen flex flex-col items-center justify-center p-4">
      <div className="absolute top-8 left-8">
        <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors mr-4">
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </Link>
      </div>
      
      <div className="w-full max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-200 mb-4">
          JS.AI
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto">
          Ask me anything about Jingcheng,
          or anything else. This AI is 
          still in development.
        </p>
      </div>
      
      <div className="w-full max-w-4xl bg-[#0f1729] rounded-xl border border-gray-700 shadow-2xl p-8 mx-auto">
        <AiChat />
        
        <div className="mt-8 text-center text-gray-400">
          powered by <span className="font-semibold text-gray-200">together.ai</span>
        </div>
      </div>
    </div>
  );
}
