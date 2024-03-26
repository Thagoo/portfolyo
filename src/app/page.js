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

function Home() {
  // By default home page will be dark because demo grid don't have proper support for light theme
  // So setting "theme" variable locally prevents home page to turn light mode.

  const { setTheme } = useTheme();
  useEffect(() => {
    document
      .querySelectorAll("[data-theme-stylesheet]")
      .forEach((el) => el.remove());
    setTheme("dark");
  }, []);

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
