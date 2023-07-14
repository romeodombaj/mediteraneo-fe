import styles from "./QuantitySelector.module.css";
import { useState } from "react";

const QuantitySelector = (props) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prevValue) => prevValue + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity((prevValue) => prevValue - 1);
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={decreaseQuantity} className={styles.button}>
        -
      </div>
      <div className={styles.quantity}>{quantity}</div>
      <div onClick={increaseQuantity} className={styles.button}>
        +
      </div>
    </div>
  );
};

export default QuantitySelector;
