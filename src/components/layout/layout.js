import React, { Fragment } from "react";

import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
// import classes from "./layout.module.css";

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </Fragment>
  );
}

export default Layout;
