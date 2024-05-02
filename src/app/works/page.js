import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import Footer from "@/components/portfolio/home/footer";

import Lines from "@/components/Common/Lines";

import Projects from "@/components/portfolio/home/projects";
import { fetchPortfolioData } from "@/lib/data";
import NavTop from "@/components/portfolio/home/nav-top";

const data = await fetchPortfolioData();

export const metadata = {
  title: `${data?.about.name} | Projects`,
  description: `${data?.about.name} ${data?.about.title}`,
};

async function Works() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <Lines />

      <ProgressScroll />
      <NavTop />
      <main className="container">
        <Projects projects={data.projects} />
      </main>
      <Footer />
    </div>
  );
}

export default Works;
