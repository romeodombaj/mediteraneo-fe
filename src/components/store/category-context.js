import React from "react";

const CategoryContext = React.createContext({
  categories: [],
  fetchCategories: () => {},
  getCategory: (id) => {},
});

export default CategoryContext;
