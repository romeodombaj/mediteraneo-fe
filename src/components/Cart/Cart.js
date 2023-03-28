import { Fragment } from "react";
import styles from "./Cart.module.css";

const dummy_itemList = [
  {
    id: 0,
    name: "item1",
  },
  {
    id: 1,
    name: "item2",
  },
];

const Cart = (props) => {
  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onClose}></div>
      <div className={styles.wrapper}>
        {dummy_itemList.map((item) => {
          return (
            <div className={styles.item} key={item.id}>
              {item.name}
            </div>
          );
        })}
        <div className={styles.price}>$32.22</div>
      </div>
    </Fragment>
  );
};

export default Cart;
