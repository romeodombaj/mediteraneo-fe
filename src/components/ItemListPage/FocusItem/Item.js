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
import ItemDescription from "./ItemDescription";
import SimilarProducts from "./SimilarProducts";
import CategoryContext from "../../store/category-context";

const Item = () => {
  const cartCtx = useContext(CartContext);
  const categoryCtx = useContext(CategoryContext);
  const location = useLocation();
  const loadCtx = useContext(LoadingContext);
  const navigate = useNavigate();

  const categorySlug = useParams().categorySlug;
  const itemSlug = useParams().productSlug;
  const itemInfo = location.state;

  const [item, setItem] = useState();
  const [otherItems, setOtherItems] = useState();

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

  const fetchSimilarItems = () => {
    const categoryId = categoryCtx.getCategory(categorySlug);

    if (categoryId) {
      fetch(
        `https://mediteraneo.eu/wp-json/wc/v3/products?consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4&attribute_term=1&per_page=4&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&category=${categoryId.id}`
      )
        .then((response) => response.json())
        .then((data) => setOtherItems(data));
    }
  };

  useEffect(() => {
    fetchSimilarItems();
  }, [categoryCtx.categories]);

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
    }
  }, []);

  return (
    <Fragment>
      {item && (
        <div className={styles.wrapper}>
          <div className={styles[`item-main`]}>
            <ImagePortfolioSection item={item} />
            <div className={styles[`information-wrapper`]}>
              <div className={styles[`position-wrapper`]}>
                <div className={styles.path}>
                  Naslovnica/ Ručnici i Ogrtači/ <strong>Ručnik Vinarn </strong>
                </div>
              </div>
              <div className={styles[`info-division`]}>
                <div className={styles[`info-section`]}>
                  <ItemInfo itemInfo={item} />
                  {/*props.itemInfo.attributes[0] && <ItemSelection itemInfo={itemInfo} />*/}
                </div>
                <div className={styles[`info-section`]}>
                  <ItemSelection />
                </div>
              </div>
              <ToBasketSection addToCart={addItemToCartHandler} />
            </div>
          </div>
          <ItemDescription />
          <SimilarProducts items={otherItems} curentCategory={categorySlug} />
        </div>
      )}
    </Fragment>
  );
};

export default Item;
