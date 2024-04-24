import React from "react";

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
import LoadingScreen from "@/components/Common/loader";
import Timelines from "@/components/portfolio/home/timelines";
import Project from "@/components/portfolio/blogs/single-blog/project";
import Projects from "@/components/portfolio/home/projects";
import { fetchPortfolioData } from "@/lib/data";

const data = await fetchPortfolioData();

export const metadata = {
  title: data?.about.name,
  description: `${data?.about.name} ${data?.about.title}`,
};

async function HomeDark() {
  return (
    <div className="bg-background">
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
            {data?.services && <Services services={data?.services} />}
            <Skills skills={data?.skills} />
            {/* <Portfolio projects={data?.projects} /> */}
            {data?.timeline && <Timelines timelines={data?.timeline} />}
            {data?.testimonials && (
              <Testimonials testimonials={data?.testimonials} />
            )}

            {data?.price && <Price />}
            <Info />
            <Projects projects={data?.projects} />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default HomeDark;
