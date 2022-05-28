import React from "react";
import classes from "./Recentsearches.module.css";
import Footer from "../Footer/Footer";
import { ReactComponent as Locksvg } from "../../assets/lock.svg";

function Recentsearches() {
  return (
    <>
      <div className={classes["body"]}>
        <div className={classes["top-container"]}>
          <div className={classes["left-container"]}>
            <p className={classes["title"]}>Recent Searches</p>
            <p className={classes["paragraph"]}>
              Don't worry! We do not share your search history, it's only here
              for you.
            </p>

            <p className={classes["paragraph"]}>
              You can delete your search history with a simple click. Nothing
              kept, no hidden secrets.
            </p>

            <div className={classes["left-bottom-container"]}>
              <Locksvg className={classes["lock-icon"]}></Locksvg>
            </div>
          </div>
          <div className={classes["right-container"]}>
            <p className={classes["paragraph"]}>
              Please Sign In to see your recent searches
            </p>
          </div>
        </div>
        <div className={classes["bottom-container"]}>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Recentsearches;
