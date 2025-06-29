"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput05() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 64,
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
      <div className="relative max-w-4xl w-full mx-auto">
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <Textarea
                placeholder="What would you like to know about DeFi, NFTs, or blockchain development?"
                className={cn(
                  "w-full bg-transparent border-none p-0",
                  "placeholder:text-slate-500 dark:placeholder:text-slate-400",
                  "text-slate-900 dark:text-slate-100 text-base leading-relaxed",
                  "focus-visible:ring-0 focus-visible:ring-offset-0",
                  "resize-none overflow-y-auto",
                  "min-h-[64px] max-h-[200px]"
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
            </div>
            
            <div className="flex items-center gap-2 mt-2">
              <button
                type="button"
                className="p-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Mic className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </button>
              
              <button
                onClick={handleSubmit}
                disabled={!inputValue}
                type="button"
                className={cn(
                  "p-2.5 rounded-xl transition-all duration-200",
                  inputValue
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
                )}
              >
                <CornerRightUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}