import styles from "./ItemListHeader.module.css";
import { Fragment, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const ItemListHeader = (props) => {
  const defaultText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Fragment>
      <div className={styles.wrapper}>
        {props.category && (
          <Fragment>
            <img className={styles.image} src={props.category.image.src} />
            <div className={styles[`nav-map`]}>
              <Link to="/" className={styles.past}>
                Naslovnica
              </Link>
              <div> / </div>
              <div> {props.params}</div>
            </div>
            <div className={styles[`info-wrapper`]}>
              <div className={styles.title}>{props.category.name}</div>
              <div className={styles.description}>
                {props.category.description || defaultText}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default ItemListHeader;
