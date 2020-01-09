import React from "react";
import "./Navigation.css";
import { Link, Route, NavLink } from "react-router-dom";
import Footer from "./../Footer/Footer";
import personalImg from "./images/personalImg.jpg";
import favicon from "./images/favicon.png";
function Navigation() {
  return (
    <React.Fragment>
      <div className="nav-side-menu">
        <div className="logo d-md-block  d-none d-xl-block d-lg-block ">
          <img src={personalImg} width="100%" alt="personal image" />
        </div>
        <div className="logo d-md-none d-none d-xs-block d-sm-block  ">
          <img src={favicon} style={{ width: "80px" }} alt="favicon am" />
        </div>
        <i
          className="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        ></i>

        <div className="menu-list">
          <ul id="menu-content" className="menu-content collapse out">
            <li>
              <Link data-aos="fade-down"
                activeclassName="active"
                className="nav-link hoverLine"
                to={{
                  pathname: "/home"
                }}
              >
                HOME
              </Link>
            </li>

            <li
              data-toggle="collapse"
              data-target="#products"
              className="collapsed"
            >
              <Link
                activeclassName="active"
                className="nav-link"
                to={{ pathname: "/about" }}
              >
                ABOUT ME
              </Link>
            </li>

            <li
              data-toggle="collapse"
              data-target="#service"
              className="collapsed"
            >
              <Link
                activeclassName="active"
                className="nav-link"
                to={{ pathname: "/resume" }}
              >
                RESUME
              </Link>
            </li>

            <li data-toggle="collapse" data-target="#new" className="collapsed">
              <Link
                activeclassName="active"
                className="nav-link"
                to={{ pathname: "/portfolio" }}
              >
                PORTFOLIO
              </Link>
            </li>

            <li>
              <Link
                activeclassName="active"
                className="nav-link"
                to={{ pathname: "/contact" }}
              >
                CONTACT
              </Link>
            </li>
            <Footer></Footer>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Navigation;
