
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { generateText } from "@/services/togetherAiService";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface Message {
  content: string;
  role: "user" | "assistant";
}

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      content: input,
      role: "user"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Format the conversation for the AI
      const conversationContext = messages.map(msg => 
        `${msg.role === 'user' ? 'Human' : 'Assistant'}: ${msg.content}`
      ).join('\n');
      
      const prompt = `${conversationContext}${conversationContext ? '\n' : ''}Human: ${userMessage.content}\n\nAssistant: `;
      
      const response = await generateText(prompt, {
        temperature: 0.7,
        max_tokens: 1024,
      });

      const assistantMessage: Message = {
        content: response.trim(),
        role: "assistant"
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to generate response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Chat with AI Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-4 h-[400px] overflow-y-auto p-4 border rounded-md">
          {messages.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              Start a conversation with the AI assistant
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.role === "assistant" 
                    ? "bg-primary/10 ml-4" 
                    : "bg-muted mr-4"
                }`}
              >
                <p className="text-sm font-semibold mb-1">
                  {message.role === "assistant" ? "AI Assistant" : "You"}
                </p>
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex items-center justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <span className="ml-2">AI is thinking...</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="w-full resize-none"
          rows={3}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          disabled={isLoading}
        />
        <Button 
          onClick={handleSend} 
          className="self-end" 
          disabled={!input.trim() || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Sending...
            </>
          ) : "Send"}
        </Button>
      </CardFooter>
    </Card>
  );
}
