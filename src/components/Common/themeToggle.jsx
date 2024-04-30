"use client";

import { useTheme } from "next-themes";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-9 rounded-md whitespace-nowrap px-4 bg-background flex justify-center items-center"
    >
      <i className="fa-regular fa-sun transition-all text-xl opacity-0 dark:!opacity-100"></i>
      <i className="fa-regular absolute transition-all  text-xl fa-moon opacity-100 dark:!opacity-0"></i>
    </button>
  );
}
