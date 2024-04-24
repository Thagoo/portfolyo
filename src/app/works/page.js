import React from "react";

import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import Nav from "@/components/portfolio/blogs/nav";
import Footer from "@/components/portfolio/home/footer";

import Lines from "@/components/Common/Lines";

import Projects from "@/components/portfolio/works/projects";
import { fetchPortfolioData } from "@/lib/data";
const data = await fetchPortfolioData();

export const metadata = {
  title: data?.about.name,
  description: `${data?.about.name} ${data?.about.title}`,
};

async function Works() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <Lines />

      <ProgressScroll />
      <Nav />
      <main className="container">
        <Projects projects={data.projects} />
      </main>
      <Footer />
    </div>
  );
}

export default Works;
