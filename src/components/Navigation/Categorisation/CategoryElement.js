import { Fragment } from "react";
import styles from "./CategoryElement.module.css";
import SubcategoryElement from "./SubcategoryElement";

import backArrow from "../../../assets/navigation/back-arrow.png";
const CategoryElement = (props) => {
  const openSubcategories = () => {
    props.openSubcategories(props.subcategories);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.name}
        onClick={props.onSelected}
        value={props.category.id}
      >
        {props.category.name}
      </div>
      {props.subcategories && props.subcategories.length > 0 && (
        <img
          src={backArrow}
          className={styles.arrow}
          onClick={openSubcategories}
        />
      )}
    </div>
  );
};

export default CategoryElement;
