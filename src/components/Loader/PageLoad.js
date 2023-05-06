import styles from "./PageLoad.module.css";
import { useContext, useEffect, useState } from "react";
import LoadingContext from "../store/loading-context";

// temp

import logo from "../../assets/logo.png";
import background from "../../assets/background colors.jpg";

const PageLoad = () => {
  const [outAnimation, setOutAnimation] = useState(``);
  const loadCtx = useContext(LoadingContext);

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

export default PageLoad;
