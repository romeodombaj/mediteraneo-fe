import styles from "./CategoryItem.module.css";

// temp

import tempImg from "../../../../assets/ruc1.jpg";

const CategoryItem = (props) => {
  return (
    <div
      className={styles.wrapper}
      onClick={props.load}
      value={props.category.id}
    >
      <img className={styles.image} src={props.category.image.src} />
      <div className={styles.title} value={props.category.id}>
        {props.category.name}
      </div>
    </div>
  );
};

export default CategoryItem;
