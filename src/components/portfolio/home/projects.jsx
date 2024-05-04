"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Projects({ projects }) {
  const [sortedProjects, setSortedProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState(null);

  const filterProjects = () => {
    setSortedProjects(
      projects.filter((project) => project.techStack.includes(activeFilter))
    );
  };

  useEffect(() => {
    setSortedProjects(projects);
    if (activeFilter) {
      filterProjects();
    }
  }, [activeFilter]);

  return (
    <div
      className="sec-box bg-main portfolio section-padding bord-thin-bottom"
      id="projects"
    >
      <div className="sec-head mb-30">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="sub-title opacity-7 mb-15">Projects</h6>
            <h3>
              Look at my work & <br /> give us{" "}
              <span className="main-color">your feedback</span>
            </h3>
          </div>
          <div className="col-lg-6 valign">
            <div className="go-more full-width d-flex justify-content-end">
              <Link href="/works" className="d-flex">
                <span>
                  View All Works{" "}
                  <svg
                    className="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 34.2 32.3"
                    xmlSpace="preserve"
                    style={{ strokeWidth: 2 }}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="row">
          {sortedProjects?.map((item, index) => (
            <div key={index} className="col-lg-6 items ">
              <div className="item mt-50 wow fadeInUp" data-wow-delay=".2s">
                <div className="img">
                  <Link
                    className="!h-[200px] md:!h-[300px]"
                    href={`/works/${index}`}
                  >
                    <Image
                      src={item.image.url}
                      alt=""
                      width={500}
                      height={200}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div className="cont mt-10 ">
                <div className="mt-20 butn-presv">
                  {item.techStack.slice(0, 6).map((item, index) => (
                    <span
                      className={` butn butn-sm butn-bord radius-5 ml-10 cursor-pointer p-1  ${
                        activeFilter == item ? "active" : ""
                      }`}
                      key={index}
                      onClick={() =>
                        item == activeFilter
                          ? setActiveFilter(null)
                          : setActiveFilter(item)
                      }
                    >
                      #{item}
                    </span>
                  ))}
                  <h6 className="fz-20 mt-20">
                    <Link href={`/works/${index}`}>{item.title}</Link>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
