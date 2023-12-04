import { Fragment, useContext, useEffect, useState } from "react";
import styles from "./ToBasketSection.module.css";
import CartContext from "../../store/cart-context";

import cartIcon from "../../../assets/navigation/cart.png";
import like from "../../../assets/heart-empty.png";
import unlike from "../../../assets/heart-filled.png";
import SavedContext from "../../store/saved-context";

const ToBasketSection = (props) => {
  const item = props.item;
  const name = item.name;
  const cartCtx = useContext(CartContext);
  const saveCtx = useContext(SavedContext);
  const [saved, setSaved] = useState(item.saved);
  const [totalAmount, setTotalAmount] = useState(0);

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

  useEffect(() => {
    let tempTotal = 0;
    props.itemVariations.forEach((variation) => {
      if (variation.quantity && variation.quantity > 0) {
        tempTotal += variation.price * variation.quantity;
      }
    });

    setTotalAmount(tempTotal);
  }, [props.itemVariations]);

  const addItemToCartHandler = () => {
    let tempVariations = [];
    let tempItemVariations = [...props.itemVariations];

    tempItemVariations.forEach((variation) => {
      if (variation.quantity && variation.quantity > 0) {
        tempVariations.push({ name, ...variation });
        variation.quantity = 0;
      }
    });

    props.setItemVariations(tempItemVariations);
    cartCtx.addItem([...tempVariations]);
  };

  return (
    <Fragment>
      <div className={styles.divider} />
      <div className={styles[`wrapper`]}>
        <div className={styles[`total-section`]}>
          <div className={styles[`total-title`]}>Ukupno:</div>
          <div className={styles[`total`]}>{totalAmount.toFixed(2)} €</div>
        </div>
        <div onClick={addItemToCartHandler} className={styles[`add-button`]}>
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
