import { Fragment, useEffect, useState } from "react";
import styles from "./FrontPageHeader.module.css";
import { useInView } from "react-intersection-observer";

// temp images
import logo from "../../../assets/logo.png";
import arrowDown from "../../../assets/arrow_down.png";
import TEMPimage from "../../../assets/ruc1.jpg";

const FrontPageHeader = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <img src={logo} className={styles.logo}></img>
        <div className={styles.title}>MEDITERANEO</div>
      </div>
    </Fragment>
  );
};

export default FrontPageHeader;
