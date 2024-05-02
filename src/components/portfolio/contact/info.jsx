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
            <h2 className="fz-50">Let&#8220;s make your brand brilliant!</h2>
            <p className="fz-15 mt-10">
              If you would like to work with me or just want to get in touch,
              I&#8220;d love to hear from you!
            </p>
            <div className="text-2xl md:text-3xl fw-600 mt-30 underline text-center">
              <a className="main-color" href={`mailto:${info.email}`}>
                {info.email}
              </a>
            </div>
            <ul className="flex justify-between mt-60">
              {info.socials.map((item, i) => (
                <li key={i}>
                  <a href={item.url} className="hover-this">
                    <i
                      className={`fa-brands fa-${item.platform.toLowerCase()}`}
                    />
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
