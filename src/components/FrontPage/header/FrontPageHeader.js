import { Fragment, useEffect, useState, useContext } from "react";
import styles from "./FrontPageHeader.module.css";
import LoadingContext from "../../store/loading-context";

// temp images
import logo from "../../../assets/logo.png";
import arrowDown from "../../../assets/arrow_down.png";
import TEMPimage from "../../../assets/kitchen main.png";

const FrontPageHeader = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles[`background-image`]} src={TEMPimage} />
      <div className={styles[`info-wrapper`]}>
        <div className={styles[`head-text`]}>
          RAZNOLIKE OPCIJE KOJE ĆE ZADOVOLJITI <br /> VAŠE POTREBE I
          PREFERENCIJE
        </div>
        <div className={styles.button}>POGLEDAJTE PONUDU</div>
      </div>
    </div>
  );
};

export default FrontPageHeader;
