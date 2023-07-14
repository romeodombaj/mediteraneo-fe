import { Fragment } from "react";
import ShowItem from "../../UI/ShowItem";
import styles from "./SimilarProducts.module.css";

const SimilarProducts = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>POVEZANI PROIZVODI</div>
      {props.items && (
        <div className={styles.list}>
          {props.items.map((item) => {
            return (
              <ShowItem
                key={item.id}
                item={item}
                currentCategory={props.currentCategory}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
