import React from "react";
import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import ContactUs from "@/components/portfolio/contact/ContactUs";
import ProjectView from "@/components/portfolio/works/project-view";
import Footer from "@/components/portfolio/home/footer";
import Lines from "@/components/Common/Lines";

import { fetchPortfolioData } from "@/lib/data";
import NavTop from "@/components/portfolio/home/nav-top";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const data = await fetchPortfolioData();

  const project = data.projects[params.slug];

  if (!project) {
    return {
      title: `Not Found`,
      description: `Error getting user information `,
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

async function Project({ params }) {
  let slug = +params.slug;

  const data = await fetchPortfolioData();
  if (!data) {
    throw new Error("404 Something went wrong");
  }
  const project = data.projects[params.slug];

  const prev = slug <= 0 ? data.projects.length - 1 : slug - 1;

  const next = slug >= data.projects.length - 1 ? 0 : slug + 1;

  return (
    <div>
      <Cursor />
      <ContactUs />
      <Lines />

      <ProgressScroll />
      <NavTop />
      <main className="container">
        {project && <ProjectView project={project} />}
        <div className="imgs mt-80">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="row md-marg">
                <div className="col-md-6">
                  <div className="img sm-mb30">
                    <img src="/assets/imgs/works/project/2.png" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img">
                    <img src="/assets/imgs/works/project/3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination buttons */}
        <div className="next-prev">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="d-flex align-items-center mt-80 pt-80 bord-thin-top">
                <div className="prev">
                  <h6 className="sub-title">
                    <Link href={`/works/${prev}`}>
                      <i className="fas fa-long-arrow-alt-left"></i> Prev
                      Project
                    </Link>
                  </h6>
                </div>
                <div className="next ml-auto">
                  <h6 className="sub-title">
                    <Link href={`/works/${next}`}>
                      next Project{" "}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Project;
