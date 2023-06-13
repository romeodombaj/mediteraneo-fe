import styles from "./Item.module.css";

import { Fragment, useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import ItemInfo from "./ItemInfo";
import ItemSelection from "./ItemSelection";
import ImagePortfolioSection from "./ImagePortfolioSction";
import ToBasketSection from "./ToBasketSection";
import arrowOut from "../../../assets/Arrow-down.svg";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LoadingContext from "../../store/loading-context";
import { useNavigate } from "react-router-dom";

const Item = () => {
  const cartCtx = useContext(CartContext);
  const location = useLocation();
  const loadCtx = useContext(LoadingContext);
  const navigate = useNavigate();

  const categorySlug = useParams().categorySlug;
  const itemSlug = useParams().productSlug;
  const itemInfo = location.state;

  console.log(itemSlug);

  const [item, setItem] = useState();

  const addItemToCartHandler = () => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      price: 22.21,
      quantity: 1,
    });
  };

  const onCloseHandler = () => {
    navigate(`/${categorySlug}`);
  };

  useEffect(() => {
    if (!itemInfo) {
      fetch(
        `https://mediteraneo.eu/wp-json/wc/v3/products?slug=${itemSlug}&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4`
      )
        .then((response) => response.json())
        .then((data) => setItem(...data))
        .then(() => {
          if (item) {
            loadCtx.onProductLoaded();
          }
        });
    } else {
      setItem(itemInfo.item);
      console.log("HELLO MELO ITS ME GELLO");
    }
  }, []);

  return (
    <Fragment>
      {item && (
        <div className={styles.wrapper}>
          <ImagePortfolioSection item={item} />
          <div className={styles[`information-wrapper`]}>
            <div className={styles[`position-wrapper`]}>
              <img
                onClick={onCloseHandler}
                src={arrowOut}
                className={styles[`back-button`]}
              ></img>
              <div className={styles.path}>Product /product</div>
            </div>

            <ItemInfo itemInfo={item} />
            {/*props.itemInfo.attributes[0] && <ItemSelection itemInfo={itemInfo} />*/}

            <ToBasketSection addToCart={addItemToCartHandler} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Item;
