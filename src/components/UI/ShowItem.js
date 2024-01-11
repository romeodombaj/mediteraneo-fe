import styles from "./ShowItem.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SavedContext from "../store/saved-context";

// temp

import noImg from "../../assets/questionmarks.png";
import saveIcon from "../../assets/heart-empty.png";
import unsaveIcon from "../../assets/heart-filled.png";
import NavigationContext from "../store/navigation-context";
import { prettyDOM } from "@testing-library/react";

const ShowItem = (props) => {
  const navigate = useNavigate();
  const navCtx = useContext(NavigationContext);
  const saveCtx = useContext(SavedContext);

  const [isSaved, setIsSaved] = useState(props.item.saved || false);

  const saveItem = (e) => {
    e.stopPropagation();
    props.item.saved = true;
    saveCtx.addItem(props.item);
    setIsSaved(true);
  };

  const removeItem = (e) => {
    e.stopPropagation();
    props.item.saved = false;
    saveCtx.removeItem(props.item.id);
    setIsSaved(false);
  };

  const openItemHandler = () => {
    if (props.currentCategory) {
      navigate(`/${props.currentCategory}/${props.item.slug}`, {
        state: { item: props.item },
      });
      return;
    }
    navCtx.closeCart();
    navCtx.closeSaved();
    navigate(`/${props.item.categories[0].slug}/${props.item.slug}`, {
      state: { item: props.item, refresh: props.refreshSaved },
    });
  };

  useEffect(() => {
    setIsSaved(props.item.saved);
    saveCtx.checkIfSavedOne(props.item);
  }, [props.item.saved, saveCtx.items]);

  return (
    <div onClick={openItemHandler} className={styles.wrapper}>
      <div className={styles[`content-wrapper`]}>
        <div className={styles["info-wrapper"]}>
          <div>
            <div className={styles.title}>{props.item.name}</div>
            <div className={styles.price}>{props.item.price} €</div>
          </div>
          {isSaved ? (
            <img
              onClick={removeItem}
              className={styles.save}
              src={unsaveIcon}
            />
          ) : (
            <img onClick={saveItem} className={styles.save} src={saveIcon} />
          )}
        </div>

        <img
          className={styles.image}
          src={
            (props.item.images.length > 0 && props.item.images[0].src) || noImg
          }
        />
        <div className={styles[`open-indicator`]}>DETALJI</div>
      </div>
    </div>
  );
};

export default ShowItem;
