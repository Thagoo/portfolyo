import React from "react";
import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import ContactUs from "@/components/portfolio/contact/ContactUs";

import Footer from "@/components/portfolio/home/footer";
import Lines from "@/components/Common/Lines";
import NavTop from "@/components/portfolio/home/nav-top";

function SingleBlog() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <Lines />

      <ProgressScroll />
      <NavTop />
      <main className="container"></main>
      <Footer />
    </div>
  );
}

export default SingleBlog;
