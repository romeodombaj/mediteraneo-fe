import styles from "./Item.module.css";
import ImageSlide from "./ImageSlide";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import ItemInfo from "./ItemInfo";
import ItemSelection from "./ItemSelection";

const Item = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = () => {
    cartCtx.addItem({
      id: props.itemInfo.id,
      name: props.itemInfo.name,
      price: 22.21,
      quantity: 1,
    });
  };

  return (
    <div className={styles.itemWrapper}>
      <div type="button" onClick={props.onClose}>
        ex
      </div>
      <ImageSlide itemInfo={props.itemInfo} />
      <div className={styles[`information-wrapper`]}>
        <ItemInfo itemInfo={props.itemInfo} />
        <ItemSelection itemInfo={props.itemInfo} />

        <button onClick={addItemToCartHandler} className={styles[`add-button`]}>
          ADD ITEM
        </button>
      </div>
    </div>
  );
};

export default Item;
