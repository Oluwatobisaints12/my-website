"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from './theme-provider';
import { generalSemiBold } from "../font";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[107px] h-[28px] lg:w-[121px] lg:h-[32px]" aria-hidden="true" />;
  }

  return (
    <div
      className={`p-2 flex items-center justify-center rounded-[8px] w-[107px] h-[28px] lg:w-[121px] lg:h-[32px] gap-[8px] ${
        resolvedTheme === "dark" ? "bg-white text-[#1C1B1B]" : "bg-[#0D0D0D] text-white"
      }`}
    >
      <p className={`text-[0.75rem] ${generalSemiBold.className}`}>
        {resolvedTheme === "dark" ? "light mode" : "dark mode"}
      </p>
      <button 
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      >
        <div className="relative rounded-full hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors">
          {resolvedTheme === "dark" ? (
            <Sun
              className={`h-[1.2rem] w-[1.2rem] transition-all ${
                resolvedTheme === "dark" ? "scale-100 rotate-90" : "scale-100 rotate-0"
              }`}
            />
          ) : (
            <Moon
              className={`h-[1.2rem] w-[1.2rem] transition-all ${
                resolvedTheme === "light" ? "scale-100 rotate-0" : "scale-0 rotate-90"
              }`}
            />
          )}
        </div>
      </button>
    </div>
  );
}