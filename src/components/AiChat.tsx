
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
  const [displayedContent, setDisplayedContent] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const currentMessageRef = useRef<string>("");
  const indexRef = useRef<number>(0);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, displayedContent]);
  
  // Effect for the typing animation
  useEffect(() => {
    if (currentMessageIndex >= 0 && messages[currentMessageIndex]?.role === "assistant") {
      const message = messages[currentMessageIndex].content;
      currentMessageRef.current = message;
      indexRef.current = 0;
      setIsTyping(true);
      setDisplayedContent("");
      
      const typeNextChar = () => {
        if (indexRef.current < message.length) {
          setDisplayedContent(prev => prev + message[indexRef.current]);
          indexRef.current++;
          setTimeout(typeNextChar, 30); // Speed of typing
        } else {
          setIsTyping(false);
        }
      };
      
      typeNextChar();
    }
  }, [currentMessageIndex, messages]);

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
      setCurrentMessageIndex(messages.length + 1); // Set to the index of the new assistant message
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to generate response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-white/90 mb-4">Chat with AI Assistant</h2>
      
      <div className="flex flex-col space-y-4">
        <div 
          ref={messagesContainerRef}
          className="bg-[#0f213a] rounded-lg border border-gray-700 p-4 h-[400px] overflow-y-auto flex flex-col space-y-4"
        >
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-400">
              Start a conversation with the AI assistant.
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    message.role === "assistant" 
                      ? "bg-[#1a2a47] border border-gray-700" 
                      : "bg-[#172136] border border-gray-700"
                  }`}
                >
                  <p className="text-sm font-semibold mb-1 text-gray-300">
                    {message.role === "assistant" ? "AI Assistant" : "You"}
                  </p>
                  {message.role === "assistant" && index === currentMessageIndex && isTyping ? (
                    <p className="text-gray-200 whitespace-pre-wrap">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        {displayedContent}
                      </span>
                    </p>
                  ) : (
                    <p className="text-gray-200 whitespace-pre-wrap">
                      {message.role === "assistant" && index === messages.length - 1 && index === currentMessageIndex ? (
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                          {displayedContent}
                        </span>
                      ) : (
                        message.content
                      )}
                    </p>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center justify-center p-4 text-gray-300">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <span>AI is thinking...</span>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="flex items-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-[#0f213a] border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 h-[50px]"
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
            disabled={!input.trim() || isLoading}
            className="bg-gray-600 hover:bg-gray-500 text-white ml-2 h-[50px] px-6"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                <span>Wait</span>
              </>
            ) : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
}
