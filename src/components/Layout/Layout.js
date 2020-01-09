import React from "react";
import Navigation from "./../Navigation/Navigation";

const Layout = props => {
  return (
    <>
      <Navigation />
      
      <div class="wrapper">

      {props.children}
      </div>
    </>
  );
};

export default Layout;
