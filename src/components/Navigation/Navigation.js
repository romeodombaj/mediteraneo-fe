import React, { Fragment, useContext, useState } from "react";
import styles from "./Navigation.module.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import CategoryContext from "../store/category-context";
import LoadingContext from "../store/loading-context";
import CategoryElement from "./Categorisation/CategoryElement";

import logo from "../../assets/logo.png";

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
            <div>
              <img src={logo} className={styles.logo}></img>
            </div>
            <hr className={styles.hr} />
            <div className={styles[`category-wrapper`]}>
              {categoryCtx.categories &&
                categoryCtx.categories.map((category) => {
                  if (category.display === "default") {
                    return (
                      <CategoryElement
                        categories={categoryCtx.categories}
                        key={category.id}
                        category={category}
                        onSelected={categorySelectionHandler}
                      />
                    );
                  }
                })}
            </div>
            <hr className={styles.hr} />
            <div className={styles[`other-info`]}>
              <div>Kontakt</div>
              <div>O nama</div>
              <div>Lorem ipsum</div>
            </div>
          </div>
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default Navigation;
