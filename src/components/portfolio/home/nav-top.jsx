"use client";

import React from "react";
import { default as NextLink } from "next/link";
import ThemeToggle from "@/components/Common/themeToggle";
import { useTheme } from "next-themes";
import { LuGithub } from "react-icons/lu";

function NavTop() {
  const { theme } = useTheme();

  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign flex-grow">
            <NextLink href="/" className="logo icon-img-60">
              <h1 className="text-accent-foreground text-xl uppercase">
                Portfolio
              </h1>
            </NextLink>
          </div>

          {/* <div className="col-md-4 valign">
            <div className="social invert  text-center full-width">
              <a href="#0">
                <LuGithub className="invert" />
              </a>
              <a href="#0">
                <i className="fab fa-github"></i>
              </a>
              <a href="#0">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#0">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div> */}

          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>

        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
