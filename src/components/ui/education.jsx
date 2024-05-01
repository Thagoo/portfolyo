import { formatDate } from "@/lib/utils";
import Card from "./card";

export default function Education({ education }) {
  return (
    <div className="row">
      <div className="col-lg-12 ">
        <div className="sec-head md-mb20 wow fadeIn text-center mb-20">
          <h3>
            <span className="main-color">Education</span>
          </h3>
        </div>
        <div className="row">
          {education &&
            education.map((item, i) => (
              <div className="col-lg-12" key={i}>
                <div className="item mb-40 wow fadeIn" data-wow-delay=".2s">
                  <span className="icon-img-70 mb-30 opacity-7">
                    {item?.icon && <img src={item?.icon.url} alt="" />}
                  </span>
                  <div className="flex w-full">
                    <h5>{item.course}</h5>
                    <p className="ml-auto">CGPA {item.cgpa}</p>
                  </div>

                  <span className="sub-title main-color mt-10 mb-10">
                    {item.university}, {item.location}
                  </span>

                  <div className="feat">
                    <ul className="rest">
                      {item.courses.map((point, index) => (
                        <li key={index} className="mb-10">
                          <p className="text-accent-foreground">
                            <i
                              class="fa fa-circle-notch mr-10 "
                              aria-hidden="true"
                            ></i>
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
            ))}
        </div>
      </div>
    </div>
  );
}
