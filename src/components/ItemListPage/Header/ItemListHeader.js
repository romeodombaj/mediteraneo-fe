import styles from "./ItemListHeader.module.css";
import { Fragment, useState, useEffect, useContext } from "react";
import logoImg from "../../../assets/logo.png";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ItemListHeader = (props) => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        {props.category && (
          <Fragment>
            <img className={styles.image} src={props.category.image.src}></img>
            <div className={styles[`title-wrapper`]}>
              <div className={styles.title}>{props.category.name}</div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default ItemListHeader;
