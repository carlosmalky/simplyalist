import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import ProfileIcon from "../../assets/userIcon.svg";

function Navbar() {
  return (
    <>
      <div className={classes["body"]}>
        <div className={classes["left-container"]}>
          <Link className={classes["header-btn"]} to="/">
            Home
          </Link>

          <Link className={classes["header-btn"]} to="/about">
            About
          </Link>
        </div>
        <div className={classes["right-container"]}>
          <Link className={classes["header-btn"]} to="/recentsearches">
            Recent Searches
          </Link>
          <Link to="/signin">
            <img
              className={classes["header-profile-btn"]}
              src={ProfileIcon}
              alt="profile of Profile"
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
