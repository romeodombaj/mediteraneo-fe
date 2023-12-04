import { Fragment, useEffect, useState } from "react";
import styles from "./ItemSelection.module.css";
import RadioButton from "../../UI/RadioButton";

import SelectionLabel from "../../UI/SelectionLabel";
import SizeItem from "../../UI/SizeItem";
import LoadingAnimation from "../../UI/LoadingAnimation";

const ItemSelection = (props) => {
  const colors = props.color;
  const itemVariations = props.itemVariations;

  const changeColorHandler = (e) => {
    props.setColorIndex(parseInt(e.currentTarget.getAttribute("index")));

    let tempVariations = [...props.itemVariations];
    tempVariations.forEach((element) => {
      element.quantity = 0;
    });
    props.setItemVariations(tempVariations);
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
                        index={i}
                        itemVariations={itemVariations}
                        setItemVariations={props.setItemVariations}
                        variationQuantities={props.variationQuantities}
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
