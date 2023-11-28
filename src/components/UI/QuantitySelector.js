import styles from "./QuantitySelector.module.css";

const QuantitySelector = (props) => {
  const quantity = props.quantity;
  const index = props.index;

  const increaseQuantity = () => {
    props.setQuantity((prevValue) => prevValue + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) props.setQuantity((prevValue) => prevValue - 1);
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
