import styles from "./Saved.module.css";
import ReactDOM from "react-dom";
import { Fragment, useContext, useEffect } from "react";
import ShowItem from "../UI/ShowItem";
import SavedContext from "../store/saved-context";

import exitIcon from "../../assets/navigation/menu-x.png";
import useScrollStop from "../hooks/use-scroll-stop";

const Saved = (props) => {
  const portalElement = document.getElementById("overlays");
  const saveCtx = useContext(SavedContext);

  useScrollStop();

  const onClose = () => {
    props.onClose();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.wrapper}>
            <img
              className={styles["close-button"]}
              onClick={onClose}
              src={exitIcon}
              alt="Exit"
            />
            <div className={styles.title}>SPREMLJENI PROIZVODI</div>

            {saveCtx.items && saveCtx.items.length > 0 ? (
              <div className={`${styles[`item-grid`]}`}>
                {saveCtx.items.map((item) => {
                  return <ShowItem saved={true} key={item.id} item={item} />;
                })}
              </div>
            ) : (
              <div className={styles.null}>NEMA SPREMLJENIH PROIZVODA</div>
            )}
          </div>
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default Saved;
