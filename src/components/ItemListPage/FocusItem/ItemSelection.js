import { Fragment } from "react";
import styles from "./ItemSelection.module.css";
import RadioButton from "../../UI/RadioButton";

import arrowdown from "../../../assets/Arrow-down.svg";
import SelectionLabel from "../../UI/SelectionLabel";
import SizeItem from "../../UI/SizeItem";
import LoadingAnimation from "../../UI/LoadingAnimation";

//const colors = ["red", "blue", "purple", "yellow", "green"];

/*const sizes = [
  { size: "30x50", price: 50.55 },
  { size: "60x70", price: 13.99 },
  { size: "120x30", price: 40.91 },
  { size: "150x100", price: 65.91 },
];*/

const ItemSelection = (props) => {
  const colors = props.color;
  const itemVariations = props.itemVariations;

  const changeColorHandler = (e) => {
    props.setColorIndex(parseInt(e.currentTarget.getAttribute("index")));
  };

  return (
    <Fragment>
      <div className={styles[`wrapper`]}>
        <div className={styles[`selectors`]}>
          <SelectionLabel text="Odaberi boju" />
          <div className={styles[`color-list`]}>
            {colors &&
              colors.map((color, i) => {
                return (
                  <RadioButton
                    active={i === props.selectedColorIndex ? true : false}
                    key={i}
                    color={color}
                    index={i}
                    onClick={changeColorHandler}
                  />
                );
              })}
          </div>
          <div className={styles[`size-selector`]}>
            <SelectionLabel text="Odaberi veličine" />
            {itemVariations && itemVariations.length > 0 ? (
              <div className={styles[`size-list`]}>
                {itemVariations.map((size, i) => {
                  if (
                    size.attributes[0].option ===
                    colors[props.selectedColorIndex]
                  ) {
                    return (
                      <SizeItem
                        key={i}
                        size={size.attributes[1].option}
                        price={size.price}
                      />
                    );
                  }
                })}
              </div>
            ) : (
              <div className={styles["loading-wrapper"]}>
                <LoadingAnimation />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemSelection;
