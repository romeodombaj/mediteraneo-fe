import { Fragment, useState } from "react";
import styles from "./FrontPageHeaderImage.module.css";

import image1 from "../../../assets/head-img.png";
import image2 from "../../../assets/graciozaKolekcija1.jpg";
import image3 from "../../../assets/graciozaKolekcija4.jpg";

const imageList = [image1, image2, image3];

const FrontPageHeaderImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageIsShown, setImageIsShown] = useState(true);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [imageClassname, setImageClassname] = useState(
    `${styles[`background-image`]}`
  );

  const onPrevHandler = () => {
    let value = imageList.length - 1;
    if (currentImageIndex > 0) {
      value = currentImageIndex - 1;
    }
    setButtonEnabled(false);
    unloadImage(value);
  };

  const onNextHandler = () => {
    let value = 0;
    if (currentImageIndex < imageList.length - 1) {
      value = currentImageIndex + 1;
    }
    setButtonEnabled(false);
    unloadImage(value);
  };

  const unloadImage = (value) => {
    setImageClassname(
      `${styles[`background-image`]} ${styles[`image-out-animation`]}`
    );

    setTimeout(() => {
      setImageIsShown(false);
      setCurrentImageIndex(value);
      loadImage();
    }, [300]);
  };

  const loadImage = () => {
    setTimeout(() => {
      setImageIsShown(true);
      setImageClassname(
        `${styles[`background-image`]} ${styles[`image-in-animation`]}`
      );
      setTimeout(() => {
        setImageClassname(`${styles[`background-image`]}`);
        setButtonEnabled(true);
      }, [300]);
    }, [1]);
  };

  return (
    <Fragment>
      <img
        className={imageClassname}
        src={imageIsShown && imageList[currentImageIndex]}
      />
      <div className={styles.actions}>
        <div
          className={styles["action-button"]}
          onClick={(buttonEnabled && onPrevHandler) || undefined}
        >
          PREV
        </div>
        <div
          className={styles["action-button"]}
          onClick={(buttonEnabled && onNextHandler) || undefined}
        >
          NEXT
        </div>
      </div>
    </Fragment>
  );
};

export default FrontPageHeaderImage;
