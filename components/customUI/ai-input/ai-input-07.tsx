"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput07() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 72,
    maxHeight: 220,
  });
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    console.log("Submitting:", inputValue);
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-6">
      <div className="relative max-w-5xl w-full mx-auto">
        <div className="bg-white dark:bg-slate-950 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-1"></div>
          
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              
              <div className="flex-1">
                <Textarea
                  placeholder="Ask me anything about Web3, DeFi protocols, smart contract security, or blockchain architecture..."
                  className={cn(
                    "w-full bg-transparent border-none p-0",
                    "placeholder:text-slate-400 dark:placeholder:text-slate-500",
                    "text-slate-900 dark:text-slate-100 text-lg leading-relaxed",
                    "focus-visible:ring-0 focus-visible:ring-offset-0",
                    "resize-none overflow-y-auto",
                    "min-h-[72px] max-h-[220px]"
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
                
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Powered by Web3 Knowledge Base
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                    >
                      <Mic className="w-5 h-5 text-slate-500 group-hover:text-indigo-600 transition-colors" />
                    </button>
                    
                    <button
                      onClick={handleSubmit}
                      disabled={!inputValue}
                      type="button"
                      className={cn(
                        "px-6 py-2.5 rounded-xl font-medium transition-all duration-200",
                        inputValue
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg transform hover:scale-105"
                          : "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
                      )}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}