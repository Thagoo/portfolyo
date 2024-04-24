"use client";
import ThemeToggle from "@/components/Common/themeToggle";
import { useTheme } from "next-themes";

import Link from "next/link";
import React from "react";

function Nav() {
  const { theme } = useTheme();

  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <Link href="/" className="logo icon-img-60">
              <h1 className="">Portfolio</h1>
            </Link>
            <div className="d-flex mx-5 full-width justify-content-end ">
              <ThemeToggle />
            </div>
          </div>
          <div className="col-md-8">
            <div className="navbar">
              <div className="row justify-content-end rest">
                <div className="col-lg-8 rest">
                  <ul className="navbar-nav main-bg d-flex justify-content-end">
                    <li className="nav-item">
                      <a href="/">
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/">
                        <span>Services</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/">
                        <span>About</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/">
                        <span></span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/">
                        <span>Price</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/">
                        <span>Contact</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/">
                        <span>Blog</span>
                      </a>
                    </li>
                  </ul>
                </div>
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

export default Nav;
