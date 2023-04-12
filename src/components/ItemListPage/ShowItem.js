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
        <h2>{props.itemInfo.name}</h2>
        <div>
          <div className={styles[`focus-image`]}>
            <img
              src={props.itemInfo.images[0].src}
              className={styles.image}
              onClick={onSelectItem}
            ></img>
          </div>
          <div className={styles[`middle-image`]}>
            <img
              src={props.itemInfo.images[0].src}
              className={styles.image}
              onClick={onSelectItem}
            ></img>
            <img
              src={props.itemInfo.images[0].src}
              className={styles.image}
              onClick={onSelectItem}
            ></img>
          </div>
          <div className={`${styles[`middle-image`]} ${styles[`back-image`]}`}>
            <img
              src={props.itemInfo.images[0].src}
              className={styles.image}
              onClick={onSelectItem}
            ></img>
            <img
              src={props.itemInfo.images[0].src}
              className={styles.image}
              onClick={onSelectItem}
            ></img>
          </div>

          {/*props.itemInfo.images.map((image) => {
            return (
              <img
                key={image.id}
                src={image.src}
                className={styles.image}
                onClick={onSelectItem}
              ></img>
            );
          })*/}
        </div>
      </div>
    </Fragment>
  );
};

export default ShowItem;
