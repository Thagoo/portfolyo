import Education from "@/components/ui/education";
import Experience from "@/components/ui/experience";
import { formatDate } from "@/lib/utils";
import React from "react";

function Timelines({ experience, education }) {
  return (
    <div
      className="sec-box bg-main services section-padding bord-thin-bottom"
      id="timeline"
    >
      <div className="sec-head wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-20">Timeline</h6>
          </div>
        </div>
      </div>

      {education.length > 0 && <Education education={education} />}

      {experience.length > 0 && <Experience experience={experience} />}
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="col-lg-12">
      <div className="item mb-40 wow fadeIn" data-wow-delay=".2s">
        <span className="icon-img-70 mb-30 opacity-7">
          {item.icon && <img src={item.icon.url} alt="" />}
        </span>

        <h5>{item.jobTitle}</h5>
        <span className="sub-title main-color mt-10 mb-10">
          {item.company_name}
        </span>

        <p className="mb-15 text-accent-foreground">{item.summary}</p>
        <div className="feat">
          <ul className="rest">
            {item.bulletPoints.map((point, index) => (
              <li key={index} className="mb-10">
                <p className="text-accent-foreground">
                  <i class="fa fa-circle-notch mr-10 " aria-hidden="true"></i>
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <p className="bord-color text-accent-foreground">
          {formatDate(item.startDate)} to {formatDate(item.endDate)}
        </p>
      </div>
    </div>
  );
}

export default Timelines;
