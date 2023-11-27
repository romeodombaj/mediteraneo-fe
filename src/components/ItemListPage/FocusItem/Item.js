import styles from "./Item.module.css";

import { Fragment, useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import ItemInfo from "./ItemInfo";
import ItemSelection from "./ItemSelection";
import ImagePortfolioSection from "./ImagePortfolioSction";
import ToBasketSection from "./ToBasketSection";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ItemDescription from "./ItemDescription";
import SimilarProducts from "./SimilarProducts";
import CategoryContext from "../../store/category-context";
import LoadingAnimation from "../../UI/LoadingAnimation";
import Footer from "../../Informative-Pages/Footer";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useGetItem from "../../hooks/use-get-item";

const Item = () => {
  const cartCtx = useContext(CartContext);
  const categoryCtx = useContext(CategoryContext);
  const location = useLocation();
  const navigate = useNavigate();

  const topRef = useRef(null);

  const categorySlug = useParams().categorySlug;
  const itemSlug = useParams().productSlug;
  const itemInfo = location.state;

  const [item, itemVariations, setItem, getData, getItemVariations] =
    useGetItem();
  const [otherItems, setOtherItems] = useState();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const scrollToTop = () => {
    topRef.current.scroll({
      top: 0,
      behavior: "instant",
    });
  };

  const addItemToCartHandler = () => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      price: parseInt(item.price),
      image: item.images[0].src,
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
        `https://mediteraneo.eu/wp-json/wc/v3/products?consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4&attribute_term=1&per_page=4&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca&category=${categoryId.id}`,
        { mode: "cors" }
      )
        .then((response) => response.json())
        .then((data) => setOtherItems(data));
    }
  };

  useEffect(() => {
    fetchSimilarItems();
  }, [categoryCtx.categories]);

  useEffect(() => {
    scrollToTop();

    if (!itemInfo) {
      getData(itemSlug);
    } else {
      setItem(itemInfo.item);
      getItemVariations(itemInfo.item.id);

      let startingImages = itemInfo.item.images.slice(
        1,
        itemInfo.item.attributes[1].options[0]
      );
      setCurrentImages(startingImages);
    }
  }, [location]);

  useEffect(() => {
    if (item && item != undefined) {
      let tempImageSet = [];

      let startIndex;
      let endIndex;

      if (selectedColorIndex === 0) {
        startIndex = 1;
        endIndex = parseInt(item.attributes[1].options[selectedColorIndex]);
      } else {
        startIndex = parseInt(
          item.attributes[1].options[selectedColorIndex - 1]
        );
        endIndex = parseInt(item.attributes[1].options[selectedColorIndex]);
      }

      for (let i = startIndex; i <= endIndex; i++) {
        tempImageSet.push(item.images[i]);
      }

      setCurrentImages([...tempImageSet]);
    }
  }, [selectedColorIndex]);

  return (
    <Fragment>
      <div className={styles.wrapper} ref={topRef}>
        {!item ? (
          <LoadingAnimation />
        ) : (
          <Fragment>
            <div className={styles[`item-main`]}>
              <ImagePortfolioSection images={currentImages} />
              <div className={styles[`information-wrapper`]}>
                <div className={styles.path}>
                  <Link to="/" className={styles.past}>
                    Naslovnica
                  </Link>
                  <div> / </div>
                  <Link
                    to={`/${item.categories[0].slug}`}
                    className={styles.past}
                  >
                    {item.categories[0].name}
                  </Link>
                  <div> / </div>
                  <div>
                    <strong>{item.name}</strong>
                  </div>
                </div>

                <div className={styles[`info-division`]}>
                  <div className={styles[`info-section`]}>
                    <ItemInfo itemInfo={item} />
                  </div>
                  <div className={styles[`info-section`]}>
                    <ItemSelection
                      selectedColorIndex={selectedColorIndex}
                      setColorIndex={setSelectedColorIndex}
                      itemVariations={itemVariations || undefined}
                      color={
                        item.attributes[0]
                          ? item.attributes[0].options
                          : undefined
                      }
                    />
                  </div>
                </div>
                <ToBasketSection
                  item={item}
                  addToCart={addItemToCartHandler}
                />
              </div>
            </div>
            <ItemDescription item={item} />
            <SimilarProducts items={otherItems} curentCategory={categorySlug} />
            <Footer />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Item;
