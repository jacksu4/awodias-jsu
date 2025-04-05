
import { ChevronDown } from "lucide-react";

interface ScrollToBottomButtonProps {
  onClick: () => void;
}

export function ScrollToBottomButton({ onClick }: ScrollToBottomButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="absolute bottom-24 right-12 bg-gray-800/80 text-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-700/80 transition-colors"
    >
      <ChevronDown size={20} />
    </button>
  );
}
