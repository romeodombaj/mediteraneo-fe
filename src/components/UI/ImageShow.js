import { Fragment, useState } from "react";
import styles from "./ImageShow.module.css";
import ReactDOM from "react-dom";

//icons
import menuX from "../../assets/navigation/menu-x.png";
import arrow from "../../assets/Arrow-down.svg";

const ImageShow = (props) => {
  const portalElement = document.getElementById("overlays");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(props.img.length - 1);
    } else {
      setCurrentImageIndex((prevVal) => prevVal - 1);
    }
  };

  const nextImage = () => {
    if (!props.img[currentImageIndex + 1]) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex((prevVal) => prevVal + 1);
    }
  };

  const onCloseHandler = () => {
    props.onClose();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.backdrop} onClick={onCloseHandler} />
          <img className={styles.exit} src={menuX} onClick={onCloseHandler} />
          <img
            onClick={prevImage}
            className={`${styles[`arrow-left`]} ${styles.arrow}`}
            src={arrow}
          />
          <img
            onClick={nextImage}
            className={`${styles[`arrow-right`]} ${styles.arrow}`}
            src={arrow}
          />

          <div className={styles.wrapper}>
            {props.img && (
              <img
                className={styles.image}
                src={props.img[currentImageIndex].src}
              />
            )}
          </div>
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default ImageShow;
