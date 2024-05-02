import React from "react";
import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import Footer from "@/components/portfolio/home/footer";
import Lines from "@/components/Common/Lines";
import NavTop from "@/components/portfolio/home/nav-top";
import Blog from "@/components/portfolio/home/blog";
import { fetchPortfolioData } from "@/lib/data";

const data = await fetchPortfolioData();

export const metadata = {
  title: `${data?.about.name} | Projects`,
  description: `${data?.about.name} ${data?.about.title}`,
};

function Blogs() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <Lines />

      <ProgressScroll />
      <NavTop />
      <main className="container">
        <Blog blogs={data.blogs} />
      </main>
      <Footer />
    </div>
  );
}

export default Blogs;
