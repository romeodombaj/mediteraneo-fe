import styles from "./SubcategoryNavigation.module.css";
import CategoryElement from "./Categorisation/CategoryElement";

import backArrow from "./../../assets/navigation/back-arrow.png";

const SubcategoryNavigation = (props) => {
  const itemList = props.subcategories;
  const category = props.category;

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
          <div className={styles.title}>
            <CategoryElement
              onSelected={props.onSelected}
              key={category.id}
              category={category}
            />
          </div>

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
