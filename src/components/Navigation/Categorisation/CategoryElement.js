import { Fragment } from "react";
import styles from "./CategoryElement.module.css";
import SubcategoryElement from "./SubcategoryElement";

const CategoryElement = (props) => {
  /*onMouseEnter={props.subcategorySelection}
   */

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.name}
        onClick={props.onSelected}
        value={props.category.id}
      >
        {props.category.name}
      </div>
      {/*props.categories.map((subcategory) => {
        if (subcategory.parent === props.category.id)
          return (
            <SubcategoryElement
              key={subcategory.id}
              category={subcategory}
              onSelected={props.onSelected}
            />
          );
      })*/}
    </div>
  );
};

export default CategoryElement;
