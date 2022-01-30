import React, { Fragment } from "react";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import AvailableProducts from "../../components/availableProducts/availableProducts"

import classes from "./home.module.css";

function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className={classes.div}> 
      <AvailableProducts/>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Home;
