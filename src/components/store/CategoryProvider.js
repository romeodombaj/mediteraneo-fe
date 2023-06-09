import { useState, useContext } from "react";
import CategoryContext from "./category-context";
import LoadingContext from "./loading-context";

const CategoryProvider = (props) => {
  const [categoryList, setCategoryList] = useState();

  const loadCtx = useContext(LoadingContext);

  const fetchCategories = () => {
    fetch(
      "https://mediteraneo.eu/wp-json/wc/v3/products/categories?orderby=id&per_page=50&consumer_secret=cs_892dc7028829da5c035079fd9e64da11a9ac9bc4&consumer_key=ck_a270e588788fe749560568f37f4d9ab9663f48ca"
    )
      .then((response) => response.json())
      .then((categories) => setCategoryList(categories))
      .then(loadCtx.onMainLoaded);
  };

  const getCategory = (slug) => {
    if (categoryList) {
      const categoryIndex = categoryList.findIndex(
        (category) => category.slug == slug
      );
      return categoryList[categoryIndex];
    }
    return;
  };

  const categoryContext = {
    categories: categoryList,
    fetchCategories: fetchCategories,
    getCategory: getCategory,
  };

  return (
    <CategoryContext.Provider value={categoryContext}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
