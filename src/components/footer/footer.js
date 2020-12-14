import React from "react";

import classes from "./footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.divBackToTop}>
        <a href="#">Back to top</a>
      </div>
      <div className={classes.divFooter}>
        <span>© 1996-2020, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default Footer;
