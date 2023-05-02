import { Fragment, useEffect, useState, useContext } from "react";
import styles from "./FrontPageHeader.module.css";
import LoadingContext from "../../store/loading-context";

// temp images
import logo from "../../../assets/logo.png";
import arrowDown from "../../../assets/arrow_down.png";
import TEMPimage from "../../../assets/kitchen main.png";

const FrontPageHeader = () => {
  const [inAnimation, setInAnimation] = useState(`in-wrapper`);

  const loadingCtx = useContext(LoadingContext);

  useEffect(() => {
    if (loadingCtx.mainLoaded) {
      setTimeout(() => {
        setInAnimation(``);
      }, [1000]);
    }
  }, [loadingCtx.mainLoaded]);

  return (
    <Fragment>
      <div className={`${styles.wrapper} ${styles[inAnimation]}`}>
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
