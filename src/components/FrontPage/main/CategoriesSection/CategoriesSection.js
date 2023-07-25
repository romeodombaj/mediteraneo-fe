import styles from "./CategoriesSection.module.css";
import { useContext } from "react";
import CategoryItem from "./CategoryItem";
import CategoryContext from "../../../store/category-context";

const CategoriesSection = (props) => {
  const categoryCtx = useContext(CategoryContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles[`items-wrapper`]}>
        {categoryCtx.categories &&
          categoryCtx.categories.map((category) => {
            if (category.display === "default")
              return <CategoryItem key={category.id} category={category} />;
          })}
      </div>

      <div className={styles[`title-wrapper`]}>
        <div className={styles.title}>Categories</div>
      </div>
    </div>
  );
};

export default CategoriesSection;
