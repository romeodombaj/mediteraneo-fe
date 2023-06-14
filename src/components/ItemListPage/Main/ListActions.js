import Dropdown from "../../UI/Dropdown";
import styles from "./ListActions.module.css";
import { Fragment, useState } from "react";

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

  const valueChange = (value) => {
    props.filterItems(value);
  };

  return (
    <div className={styles.wrapper}>
      {/*<div className={styles[`sort-wrapper`]}>
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
      </div>*/}

      <Dropdown
        valueChange={valueChange}
        title="Razvrstaj"
        options={["Najmanji", "Najveći", "Cijena"]}
      />
      <Dropdown title="Boja" options={["Plava", "Zelena", "Crvena"]} />
      <Dropdown title="Vrsta" options={["p", "opt2", "opt3"]} />
      <Dropdown title="Cijena" options={["0-50e", "51-100", "100+"]} />
      <Dropdown title="Materijal" options={["Plastika", "Metal", "Pamuk"]} />
      <Dropdown title="Veličina" options={["S", "L", "XL"]} />

      {/*<div className={styles[`grid-wrapper`]}>
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
        </div>*/}
    </div>
  );
};

export default ListActions;
