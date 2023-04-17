import styles from "./ShowItem.module.css";
import { Fragment, useState, useEffect } from "react";
import Item from "./FocusItem/Item";

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
      <div className={styles.wrapper}>
        <div>
          <img
            src={props.itemInfo.images[0].src}
            className={styles.image}
            onClick={onSelectItem}
          />
        </div>
        <h2>{props.itemInfo.name}</h2>
      </div>
    </Fragment>
  );
};

export default ShowItem;
