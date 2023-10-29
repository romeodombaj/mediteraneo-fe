import { Fragment } from "react";
import styles from "./SizeItem.module.css";
import QuantitySelector from "./QuantitySelector";

const SizeItem = (props) => {
  const size = props.size;
  const price = props.price;

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.size}>{size}</div>
          <QuantitySelector />
        </div>
        <div className={styles.price}>{price} EUR</div>
      </div>
      <div className={styles.divider}></div>
    </Fragment>
  );
};

export default SizeItem;
