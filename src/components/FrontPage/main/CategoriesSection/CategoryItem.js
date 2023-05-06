import styles from "./CategoryItem.module.css";

// temp

import tempImg from "../../../../assets/ruc1.jpg";

const CategoryItem = (props) => {
  const toNextPage = () => {
    
  };

  return (
    <div className={styles.wrapper} onClick={toNextPage}>
      <img className={styles.image} src={props.category.image.src} />
      <div className={styles.title}>{props.category.name}</div>
    </div>
  );
};

export default CategoryItem;
