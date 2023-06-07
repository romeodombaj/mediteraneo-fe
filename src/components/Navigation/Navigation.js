import React, { Fragment, useContext, useState } from "react";
import styles from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import CategoryContext from "../store/category-context";
import CategoryElement from "./Categorisation/CategoryElement";
import NavigationContext from "../store/navigation-context";

import logo from "../../assets/logo.png";

const Navigation = (props) => {
  const portalElement = document.getElementById("overlays");

  const categoryCtx = useContext(CategoryContext);
  const navCtx = useContext(NavigationContext);

  // link to new page
  const categorySelectionHandler = (event) => {
    const selectedCatId = event.target.getAttribute("value");
    navCtx.loadCategory(selectedCatId);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <div className={styles.backdrop} onClick={props.onClose}></div>
          <div className={styles.wrapper}>
            <div className={styles[`content-wrapper`]}>
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
              <div className={styles[`specials-wrapper`]}>
                <div className={styles.special}>Outdoor</div>
                <div className={styles.special}>Specialprices</div>
                <div className={styles.special}>Made in Croatia</div>
                <div className={styles.special}>Novo u ponudi</div>
              </div>
              <hr className={styles.hr} />
              <div className={styles[`other-info`]}>
                <div>
                  <div className={styles[`other-text`]}>O nama</div>
                  <div className={styles[`other-text`]}>Kontakt</div>
                  <div className={styles[`other-text`]}>FAQ</div>
                </div>
                <div className={styles[`right-column`]}>
                  <div className={styles[`other-text`]}>
                    Politika privatnosti
                  </div>
                  <div className={styles[`other-text`]}>Načini plaćanja</div>
                  <div className={styles[`other-text`]}>Newsletter</div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>,
        portalElement
      )}
    </Fragment>
  );
};

export default Navigation;
