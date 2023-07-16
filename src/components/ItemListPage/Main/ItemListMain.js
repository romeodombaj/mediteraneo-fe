import styles from "./ItemListMain.module.css";
import ShowItem from "../../UI/ShowItem";
import ListActions from "./ListActions";
import { useState, useEffect } from "react";
import LoadingAnimation from "../../UI/LoadingAnimation";

const ItemListMain = (props) => {
  const [gridStyle, setGridStyle] = useState(``);
  const [itemCount, setItemCount] = useState(0);
  let counter;

  useEffect(() => {
    console.log(props.itemInfo);
  }, [props.itemInfo]);

  useEffect(() => {
    if (props.gridStyle === "0") {
      setGridStyle(``);
    } else {
      setGridStyle(`small-grid`);
    }
  }, [props.gridStyle]);

  return (
    <div className={styles[`wrapper`]}>
      {props.itemInfo.length === 0 ? (
        <LoadingAnimation />
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
