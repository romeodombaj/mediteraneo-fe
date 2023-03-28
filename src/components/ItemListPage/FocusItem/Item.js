import styles from "./Item.module.css";
import { useState, useEffect } from "react";
import ImageSlide from "./ImageSlide";

const Item = (props) => {
  return (
    <div className={styles.itemWrapper}>
      <div type="button" onClick={props.onClose}>
        ex
      </div>
      <ImageSlide itemInfo={props.itemInfo}></ImageSlide>
      <div className={styles[`information-wrapper`]}>
        <h1>{props.itemInfo.name}</h1>
        <p>{props.itemInfo.description}</p>
      </div>
    </div>
  );
};

export default Item;
