import { Fragment, useContext } from "react";
import styles from "./Cart.module.css";
import CartContext from "../store/cart-context";
import ReactDOM from "react-dom";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.backdrop} onClick={props.onClose}></div>
          <div className={styles.wrapper}>
            <div className={styles[`item-wrapper`]}>
              {cartCtx.items.map((item) => {
                return <CartItem item={item} />;
              })}
            </div>
            <div className={styles.price}>$32.22</div>
            <div className={styles.actions}>
              <div className={styles[`action-button`]}>ORDER</div>
              <div className={styles[`action-button`]} onClick={props.onClose}>
                CLOSE
              </div>
            </div>
          </div>
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default Cart;
