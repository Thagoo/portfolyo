import ContactForm from "./contact-form";

function Info({ info }) {
  return (
    <div
      className="sec-box bg-main contact section-padding bord-thin-top"
      id="info"
    >
      <div className="row">
        <div className="col-lg-5">
          <div className="sec-head md-mb80 wow fadeIn">
            <h6 className="sub-title mb-15 opacity-7">Get In Touch</h6>
            <h2 className="fz-50">Let's make your brand brilliant!</h2>
            <p className="fz-15 mt-10">
              If you would like to work with me or just want to get in touch,
              I’d love to hear from you!
            </p>
            <div className="phone fz-30 fw-600 mt-30 underline">
              <a className="main-color" href={`mailto:${info.email}`}>
                {info.email}
              </a>
            </div>
            <ul className="rest social-text d-flex mt-60">
              {info.socials.slice(0, 4).map((item, i) => (
                <li className="mr-30" key={i}>
                  <a href={item.url} className="hover-this">
                    <span className="hover-anim">{item.platform}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-7 valign">
          <div className="full-width wow fadeIn">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
