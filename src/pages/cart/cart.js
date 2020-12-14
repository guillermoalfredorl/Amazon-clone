import React, { Fragment } from "react";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import classes from "./cart.module.css";

function Cart() {
  return (
    <Fragment>
      <Navbar />
      <div className={classes.div}> </div>
      <Footer />
    </Fragment>
  );
}

export default Cart;
