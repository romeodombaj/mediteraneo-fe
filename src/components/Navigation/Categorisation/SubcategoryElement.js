import styles from "./SubcategoryElement.module.css";

const SubcategoryElement = (props) => {
  return (
    <div className={styles[`category-element`]}>
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

export default SubcategoryElement;
