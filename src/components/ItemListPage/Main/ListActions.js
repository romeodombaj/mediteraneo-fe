import Dropdown from "../../UI/Dropdown";
import MultiDropdown from "../../UI/MultiDropdown";
import ItemList from "../ItemList";
import styles from "./ListActions.module.css";
import { Fragment, useEffect, useState } from "react";
import useColorManagment from "../../hooks/use-color-managment";

const ListActions = (props) => {
  const sortingValueList = ["Price Up", "Price Down"];

  const [collectionValue, setCollectionValue] = useState("Sve Kolekcije");
  const [collectionFilteredList, setCollectionFilteredList] = useState([]);

  const [colorValue, setColorValue] = useState([]);
  const [colorFilteredList, setColorFilteredList] = useState([]);

  const [sizeValue, setSizeValue] = useState([]);
  const [sizeFilteredList, setSizeFilteredList] = useState([]);

  let itemList = props.itemList;

  const [colorNames, colorHashes] = useColorManagment(colorFilteredList);

  // geting unique values for filters
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

  // setting initial values to filters (unique)
  useEffect(() => {
    if (itemList && itemList !== undefined && itemList.length > 0) {
      setCollectionFilteredList(getUniqueFilterValues(itemList, 3));
      setColorFilteredList(getUniqueFilterValues(itemList, 0));
      setSizeFilteredList(getUniqueFilterValues(itemList, 2));
      props.setFilteredItemList(itemList);
    } else {
      props.setFilteredItemList([]);
    }
  }, [itemList]);

  // filtering array
  const filterItemsWithValues = (array, index, value) => {
    array = array.filter(
      (item) =>
        item.attributes[index] &&
        item.attributes[index].options.some((el) => value.includes(el))
    );
    return array;
  };

  // appying filters
  const filterList = () => {
    props.setFilteredItemList([]);

    setTimeout(() => {
      let tempArray = [...itemList];

      if (collectionValue !== "Sve Kolekcije") {
        tempArray = filterItemsWithValues(tempArray, 3, collectionValue);
      }

      if (colorValue !== "" && colorValue.length > 0) {
        tempArray = filterItemsWithValues(tempArray, 0, colorValue);
      }

      if (sizeValue !== "" && sizeValue.length > 0) {
        tempArray = filterItemsWithValues(tempArray, 2, sizeValue);
      }

      props.setFilteredItemList(tempArray);
    }, [1]);
  };

  // initialising filtering on value changes
  useEffect(() => {
    filterList();
  }, [collectionValue, colorValue, sizeValue]);

  /*const changeGridStyleValue = (event) => {
    const selectedStyle = event.target.getAttribute("value");
    props.sty(selectedStyle);
  };*/

  const valueChange = (value) => {
    //props.filterItems(value);
  };

  return (
    <div className={styles.wrapper}>
      <Dropdown
        options={["Sve Kolekcije", ...collectionFilteredList]}
        value={collectionValue}
        setValue={setCollectionValue}
      />
      <MultiDropdown
        title="Boja"
        options={colorNames}
        value={colorValue}
        setValue={setColorValue}
      />
      <MultiDropdown
        title="Veličina"
        options={sizeFilteredList}
        value={sizeValue}
        setValue={setSizeValue}
      />
      <Dropdown
        value={props.sortingValue}
        setValue={props.setSortingValue}
        options={[...sortingValueList]}
      />
    </div>
  );
};

export default ListActions;
