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
        <div className="flex w-full justify-between">
          <Link href="/" className="logo icon-img-60">
            <h1 className="">Portfolio</h1>
          </Link>

          <ThemeToggle />
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
