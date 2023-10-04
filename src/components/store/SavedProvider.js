import { useState } from "react";
import SavedContext from "./saved-context";

const SavedProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const existingItemIndex = items.indexOf((el) => el.id === item.id);

    if (existingItemIndex !== -1) {
      setItems([...items, item]);
    }
  };

  const removeItem = (id) => {
    const existingItemIndex = items.indexOf((el) => el.id === id);

    if (existingItemIndex === -1) {
      setItems(items.filter(el.id === existingItemIndex));
    }
  };

  const savedContext = {
    items: items,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <SavedContext.Provider value={savedContext}>
      {props.children}
    </SavedContext.Provider>
  );
};

export default SavedProvider;
