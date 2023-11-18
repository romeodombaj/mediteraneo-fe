import styles from "./ItemListMain.module.css";
import ShowItem from "../../UI/ShowItem";
import ListActions from "./ListActions";
import { useState, useEffect } from "react";
import LoadingAnimation from "../../UI/LoadingAnimation";

const ItemListMain = (props) => {
  const [gridStyle, setGridStyle] = useState(``);

  useEffect(() => {
    if (props.gridStyle === "0") {
      setGridStyle(``);
    } else {
      setGridStyle(`small-grid`);
    }
  }, [props.gridStyle]);

  return (
    <div className={styles[`wrapper`]}>
      {props.itemListCount === 0 ? (
        <LoadingAnimation />
      ) : props.itemInfo.length === 0 ? (
        <div className={styles["no-available"]}>Nema dostupnih proizvoda</div>
      ) : (
        <div className={`${styles[`item-grid`]} ${styles[gridStyle]}`}>
          {props.itemInfo.map((item) => {
            return (
              <ShowItem
                key={item.id}
                item={item}
                currentCategory={props.currentCategory}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default ItemListMain;
