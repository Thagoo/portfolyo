import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import Info from "@/components/portfolio/contact/info";
import Footer from "@/components/portfolio/home/footer";
import NavTop from "@/components/portfolio/home/nav-top";
import Price from "@/components/portfolio/home/price";
import Profile from "../components/portfolio/home/profile";
import Services from "@/components/portfolio/home/services";
import Skills from "@/components/portfolio/home/skills";
import Lines from "@/components/Common/Lines";
import Navbar from "@/components/portfolio/home/navbar";
import Testimonials from "@/components/portfolio/home/testimonials";
import Timelines from "@/components/portfolio/home/timelines";
import Projects from "@/components/portfolio/home/projects";
import { fetchPortfolioData } from "@/lib/data";
import Blog from "@/components/portfolio/home/blog";

const data = await fetchPortfolioData();

if (!data) {
  throw new Error("Something went wrong");
}
export const metadata = {
  title: data?.about.name,
  description: `${data?.about.name} ${data?.about.title}`,
};

async function Home() {
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
          <Skills skills={data?.skills} />
          <Projects projects={data?.projects} />
          {data?.education && (
            <Timelines
              education={data?.education}
              experience={data?.experience}
            />
          )}
          <section className="in-box">
            {data?.services && <Services services={data?.services} />}

            {/* <Portfolio projects={data?.projects} /> */}

            {data?.testimonials && (
              <Testimonials testimonials={data?.testimonials} />
            )}
            {/* {data?.blogs && <Blog blogs={data?.blogs} />} */}
            {data?.price && <Price />}

            <Info
              info={{
                email: data.about.contactEmail,
                socials: data.social_handles,
              }}
            />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
