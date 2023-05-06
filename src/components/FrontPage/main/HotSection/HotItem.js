import styles from "./HotItem.module.css";

//temp
import tempImg from "../../../../assets/ruc1.jpg";

const HotItem = (props) => {
  return (
    <div
      className={styles.wrapper}
      value={props.item.categories[0].id}
      onClick={props.load}
    >
      <div className={styles.tag}>
        <div className={styles[`tag-text`]}>SALE</div>
      </div>
      <img
        src={props.item.images[0].src}
        className={styles.image}
        value={props.item.categories[0].id}
      ></img>
      <div className={styles.title} value={props.item.categories[0].id}>
        {props.item.name}
      </div>
    </div>
  );
};

export default HotItem;
