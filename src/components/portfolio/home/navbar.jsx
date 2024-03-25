import React from "react";
import { Link } from "react-scroll";
import { default as NextLink } from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul className="navbar-nav main-bg d-flex justify-content-end">
            <li className="nav-item">
              <NextLink href="/portfolio">
                <span>Home</span>
              </NextLink>
            </li>
            <li className="nav-item">
              <Link to="services" spy={true} smooth={true}>
                <span>Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true}>
                <span>About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio" spy={true} smooth={true}>
                <span>Portfolio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="timeline" spy={true} smooth={true}>
                <span>Timeline</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true}>
                <span>Contact</span>
              </Link>
            </li>
            <li className="nav-item">
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
