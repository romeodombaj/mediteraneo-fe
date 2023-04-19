import { Fragment, useContext } from "react";
import styles from "./Cart.module.css";
import CartContext from "../store/cart-context";
import ReactDOM from "react-dom";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const increaseItem = (item) => {
    cartCtx.addItem(item);
  };

  const decreaseItem = (id) => {
    cartCtx.removeItem(id);
  };

  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.backdrop} onClick={props.onClose}></div>
          <div className={styles.wrapper}>
            <div className={styles[`item-wrapper`]}>
              {cartCtx.items.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    addItem={increaseItem}
                    removeItem={decreaseItem}
                  />
                );
              })}
            </div>
            <div className={styles.price}>
              ${cartCtx.totalAmount.toFixed(2)}
            </div>
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
