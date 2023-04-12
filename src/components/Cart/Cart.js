import { Fragment, useContext } from "react";
import styles from "./Cart.module.css";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onClose}></div>
      <div className={styles.wrapper}>
        {cartCtx.items.map((item) => {
          return (
            <div className={styles.item} key={item.id}>
              <div>{item.name}</div>
              <div>22.21</div>
            </div>
          );
        })}
        <div className={styles.price}>$32.22</div>
      </div>
    </Fragment>
  );
};

export default Cart;
