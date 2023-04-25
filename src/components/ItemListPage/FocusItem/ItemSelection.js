import { Fragment } from "react";
import styles from "./ItemSelection.module.css";

const ItemSelection = (props) => {
  return (
    <Fragment>
      <div className={styles[`selector`]}>
        {props.itemInfo.attributes[0].options.map((size) => {
          return <div>{size}</div>;
        })}
      </div>

      <div className={styles[`selector`]}>
        {props.itemInfo.attributes[1].options.map((color) => {
          return <div>{color}</div>;
        })}
      </div>

      <div className={styles[`quantity`]}>
        <div> + </div>
        <input className={styles[`quantity-input`]} value="1" />
        <div> - </div>
      </div>
    </Fragment>
  );
};

export default ItemSelection;
