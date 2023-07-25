import { useState } from "react";
import styles from "./CartItem.module.css";
import { Fragment } from "react";

//temp
import tempImg from "../../assets/coffe maker.png";

const CartItem = (props) => {
  const [totalPrice, setTotalPrice] = useState(22.21);

  const onIncreaseHandler = () => {
    const tempItem = {
      ...props.item,
      quantity: 1,
    };

    props.addItem(tempItem);
  };

  const onDecreaseHandler = () => {
    props.removeItem(props.item.id);
  };

  return (
    <Fragment>
      <div className={styles.item} key={props.item.id}>
        <div className={styles[`main-info`]}>
          <img className={styles.image} src={tempImg} />
          <div>
            <div>{props.item.name}</div>
            <div className={styles.options}>
              <div>Boja: </div>
              <div>Veličina: </div>
            </div>
          </div>
        </div>

        <div className={styles[`total-wrapper`]}>
          <div className={styles[`quantity-wrapper`]}>
            <button onClick={onIncreaseHandler}>+</button>
            <div>{props.item.quantity}</div>
            <button onClick={onDecreaseHandler}>-</button>
          </div>
          <div className={styles[`price-wrapper`]}>
            <div>{(totalPrice * props.item.quantity).toFixed(2)}€</div>
          </div>
        </div>
      </div>
      <hr className={styles[`item-divider`]} />
    </Fragment>
  );
};

export default CartItem;
