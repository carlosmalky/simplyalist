import React from "react";
import classes from "./About.module.css";
import Footer from "../Footer/Footer";
import { ReactComponent as Infographic } from "../../assets/infographic.svg";
function About() {
  return (
    <>
      <div className={classes["body"]}>
        <div className={classes["top-container"]}>
          <div className={classes["left-container"]}>
            <p className={classes["title"]}>About</p>
            <p className={classes["paragraph"]}>
              Simply a List compiles results from several websites that
              recommend anything! For example, best coffee shops in New York or
              best restaurants in Seattle.
            </p>
            <p className={classes["paragraph"]}>
              This is possible through machine learning and Natural Language
              Processing!
            </p>
            <p className={classes["paragraph"]}>
              Of course it is not perfect, but with your help, every search is
              getting better and more accurate.
            </p>
          </div>
          <div className={classes["right-container"]}>
            <Infographic className={classes["infographic"]}></Infographic>
          </div>
        </div>
        <div className={classes["bottom-container"]}>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default About;
