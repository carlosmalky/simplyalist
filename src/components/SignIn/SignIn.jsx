import React from "react";
import classes from "./SignIn.module.css";
import Footer from "../Footer/Footer";

function SignIn() {
  return (
    <>
      <div className={classes["body"]}>
        <div className={classes["top-container"]}>
          <div className={classes["left-container"]}>
            <p className={classes["title"]}>Sign In</p>
            <p className={classes["paragraph"]}>
              You get to see up to your 5 most recent searches.
            </p>{" "}
            <p className={classes["paragraph"]}>
              - Easily find best list of recommendations.
            </p>
            <p className={classes["paragraph"]}>- Centralized in one place.</p>
            <p className={classes["paragraph"]}>
              Don't worry, we will never share this information!{" "}
            </p>
          </div>
          <div className={classes["right-container"]}>
            <div className={classes["signin-container"]}>
              <p className={classes["paragraph"]}>Backend under construction</p>
              <p className={classes["paragraph"]}>Visit again soon!</p>
            </div>
          </div>
        </div>
        <div className={classes["bottom-container"]}>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default SignIn;
