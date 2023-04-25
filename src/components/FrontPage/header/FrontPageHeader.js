import { Fragment, useEffect, useState } from "react";
import styles from "./FrontPageHeader.module.css";
import { useInView } from "react-intersection-observer";

// temp images
import logo from "../../../assets/logo.png";
import arrowDown from "../../../assets/arrow_down.png";

const FrontPageHeader = () => {
  const [isChilling, setIsChilling] = useState(false);
  const [logoStopClass, setLogoStopClass] = useState(``);
  const [logoStop, stopTrigger] = useInView(``);
  const [logoStart, startTrigger] = useInView(``);

  const scrollMeTrigger = () => {
    setTimeout(() => {
      setIsChilling(true);
    }, 4000);
  };

  useEffect(() => {
    scrollMeTrigger();
  }, []);

  useEffect(() => {
    console.log("stop");
    if (startTrigger) {
      setLogoStopClass(``);
    } else if (stopTrigger) {
      setLogoStopClass(`stop`);
    }
  }, [stopTrigger, startTrigger]);

  return (
    <Fragment>
      <div className={styles[`logo-section`]}>
        <img src={logo} className={`${styles.logo} ${styles[logoStopClass]}`} />
        {isChilling && (
          <div className={styles[`scroll-me-wrapper`]}>
            <div className={styles[`scroll-text`]}>Scroll down</div>
            <img src={arrowDown} className={styles[`scroll-arrow`]} />
            <img
              src={arrowDown}
              className={`${styles[`scroll-arrow`]} ${
                styles[`scroll-arrow-delayed`]
              }`}
            />
          </div>
        )}
      </div>
      <div ref={logoStart} className={styles[`logo-stop`]} />
      <div className={styles[`logo-placement`]} />
      <div ref={logoStop} className={styles[`logo-stop`]} />
    </Fragment>
  );
};

export default FrontPageHeader;
