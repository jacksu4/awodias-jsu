
import { AiChat } from "@/components/AiChat";

export default function AiAssistant() {
  return (
    <div className="bg-gradient-to-r from-[#1a73e8] to-[#6fa8dc] min-h-[calc(100vh-64px)]">
      <div className="container py-12 space-y-8 mx-auto px-4">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            AI Assistant
          </h1>
          <p className="text-white/90">
            Ask questions or get help with anything you need
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <AiChat />
        </div>
      </div>
    </div>
  );
}
