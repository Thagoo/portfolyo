import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Profile({ about, socials }) {
  return (
    <section id="home" className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img bg-main">
          <div className="cont valign ">
            <div className="full-width">
              <div className="img">
                <img src={about?.avatar.url} alt="" />
                <span className="icon invert dark:invert-0">
                  <img
                    src="/assets/avatar/icon1.png"
                    alt=""
                    className="opacity-50"
                  />
                </span>
                <span className="icon invert dark:invert-0">
                  <img
                    src="/assets/avatar/icon2.png"
                    alt=""
                    className="opacity-50"
                  />
                </span>
                <span className="icon ">
                  <img
                    src="/assets/avatar/icon4.png"
                    alt=""
                    className="opacity-50"
                  />
                </span>
              </div>

              <div className="info text-center mt-30">
                <h5>{about?.name}</h5>
                <p className="fz-13 text-u">{about?.title}</p>
              </div>
              <div className="social text-center mt-20 invert dark:invert-0">
                {socials.slice(0, 4).map((item, index) => (
                  <a href={item.url} key={index}>
                    <i
                      className={`fa-brands fa-${item.platform.toLowerCase()} invert dark:invert-0`}
                    ></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 content bg-main">
          <h1>
            Hello, I’m <span className="main-color">{about?.name}</span>,
            <span className="bord">{about?.subTitle}</span> Based in{" "}
            <i> {about?.address.split(", ")[0]}</i>
          </h1>

          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center ">
                  <h2>{about?.exp_year}</h2>
                  <p className="text-accent-foreground">
                    Years <br /> of Experance
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  {about?.clients && (
                    <>
                      <h2>{about?.clients}</h2>
                      <p className="text-accent-foreground">
                        Clients <br /> Worldwide
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div>
                <div className="butn-presv  ">
                  <a
                    href="#0"
                    className="butn butn-md butn-bord radius-5 skew "
                  >
                    <span className="text-accent-foreground ">
                      Download C.V
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
