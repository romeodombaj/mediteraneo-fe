import React from "react";

const SavedContext = React.createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
});

export default SavedContext;