import React, { Fragment, useContext, useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import CategoryContext from "../store/category-context";

const Navigation = (props) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState();

  const portalElement = document.getElementById("overlays");
  const categoryCtx = useContext(CategoryContext);
  let subcategoryList = [];

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const subcategorySelection = (event) => {
    setSelectedCategoryIndex(event.target.getAttribute("value"));
  };

  const categorySelectionHandler = (event) => {
    props.onClose();
    goToTop();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.wrapper}>
            {categoryCtx.categories &&
              categoryCtx.categories.map((category) => {
                if (category.display === "default") {
                  return (
                    <Link
                      to={`/${category.id}`}
                      onClick={categorySelectionHandler}
                      className={styles[`category-element`]}
                      key={category.id}
                      value={category.id}
                      onMouseEnter={subcategorySelection}
                    >
                      {category.name}
                    </Link>
                  );
                }
              })}
          </div>
          {selectedCategoryIndex && (
            <div className={styles[`subcategory-wrapper`]}>
              {categoryCtx.categories &&
                categoryCtx.categories.map((subcategory) => {
                  if (subcategory.parent === parseInt(selectedCategoryIndex)) {
                    return (
                      <Link
                        to={`/${subcategory.id}`}
                        className={styles[`subcategory-element`]}
                        key={subcategory.id}
                        onClick={categorySelectionHandler}
                      >
                        {subcategory.name}
                      </Link>
                    );
                  }
                })}
            </div>
          )}
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default Navigation;
