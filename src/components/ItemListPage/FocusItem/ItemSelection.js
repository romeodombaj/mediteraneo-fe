import { Fragment } from "react";
import styles from "./ItemSelection.module.css";
import RadioButton from "../../UI/RadioButton";

import arrowdown from "../../../assets/Arrow-down.svg";
import SelectionLabel from "../../UI/SelectionLabel";
import SizeItem from "../../UI/SizeItem";

const colors = ["red", "blue", "purple", "yellow", "green"];

const sizes = [
  { size: "30x50", price: 50.55 },
  { size: "60x70", price: 13.99 },
  { size: "120x30", price: 40.91 },
  { size: "150x100", price: 65.91 },
];

const ItemSelection = (props) => {
  return (
    <Fragment>
      <div className={styles[`wrapper`]}>
        <div className={styles[`selectors`]}>
          <SelectionLabel text="Odaberi boju" />
          <div className={styles[`color-list`]}>
            {colors.map((color, i) => {
              return <RadioButton key={i} color={color} active={false} />;
            })}
          </div>
          <div className={styles[`size-selector`]}>
            <SelectionLabel text="Odaberi veličine" />
            <div className={styles[`size-list`]}>
              {sizes.map((size, i) => {
                return <SizeItem key={i} size={size.size} price={size.price} />;
              })}
            </div>
          </div>
        </div>
        <div className={styles[`size-selector`]}></div>
        
        {/* {props.itemInfo.attributes[0].options &&
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
        </div>*/}
      </div>
    </Fragment>
  );
};

export default ItemSelection;
