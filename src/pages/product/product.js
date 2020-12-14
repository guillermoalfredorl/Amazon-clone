import React, { Fragment, useState } from "react";
import Rating from "@material-ui/lab/Rating";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

import classes from "./product.module.css";

function Product() {
  const [value, setValue] = useState(4);
  return (
    <Fragment>
      <Navbar />
      <div className={classes.div}>
        <div className={classes.divLayout}>
          <div className={classes.divContainer}>
            <div>
              <div className={classes.imgSelector}>p</div>
            </div>
            <div>
              <div className={classes.imgContainer}>p</div>
            </div>
            <div>
              <div className={classes.productDetails}>
                <h3>DualShock 4 Wireless Controller for Playstation 4</h3>
                <hr></hr>
                <Rating name="read-only" value={value} readOnly />
                <p>
                  Price:{" "}
                  <span className={classes.productSpan}>
                    <b>$59.98</b>
                  </span>
                </p>
                <p>Ships from and sold by Amazon.com.</p>
                <ul>
                  <li>
                    The feel, shape, and sensitivity of the dual analog sticks
                    and trigger buttons have been improved to provide a greater
                    sense of control, no matter what you play
                  </li>
                  <li>
                    The new multi touch and clickable touch pad on the face of
                    the DualShock 4 Wireless Controller opens up worlds of new
                    gameplay possibilities for both newcomers and veteran gamers
                  </li>
                  <li>
                    The DualShock 4 Wireless Controller features a built in
                    speaker and stereo headset jack, putting several new audio
                    options in the player's hands
                  </li>
                  <li>
                    The Dualshock 4 wireless controller can be easily recharged
                    by plugging it into your PlayStation 4 system, even when in
                    rest mode, or with any standard charger using a USB cable
                    (type A to micro B sold separately)
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className={classes.productToCart}>
                <p>
                  Total:
                  <b>$59.98</b>
                </p>
                <h3>In Stock.</h3>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <button className={classes.btnAddToCart}>Add to Cart</button>
                <button className={classes.btnBuyNow}>Buy Now</button>
                <span>Sold by Amazon.com</span>
                <button className={classes.btnAddToList}>Add to List</button>
              </div>
            </div>
          </div>
          <div className={classes.divDescription}>
            <hr></hr>

            <div>
              <p>description</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Product;
