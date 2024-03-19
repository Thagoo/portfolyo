"use client";
import React, { useEffect } from "react";
import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import Nav from "@/components/portfolio/blogs/nav";
import Project from "@/components/portfolio/blogs/single-blog/project";
import Blogs from "@/components/portfolio/blogs/single-blog/blogs";
import Footer from "@/components/portfolio/home/footer";
import Lines from "@/components/Common/Lines";
import { useTheme } from "@/context/ThemeContext";

function SingleBlog({ params }) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(params.mode);
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
        <Project />
        <Blogs />
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

export default SingleBlog;
