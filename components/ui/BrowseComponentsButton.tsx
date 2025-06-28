"use client";

import { Button } from "./button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import Link from "next/link";

type Theme = "dark" | "light";

export function BrowseComponentsButton({
  title,
  theme,
}: {
  title: string;
  theme?: Theme;
}) {
  return (
    <Link
      href="/docs/components/action-search-bar"
      className="flex items-center gap-8"
    >
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
      >
        <Button
          className={cn(
            "relative inline-flex items-center justify-center gap-4 rounded-xl font-medium",
            "relative h-12 px-6 min-w-72 md:min-w-56",
            theme == "dark"
              ? "bg-black dark:bg-white "
              : "bg-white dark:bg-black ",
            theme == "dark"
              ? "text-white dark:text-black"
              : "text-black dark:text-white",
            theme == "dark"
              ? "border-2 border-orange-500/20 dark:border-orange-400/20"
              : "border-2 border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10",
            theme == "dark"
              ? "shadow-[0_8px_16px_-6px_rgba(251,113,133,0.3)]"
              : "",
            theme == "dark"
              ? "dark:shadow-[0_8px_16px_-6px_rgba(251,113,133,0.2)]"
              : "",
            theme == "dark"
              ? "shadow-[0_15px_30px_-6px_rgba(251,113,133,0.4),0_0px_30px_-6px_rgba(168,85,247,0.4)]"
              : "",
            theme == "dark"
              ? "dark:shadow-[0_15px_30px_-6px_rgba(251,113,133,0.3),0_0px_30px_-6px_rgba(168,85,247,0.3)]"
              : "",
            "backdrop-blur-xs"
          )}
        >
          <span className="font-medium">{title}</span>
          {/* <CompassOutline className="w-8 h-8" /> */}
          <ArrowDownRight className="w-5 h-5 rotate-[270deg]" />
        </Button>
      </motion.div>
    </Link>
  );
}
