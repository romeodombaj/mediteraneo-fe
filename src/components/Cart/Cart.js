import { Fragment, useContext, useEffect } from "react";
import styles from "./Cart.module.css";
import CartContext from "../store/cart-context";
import ReactDOM from "react-dom";
import CartItem from "./CartItem";
import Coupon from "./Coupon";
import Total from "./Total";

import exitIcon from "../../assets/navigation/menu-x.png";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const increaseItem = (item) => {
    cartCtx.addItem(item);
  };

  const decreaseItem = (id, whole) => {
    cartCtx.removeItem(id, whole);
  };

  const onClose = () => {
    props.onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.wrapper}>
            <img
              className={styles["close-button"]}
              onClick={onClose}
              src={exitIcon}
            />
            <div className={styles.title}>KOŠARICA</div>
            <div className={styles[`item-list`]}>
              <div className={styles[`item-list-header`]}>
                <div className={styles[`header-padding`]}>
                  <div className={styles[`columns-padding`]}>
                    <div className={styles[`header-name`]}>Naziv artikla</div>
                    <div className={styles[`column-other`]}>
                      <div className={styles[`other-item`]}>Cijena</div>
                      <div className={styles[`other-item`]}>Količina</div>
                      <div className={styles[`other-item`]}>Ukupno</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divider} />
              {cartCtx.items.length > 0 ? (
                cartCtx.items.map((item) => {
                  return (
                    <CartItem
                      key={item.id}
                      item={item}
                      addItem={increaseItem}
                      removeItem={decreaseItem}
                    />
                  );
                })
              ) : (
                <div className={styles.empty}>KOŠARICA PRAZNA</div>
              )}
            </div>
            <div className={styles.details}>
              <Coupon />
              <Total price={cartCtx.totalAmount.toFixed(2)} />
            </div>

            <div className={styles.actions}>
              <div className={styles[`action-button`]}>KRENI NA PLAĆANJE</div>
            </div>
          </div>
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default Cart;
