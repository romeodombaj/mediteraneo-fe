import { Fragment } from "react";
import styles from "./AboutUs.module.css";
import beanicon from "../../../assets/bean icon.png";

const AboutUs = () => {
  return (
    <Fragment>
      <div className={styles[`moto-section`]}>
        <div className={styles.moto}>
          All products are{" "}
          <span className={styles[`moto-bold`]}>
            made
            <br />
            and designed{" "}
          </span>{" "}
          in Croatia.
        </div>
      </div>
      <div className={styles[`about-section`]}>
        <div className={styles[`info`]}>
          <div className={styles[`about-title`]}>About Us</div>
          <div className={styles[`about-text`]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <img src={beanicon} className={styles.bean}></img>
      </div>
    </Fragment>
  );
};

export default AboutUs;
