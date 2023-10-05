import styles from "./SubcategoryNavigation.module.css";
import CategoryElement from "./Categorisation/CategoryElement";

import backArrow from "./../../assets/navigation/back-arrow.png";

const SubcategoryNavigation = (props) => {
  const itemList = props.subcategories;

  return (
    <div className={styles.wrapper}>
      <div className={styles["back-section"]}>
        <img
          src={backArrow}
          className={styles["back-arrow"]}
          onClick={props.onClose}
        />
      </div>
      <div className={styles[`content-wrapper`]}>
        <div className={styles[`category-wrapper`]}>
          {itemList &&
            itemList.map((subcategory) => {
              return (
                <CategoryElement
                  onSelected={props.onSelected}
                  key={subcategory.id}
                  category={subcategory}
                />
              );
            })}
        </div>
        <hr className={styles.hr} />
      </div>
    </div>
  );
};

export default SubcategoryNavigation;
