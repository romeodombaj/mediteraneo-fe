import { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { Fragment } from "react";

//temp
import tempImg from "../../assets/coffe maker.png";
import exitIcon from "../../assets/navigation/menu-x.png";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import useColorManagment from "../hooks/use-color-managment";

const CartItem = (props) => {
  const [totalPrice, setTotalPrice] = useState(22.21);
  const [quantity, setQuantity] = useState(props.item.quantity);

  const [colorNames, colorHashes] = useColorManagment([
    props.item.attributes[0].option,
  ]);

  useEffect(() => {
    console.log(colorNames);
  }, [colorNames]);
  const onIncreaseHandler = (value) => {
    for (let i = 0; i < value; i++) {
      props.addItem([props.item]);
    }
  };

  const onDecreaseHandler = (value) => {
    for (let i = 0; i < value; i++) {
      props.removeItem(props.item.id, false);
    }
  };

  const onRemoveHandler = () => {
    props.removeItem(props.item.id, true);
  };

  const quantityChangeHandler = (e) => {
    const value = e.target.value;

    if (value !== "") {
      if (value > props.item.quantity) {
        onIncreaseHandler(value - props.item.quantity);
      } else if (value < props.item.quantity) {
        onDecreaseHandler(props.item.quantity - value);
      }
    }
  };

  const onFocusOut = (e) => {
    const value = e.target.value;

    if (value === "") {
      if (1 < props.item.quantity) {
        onDecreaseHandler(props.item.quantity - 1);
      }

      setQuantity(1);
    }
  };

  return (
    <Fragment>
      <div className={styles.item} key={props.item.id}>
        <img
          onClick={onRemoveHandler}
          className={styles[`close-button`]}
          src={exitIcon}
        />

        <img className={styles.image} src={props.item.image.src} />
        <div className={styles[`info`]}>
          <div>
            <div className={styles.name}>{props.item.name}</div>
            <div className={styles.options}>
              <div>Boja: {colorNames}</div>
              <div>Veličina: {props.item.attributes[1].option}</div>
            </div>
          </div>

          <div className={styles[`total-wrapper`]}>
            <div className={styles[`price-wrapper`]}>
              <div>{props.item.price} €</div>
            </div>
            <input
              className={styles[`quantity-wrapper`]}
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={quantityChangeHandler}
              onBlur={onFocusOut}
            />
            <div className={styles[`price-wrapper`]}>
              <div>{(props.item.price * props.item.quantity).toFixed(2)} €</div>
            </div>
          </div>
        </div>
      </div>
      <hr className={styles[`item-divider`]} />
    </Fragment>
  );
};

export default CartItem;
