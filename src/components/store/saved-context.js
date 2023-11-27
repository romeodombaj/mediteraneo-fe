import React from "react";

const SavedContext = React.createContext({
  items: [],
  itemCounter: 0,
  addItem: () => {},
  removeItem: () => {},
  checkIfSaved: () => {},
  checkIfSavedOne: () => {},
});

export default SavedContext;
