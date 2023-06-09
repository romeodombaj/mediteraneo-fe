import styles from "./Item.module.css";

import { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";
import ItemInfo from "./ItemInfo";
import ItemSelection from "./ItemSelection";
import ImagePortfolioSection from "./ImagePortfolioSction";
import ToBasketSection from "./ToBasketSection";
import arrowOut from "../../../assets/arrow_down.png";
import { useOutletContext } from "react-router-dom";

const Item = (props) => {
  const cartCtx = useContext(CartContext);
  const itemInfo = useOutletContext();

  const addItemToCartHandler = () => {
    cartCtx.addItem({
      id: props.itemInfo.id,
      name: props.itemInfo.name,
      price: 22.21,
      quantity: 1,
    });
  };

  return (
    <div className={styles.wrapper}>
      <ImagePortfolioSection item={itemInfo} />

      <div className={styles[`information-wrapper`]}>
        <div className={styles[`position-wrapper`]}>
          <img
            onClick={props.onClose}
            src={arrowOut}
            className={styles[`back-button`]}
          ></img>
          <div className={styles.path}>Product /product</div>
        </div>

        <ItemInfo itemInfo={itemInfo} />
        {/*props.itemInfo.attributes[0] && <ItemSelection itemInfo={itemInfo} />*/}

        <ToBasketSection addToCart={addItemToCartHandler} />
      </div>
    </div>
  );
};

export default Item;
