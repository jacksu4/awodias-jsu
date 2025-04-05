
import { BrainCircuit } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
      <BrainCircuit size={40} className="text-purple-400 opacity-70" />
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-gray-300">Start a conversation with JS.AI</p>
        <p className="text-sm text-gray-500">Ask anything about Jingcheng or any other topic</p>
      </div>
    </div>
  );
}
