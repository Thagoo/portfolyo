"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/home/Navbar";

import Landing from "@/components/home/Landing";
import Footer from "@/components/portfolio/home/footer";
import ProgressScroll from "@/components/Common/ProgressScroll";
import LoadingScreen from "@/components/Common/loader";
import Lines from "@/components/Common/Lines";
import Cursor from "@/components/Common/cusor";

import { useTheme } from "@/context/ThemeContext";
import { fetchUserData } from "@/lib/data";

function Home() {
  // By default home page will be dark because demo grid don't have proper support for light theme
  // So setting "theme" variable locally prevents home page to turn light mode.

  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);

  const theme = "dark";

  useEffect(() => {
    // Function to load the stylesheet dynamically

    function loadStylesheet(theme) {
      const styleLink = document.createElement("link");
      styleLink.href = `${theme}/assets/css/style.css`;
      styleLink.type = "text/css";
      styleLink.rel = "stylesheet";
      styleLink.media = "screen,print";

      const pluginsLink = document.createElement("link");
      pluginsLink.href = `${theme}/assets/css/plugins.css`;
      pluginsLink.type = "text/css";
      pluginsLink.rel = "stylesheet";
      pluginsLink.media = "screen,print";

      // Remove any existing theme stylesheets before adding the new one
      document
        .querySelectorAll("[data-theme-stylesheet]")
        .forEach((el) => el.remove());

      styleLink.setAttribute("data-theme-stylesheet", "");
      pluginsLink.setAttribute("data-theme-stylesheet", "");

      document.head.appendChild(pluginsLink);
      document.head.appendChild(styleLink);
    }

    // Call the above function with the current theme
    loadStylesheet(theme);
  }, [theme]); // Rerun effect when theme changes

  return (
    <div>
      <Cursor />

      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <div>
        <Navbar />
        <main className="container">
          <Landing />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
