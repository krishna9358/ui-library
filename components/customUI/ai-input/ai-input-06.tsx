"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput06() {
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
    <div className="w-full py-4">
      <div className="relative max-w-2xl w-full mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-xl blur-sm opacity-30"></div>
          <div className="relative bg-black rounded-xl border border-slate-800">
            <Textarea
              placeholder="// Ask about smart contracts, Web3 APIs, or crypto..."
              className={cn(
                "w-full bg-transparent border-none pl-6 pr-20 py-4",
                "placeholder:text-green-400/70 placeholder:font-mono",
                "text-green-400 font-mono text-sm",
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
            
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button
                type="button"
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors group"
              >
                <Mic className="w-4 h-4 text-slate-500 group-hover:text-green-400 transition-colors" />
              </button>
              
              {inputValue && (
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white transition-all duration-200 animate-pulse"
                >
                  <CornerRightUp className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-2 text-xs font-mono text-green-400/60 text-center">
          &gt; Ready for Web3 queries...
        </div>
      </div>
    </div>
  );
}