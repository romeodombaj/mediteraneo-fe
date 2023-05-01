import styles from "./HotItem.module.css";

//temp
import tempImg from "../../../../assets/ruc1.jpg";

const HotItem = () => {
  return (
    <div className={styles.wrapper}>
      <img src={tempImg} className={styles.image}></img>
      <div className={styles.title}>Lorem</div>
    </div>
  );
};

export default HotItem;
