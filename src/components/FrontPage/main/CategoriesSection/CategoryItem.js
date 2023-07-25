import styles from "./CategoryItem.module.css";
import NavigationContext from "../../../store/navigation-context";
// temp

import tempImg from "../../../../assets/ruc1.jpg";
import { useContext } from "react";

const CategoryItem = (props) => {
  const navCtx = useContext(NavigationContext);

  const openCategory = (e) => {
    console.log("cat");

    const selectedId = e.currentTarget.getAttribute("value");

    navCtx.loadCategory(selectedId);
  };

  return (
    <div
      className={styles.wrapper}
      value={props.category.id}
      onClick={openCategory}
    >
      <img className={styles.image} src={props.category.image.src} />
      <div className={styles.title} value={props.category.id}>
        {props.category.name}
      </div>
    </div>
  );
};

export default CategoryItem;
