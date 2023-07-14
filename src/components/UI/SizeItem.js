import { Fragment } from "react";
import styles from "./SizeItem.module.css";
import QuantitySelector from "./QuantitySelector";

const SizeItem = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.size}>30x50cm</div>
          <QuantitySelector />
        </div>
        <div className={styles.price}>50.50 EUR</div>
      </div>
      <div className={styles.divider}></div>
    </Fragment>
  );
};

export default SizeItem;
