import { Fragment } from "react";
import Item from "./Item";
import styles from "./ItemInfo.module.css";

const ItemInfo = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`title-wrapper`]}>
        <div className={styles.title}>{props.itemInfo.name}</div>
      </div>

      <div className={styles.description}>
        {props.itemInfo.description.substring(0, 100)}...
      </div>

      <div className={styles[`price-wrapper`]}>
        <div className={styles.price}>€ {props.itemInfo.price} </div>
      </div>
    </div>
  );
};

export default ItemInfo;
