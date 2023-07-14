import { Fragment } from "react";
import styles from "./ToBasketSection.module.css";

import cartIcon from "../../../assets/navigation/cart.png";

const ToBasketSection = (props) => {
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
      </div>
    </Fragment>
  );
};

export default ToBasketSection;
