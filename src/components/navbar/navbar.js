import React from "react";
import { Link } from "react-router-dom";

import HamburgerButton from "../utils/hamburgerButton";

import SearchInput from "../utils/searchInput";
import amazonLogo from "../../assets/amazon_logoT1.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import classes from "./navbar.module.css";

function Navbar() {
  return (
    <div className={classes.divNavbar}>
      <HamburgerButton />
      <Link to="/">
        <img
          className={classes.amazonLogo}
          src={amazonLogo}
          alt="amazon logo"
        ></img>
      </Link>
      <SearchInput />
      <div className={classes.divUserContainer}>
        <Link to="/signIn" className={classes.divUserContainers}>
          <span className={classes.span}>Hello, Sign In</span>
          <span>Account & Lists</span>
        </Link>
        <Link to="/" className={classes.divUserContainers}>
          <span className={classes.span}>Returns</span>
          <span>& Orders</span>
        </Link>
        <Link to="/cart" className={classes.divCart}>
          <ShoppingCartOutlinedIcon />
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
