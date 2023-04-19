import React, { Fragment } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

const Navigation = (props) => {
  const portalElement = document.getElementById("overlays");

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const categorySelectionHandler = (event) => {
    props.onClose();
    goToTop();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div>
          <div onClick={props.onClose} className={styles.backdrop} />

          <div
            className={`${styles[`category-box`]} ${styles[`first-category`]}`}
          >
            <Link
              to={`/0`}
              onClick={categorySelectionHandler}
              className={styles[`category-element`]}
            >
              RUČNICI
            </Link>
          </div>
          <div
            className={`${styles[`category-box`]} ${styles[`second-category`]}`}
          >
            <Link
              to={`/1`}
              onClick={categorySelectionHandler}
              className={styles[`category-element`]}
            >
              POSTELJINA
            </Link>
          </div>
          <div
            className={`${styles[`category-box`]} ${styles[`third-category`]}`}
          >
            <Link
              to={`/2`}
              onClick={categorySelectionHandler}
              className={styles[`category-element`]}
            >
              KUHINJSKI <br /> ELEMENTI
            </Link>
          </div>
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default Navigation;
