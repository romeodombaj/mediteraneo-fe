import styles from "./ShowItem.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SavedContext from "../store/saved-context";

// temp

import tempImg from "../../assets/coffe maker.png";
import saveIcon from "../../assets/heart-empty.png";
import unsaveIcon from "../../assets/heart-filled.png";
import NavigationContext from "../store/navigation-context";

const ShowItem = (props) => {
  const navigate = useNavigate();
  const navCtx = useContext(NavigationContext);
  const saveCtx = useContext(SavedContext);

  const [isSaved, setIsSaved] = useState(
    props.item.saved || props.saved || false
  );

  const saveItem = (e) => {
    e.stopPropagation();
    saveCtx.addItem(props.item);
    setIsSaved(true);
  };

  const removeItem = (e) => {
    e.stopPropagation();
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
      state: { item: props.item },
    });
  };

  useEffect(() => {}, []);

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

        <img className={styles.image} src={props.item.images[0].src} />
        <div className={styles[`open-indicator`]}>DETALJI</div>
      </div>
    </div>
  );
};

export default ShowItem;
