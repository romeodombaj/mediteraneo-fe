import styles from "./HotItem.module.css";

//temp
import tempImg from "../../../../assets/ruc1.jpg";

const HotItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.item.images[0].src} className={styles.image}></img>
      <div className={styles.title}>{props.item.name}</div>
    </div>
  );
};

export default HotItem;
