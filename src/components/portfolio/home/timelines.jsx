import React, { useEffect, useState } from "react";
import data from "@/data/services.json";

function formatDate(dateString) {
  const options = { year: "numeric", month: "short" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}
function Timelines({ timelines }) {
  const [education, setEducation] = useState(null);
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    const sortedTimelines = timelines
      .filter((timeline) => timeline.enabled)
      .sort((a, b) => a.sequence - b.sequence);

    const forEducation = sortedTimelines.filter((item) => item.forEducation);
    setEducation(forEducation);

    const forExperience = sortedTimelines.filter((item) => !item.forEducation);
    setExperience(forExperience);
  }, [timelines]);

  return (
    <div
      className="sec-box services section-padding bord-thin-bottom"
      id="services"
    >
      <div className="sec-head mb-80 wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">Timeline</h6>
            <h3>
              Turn Information{" "}
              <span className="main-color">Into Actionable</span> Insights
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 valign">
          <div className="sec-head md-mb20 wow fadeIn">
            <h3>
              <span className="main-color">Education</span>
            </h3>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {education &&
              education.map((item, index) => (
                <div key={index} className="col-md-12">
                  <div className="item mb-40 wow fadeIn" data-wow-delay=".2s">
                    <span className="icon-img-70 mb-30 opacity-7">
                      {item.icon && <img src={item.icon.url} alt="" />}
                    </span>

                    <h6>{item.jobTitle}</h6>
                    <span className="sub-title main-color mt-10">
                      {item.company_name}
                    </span>

                    <p className="mb-15">{item.summary}</p>
                    <div className="feat">
                      <ul className="rest">
                        {item.bulletPoints.map((point, index) => (
                          <li key={index}>
                            <span>
                              <i className="fas fa-check"></i> {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bord-color">
                      {formatDate(item.startDate)} to {formatDate(item.endDate)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="d-lg-flex flex-lg-row-reverse">
        <div className="col-lg-3 valign">
          <div className="sec-head md-mb20 wow fadeIn">
            <h3>
              <span className="main-color">Experience</span>
            </h3>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {experience &&
              experience.map((item, index) => (
                <div key={index} className="col-md-12">
                  <div className="item mb-40 wow fadeIn" data-wow-delay=".2s">
                    <span className="icon-img-70 mb-30 opacity-7">
                      {item.icon && <img src={item.icon.url} alt="" />}
                    </span>

                    <h6>{item.jobTitle}</h6>
                    <span className="sub-title main-color mt-10">
                      {item.company_name}
                    </span>

                    <p className="mb-15">{item.summary}</p>
                    <div className="feat">
                      <ul className="rest">
                        {item.bulletPoints.map((point, index) => (
                          <li key={index}>
                            <span>
                              <i className="fas fa-check"></i> {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bord-color">
                      {formatDate(item.startDate)} to {formatDate(item.endDate)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timelines;
