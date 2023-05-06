import styles from "./ListActions.module.css";
import { useState } from "react";

const ListActions = (props) => {
  const [sortingOption, setSortingOption] = useState("Price Up");
  const sortingValueList = ["Price Up", "Price Down", "Popularity"];

  const changeSortingValue = (event) => {
    const selectedSorting = event.target.getAttribute("value");
    setSortingOption(sortingValueList[selectedSorting]);
    props.val(selectedSorting);
  };

  const changeGridStyleValue = (event) => {
    const selectedStyle = event.target.getAttribute("value");
    props.sty(selectedStyle);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles[`sort-wrapper`]}>
        <div>{sortingOption}</div>

        <div className={styles[`dropdown-options`]}>
          {sortingValueList.map((option, i) => {
            return (
              <div
                className={styles[`dropdown-option`]}
                onClick={changeSortingValue}
                value={i}
                key={i}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles[`grid-wrapper`]}>
        <div
          value={0}
          onClick={changeGridStyleValue}
          className={styles[`style-element`]}
        >
          GRID
        </div>
        <div
          value={1}
          onClick={changeGridStyleValue}
          className={styles[`style-element`]}
        >
          SMALL
        </div>
      </div>
    </div>
  );
};

export default ListActions;
