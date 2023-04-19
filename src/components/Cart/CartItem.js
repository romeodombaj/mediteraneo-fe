import { useState } from "react";
import styles from "./CartItem.module.css";
import { Fragment } from "react";

const CartItem = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(22.21);

  const onIncreaseHandler = () => {
    setQuantity((prev) => prev + 1);
  };

  const onDecreaseHandler = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };

  return (
    <Fragment>
      <div className={styles.item} key={props.item.id}>
        <div>
          <div>{props.item.name}</div>
          <div>22.21€</div>
        </div>

        <div className={styles[`total-wrapper`]}>
          <div className={styles[`quantity-wrapper`]}>
            <button onClick={onIncreaseHandler}>+</button>
            <div>{quantity}</div>
            <button onClick={onDecreaseHandler}>-</button>
          </div>
          <div className={styles[`price-wrapper`]}>
            <div>{(totalPrice * quantity).toFixed(2)}€</div>
          </div>
        </div>
      </div>
      <hr className={styles[`item-divider`]} />
    </Fragment>
  );
};

export default CartItem;
