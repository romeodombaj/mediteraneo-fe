import { Fragment, useEffect, useState } from "react";
import styles from "./FrontPageHeader.module.css";
import { useInView } from "react-intersection-observer";

// temp images
import logo from "../../../assets/logo.png";
import arrowDown from "../../../assets/arrow_down.png";
import TEMPimage from "../../../assets/kitchen main.png";

const FrontPageHeader = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.background}></div>
        <div className={styles[`image-wrapper`]}>
          <img className={styles.image} src={TEMPimage}></img>
        </div>
        <div className={styles[`title-wrapper`]}>
          <div className={styles.title}>Mediteraneo</div>
        </div>
      </div>
    </Fragment>
  );
};

export default FrontPageHeader;
