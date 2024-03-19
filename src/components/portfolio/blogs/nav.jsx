import { useTheme } from "@/context/ThemeContext";
import React from "react";

function Nav() {
  const { theme } = useTheme();

  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="/portfolio" className="logo icon-img-60">
              <img src={`/${theme}/assets/imgs/logo.png`} alt="" />
            </a>
          </div>
          <div className="col-md-8">
            <div className="navbar">
              <div className="row justify-content-end rest">
                <div className="col-lg-8 rest">
                  <ul className="navbar-nav main-bg d-flex justify-content-end">
                    <li className="nav-item">
                      <a href="/portfolio">
                        <span>Home</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/portfolio">
                        <span>Services</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/portfolio">
                        <span>About</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/portfolio">
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/portfolio">
                        <span>Price</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/portfolio">
                        <span>Contact</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/portfolio">
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
