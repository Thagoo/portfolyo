"use client";
import React from "react";
import { Link } from "react-scroll";
import { default as NextLink } from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul className="navbar-nav bg-main d-flex justify-content-end">
            <li className="nav-item cursor-pointer ">
              <Link to="services" spy={true} smooth={true}>
                <span>Services</span>
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link to="home" spy={true} smooth={true}>
                <span>About</span>
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link to="portfolio" spy={true} smooth={true}>
                <span>Portfolio</span>
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link to="timeline" spy={true} smooth={true}>
                <span>Timeline</span>
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link to="contact" spy={true} smooth={true}>
                <span>Contact</span>
              </Link>
            </li>
            <li className="nav-item cursor-pointer">
              <Link to="projects" spy={true} smooth={true}>
                <span>Projects</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
