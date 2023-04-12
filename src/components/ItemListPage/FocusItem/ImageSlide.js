import styles from "./ImageSlide.module.css";
import { useState } from "react";

const ImageSlide = (props) => {
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);
  const [animationImageIndex, setAnimationImageIndex] = useState(0);
  const [imageChange, setImageChange] = useState(false);

  const imageArray = props.itemInfo.images;

  const onNextImageHandler = () => {
    setImageChange(true);

    if (displayedImageIndex === imageArray.length - 1) {
      setAnimationImageIndex(0);
      setTimeout(() => {
        setDisplayedImageIndex(0);
      }, 190);
    } else {
      setAnimationImageIndex((prevState) => prevState + 1);
      setTimeout(() => {
        setDisplayedImageIndex((prevState) => prevState + 1);
      }, 190);
    }
    setTimeout(() => {
      setImageChange(false);
    }, 210);
  };

  const onPrevImageHandler = () => {
    setImageChange(true);
    if (displayedImageIndex === 0) {
      setAnimationImageIndex(imageArray.length - 1);
      setTimeout(() => {
        setDisplayedImageIndex(imageArray.length - 1);
      }, 200);
    } else {
      setAnimationImageIndex((prevState) => prevState - 1);
      setTimeout(() => {
        setDisplayedImageIndex((prevState) => prevState - 1);
      }, 200);
    }

    setTimeout(() => {
      setImageChange(false);
    }, 210);
  };

  return (
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
        className={`${styles[`dummy-image`]} ${
          imageChange && styles[`dummy-animation`]
        }`}
        src={imageArray[animationImageIndex].src}
      ></img>
    </div>
  );
};

export default ImageSlide;
