import React from "react";

const SavedContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  checkIfSaved: () => {},
});

export default SavedContext;
