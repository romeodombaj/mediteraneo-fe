import React, { Fragment, useContext, useState } from "react";
import styles from "./Navigation.module.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import CategoryContext from "../store/category-context";
import LoadingContext from "../store/loading-context";

const Navigation = (props) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState();
  const portalElement = document.getElementById("overlays");

  const categoryCtx = useContext(CategoryContext);
  const loadCtx = useContext(LoadingContext);
  const navigate = useNavigate();

  // scrolls to top of the page
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //opening specific subcategory list
  const subcategorySelection = (event) => {
    setSelectedCategoryIndex(event.target.getAttribute("value"));
  };

  // link to new page
  const categorySelectionHandler = (event) => {
    const selectedCatId = event.target.getAttribute("value");

    if (!(selectedCatId === loadCtx.params)) {
      loadCtx.setParams(selectedCatId);
      loadCtx.onProductLoad();
      setTimeout(() => {
        navigate(`/${selectedCatId}`);
        goToTop();
        props.onClose();
      }, 250);
    } else {
      goToTop();
      props.onClose();
    }
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
                    <div
                      onClick={categorySelectionHandler}
                      className={styles[`category-element`]}
                      key={category.id}
                      value={category.id}
                      onMouseEnter={subcategorySelection}
                    >
                      {category.name}
                    </div>
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
                      <div
                        className={styles[`subcategory-element`]}
                        key={subcategory.id}
                        onClick={categorySelectionHandler}
                        value={subcategory.id}
                      >
                        {subcategory.name}
                      </div>
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
