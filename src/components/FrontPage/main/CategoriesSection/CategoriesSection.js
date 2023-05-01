import styles from "./CategoriesSection.module.css";
import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles[`items-wrapper`]}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>

      <div className={styles[`title-wrapper`]}>
        <div className={styles.title}>Categories</div>
      </div>
    </div>
  );
};

export default CategoriesSection;
