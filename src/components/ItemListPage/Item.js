import styles from "./Item.module.css";
import { useState, useEffect } from "react";

const Item = (props) => {
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);

  const imageArray = props.itemInfo.images;

  const onNextImageHandler = () => {
    if (displayedImageIndex === imageArray.length - 1) {
      setDisplayedImageIndex(0);
    } else {
      setDisplayedImageIndex((prevState) => prevState + 1);
    }
  };

  const onPrevImageHandler = () => {
    if (displayedImageIndex === 0) {
      setDisplayedImageIndex(imageArray.length - 1);
    } else {
      setDisplayedImageIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className={styles.itemWrapper}>
      <div className={styles[`image-wrapper`]}>
        <button
          onClick={onPrevImageHandler}
          className={`${styles[`image-left`]} ${styles.action}`}
        >
          -
        </button>
        <button
          onClick={onNextImageHandler}
          className={`${styles[`image-right`]} ${styles.action}`}
        >
          +
        </button>
        <img
          className={styles.itemImage}
          src={imageArray[displayedImageIndex].src}
        ></img>
        <img
          className={styles[`dummy-image`]}
          src={imageArray[displayedImageIndex].src}
        ></img>
      </div>
      <div className={styles[`information-wrapper`]}>
        <h1>{props.itemInfo.name}</h1>
        <p>{props.itemInfo.description}</p>
      </div>
    </div>
  );
};

export default Item;
