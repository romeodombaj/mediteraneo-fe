import styles from "./CategoryItem.module.css";

// temp

import tempImg from "../../../../assets/ruc1.jpg";

const CategoryItem = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={tempImg} />
      <div className={styles.title}>Lorem</div>
    </div>
  );
};

export default CategoryItem;
