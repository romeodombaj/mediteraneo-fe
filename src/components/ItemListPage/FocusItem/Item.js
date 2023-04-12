import styles from "./Item.module.css";
import ImageSlide from "./ImageSlide";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Item = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = () => {
    cartCtx.addItem({
      ...props.itemInfo,
      amount: 1,
    });
  };

  return (
    <div className={styles.itemWrapper}>
      <div type="button" onClick={props.onClose}>
        ex
      </div>
      <ImageSlide itemInfo={props.itemInfo}></ImageSlide>
      <div className={styles[`information-wrapper`]}>
        <h1>{props.itemInfo.name}</h1>
        <p>{props.itemInfo.description}</p>
        <button onClick={addItemToCartHandler} className={styles[`add-button`]}>
          ADD ITEM
        </button>
      </div>
    </div>
  );
};

export default Item;
