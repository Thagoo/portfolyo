import React from "react";
import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import Nav from "@/components/portfolio/blogs/nav";
import Project from "@/components/portfolio/blogs/single-blog/project";
import Blogs from "@/components/portfolio/blogs/single-blog/blogs";
import Footer from "@/components/portfolio/home/footer";
import Lines from "@/components/Common/Lines";

function SingleBlog() {
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
    </div>
  );
}

export default SingleBlog;
