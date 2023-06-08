import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./InfoModal.module.css";

const InfoModal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.backdrop} onClick={props.onClose} />
          <div className={styles.wrapper}>{props.children}</div>;
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default InfoModal;
