"use client";
import React, { useEffect } from "react";

import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import Nav from "@/components/portfolio/blogs/nav";
import Portfolio from "@/components/portfolio/works/portfolio";
import Footer from "@/components/portfolio/home/footer";

import Lines from "@/components/Common/Lines";
import { useData } from "@/context/PortfolioContext";
import { redirect } from "next/navigation";

function Works() {
  const { data } = useData();
  useEffect(() => {
    if (!data) {
      redirect("/portfolio");
    }

    setSingleProject();
  }, []);
  return (
    <div>
      <Cursor />
      <ContactUs />
      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />
      <main className="container">
        <Portfolio />
      </main>
      <Footer />
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

export default Works;
