import ShowItem from "../../UI/ShowItem";
import styles from "./SimilarProducts.module.css";

const SimilarProducts = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>POVEZANI PROIZVODI</div>
      <div className={styles.list}>
        <ShowItem itemInfo={props.items[0]} />
        <ShowItem itemInfo={props.items[1]} />
        <ShowItem itemInfo={props.items[2]} />
        <ShowItem itemInfo={props.items[3]} />
      </div>
    </div>
  );
};

export default SimilarProducts;
