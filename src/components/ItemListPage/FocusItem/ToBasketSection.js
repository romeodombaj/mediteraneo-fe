import { Fragment, useContext, useEffect, useState } from "react";
import styles from "./ToBasketSection.module.css";

import cartIcon from "../../../assets/navigation/cart.png";
import like from "../../../assets/heart-empty.png";
import unlike from "../../../assets/heart-filled.png";
import SavedContext from "../../store/saved-context";

const ToBasketSection = (props) => {
  const item = props.item;
  const saveCtx = useContext(SavedContext);
  const [saved, setSaved] = useState(item.saved);

  const saveItem = () => {
    saveCtx.addItem(item);
    item.saved = true;
    setSaved(true);
  };

  const unsaveItem = () => {
    saveCtx.removeItem(item.id);
    item.saved = false;
    setSaved(false);
  };

  return (
    <Fragment>
      <div className={styles.divider} />
      <div className={styles[`wrapper`]}>
        <div className={styles[`total-section`]}>
          <div className={styles[`total-title`]}>Ukupno:</div>
          <div className={styles[`total`]}>146.00 €</div>
        </div>
        <div onClick={props.addToCart} className={styles[`add-button`]}>
          <img src={cartIcon} className={styles[`cart-icon`]} />{" "}
          <div>DODAJ U KOŠARICU</div>
        </div>
        <div
          onClick={saved ? unsaveItem : saveItem}
          className={`${styles[`like-button`]} ${
            saved && styles[`like-button-selected`]
          }`}
        >
          <img
            src={item.saved ? unlike : like}
            className={`${styles[`like-icon`]} ${
              saved && styles[`like-icon-selected`]
            }`}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ToBasketSection;
