import { formatDate } from "@/lib/utils";
import React from "react";

function ProjectView({ project }) {
  return (
    <section className="sec-box bg-main project section-padding radius-15">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="img mb-80">
            <img
              src={project.image.url}
              alt="project icon"
              className="radius-5"
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="cont md-mb50">
                <h3 className="mb-15 fw-500">{project.title}</h3>

                <div className="mt-30">
                  <h6 className="mb-15 line-height-28">
                    {project.description}
                  </h6>

                  <ul className="rest list-arrow mt-50">
                    {project.techStack.map((item, i) => (
                      <li className="mt-4" key={i}>
                        <span className="icon">
                          <svg
                            className="invert dark:invert-0"
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-18">{item}</h6>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="info sub-bg" id="sticky_item">
                <ul>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="far fa-calendar-alt mr-10"></i> Date :
                    </span>
                    <p>{formatDate(project.date)}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="fas fa-list-ul mr-10"></i> Categories :
                    </span>
                    <p>{project.category}</p>
                  </li>
                  <li className="mb-30">
                    <span className="sub-title">
                      <i className="far fa-user mr-10"></i> Client :
                    </span>
                    <p>{project.client}</p>
                  </li>
                  <li>
                    <span className="sub-title underline mb-4">
                      <i className="fas fa-globe mr-10"></i>{" "}
                      <a href={project.liveurl}>Website</a>
                    </span>
                  </li>
                  <li>
                    <span className="sub-title underline">
                      <i className="fas fa-globe mr-10"></i>{" "}
                      <a href={project.githuburl}>Source Code</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectView;
