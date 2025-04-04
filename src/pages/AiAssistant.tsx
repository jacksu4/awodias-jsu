
import { AiChat } from "@/components/AiChat";

export default function AiAssistant() {
  return (
    <div className="container py-12 space-y-8">
      <div className="text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Assistant</h1>
        <p className="text-muted-foreground">Ask questions or get help with anything you need</p>
      </div>
      
      <AiChat />
    </div>
  );
}
