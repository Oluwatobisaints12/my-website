"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is mounted before rendering the toggle
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing or a placeholder during SSR
    return <div className="w-8 h-8" aria-hidden="true"></div>;
  }

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
<div
  className={`p-2 flex items-center justify-center rounded-[8px] w-[121px] h-[32px] ${
    theme === "dark" ? "bg-white text-black" : "bg-black text-white"
  }`}
>
  <p>light mode</p>
  <button onClick={toggleTheme}>
    {theme === "dark" ? (
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "dark" ? "scale-100 rotate-90" : "scale-100 rotate-0"
        }`}
      />
    ) : (
      <Moon
        className={` h-[1.2rem] w-[1.2rem] transition-all ${
          theme === "light" ? "scale-100 rotate-0" : "scale-0 rotate-90"
        }`}
      />
    )}
  </button>
</div>

  );
}
