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
import LoadingAnimation from "../../UI/LoadingAnimation";
import Footer from "../../Informative-Pages/Footer";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useGetItem from "../../hooks/use-get-item";
import Footer2 from "../../Informative-Pages/Footer2";

const Item = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const topRef = useRef(null);

  const categorySlug = useParams().categorySlug;
  const itemSlug = useParams().productSlug;
  const itemInfo = location.state;

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [
    item,
    itemVariations,
    setItem,
    setItemVariations,
    getData,
    getItemVariations,
  ] = useGetItem();

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

  const onCloseHandler = () => {
    navigate(`/${categorySlug}`);
  };

  useEffect(() => {
    scrollToTop();
    if (!itemInfo) {
      getData(itemSlug);
    } else {
      setItem(itemInfo.item);
      getItemVariations(itemInfo.item.id);
    }
  }, [location]);

  return (
    <Fragment>
      <div className={styles.wrapper} ref={topRef}>
        {!item ? (
          <LoadingAnimation />
        ) : (
          <Fragment>
            <div className={styles[`item-main`]}>
              <ImagePortfolioSection
                item={item}
                selectedColorIndex={selectedColorIndex}
              />
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
                      setItemVariations={setItemVariations}
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
                  itemVariations={itemVariations}
                  setItemVariations={setItemVariations}
                />
              </div>
            </div>
            <ItemDescription item={item} />
            <SimilarProducts currentCategory={categorySlug} />
            <Footer2 />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Item;
