import React from "react";

function Skills({ skills }) {
  const sortedSkills = skills
    .filter((skill) => skill.enabled)
    .sort((a, b) => a.sequence - b.sequence);
  return (
    <div
      className="sec-box bg-main skills section-padding bord-thin-bottom"
      id="skills"
    >
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h6 className="sub-title opacity-7 mb-15">Our Skills</h6>
          <h3>
            <span className="main-color mb-15">Awards</span> & Recognitions
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            {sortedSkills.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="item mb-30">
                  <div className="d-flex align-items-center mb-30">
                    <div className="mr-30">
                      <div className="img icon-img-40">
                        <img src={item.image.url} alt="" />
                      </div>
                    </div>
                    <div>
                      <h6 className="fz-18">{item.name}</h6>
                    </div>
                  </div>
                  <div className="skill-progress">
                    <span
                      className="progres"
                      data-value={`${item.percentage}%`}
                    ></span>
                  </div>
                  <span className="value">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="awards mt-100">
        <div className="row md-marg">
          {/* {data2.map((item, index) => (
            <div key={index} className="col-lg-4">
              <div
                className="award-item sub-bg md-mb30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="d-flex">
                  <div>
                    <span>01</span>
                  </div>
                  <div className="ml-auto">
                    <span>{item.year}</span>
                  </div>
                </div>
                <div className="img icon-img-100 mt-80 mb-30">
                  <img src={item.photo} alt="" />
                </div>
                <h6>02x Designer Award</h6>
                <span className="sub-title main-color mt-10">{item.title}</span>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
