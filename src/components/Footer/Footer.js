import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <React.Fragment>
      <div className="center mt-5 text-center">
        <div id="social-test">
          <ul className="social">
            <li>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </li>

            <li>
              <i className="fa fa-github" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
