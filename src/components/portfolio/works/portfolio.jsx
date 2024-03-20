"use client";
import React, { useEffect, useState } from "react";
import data from "@/data/works.json";
import { useData } from "@/context/PortfolioContext";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import Link from "next/link";
function Portfolio() {
  const { data, loading, error, fetchData } = useData();
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetchData("65b3a22c01d900e96c4219ae");
  }, []);

  useEffect(() => {
    const sortedProjects = data?.projects
      .filter((project) => project.enabled)
      .sort((a, b) => a.sequence - b.sequence);
    setProjects(sortedProjects);
  }, [data]);

  if (loading) {
    return (
      <>
        <Cursor />
        <LoadingScreen />
      </>
    );
  }
  return (
    <div className="sec-box portfolio main-bg section-padding radius-15">
      <div className="sec-head mb-30 text-center">
        <h6 className="sub-title opacity-7 mb-15">Our Portfolio</h6>
        <h3>
          Look at my <span className="main-color">Portfolio</span>
        </h3>
      </div>
      <div className="gallery">
        <div className="row">
          {projects &&
            projects.map((item, index) => (
              <div key={index} className="col-lg-6 items">
                <div className="item mt-50 wow fadeInUp" data-wow-delay=".2s">
                  <div className="img">
                    <Link href={`/portfolio/works/${item?.single_project}`}>
                      <img src={item.image.url} alt="" />
                    </Link>
                  </div>
                  <div className="cont mt-30 d-flex align-items-center">
                    <div>
                      {item.techStack.slice(0, 4).map((item, index) => (
                        <span className="tag" key={index}>
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="ml-auto">
                      <div className="arrow">
                        <Link href={`/portfolio/works/${item?.single_project}`}>
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
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-3 d-flex full-width">
                  <h6 className="line-height-1 flex-grow-1 ">
                    <Link href={`/portfolio/works/${item?.single_project}`}>
                      {item.title}
                    </Link>
                  </h6>{" "}
                  <a href="#0">
                    <i className="fab fa-github">{item.githuburl}</i>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
