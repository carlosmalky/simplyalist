import React from "react";
import classes from "./Home.module.css";
import { ReactComponent as Title } from "../../assets/title.svg";
import Footer from "../Footer/Footer";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <div className={classes["body"]}>
        <div className={classes["top-container"]}>
          <Title className={classes["title-svg"]}></Title>
        </div>

        <div className={classes["middle-container"]}>
          <div className={classes["typewritter-container"]}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(60)

                  .typeString("Best coffee shops in New York")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Restaurants in Austin, Texas")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Best website for recommendations")
                  .start();
              }}
            />
          </div>
          <form className={classes["search-bar-container"]}>
            <input className={classes["search-bar"]} type="text"></input>
          </form>
        </div>
        <div className={classes["bottom-container"]}>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Home;
