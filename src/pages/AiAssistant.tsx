
import { AiChat } from "@/components/AiChat";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AiAssistant() {
  return (
    <div className="bg-gradient-to-br from-mountain-dark via-mountain-blue to-purple-400 min-h-[calc(100vh-64px)]">
      <div className="container py-12 space-y-8 mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-white/90 hover:text-white transition-colors mr-4">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
        </div>
        
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl font-heading">
            Personal AI Assistant
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Powered by advanced AI, this assistant can help answer questions about my background, 
            experience, or any other inquiries you might have.
          </p>
        </div>
        
        <div className="bg-white/95 rounded-lg shadow-lg p-6 max-w-4xl mx-auto backdrop-blur-sm">
          <AiChat />
        </div>
      </div>
    </div>
  );
}
