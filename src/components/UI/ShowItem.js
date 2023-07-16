import styles from "./ShowItem.module.css";
import { Link, useNavigate } from "react-router-dom";

// temp

import tempImg from "../../assets/coffe maker.png";

const ShowItem = (props) => {
  const navigate = useNavigate();

  const openItemHandler = () => {
    if (props.currentCategory) {
      navigate(`/${props.currentCategory}/${props.item.slug}`, {
        state: { item: props.item },
      });
      return;
    }
    navigate(`/${props.item.categories[0].slug}/${props.item.slug}`, {
      state: { item: props.item },
    });
  };

  return (
    <div onClick={openItemHandler} className={styles.wrapper}>
      <div className={styles[`content-wrapper`]}>
        <div className={styles[`info-wrapper`]}>
          <div className={styles.title}>{props.item.name}</div>
          <div className={styles.price}>{props.item.price} €</div>
        </div>
        <img className={styles.image} src={props.item.images[0].src} />
        <div className={styles[`open-indicator`]}>DETALJI</div>
      </div>
    </div>
  );
};

export default ShowItem;
