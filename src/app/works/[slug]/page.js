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

const data = await fetchPortfolioData();

export async function generateMetadata({ params }) {
  const [project] = data.projects.filter(
    (project) => project._id == params.slug
  );
  return {
    title: project.title,
    description: project.description,
  };
}

function Project({ params }) {
  const [project] = data.projects.filter(
    (project) => project._id == params.slug
  );

  if (!project) {
    throw new Error("Something went wrong");
  }

  const prev =
    data.projects.indexOf(project) === 0
      ? data.projects.length - 1
      : data.projects.indexOf(project) - 1;

  const next =
    data.projects.indexOf(project) === data.projects.length - 1
      ? 0
      : data.projects.indexOf(project) + 1;

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
                    <Link href={`/works/${data.projects[prev]._id}`}>
                      <i className="fas fa-long-arrow-alt-left"></i> Prev
                      Project
                    </Link>
                  </h6>
                </div>
                <div className="next ml-auto">
                  <h6 className="sub-title">
                    <Link href={`/works/${data.projects[next]._id}`}>
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
