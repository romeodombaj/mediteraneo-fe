import styles from "./ShowItem.module.css";
import { Fragment, useState } from "react";
import Item from "./Item";

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
      <div className={styles.itemWrapper}>
        <h2>{props.itemInfo.name}</h2>
        <img
          src={props.itemInfo.picture}
          className={styles.itemImage}
          onClick={onSelectItem}
        ></img>
        <div></div>
      </div>
    </Fragment>
  );
};

export default ShowItem;
