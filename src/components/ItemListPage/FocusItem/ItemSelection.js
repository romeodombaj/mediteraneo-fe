import { Fragment } from "react";
import styles from "./ItemSelection.module.css";

const ItemSelection = (props) => {
  return (
    <Fragment>
      <div className={styles[`selector`]}>
        {props.itemInfo.attributes[0].options &&
          props.itemInfo.attributes[0].options.map((color) => {
            return (
              <div
                style={{ backgroundColor: color }}
                className={styles[`color-wrap`]}
              ></div>
            );
          })}
      </div>

      <div className={styles[`selector`]}>
        <div className={styles.dropdown}>
          SIZE
          <div className={styles[`dropdown-content`]}>
            {props.itemInfo.attributes[1].options &&
              props.itemInfo.attributes[1].options.map((size) => {
                return <div className={styles[`size`]}>{size}</div>;
              })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemSelection;
