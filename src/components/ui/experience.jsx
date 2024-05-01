import Card from "./card";

export default function Experience({ experience }) {
  return (
    <div className="row">
      <div className="col-lg-12 ">
        <div className="sec-head md-mb20 wow fadeIn text-center mb-20">
          <h3>
            <span className="main-color">Experience</span>
          </h3>
        </div>
        <div className="row">
          {experience &&
            experience.map((item, index) => <Card item={item} key={index} />)}
        </div>
      </div>
    </div>
  );
}
