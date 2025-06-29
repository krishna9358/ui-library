"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput04() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 48,
    maxHeight: 160,
  });
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    console.log("Submitting:", inputValue);
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-lg w-full mx-auto">
        <div 
          className={cn(
            "relative rounded-full border-2 transition-all duration-300",
            isFocused 
              ? "border-emerald-500 shadow-lg shadow-emerald-500/20" 
              : "border-slate-300 dark:border-slate-700"
          )}
        >
          <Textarea
            placeholder="Quick Web3 question..."
            className={cn(
              "w-full bg-white dark:bg-slate-900 border-none rounded-full pl-6 pr-16 py-3",
              "placeholder:text-slate-400 dark:placeholder:text-slate-500",
              "text-slate-900 dark:text-slate-100",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "resize-none overflow-hidden",
              "min-h-[48px] max-h-[160px]",
              "scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600"
            )}
            ref={textareaRef}
            value={inputValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
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
          
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
            {!inputValue && (
              <button
                type="button"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Mic className="w-4 h-4 text-slate-500" />
              </button>
            )}
            
            {inputValue && (
              <button
                onClick={handleSubmit}
                type="button"
                className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200 animate-pulse"
              >
                <CornerRightUp className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
