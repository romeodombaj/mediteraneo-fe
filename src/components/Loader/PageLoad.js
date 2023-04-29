import styles from "./PageLoad.module.css";

// temp

import logo from "../../assets/logo.png";

const PageLoad = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.logo}></img>
      <div className={styles.title}>
        MEDITERANEO
      </div>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default PageLoad;
