import styles from "./ShowItem.module.css";
import { Fragment, useState, useEffect } from "react";
import Item from "../FocusItem/Item";

const ShowItem = (props) => {
  const [onSelected, setOnSelected] = useState(false);

  const onSelectItem = () => {
    setOnSelected(true);
  };

  const onCloseItem = () => {
    setOnSelected(false);
  };

  return (
    <Fragment>
      {onSelected && (
        <Item itemInfo={props.itemInfo} onClose={onCloseItem}></Item>
      )}
      <div className={styles[`wrapper`]}>
        <div className={styles[`image-wrapper`]}>
          <img
            src={props.itemInfo.images[0].src}
            className={styles.image}
            onClick={onSelectItem}
          />
        </div>
        <div className={styles.info}>
          <div className={styles[`main-info`]}>
            <div className={styles.name}>{props.itemInfo.name}</div>
            <div className={styles.price}>{props.itemInfo.price}</div>
          </div>
          <div className={styles.description}>
            Lorem ipsum, lorem ipsum, lorem ipsum...
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShowItem;
