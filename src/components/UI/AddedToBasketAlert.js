import styles from "./AddedToBasketAlert.module.css";
import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import ToBasketGif from "../../assets/AddedToBasketGif.gif";

const AddedToBasketAlert = ({ setOff }) => {
  const portalElement = document.getElementById("overlays");

  const [isFadingAway, setIsFadingAway] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFadingAway(true);
      setTimeout(() => {
        setOff(false);
      }, [200]);
    }, [1000]);
  });

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div
            className={`${styles[isFadingAway && `fade-away`]} ${
              styles.backdrop
            }`}
          />
          <div
            className={`${styles[isFadingAway && `fade-away`]} ${
              styles.wrapper
            }`}
          >
            <div className={styles[`gif-wrapper`]}>
              <img className={styles.gif} src={ToBasketGif} />
            </div>
            <div className={styles.text}>DODANO U KOŠARICU</div>
          </div>
          ;
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default AddedToBasketAlert;
