"use client";
import React, { useEffect } from "react";

import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import Blog from "@/components/portfolio/home/blog";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import Info from "@/components/portfolio/contact/info";
import Footer from "@/components/portfolio/home/footer";
import NavTop from "@/components/portfolio/home/nav-top";
import Portfolio from "@/components/portfolio/home/portfolio";
import Price from "@/components/portfolio/home/price";
import Profile from "@/components/portfolio/home/profile";
import Services from "@/components/portfolio/home/services";
import Skills from "@/components/portfolio/home/skills";
import Lines from "@/components/Common/Lines";
import Navbar from "@/components/portfolio/home/navbar";
import Testimonials from "@/components/portfolio/home/testimonials";
import { useData } from "@/context/PortfolioContext";
import LoadingScreen from "@/components/Common/loader";
import Timelines from "@/components/portfolio/home/timelines";

function HomeDark() {
  const { data, loading, error, fetchData } = useData();

  useEffect(() => {
    fetchData("65b3a22c01d900e96c4219ae");
  }, []);

  if (loading) {
    return (
      <>
        <Cursor />
        <LoadingScreen />
      </>
    );
  }

  return (
    <div>
      <Cursor />
      <ContactUs />
      <Lines />
      <ProgressScroll />
      <div>
        <NavTop />
        <main className="container">
          <Profile about={data?.about} socials={data?.social_handles} />
          <Navbar />
          <section className="in-box">
            <Services services={data?.services} />
            <Skills skills={data?.skills} />
            <Portfolio projects={data?.projects} />
            <Timelines timelines={data?.timeline} />
            <Testimonials testimonials={data?.testimonials} />

            {data?.price && <Price />}
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
