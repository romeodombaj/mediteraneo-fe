import styles from "./QuantitySelector.module.css";

const QuantitySelector = (props) => {
  const index = props.index;
  const quantity = props.quantity[index].quantity || 0;

  const increaseQuantity = () => {
    let newQuantity = quantity + 1;
    props.setQuantity(newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      let newQuantity = quantity - 1;
      props.setQuantity(newQuantity);
    }
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
