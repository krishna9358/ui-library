"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput03() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 180,
  });
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    console.log("Submitting:", inputValue);
    setInputValue("");
    adjustHeight(true);
  };

  return (
    <div className="w-full py-4">
      <div className="relative max-w-3xl w-full mx-auto">
        <div className="relative bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 p-[1px] rounded-3xl">
          <div className="bg-white dark:bg-slate-950 rounded-3xl">
            <Textarea
              placeholder="Describe your Web3 project or ask for smart contract help..."
              className={cn(
                "w-full bg-transparent border-none pl-8 pr-20 py-6",
                "placeholder:text-slate-400 dark:placeholder:text-slate-500",
                "text-slate-900 dark:text-slate-100 text-lg",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "resize-none overflow-y-auto",
                "min-h-[60px] max-h-[180px]"
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
            
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
              <button
                type="button"
                className="p-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              >
                <Mic className="w-5 h-5 text-slate-500 group-hover:text-purple-600 transition-colors" />
              </button>
              
              {inputValue && (
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-300 animate-scale-in shadow-lg"
                >
                  <CornerRightUp className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
