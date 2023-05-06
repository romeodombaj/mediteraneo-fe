import { Fragment } from "react";
import styles from "./CategoryElement.module.css";
import SubcategoryElement from "./SubcategoryElement";

const CategoryElement = (props) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.name}
        onClick={props.onSelected}
        value={props.category.id}
      >
        {props.category.name}
      </div>
    </div>
  );
};

export default CategoryElement;
