import InfoModal from "../UI/InfoModal";
import styles from "./Saved.module.css";
import ReactDOM from "react-dom";
import { Fragment, useContext } from "react";
import NavigationContext from "../store/navigation-context";
import ShowItem from "../UI/ShowItem";
import SavedContext from "../store/saved-context";
const Saved = () => {
  const portalElement = document.getElementById("overlays");
  const navCtx = useContext(NavigationContext);
  const saveCtx = useContext(SavedContext);

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.wrapper}>
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
