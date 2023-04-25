import React, { Fragment, useContext } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import CategoryContext from "../store/category-context";

const Navigation = (props) => {
  const portalElement = document.getElementById("overlays");
  const categoryCtx = useContext(CategoryContext);

  const goToTop = () => {
    props.onClose();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
                      onClick={goToTop}
                      className={styles[`category-element`]}
                      key={category.id}
                    >
                      {category.name}
                      <div className={styles[`subcategory-wrapper`]}>
                        {categoryCtx.categories.map((subcategory) => {
                          if (subcategory.parent === category.id) {
                            return (
                              <div className={styles[`subcategory-element`]}>
                                {subcategory.name}
                              </div>
                            );
                          }
                        })}
                      </div>
                    </Link>
                  );
                }
              })}
          </div>
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default Navigation;
