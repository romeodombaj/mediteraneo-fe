import { useContext } from "react";
import styles from "./SubcategoryItem.module.css";
import NavigationContext from "../../store/navigation-context";

const SubcategoryItem = ({ subcategory }) => {
  const navCtx = useContext(NavigationContext);

  const onNavigateHandler = () => {
    navCtx.loadCategory(subcategory.id);
  };

  return (
    <div className={styles.wrapper} onClick={onNavigateHandler}>
      <img className={styles.image} src={subcategory.image.src} />
      <div className={styles.title}>{subcategory.name}</div>
    </div>
  );
};

export default SubcategoryItem;
