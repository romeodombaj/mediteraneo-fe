import { useEffect, useState } from "react";
import SavedContext from "./saved-context";

const SavedProvider = (props) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("saved")) || []
  );

  const addItem = (item) => {
    console.log("HERE");
    const existingItemIndex = items.findIndex((el) => el.id === item.id);

    if (existingItemIndex === -1) {
      setItems([...items, item]);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((el) => el.id !== id));
  };

  const checkIfSaved = (itemList) => {
    if (itemList && itemList.length > 0 && items && items.length > 0) {
      items.forEach((item) => {
        const existingItemIndex = itemList.findIndex((el) => el.id === item.id);

        console.log("HA");
        console.log(existingItemIndex);
        if (existingItemIndex !== -1) {
          itemList[existingItemIndex] = {
            ...itemList[existingItemIndex],
            saved: true,
          };
        }
      });
    }

    return itemList;
  };

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(items));
  }, [items]);

  const savedContext = {
    items: items,
    addItem: addItem,
    removeItem: removeItem,
    checkIfSaved: checkIfSaved,
  };

  return (
    <SavedContext.Provider value={savedContext}>
      {props.children}
    </SavedContext.Provider>
  );
};

export default SavedProvider;
