
import { useRef } from "react";
import { Message } from "./types";
import { MessageBubble } from "./MessageBubble";
import { EmptyState } from "./EmptyState";
import { LoadingIndicator } from "./LoadingIndicator";
import { ScrollToBottomButton } from "./ScrollToBottomButton";

interface MessageContainerProps {
  messages: Message[];
  isLoading: boolean;
  isTyping: boolean;
  displayedContent: string;
  autoScroll: boolean;
  onScroll: () => void;
  scrollToBottom: () => void;
}

export function MessageContainer({ 
  messages, 
  isLoading, 
  isTyping, 
  displayedContent, 
  autoScroll, 
  onScroll,
  scrollToBottom 
}: MessageContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const showScrollButton = containerRef.current && 
    containerRef.current.scrollHeight > containerRef.current.clientHeight && 
    !autoScroll;

  return (
    <div 
      ref={containerRef}
      className="bg-[#0d1528]/50 rounded-lg border border-gray-700/50 p-4 h-[400px] overflow-y-auto flex flex-col space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
      onScroll={onScroll}
    >
      {messages.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <MessageBubble 
              key={index}
              message={message}
              isLatest={index === messages.length - 1}
              isTyping={isTyping}
              displayedContent={displayedContent}
            />
          ))}
          {isLoading && <LoadingIndicator />}
        </div>
      )}

      {showScrollButton && <ScrollToBottomButton onClick={scrollToBottom} />}
    </div>
  );
}
