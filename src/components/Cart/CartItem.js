import { useState } from "react";
import styles from "./CartItem.module.css";
import { Fragment } from "react";

//temp
import tempImg from "../../assets/coffe maker.png";
import exitIcon from "../../assets/navigation/menu-x.png";

const CartItem = (props) => {
  const [totalPrice, setTotalPrice] = useState(22.21);
  const [quantity, setQuantity] = useState(props.item.quantity);

  const onIncreaseHandler = () => {
    const tempItem = {
      ...props.item,
      quantity: 1,
    };

    props.addItem(tempItem);
  };

  const onDecreaseHandler = () => {
    props.removeItem(props.item.id, false);
  };

  const onRemoveHandler = () => {
    props.removeItem(props.item.id, true);
  };

  const quantityChangeHandler = (e) => {
    const value = e.target.value;

    if (value > quantity) {
      onIncreaseHandler();
    } else if (value < quantity) {
      onDecreaseHandler();
    }

    setQuantity(value);
  };

  return (
    <Fragment>
      <div className={styles.item} key={props.item.id}>
        <img
          onClick={onRemoveHandler}
          className={styles[`close-button`]}
          src={exitIcon}
        />

        <img className={styles.image} src={props.item.image} />
        <div className={styles[`info`]}>
          <div>
            <div className={styles.name}>{props.item.name}</div>
            <div className={styles.options}>
              <div>Boja: </div>
              <div>Veličina: </div>
            </div>
          </div>

          <div className={styles[`total-wrapper`]}>
            <div className={styles[`price-wrapper`]}>
              <div>{totalPrice.toFixed(2)} €</div>
            </div>
            <input
              className={styles[`quantity-wrapper`]}
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={quantityChangeHandler}
            />
            <div className={styles[`price-wrapper`]}>
              <div>{(totalPrice * props.item.quantity).toFixed(2)} €</div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles[`item-divider`]} />
    </Fragment>
  );
};

export default CartItem;
