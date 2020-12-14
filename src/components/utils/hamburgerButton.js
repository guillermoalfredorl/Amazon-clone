import React from "react";

import classes from "./hamburgerButton.module.css";

function HamburgerButton() {
  return (
    <button className={classes.navigation} id="closebtn" onclick="navToggle()">
      <span className={classes.line1}></span>
      <span className={classes.line2}></span>
      <span className={classes.line3}></span>
    </button>
  );
}

export default HamburgerButton;
