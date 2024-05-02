import React from "react";
import { default as NextLink } from "next/link";
import ThemeToggle from "@/components/Common/themeToggle";

function NavTop() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container flex">
        <NextLink href="/" className=" flex-grow">
          <h1 className="text-accent-foreground text-xl uppercase">
            Portfolio
          </h1>
        </NextLink>
        <ThemeToggle />
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
