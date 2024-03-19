"use client";
import { useTheme } from "@/context/ThemeContext";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const toggleIconRef = useRef(null);

  useEffect(() => {
    gsap.to(toggleIconRef.current, {
      rotate: `+=${theme === "light" ? 0 : 360}`,
      duration: 0.1,
      ease: "power2.inOut",
    });
  }, [theme]);

  return (
    <div className="cursor-pointer" onClick={toggleTheme} ref={toggleIconRef}>
      <span>
        {theme == "dark" ? <LuSun size={20} /> : <LuMoon size={20} />}
      </span>
    </div>
  );
}
