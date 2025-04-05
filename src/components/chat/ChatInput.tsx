
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

interface ChatInputProps {
  input: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}

export function ChatInput({ input, onChange, onSend, isLoading }: ChatInputProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1">
        <Textarea
          value={input}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Ask JS.AI anything..."
          className="bg-[#0d1528]/70 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 min-h-[50px] max-h-[120px] resize-none w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          disabled={isLoading}
        />
      </div>
      
      <Button
        onClick={onSend}
        disabled={!input.trim() || isLoading}
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-[50px] px-6 rounded-lg shadow-lg shadow-purple-900/20"
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
  );
}
