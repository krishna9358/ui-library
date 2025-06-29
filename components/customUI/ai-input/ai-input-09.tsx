"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput09() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
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
        <div className="relative bg-slate-100 dark:bg-slate-800 rounded-full p-1">
          <Textarea
            placeholder="Explore the decentralized world..."
            className={cn(
              "w-full bg-white dark:bg-slate-900 border-none rounded-full pl-8 pr-20 py-4",
              "placeholder:text-slate-500 dark:placeholder:text-slate-400",
              "text-slate-900 dark:text-slate-100 text-lg",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "resize-none overflow-y-auto",
              "min-h-[60px] max-h-[200px]",
              "shadow-inner"
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
          
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button
              type="button"
              className="p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Mic className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </button>
            
            {inputValue && (
              <button
                onClick={handleSubmit}
                type="button"
                className="p-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white transition-all duration-200 animate-spin"
                style={{ animationDuration: '2s' }}
              >
                <CornerRightUp className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
        
        <div className="mt-3 flex justify-center gap-2">
          {['DeFi', 'NFT', 'DAO', 'Smart Contracts'].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-violet-200 dark:hover:bg-violet-800 transition-colors"
              onClick={() => {
                setInputValue(`Tell me about ${tag}`);
                adjustHeight();
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
