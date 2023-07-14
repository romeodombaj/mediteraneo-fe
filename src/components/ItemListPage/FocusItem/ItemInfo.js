import { Fragment } from "react";
import Item from "./Item";
import styles from "./ItemInfo.module.css";
import RadioButton from "../../UI/RadioButton";

const ItemInfo = (props) => {
  return (
    <Fragment>
      {props.itemInfo && (
        <div className={styles.wrapper}>
          <div className={styles.title}>{props.itemInfo.name}</div>
          <div className={styles.price}>{props.itemInfo.price} EUR</div>
          <div className={styles[`short-description`]}>
            {props.itemInfo.description.substring(0, 150)}
          </div>
          <div className={styles[`availability-section`]}>
            <div className={styles[`section-title`]}>Dostupnost:</div>
            <div className={styles[`availability-divider`]}>
              <RadioButton color="green" active={false} />
              <div className={styles.availability}>dostupno</div>
            </div>
          </div>
          <div className={styles[`delivery-section`]}>
            <div className={styles[`section-title`]}>Dostava:</div>

            <div className={styles.delivery}>
              Besplatna dostava iznad 53,09 eura.
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ItemInfo;
