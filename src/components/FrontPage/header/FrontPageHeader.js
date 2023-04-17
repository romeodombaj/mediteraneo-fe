import { Fragment, useEffect, useState } from "react";
import styles from "./FrontPageHeader.module.css";

// temp images
import logo from "../../../assets/logo.png";
import arrowDown from "../../../assets/arrow_down.png";

const FrontPageHeader = () => {
  const [isChilling, setIsChilling] = useState(false);

  const scrollMeTrigger = () => {
    setTimeout(() => {
      setIsChilling(true);
    }, 4000);
  };

  useEffect(() => {
    scrollMeTrigger();
  }, []);

  return (
    <Fragment>
      <div className={styles[`logo-section`]}>
        <img src={logo} className={styles.logo} />
        {isChilling && (
          <div className={styles[`scroll-me-wrapper`]}>
            <div className={styles[`scroll-text`]}>Scroll down</div>
            <img src={arrowDown} className={styles[`scroll-arrow`]} />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default FrontPageHeader;
