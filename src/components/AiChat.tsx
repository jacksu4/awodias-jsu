
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { generateText } from "@/services/togetherAiService";
import { toast } from "sonner";
import { Loader2, BrainCircuit, User, Send, ChevronDown } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  content: string;
  role: "user" | "assistant";
}

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayedContent, setDisplayedContent] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const currentMessageRef = useRef<string>("");
  const indexRef = useRef<number>(0);
  const autoScrollRef = useRef<boolean>(true);

  useEffect(() => {
    if (messagesContainerRef.current && autoScrollRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, displayedContent]);
  
  // Effect for the typing animation - only for the latest assistant message
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].role === "assistant") {
      const message = messages[messages.length - 1].content;
      currentMessageRef.current = message;
      indexRef.current = 0;
      setIsTyping(true);
      setDisplayedContent("");
      
      const typeNextChar = () => {
        if (indexRef.current < message.length) {
          setDisplayedContent(message.substring(0, indexRef.current + 1));
          indexRef.current++;
          setTimeout(typeNextChar, 30); // Speed of typing
        } else {
          setIsTyping(false);
        }
      };
      
      typeNextChar();
    }
  }, [messages]);

  // Handle scroll events to detect user scrolling
  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 10;
      autoScrollRef.current = isAtBottom;
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      content: input,
      role: "user"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    autoScrollRef.current = true; // Reset auto-scroll when sending new message

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

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      autoScrollRef.current = true;
    }
  };

  const showScrollButton = messagesContainerRef.current && 
    messagesContainerRef.current.scrollHeight > messagesContainerRef.current.clientHeight && 
    !autoScrollRef.current;

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        <div 
          ref={messagesContainerRef}
          className="bg-[#0d1528]/50 rounded-lg border border-gray-700/50 p-4 h-[400px] overflow-y-auto flex flex-col space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
          onScroll={handleScroll}
        >
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
              <BrainCircuit size={40} className="text-purple-400 opacity-70" />
              <div className="text-center space-y-2">
                <p className="text-lg font-medium text-gray-300">Start a conversation with JS.AI</p>
                <p className="text-sm text-gray-500">Ask anything about Jingcheng or any other topic</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all ${
                    message.role === "assistant" 
                      ? "bg-gradient-to-r from-[#1a2a47]/70 to-[#1d2c4a]/70 border-purple-900/30 shadow-lg" 
                      : "bg-gradient-to-r from-[#172136]/90 to-[#172338]/90 border-gray-700/30"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`p-1 rounded-full ${message.role === "assistant" ? "bg-purple-500/20" : "bg-blue-500/20"}`}>
                      {message.role === "assistant" ? (
                        <BrainCircuit size={16} className="text-purple-300" />
                      ) : (
                        <User size={16} className="text-blue-300" />
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-300">
                      {message.role === "assistant" ? "JS.AI" : "You"}
                    </p>
                  </div>

                  {message.role === "assistant" && index === messages.length - 1 && isTyping ? (
                    <p className="text-white whitespace-pre-wrap">
                      {displayedContent}
                    </p>
                  ) : (
                    <p className="text-white whitespace-pre-wrap">
                      {message.content}
                    </p>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center justify-center p-4 text-gray-300 bg-[#1a2a47]/30 border border-purple-900/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <div className="flex items-center gap-1">
                      <span className="text-sm">JS.AI is thinking</span>
                      <span className="animate-pulse">...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Scroll to bottom button */}
          {showScrollButton && (
            <button 
              onClick={scrollToBottom}
              className="absolute bottom-24 right-12 bg-gray-800/80 text-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-700/80 transition-colors"
            >
              <ChevronDown size={20} />
            </button>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask JS.AI anything..."
            className="flex-1 bg-[#0d1528]/70 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 min-h-[50px] max-h-[120px] resize-none"
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
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white sm:w-[100px] h-[50px] rounded-lg shadow-lg shadow-purple-900/20"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <div className="flex items-center gap-2">
                <span>Send</span>
                <Send size={16} />
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
