"use client";
import React, { useEffect } from "react";

import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import Blog from "@/components/portfolio/home/blog";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import Info from "@/components/portfolio/contact/info";
import Footer from "@/components/portfolio/home/footer";
import NavTop from "@/components/portfolio/home/nav-top";
// import Navbar from "@/components/portfolio/home/navbar";
import Portfolio from "@/components/portfolio/home/portfolio";
import Price from "@/components/portfolio/home/price";
import Profile from "@/components/portfolio/home/profile";
import Services from "@/components/portfolio/home/services";
import Skills from "@/components/portfolio/home/skills";
// import Testimonials from "@/components/portfolio/home/testimonials";
import Lines from "@/components/Common/Lines";
import { useTheme } from "@/context/ThemeContext";
import Navbar from "@/components/portfolio/home/navbar";
import Testimonials from "@/components/portfolio/home/testimonials";

function HomeDark() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <div>
        <NavTop />
        <main className="container">
          <Profile />
          <Navbar />
          <section className="in-box">
            <Services />
            <Skills />
            <Portfolio />
            <Testimonials />
            <Price />
            <Info />
            <Blog />
          </section>
        </main>
        <Footer />
      </div>
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
    </div>
  );
}

export default HomeDark;
