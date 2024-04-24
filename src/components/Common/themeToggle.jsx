"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-9 w-full md:w-auto rounded-md whitespace-nowrap px-4 bg-background flex justify-center items-center"
    >
      <LuSun className="h-6 w-6 transition-all opacity-0 dark:!opacity-100" />
      <LuMoon className="h-6 w-6 absolute transition-all dark:opacity-0" />
    </button>
  );
}
