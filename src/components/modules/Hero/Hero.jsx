import React from "react";
import phonephoto from "../../../assets/phone.png";
import styles from "./Hero.module.css";
import Slider from "../MaxChange/MaxChangeSliderr";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Finora </h1>
        <h1 className={styles.describ}>
          Smarter Financial Insights for a Changing World
        </h1>
        <p className={styles.subtitle}>
          Turn complex market data into clear, actionable insights empowering
          smarter financial decisions every day.
        </p>
        <div className={styles.slider}>
          <Slider />
        </div>
      </div>

      <img src={phonephoto} />
    </div>
  );
}

export default Hero;
