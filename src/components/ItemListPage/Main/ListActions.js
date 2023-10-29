import Dropdown from "../../UI/Dropdown";
import ItemList from "../ItemList";
import styles from "./ListActions.module.css";
import { Fragment, useEffect, useState } from "react";

const ListActions = (props) => {
  const [sortingOption, setSortingOption] = useState("Price Up");
  const sortingValueList = ["Price Up", "Price Down", "Popularity"];
  const [collectionValue, setCollectionValue] = useState("Sve Kolekcije");
  const [collectionFilteredList, setCollectionFilteredList] = useState([]);
  const [colorFilteredList, setColorFilteredList] = useState([]);
  const [sizeFilteredList, setSizeFilteredList] = useState([]);

  let itemList = props.itemList;

  const getUniqueFilterValues = (array, optionIndex) => {
    array = [
      ...[
        ...[
          ...[
            ...itemList.map((item) => {
              if (item.attributes[optionIndex])
                return item.attributes[optionIndex].options;
            }),
          ].flat(),
        ].filter((value, index, array) => array.indexOf(value) === index),
      ].filter((val) => val !== undefined),
    ];
    return array;
  };

  useEffect(() => {
    if (itemList && itemList !== undefined && itemList.length > 0) {
      setCollectionFilteredList(getUniqueFilterValues(itemList, 3));
      setColorFilteredList(getUniqueFilterValues(itemList, 0));
      setSizeFilteredList(getUniqueFilterValues(itemList, 2));
      props.setFilteredItemList(itemList);
    }
  }, [itemList]);

  const filterItemsWithValues = (array) => {
    array = array.filter(
      (item) =>
        item.attributes[3] &&
        item.attributes[3].options.includes(collectionValue)
    );
    return array;
  };

  const filterList = () => {
    let tempArray = [...itemList];

    if (collectionValue !== "Sve Kolekcije") {
      tempArray = filterItemsWithValues(tempArray);
    }

    props.setFilteredItemList(tempArray);
  };

  useEffect(() => {
    filterList();
  }, [collectionValue]);

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
          // itemList && itemList.length > 0 ? [...itemList.map(item => item.name)] : []
        </div>
      </div>*/}

      <Dropdown
        title="Kolekcija"
        options={["Sve Kolekcije", ...collectionFilteredList]}
        value={collectionValue}
        setValue={setCollectionValue}
      />
      <Dropdown title="Boja" options={colorFilteredList} />
      <Dropdown title="Veličina" options={sizeFilteredList} />
      <Dropdown
        valueChange={valueChange}
        title="Razvrstaj"
        options={["Najmanji", "Najveći", "Cijena"]}
      />

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
