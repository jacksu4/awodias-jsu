
import { BrainCircuit, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Message } from "./types";

interface MessageBubbleProps {
  message: Message;
  isLatest: boolean;
  isTyping: boolean;
  displayedContent: string;
}

export function MessageBubble({ message, isLatest, isTyping, displayedContent }: MessageBubbleProps) {
  const isAssistant = message.role === "assistant";
  
  return (
    <div
      className={`p-4 rounded-lg border transition-all ${
        isAssistant 
          ? "bg-gradient-to-r from-[#1a2a47]/70 to-[#1d2c4a]/70 border-purple-900/30 shadow-lg" 
          : "bg-gradient-to-r from-[#172136]/90 to-[#172338]/90 border-gray-700/30"
      }`}
    >
      <div className="flex items-center space-x-2 mb-2">
        <div className={`p-1 rounded-full ${isAssistant ? "bg-purple-500/20" : "bg-blue-500/20"}`}>
          {isAssistant ? (
            <BrainCircuit size={16} className="text-purple-300" />
          ) : (
            <User size={16} className="text-blue-300" />
          )}
        </div>
        <p className="text-sm font-medium text-gray-300">
          {isAssistant ? "JS.AI" : "You"}
        </p>
      </div>

      {isAssistant && isLatest && isTyping ? (
        <div className="text-white markdown-content">
          <ReactMarkdown>{displayedContent}</ReactMarkdown>
        </div>
      ) : (
        <div className="text-white markdown-content">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
