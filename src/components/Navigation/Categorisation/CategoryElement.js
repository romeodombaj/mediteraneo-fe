import { Fragment } from "react";
import styles from "./CategoryElement.module.css";
import SubcategoryElement from "./SubcategoryElement";

import backArrow from "../../../assets/navigation/back-arrow.png";
const CategoryElement = (props) => {
  const openSubcategories = () => {
    props.openSubcategories(props.subcategories, props.category);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.name}
        value={props.category.id}
        onClick={props.onSelected}
      >
        {props.category.name}
      </div>
      {props.subcategories && props.subcategories.length > 0 && (
        <div className={styles["arrow-wrapper"]} onClick={openSubcategories}>
          <img src={backArrow} className={styles.arrow} />
        </div>
      )}
    </div>
  );
};

export default CategoryElement;
