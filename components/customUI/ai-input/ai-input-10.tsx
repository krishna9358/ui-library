"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput10() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 80,
    maxHeight: 240,
  });
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    console.log("Submitting:", inputValue);
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-6">
      <div className="relative max-w-6xl w-full mx-auto">
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
              Web3 AI Assistant
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Get expert insights on blockchain, cryptocurrency, and decentralized technologies
            </p>
          </div>
          
          <div className="relative">
            <Textarea
              placeholder="What would you like to learn about Web3? Ask about trading strategies, protocol analysis, security audits, or development patterns..."
              className={cn(
                "w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-600 rounded-2xl pl-6 pr-16 py-6",
                "placeholder:text-slate-500 dark:placeholder:text-slate-400",
                "text-slate-900 dark:text-slate-100 text-base leading-relaxed",
                "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                "resize-none overflow-y-auto",
                "min-h-[80px] max-h-[240px]",
                "shadow-sm"
              )}
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                adjustHeight();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
            
            <div className="absolute right-4 bottom-4 flex items-center gap-3">
              <button
                type="button"
                className="p-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
              >
                <Mic className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 transition-colors" />
              </button>
              
              <button
                onClick={handleSubmit}
                disabled={!inputValue}
                type="button"
                className={cn(
                  "px-8 py-3 rounded-xl font-semibold transition-all duration-300",
                  inputValue
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
                    : "bg-slate-300 dark:bg-slate-600 text-slate-500 cursor-not-allowed"
                )}
              >
                Ask AI
              </button>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-sm text-slate-600 dark:text-slate-400 mr-2">Quick topics:</span>
            {[
              'DeFi Yield Farming',
              'Smart Contract Security',
              'Layer 2 Solutions',
              'Cross-chain Bridges',
              'Tokenomics Design',
              'MEV Protection'
            ].map((topic) => (
              <button
                key={topic}
                className="px-3 py-1 text-xs bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-300 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                onClick={() => {
                  setInputValue(`Explain ${topic} in detail`);
                  adjustHeight();
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
