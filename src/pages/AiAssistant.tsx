
import { AiChat } from "@/components/AiChat";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AiAssistant() {
  return (
    <div className="bg-gradient-to-br from-[#1a73e8] to-[#4285f4] min-h-screen">
      <div className="container py-12 space-y-8 mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-white hover:text-white/90 transition-colors mr-4">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
        </div>
        
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white font-heading">
            Personal AI Assistant
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            Powered by advanced AI, this assistant can help answer questions about my background, 
            experience, or any other inquiries you might have.
          </p>
        </div>
        
        <div className="bg-white/95 rounded-xl shadow-2xl p-0 max-w-4xl mx-auto overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold">Chat with AI Assistant</h2>
          </div>
          <AiChat />
        </div>
      </div>
    </div>
  );
}
