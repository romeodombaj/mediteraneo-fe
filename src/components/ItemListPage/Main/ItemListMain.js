import styles from "./ItemListMain.module.css";
import ShowItem from "../../UI/ShowItem";
import ListActions from "./ListActions";
import { useState, useEffect } from "react";

const ItemListMain = (props) => {
  const [gridStyle, setGridStyle] = useState(``);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    console.log(gridStyle);

    if (props.gridStyle === "0") {
      setGridStyle(``);
    } else {
      setGridStyle(`small-grid`);
    }
  }, [props.gridStyle]);

  return (
    <div className={styles[`wrapper`]}>
      <div className={`${styles[`item-grid`]} ${styles[gridStyle]}`}>
        {props.itemInfo.map((item) => {
          return <ShowItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default ItemListMain;
