import styles from "./ShowItem.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import SavedContext from "../store/saved-context";

// temp

import noImg from "../../assets/questionmarks.png";
import saveIcon from "../../assets/heart-empty.png";
import unsaveIcon from "../../assets/heart-filled.png";
import NavigationContext from "../store/navigation-context";

const ShowItem = ({
  withDescription = false,
  item = undefined,
  currentCategory,
  refreshSaved,
}) => {
  const navigate = useNavigate();
  const navCtx = useContext(NavigationContext);
  const saveCtx = useContext(SavedContext);
  const [firstImage, setFirstImage] = useState();
  const [lastImage, setLastImage] = useState();

  const [isSaved, setIsSaved] = useState(item ? item.saved : false);

  const saveItem = (e) => {
    e.stopPropagation();
    item.saved = true;
    saveCtx.addItem(item);
    setIsSaved(true);
  };

  const removeItem = (e) => {
    e.stopPropagation();
    item.saved = false;
    saveCtx.removeItem(item.id);
    setIsSaved(false);
  };

  const openItemHandler = () => {
    if (currentCategory) {
      navigate(`/${currentCategory}/${item.slug}`, {
        state: { item: item },
      });
      return;
    }
    navCtx.closeCart();
    navCtx.closeSaved();
    navigate(`/${item.categories[0].slug}/${item.slug}`, {
      state: { item: item, refresh: refreshSaved },
    });
  };

  useEffect(() => {
    if (item) {
      setIsSaved(item.saved);
      saveCtx.checkIfSavedOne(item);

      setLastImage(item.images[item.images.length - 1].src || noImg);
      setFirstImage(item.images[0].src || lastImage || noImg);
    }
  }, [item && item.saved, saveCtx.items]);

  return (
    <Fragment>
      {!item ? (
        <div className={styles["loading-item"]}></div>
      ) : (
        <div onClick={openItemHandler} className={styles.wrapper}>
          <div className={styles[`content-wrapper`]}>
            <div className={styles["info-wrapper"]}>
              <div>
                <div className={styles.title}>{item.name}</div>
                <div className={styles.price}>{item.price} €</div>
                {withDescription && item.short_description && (
                  <div
                    className={styles["short-description"]}
                    dangerouslySetInnerHTML={{
                      __html: item.short_description.substring(0, 150) + "...",
                    }}
                  ></div>
                )}
              </div>
              {isSaved ? (
                <img
                  onClick={removeItem}
                  className={styles.save}
                  src={unsaveIcon}
                />
              ) : (
                <img
                  onClick={saveItem}
                  className={styles.save}
                  src={saveIcon}
                />
              )}
            </div>

            <div className={styles[`image-wrapper`]}>
              <img className={styles.image} src={firstImage || noImg} />
              <img className={styles[`last-image`]} src={lastImage || noImg} />
            </div>
            <div className={styles[`open-indicator`]}>DETALJI</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ShowItem;
