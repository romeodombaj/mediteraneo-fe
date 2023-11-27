import { useEffect, useState } from "react";
import SavedContext from "./saved-context";

const SavedProvider = (props) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("saved")) || []
  );

  const [itemCounter, setItemCounter] = useState(0);

  const addItem = (item) => {
    const existingItemIndex = items.findIndex((el) => el.id === item.id);

    if (existingItemIndex === -1) {
      setItems([...items, item]);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((el) => el.id !== id));
  };

  const checkIfSavedOne = (item) => {
    if (item && items) {
      const existingItemIndex = items.findIndex((el) => el.id === item.id);
      if (existingItemIndex !== -1) {
        item.saved = true;
      } else {
        item.saved = false;
      }
    }
  };

  const checkIfSaved = (itemList) => {
    if (itemList && itemList.length > 0 && items) {
      itemList.forEach((item) => {
        const existingItemIndex = items.findIndex((el) => el.id === item.id);
        if (existingItemIndex !== -1) {
          item.saved = true;
        } else {
          item.saved = false;
        }
      });

      /*items.forEach((item) => {
        const existingItemIndex = itemList.findIndex((el) => el.id === item.id);
        if (existingItemIndex !== -1) {
          itemList[existingItemIndex] = {
            ...itemList[existingItemIndex],
            saved: true,
          };
        }
      });*/
    }

    return itemList;
  };

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(items));
    setItemCounter(items.length);
  }, [items]);

  const savedContext = {
    items: items,
    itemCounter: itemCounter,
    addItem: addItem,
    removeItem: removeItem,
    checkIfSaved: checkIfSaved,
    checkIfSavedOne: checkIfSavedOne,
  };

  return (
    <SavedContext.Provider value={savedContext}>
      {props.children}
    </SavedContext.Provider>
  );
};

export default SavedProvider;
