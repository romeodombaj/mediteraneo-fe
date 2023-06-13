import styles from "./PageLoad.module.css";
import { useContext, useEffect, useState, Fragment } from "react";
import LoadingContext from "../store/loading-context";
//import styles from "../FrontPage/header/FrontPageHeader.module.css";

// temp

import logo from "../../assets/logo.png";
import background from "../../assets/head-img.png";
import TEMPimage from "../../assets/head-img.png";

const PageLoad = () => {
  const [outAnimation, setOutAnimation] = useState(``);
  const loadCtx = useContext(LoadingContext);
  const [inAnimation, setInAnimation] = useState(`in-wrapper`);

  const loadingCtx = useContext(LoadingContext);

  useEffect(() => {
    if (loadingCtx.mainLoaded) {
      setTimeout(() => {
        setInAnimation(``);
      }, [1000]);
    }
  }, [loadingCtx.mainLoaded]);

  useEffect(() => {
    if (loadCtx.mainLoaded) {
      setOutAnimation(`out`);
    }
  }, [loadCtx.mainLoaded]);

  return (
    <div className={`${styles.wrapper} ${styles[outAnimation]}`}>
      <img className={styles[`background-image`]} src={background}></img>
      <div className={styles[`content-wrapper`]}>
        <img src={logo} className={styles.logo}></img>
        <div className={styles.title}>MEDITERANEO</div>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

/*<Fragment>
      <div className={`${styles.wrapper} ${styles[inAnimation]}`}>
        <div className={styles.background}></div>
        <div className={styles[`image-wrapper`]}>
          <img className={styles.image} src={TEMPimage}></img>
        </div>
        <div className={styles[`title-wrapper`]}>
          <div className={styles.title}>Mediteraneo</div>
        </div>
      </div>
      <div className={styles[`spinner-wrapper`]}>
        <div className={styles.spinner}></div>
      </div>
    </Fragment>*/

export default PageLoad;
