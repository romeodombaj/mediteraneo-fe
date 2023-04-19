import styles from "./ItemListMain.module.css";
import ShowItem from "./ShowItem";

const ItemListMain = (props) => {
  return (
    <div className={styles[`wrapper`]}>
      <div className={styles[`item-grid`]}>
        {props.itemInfo.map((item) => {
          return <ShowItem key={item.id} itemInfo={item} />;
        })}
      </div>
    </div>
  );
};

export default ItemListMain;
