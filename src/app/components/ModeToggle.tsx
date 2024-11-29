"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(theme === "dark");

  // Toggle theme handler
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="relative"
    >
      {/* Sun icon for light mode */}
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-transform ${
          isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      {/* Moon icon for dark mode */}
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-transform ${
          isDarkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
