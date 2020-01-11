import React from "react";
import "./Contact.css";
import email from "./images/email.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import twitter from "./images/twitter.png";
function Contact() {
  const urlTwitter = "https://twitter.com/@amsauciuc";
  const urlLinkedin =
    "https://www.linkedin.com/in/ana-maria-sauciuc-753ba8155/";
  const urlGit = "https://github.com/annasauciuc";
  const urlGmail = "mailto:hi@amsauciuc.com";
  return (
    <React.Fragment>
      <section  id="about" data-aos="fade-right">
        <div data-aos="zoom-in-up" className="container h-100 ">
          <div className="text-left w-50 contact-title ">
            <h1 className="mb-1 pt-5">Contact Me.</h1>
          </div>
         

          <h5 className="mt-5 mb-5">
            I'm available for hire and open to any ideas of cooperation
          </h5>
        
          <h6>
            <a
              href="mailto:sauciuc.anamaria.dd@gmail.com"
              target="_blank"
              className=" social-text   hoverLine"
            >
              {" "}
              <img src={email} className="mr-2 mb-3" width="40px" alt="email" />
        sauciuc.anamaria.dd@gmail.com
            </a>
          </h6>
          <p>
            <a
              className=" social-text  hoverLine"
              data-toggle="tooltip"
              data-placement="top"
              title="Linkedin"
              href="https://www.linkedin.com/in/ana-maria-sauciuc-753ba8155/"
              target="_blank "
            >
              <img src={linkedin} className="mr-2 mb-4" width="40px" alt="linkedin link" />{" "}
              amsauciuc
            </a>
          </p>
          <p>
            <a
              className="social-text hoverLine"
              data-toggle="tooltip"
              data-placement="top"
              title="Github"
              href="https://github.com/annasauciuc"
              target="_blank"
            >
              <img src={github} className="mr-2 mb-4" width="40px" alt="github link" />{" "}
              annasauciuc{" "}
            </a>
          </p>
          <p>
            <a
              className="social-text hoverLine"
              data-toggle="tooltip"
              data-placement="top"
              title="Twitter"
              href="https://twitter.com/@amsauciuc"
              target="_blank"
            >
              <img src={twitter} className="mr-2 mb-4" width="40px" alt="twitter link" />{" "}
              amsauciuc
            </a>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Contact;
