"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from './theme-provider';
import { generalMedium, generalSemiBold } from "../font";
import CustomButton from "./ui/buttons";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

 

  return (
    <CustomButton
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      variant={resolvedTheme === "dark" ? "modeToggleDark" : "modeToggleLight"}
      size="modeToggle"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className="flex"
    >
      <p className={`text-[clamp(0.625rem,0.9vw,0.875rem)] ${generalMedium.className}`}>
        {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
      </p>
      <span className="relative rounded-full hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors">
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
      </span>
    </CustomButton>
  );
}
