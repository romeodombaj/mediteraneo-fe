import { Fragment } from "react";
import styles from "./ImageShow.module.css";
import ReactDOM from "react-dom";

const ImageShow = (props) => {
  const portalElement = document.getElementById("overlays");

  const onCloseHandler = () => {
    props.onClose();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.backdrop} onClick={onCloseHandler} />
          <div className={styles.wrapper}>
            {props.img && <img className={styles.image} src={props.img} />}
          </div>
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default ImageShow;
