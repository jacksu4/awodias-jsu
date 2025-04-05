
import { Loader2 } from "lucide-react";

export function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center p-4 text-gray-300 bg-[#1a2a47]/30 border border-purple-900/20 rounded-lg">
      <div className="flex items-center gap-3">
        <Loader2 className="h-4 w-4 animate-spin" />
        <div className="flex items-center gap-1">
          <span className="text-sm">JS.AI is thinking</span>
          <span className="animate-pulse">...</span>
        </div>
      </div>
    </div>
  );
}
