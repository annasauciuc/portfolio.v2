import React from "react";
import "./About.css";
import responsive from "./images/responsive.png";
import laptop from "./images/simpleLaptop.png";
import webDesign from "./images/webDesign.png";
function About() {
  return (
    <React.Fragment>
      <section data-aos="fade-left" className=" container banner-section">
        <div className="text-left w-50 about-title text-white">
          <h1 className="mb-1 mt-5">About Me.</h1>
        </div>
        <div className=" mt-5">
          <h3>Wev Developer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            posuere dictum commodo. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Nam sodales, purus ut condimentum consequat,
            erat ante porta nibh, eget malesuada ante orci nec ligula. Nulla
            facilisi. Aenean sed sollicitudin ante. Quisque quis condimentum
            leo. Nulla eleifend id sapien quis tincidunt. Praesent non leo
            convallis, viverra quam sed, mollis diam. Maecenas sollicitudin
            tellus eget tellus facilisis viverra. Vestibulum varius nisl risus,
            nec maximus orci interdum laoreet.
          </p>
        </div>
        <h3 className="text-center mt-5 mb-5">Skills</h3>
        <div className="row text-center">
          <div className="col-md-4 col-xs-12 ">
            <img src={webDesign} alt="" />
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              posuere dictum commodo. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nam sodales, purus ut condimentum consequat,
              erat ante porta nibh, eget malesuada ante orci nec ligula. Nulla
              facilisi. Aenean sed sollicitudin ante. Quisque quis condimentum
              leo. Nulla eleifend id sapien quis tincidunt. Praesent non leo
              convallis, viverra quam sed, mollis diam. Maecenas sollicitudin
              tellus eget tellus facilisis viverra. Vestibulum varius nisl
              risus, nec maximus orci interdum laoreet.
            </p>
          </div>
          <div className="col-md-4">
            <img src={responsive} alt="" />
            <h4> Responsive Design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              posuere dictum commodo. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nam sodales, purus ut condimentum consequat,
              erat ante porta nibh, eget malesuada ante orci nec ligula. Nulla
              facilisi. Aenean sed sollicitudin ante. Quisque quis condimentum
              leo. Nulla eleifend id sapien quis tincidunt. Praesent non leo
              convallis, viverra quam sed, mollis diam. Maecenas sollicitudin
              tellus eget tellus facilisis viverra. Vestibulum varius nisl
              risus, nec maximus orci interdum laoreet.
            </p>
          </div>
          <div className="col-md-4">
            <img src={laptop} alt="" />
            <h4>Web Development</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              posuere dictum commodo. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nam sodales, purus ut condimentum consequat,
              erat ante porta nibh, eget malesuada ante orci nec ligula. Nulla
              facilisi. Aenean sed sollicitudin ante. Quisque quis condimentum
              leo. Nulla eleifend id sapien quis tincidunt. Praesent non leo
              convallis, viverra quam sed, mollis diam. Maecenas sollicitudin
              tellus eget tellus facilisis viverra. Vestibulum varius nisl
              risus, nec maximus orci interdum laoreet.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default About;
