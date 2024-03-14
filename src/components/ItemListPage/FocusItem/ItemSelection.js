import { Fragment, useEffect, useState } from "react";
import styles from "./ItemSelection.module.css";
import RadioButton from "../../UI/RadioButton";

import SelectionLabel from "../../UI/SelectionLabel";
import SizeItem from "../../UI/SizeItem";
import LoadingAnimation from "../../UI/LoadingAnimation";
import useColorManagment from "../../hooks/use-color-managment";

const ItemSelection = (props) => {
  const colors = props.color;
  const itemVariations = props.itemVariations;
  const [colorNames, colorHashes] = useColorManagment(colors);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const changeColorHandler = (e) => {
    props.setColorIndex(parseInt(e.currentTarget.getAttribute("index")));

    let tempVariations = [...props.itemVariations];
    tempVariations.forEach((element) => {
      element.quantity = 0;
    });
    props.setItemVariations(tempVariations);
  };

  const mouseHoverLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <Fragment>
      <div className={styles[`wrapper`]}>
        <div className={styles[`selectors`]}>
          <SelectionLabel
            text="Odaberi boju: "
            additionalText={colorNames && colorNames[props.selectedColorIndex]}
            hoverIndex={(colorNames && colorNames[hoverIndex]) || -1}
          />
          <div className={styles[`color-list`]} onMouseLeave={mouseHoverLeave}>
            {colorHashes &&
              colorHashes.map((color, i) => {
                return (
                  <RadioButton
                    active={i === props.selectedColorIndex ? true : false}
                    setHoverIndex={setHoverIndex}
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
