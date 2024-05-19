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
import RevealOnScroll from "@/components/Common/scroll-reveal";

async function Home() {
  const data = await fetchPortfolioData();

  if (!data) {
    throw new Error("Something went wrong");
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
          <RevealOnScroll>
            <Profile about={data?.about} socials={data?.social_handles} />
          </RevealOnScroll>
          <RevealOnScroll>
            <Navbar />

            <Skills skills={data?.skills} />
          </RevealOnScroll>
          <RevealOnScroll>
            <Projects projects={data?.projects} />
          </RevealOnScroll>
          <RevealOnScroll>
            {data?.education && (
              <Timelines
                education={data?.education}
                experience={data?.experience}
              />
            )}
          </RevealOnScroll>

          {data?.services && (
            <RevealOnScroll>
              {" "}
              <Services services={data?.services} />
            </RevealOnScroll>
          )}

          {/* <Portfolio projects={data?.projects} /> */}

          {data?.testimonials && (
            <RevealOnScroll>
              <Testimonials testimonials={data?.testimonials} />{" "}
            </RevealOnScroll>
          )}

          {/* {data?.blogs && <Blog blogs={data?.blogs} />} */}
          {data?.price && (
            <RevealOnScroll>
              {" "}
              <Price />
            </RevealOnScroll>
          )}
          <RevealOnScroll>
            <Info
              info={{
                email: data.about.contactEmail,
                socials: data.social_handles,
              }}
            />
          </RevealOnScroll>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
