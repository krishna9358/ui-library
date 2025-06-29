"use client";

import { CornerRightUp, Mic } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export default function AIInput08() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
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
      <div className="relative max-w-xl w-full mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl"></div>
          <div className="relative bg-slate-900 m-[2px] rounded-2xl">
            <Textarea
              placeholder="Enter your Web3 query here..."
              className={cn(
                "w-full bg-transparent border-none pl-5 pr-14 py-4",
                "placeholder:text-cyan-300/60",
                "text-cyan-100",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "resize-none overflow-y-auto",
                "min-h-[52px] max-h-[180px]"
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
            
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {!inputValue && (
                <button
                  type="button"
                  className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Mic className="w-4 h-4 text-cyan-400" />
                </button>
              )}
              
              {inputValue && (
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-200 animate-bounce"
                >
                  <CornerRightUp className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
