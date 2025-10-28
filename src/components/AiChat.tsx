
import { useState, useRef, useEffect } from "react";
import { streamChat } from "@/services/chatService";
import { toast } from "sonner";
import { Message } from "./chat/types";
import { MessageContainer } from "./chat/MessageContainer";
import { ChatInput } from "./chat/ChatInput";

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayedContent, setDisplayedContent] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const currentMessageRef = useRef<string>("");
  const indexRef = useRef<number>(0);
  const autoScrollRef = useRef<boolean>(true);

  useEffect(() => {
    if (messagesContainerRef.current && autoScrollRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, displayedContent]);
  
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
          setTimeout(typeNextChar, 30);
        } else {
          setIsTyping(false);
        }
      };
      
      typeNextChar();
    }
  }, [messages]);

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
    autoScrollRef.current = true;

    let assistantContent = "";
    
    await streamChat({
      messages: [...messages, userMessage],
      onDelta: (chunk) => {
        assistantContent += chunk;
        setMessages(prev => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant") {
            return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantContent } : m));
          }
          return [...prev, { role: "assistant", content: assistantContent }];
        });
      },
      onDone: () => {
        setIsLoading(false);
      },
      onError: (error) => {
        console.error("Error sending message:", error);
        toast.error("Failed to generate response. Please try again.");
        setIsLoading(false);
      }
    });
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      autoScrollRef.current = true;
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        <MessageContainer 
          messages={messages}
          isLoading={isLoading}
          isTyping={isTyping}
          displayedContent={displayedContent}
          autoScroll={autoScrollRef.current}
          onScroll={handleScroll}
          scrollToBottom={scrollToBottom}
        />
        
        <ChatInput 
          input={input}
          onChange={setInput}
          onSend={handleSend}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
