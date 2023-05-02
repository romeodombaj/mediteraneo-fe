import styles from "./ItemListMain.module.css";
import ShowItem from "./ShowItem";
import CategoryContext from "../../store/category-context";

const ItemListMain = (props) => {
  return (
    <div className={styles[`wrapper`]}>
      <div className={styles[`subcategory-selection`]}>
        {props.categories.map((subcategory) => {
          if (subcategory.parent === parseInt(props.params))
            return <div key={subcategory.id}>{subcategory.name}</div>;
        })}
      </div>
      <div className={styles[`item-grid`]}>
        {props.itemInfo.map((item) => {
          return <ShowItem key={item.id} itemInfo={item} />;
        })}
      </div>
    </div>
  );
};
export default ItemListMain;
