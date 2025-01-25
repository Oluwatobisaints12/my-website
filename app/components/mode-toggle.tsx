"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from './theme-provider';
import { generalMedium, generalSemiBold } from "../font";

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
    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}

      className={`flex items-center justify-center cursor-pointer py-[6px] px-[8px] rounded-[8px] gap-[8px]  md:w-[79px] md:h-[18px] md:text-[10px] md:p-0 md:gap-[4px] lg:w-[121px] lg:h-[32px]  ${
        resolvedTheme === "dark" ? "bg-white text-[#1C1B1B]" : "bg-[#0D0D0D] text-white"
      }`}
    >
      <p className={`text-[14px] md:text-[10px] ${generalMedium.className}`}>
        {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
      </p>
      <button 
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