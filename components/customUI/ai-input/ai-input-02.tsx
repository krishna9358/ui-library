
"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput02() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 56,
    maxHeight: 200,
  });
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    console.log("Submitting:", inputValue);
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-6">
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="relative border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-lg overflow-hidden">
          <Textarea
            placeholder="Ask about blockchain, DeFi, or Web3..."
            className={cn(
              "w-full bg-transparent border-none pl-6 pr-24 py-4",
              "placeholder:text-slate-500 dark:placeholder:text-slate-400",
              "text-slate-900 dark:text-slate-100",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "resize-none overflow-y-auto",
              "min-h-[56px] max-h-[200px]"
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
          
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Mic className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </button>
            
            {inputValue && (
              <button
                onClick={handleSubmit}
                type="button"
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 animate-scale-in"
              >
                <CornerRightUp className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        
        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 text-center">
          Press Enter to send, Shift+Enter for new line
        </div>
      </div>
    </div>
  );
}
