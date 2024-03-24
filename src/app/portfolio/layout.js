"use client";
import { Inter } from "next/font/google";

import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";
import { PortfolioProvider } from "@/context/PortfolioContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { theme } = useTheme();

  useEffect(() => {
    // Function to load the stylesheet dynamically
    function loadStylesheet(theme) {
      const styleLink = document.createElement("link");
      styleLink.href = `/${theme}/assets/css/style.css`;
      styleLink.type = "text/css";
      styleLink.rel = "stylesheet";
      styleLink.media = "screen,print";

      const pluginsLink = document.createElement("link");
      pluginsLink.href = `/${theme}/assets/css/plugins.css`;
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
    <html lang="en">
      <head>
        <script
          src="/assets/js/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <script
          src="/assets/js/jquery-migrate-3.4.0.min.js"
          strategy="beforeInteractive"
        />
        <script src="/assets/js/plugins.js" strategy="beforeInteractive" />
        <script src="/assets/js/scripts.js" strategy="beforeInteractive" />
        <script src="/assets/js/three.min.js" strategy="lazyOnload" />
      </head>
      <body className={inter.className}>
        <PortfolioProvider>{children}</PortfolioProvider>
      </body>
    </html>
  );
}
