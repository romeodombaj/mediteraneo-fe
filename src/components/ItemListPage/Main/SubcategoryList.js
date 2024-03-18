import { Fragment, useEffect } from "react";
import SubcategoryItem from "./SubcategoryItem";
import styles from "./SubcategoryList.module.css";
import { useActionData } from "react-router-dom";

const SubcategoryList = ({ subcategories }) => {
  return (
    <Fragment>
      {subcategories && subcategories.length > 0 && (
        <div className={styles.wrapper}>
          {subcategories.map((sub) => {
            return <SubcategoryItem key={sub.id} subcategory={sub} />;
          })}
        </div>
      )}
    </Fragment>
  );
};

export default SubcategoryList;
