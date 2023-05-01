import styles from "./PopularItem.module.css";

//temp

import tempImg from "../../../../assets/ruc0.jpeg";

const PopularItem = () => {
  return (
    <div className={styles.wrapper}>
      <img src={tempImg} className={styles.image} />
      <div>
        <div className={styles.title}>Lorem</div>
        <div className={styles.description}>Lorem ipsum, ipsum lorem lo...</div>
      </div>
    </div>
  );
};

export default PopularItem;
