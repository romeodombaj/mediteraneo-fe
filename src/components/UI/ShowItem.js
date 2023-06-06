import styles from "./ShowItem.module.css";

// temp

import tempImg from "../../assets/coffe maker.png";

const ShowItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`content-wrapper`]}>
        <div className={styles[`info-wrapper`]}>
          <div className={styles.title}>{props.item.name}</div>
          <div className={styles.price}>{props.item.price} €</div>
        </div>
        <img className={styles.image} src={tempImg} />
        <div className={styles[`open-indicator`]}>DETALJI</div>
      </div>
    </div>
  );
};

export default ShowItem;
